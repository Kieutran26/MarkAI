create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text,
  display_name text,
  avatar_url text,
  status text not null default 'active' check (status in ('active', 'disabled')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists users_email_unique_idx
  on public.users (lower(email))
  where email is not null;

create table if not exists public.auth_identities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  provider text not null check (provider in ('password', 'google')),
  provider_user_id text,
  username text,
  password_hash text,
  last_login_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint auth_identities_password_fields_check check (
    (provider = 'password' and username is not null and password_hash is not null)
    or
    (provider = 'google' and provider_user_id is not null)
  )
);

create unique index if not exists auth_identities_provider_user_unique_idx
  on public.auth_identities (provider, provider_user_id)
  where provider_user_id is not null;

create unique index if not exists auth_identities_password_username_unique_idx
  on public.auth_identities (provider, lower(username))
  where username is not null;

create table if not exists public.roles (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code in ('admin', 'student')),
  name text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  role_id uuid not null references public.roles(id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  constraint user_roles_user_role_unique unique (user_id, role_id)
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short_description text,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  sort_order integer not null default 0,
  created_by uuid references public.users(id) on delete set null,
  updated_by uuid references public.users(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists courses_status_sort_order_idx
  on public.courses (status, sort_order, created_at desc);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  slug text not null,
  title text not null,
  summary text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  preview_token uuid default gen_random_uuid(),
  preview_updated_at timestamptz,
  sort_order integer not null default 0,
  estimated_minutes integer not null default 0 check (estimated_minutes >= 0),
  created_by uuid references public.users(id) on delete set null,
  updated_by uuid references public.users(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint lessons_course_slug_unique unique (course_id, slug)
);

create index if not exists lessons_course_status_sort_order_idx
  on public.lessons (course_id, status, sort_order, created_at desc);

create unique index if not exists lessons_preview_token_unique_idx
  on public.lessons (preview_token);

create table if not exists public.lesson_blocks (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  block_type text not null check (block_type in ('text', 'video', 'code', 'interactive_image')),
  title text,
  content_json jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  is_required boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists lesson_blocks_lesson_sort_order_idx
  on public.lesson_blocks (lesson_id, sort_order, created_at asc);

create index if not exists lesson_blocks_content_json_gin_idx
  on public.lesson_blocks using gin (content_json);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  progress_percent numeric(5,2) not null default 0 check (progress_percent >= 0 and progress_percent <= 100),
  started_at timestamptz,
  last_viewed_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint lesson_progress_user_lesson_unique unique (user_id, lesson_id)
);

create index if not exists lesson_progress_user_status_idx
  on public.lesson_progress (user_id, status, last_viewed_at desc);

create table if not exists public.block_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  block_id uuid not null references public.lesson_blocks(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  answer_json jsonb not null default '{}'::jsonb,
  interaction_json jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  last_viewed_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint block_progress_user_block_unique unique (user_id, block_id)
);

create index if not exists block_progress_user_lesson_idx
  on public.block_progress (user_id, lesson_id, status, last_viewed_at desc);

create index if not exists block_progress_interaction_json_gin_idx
  on public.block_progress using gin (interaction_json);

create table if not exists public.admin_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  session_token_hash text not null unique,
  ip_address inet,
  user_agent text,
  expires_at timestamptz not null,
  last_activity_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists admin_sessions_user_expires_idx
  on public.admin_sessions (user_id, expires_at desc);

drop trigger if exists set_users_updated_at on public.users;
create trigger set_users_updated_at
before update on public.users
for each row
execute function public.set_updated_at();

drop trigger if exists set_auth_identities_updated_at on public.auth_identities;
create trigger set_auth_identities_updated_at
before update on public.auth_identities
for each row
execute function public.set_updated_at();

drop trigger if exists set_courses_updated_at on public.courses;
create trigger set_courses_updated_at
before update on public.courses
for each row
execute function public.set_updated_at();

drop trigger if exists set_lessons_updated_at on public.lessons;
create trigger set_lessons_updated_at
before update on public.lessons
for each row
execute function public.set_updated_at();

drop trigger if exists set_lesson_blocks_updated_at on public.lesson_blocks;
create trigger set_lesson_blocks_updated_at
before update on public.lesson_blocks
for each row
execute function public.set_updated_at();

drop trigger if exists set_lesson_progress_updated_at on public.lesson_progress;
create trigger set_lesson_progress_updated_at
before update on public.lesson_progress
for each row
execute function public.set_updated_at();

drop trigger if exists set_block_progress_updated_at on public.block_progress;
create trigger set_block_progress_updated_at
before update on public.block_progress
for each row
execute function public.set_updated_at();

insert into public.roles (code, name)
values
  ('admin', 'Admin'),
  ('student', 'Student')
on conflict (code) do update
set name = excluded.name;

comment on table public.lesson_blocks is 'Lesson content blocks. interactive_image uses content_json to store image_url and hotspot definitions.';
comment on column public.lesson_blocks.content_json is 'Block payload. interactive_image example: {"image_url":"...","hotspots":[{"id":"send-button","x_percent":94.2,"y_percent":96.4,"label":"1","title":"Nut gui","description":"Click vao day de gui prompt."}]}';
comment on column public.lessons.preview_token is 'Optional stable token for draft preview routes before publish.';
comment on column public.block_progress.interaction_json is 'Use this to track hotspot ids viewed for interactive_image, for example {"viewed_hotspot_ids":["send-button","chat-list"]}.';
