create table if not exists public.feedback_submissions (
  id uuid primary key default gen_random_uuid(),
  module_name text not null,
  rating integer check (rating between 1 and 5),
  content text not null,
  role text,
  email text,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists feedback_submissions_created_at_idx
  on public.feedback_submissions (created_at desc);

create index if not exists feedback_submissions_module_name_idx
  on public.feedback_submissions (module_name, created_at desc);
