create table if not exists app_state (
  id int primary key,
  rev int not null default 0,
  saved_at text not null default '',
  db text not null default ''
);

insert into app_state (id, rev, saved_at, db)
values (1, 0, '', '')
on conflict (id) do nothing;
