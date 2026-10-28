create table if not exists member_link (
  user_id text primary key,
  person_id text not null
);

create table if not exists member_wait (
  user_id text primary key,
  label text not null
);

create table if not exists org_guard (
  id int primary key,
  pass_hash text not null
);
