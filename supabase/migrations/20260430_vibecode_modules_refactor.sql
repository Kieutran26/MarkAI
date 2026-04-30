create table if not exists public.lesson_modules (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  slug text not null,
  module_code text not null,
  title text not null,
  summary text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  sort_order integer not null default 0,
  estimated_minutes integer not null default 0 check (estimated_minutes >= 0),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint lesson_modules_lesson_slug_unique unique (lesson_id, slug),
  constraint lesson_modules_lesson_code_unique unique (lesson_id, module_code)
);

create index if not exists lesson_modules_lesson_sort_order_idx
  on public.lesson_modules (lesson_id, sort_order, created_at asc);

alter table public.lesson_blocks
  add column if not exists module_id uuid references public.lesson_modules(id) on delete cascade;

create index if not exists lesson_blocks_module_sort_order_idx
  on public.lesson_blocks (module_id, sort_order, created_at asc);

drop trigger if exists set_lesson_modules_updated_at on public.lesson_modules;
create trigger set_lesson_modules_updated_at
before update on public.lesson_modules
for each row
execute function public.set_updated_at();

comment on table public.lesson_modules is 'Sub-lesson/module items inside a lesson, for example 1.1, 1.2, 1.3.';
comment on column public.lesson_blocks.module_id is 'Module owner for this block. lesson_id stays for parent lesson queries and backward compatibility.';
