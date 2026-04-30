import 'dotenv/config';
import { closePool, pool } from '../server/db';
import { hashPassword } from '../server/lib/password';

type CliArgs = {
  username: string;
  password: string;
  displayName: string;
  email: string | null;
};

function readArg(name: string) {
  const entry = process.argv.find((arg) => arg.startsWith(`--${name}=`));
  return entry ? entry.slice(name.length + 3) : '';
}

function readArgs(): CliArgs {
  const username = readArg('username').trim();
  const password = readArg('password');
  const displayName = readArg('display-name').trim() || username;
  const email = readArg('email').trim() || null;

  if (!username || !password) {
    throw new Error(
      'Usage: npm run admin:create -- --username=admin --password=your-password --display-name="Admin" --email=you@example.com',
    );
  }

  return { username, password, displayName, email };
}

async function upsertAdmin(args: CliArgs) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const existingIdentity = await client.query<{ user_id: string }>(
      `select user_id
        from public.auth_identities
        where provider = 'password'
          and lower(username) = lower($1)
        limit 1`,
      [args.username],
    );

    const passwordHash = await hashPassword(args.password);
    let userId = existingIdentity.rows[0]?.user_id;

    if (!userId) {
      const insertedUser = await client.query<{ id: string }>(
        `insert into public.users (email, display_name, status)
          values ($1, $2, 'active')
          returning id`,
        [args.email, args.displayName],
      );

      userId = insertedUser.rows[0].id;
      await client.query(
        `insert into public.auth_identities (user_id, provider, username, password_hash)
          values ($1, 'password', $2, $3)`,
        [userId, args.username, passwordHash],
      );
    } else {
      await client.query(
        `update public.users
          set email = $2,
              display_name = $3,
              status = 'active',
              updated_at = timezone('utc', now())
          where id = $1`,
        [userId, args.email, args.displayName],
      );

      await client.query(
        `update public.auth_identities
          set password_hash = $2,
              updated_at = timezone('utc', now())
          where user_id = $1
            and provider = 'password'`,
        [userId, passwordHash],
      );
    }

    await client.query(
      `insert into public.user_roles (user_id, role_id)
        select $1, r.id
        from public.roles r
        where r.code = 'admin'
        on conflict (user_id, role_id) do nothing`,
      [userId],
    );

    await client.query('commit');
    console.log(`Admin account ready for username: ${args.username}`);
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

async function main() {
  try {
    await upsertAdmin(readArgs());
  } finally {
    await closePool();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
