create table contents_provided (
  id bigint not null primary key,
  title text not null,
  title_chosen text not null,
  chapter_type public.chaptertype not null,
  position smallint
);

create table concepts_provided (
  id bigint not null primary key,
  concept_name text not null,
  concept_description text not null,
  version integer not null,
  created_at timestamp default now()
);

create table document_provided (
  id bigint not null primary key,
  document_name text,
  content_provided bigint references contents_provided (id)
);

create table company_info (
  id serial not null primary key,
  company_name text not null,
  register_code text,
  is_vatliable boolean not null,
  vat_number integer,
  company_country character,
  company_location text,
  created_at timestamp default now(),
  is_company boolean,
  company_phone integer,
  company_email text
);

create table pta_offices (
  id smallint not null primary key,
  county character not null,
  region character not null,
  address text not null,
  name character not null,
  phone integer,
  email character not null,
  created_at timestamp default now()
);

create table chapter_schema_provided (
  id bigint not null primary key,
  name text,
  description text
);

create table contact_person (
  id bigint not null primary key,
  created_at timestamp default now(),
  firstname text,
  lastname text,
  email text,
  phone text
);

create table worker_tasks_provided (
  id bigint not null primary key,
  task text,
  content_provided bigint references contents_provided (id)
);

create table purpose_provided (
  id bigint not null primary key,
  purpose text,
  created_at timestamp default now(),
  connected_chapter bigint references contents_provided (id),
  version integer,
  link text
);

create table self_plans (
  id serial not null primary key,
  self_plan_description text,
  updated_at timestamp default now(),
  created_at timestamp default now(),
  connected_company integer references company_info (id),
  website text,
  location_phone text,
  location_address text,
  selfplan_contact_person bigint references contact_person (id),
  location_email text,
  self_plan_name text,
  has_concepts boolean not null,
  has_pre_chapter boolean not null,
  has_haccp_chapter boolean not null,
  user_id uuid
);

create table workers_added (
  id bigint not null primary key,
  created_at timestamp default now(),
  worker text,
  plan_id integer references self_plans (id)
);

create table worker_task_connected (
  id bigint not null primary key,
  worker_id bigint references workers_added (id),
  task_provided_id bigint references worker_tasks_provided (id),
  is_used boolean
);

create table mtm_variables_main_contents_provided (
  id bigint not null primary key,
  connected_haccp_contents bigint references contents_provided (id),
  connected_pre_contents bigint,
  created_at timestamp default now(),
  connected_plan integer references self_plans (id)
);

create table content_test (
  id bigint not null primary key,
  test bigint references purpose_provided (id),
  position smallint,
  is_used boolean,
  created_at timestamp default now()
);

create table concepts_added (
  id bigint not null primary key,
  concept_name text not null,
  concept_description text not null,
  created_at timestamp default now() not null,
  connected_plan integer references self_plans (id)
);

create table contents_selected (
  id bigint not null primary key,
  contents_named text,
  contents_chosen bigint references contents_provided (id),
  is_used boolean not null,
  plan_id integer references self_plans (id),
  uses_purpose boolean not null,
  uses_supervisors boolean not null,
  uses_manegment boolean not null,
  uses_control boolean not null,
  uses_docs boolean not null
);

create table chapter_analyze_ccp (
  id bigint not null primary key,
  ccp_number smallint,
  created_at timestamp default now(),
  description text,
  method text,
  method_supervisor text,
  monitoring_sheet text,
  critical_limit text,
  corrective_action text,
  chapter_connected bigint references contents_selected (id)
);

create table document_connected (
  id bigint not null primary key,
  document_id bigint references document_provided (id),
  content_connected bigint references contents_selected (id),
  is_used boolean
);

create table purpose_selected (
  id bigint not null primary key,
  version integer,
  created_at timestamp default now(),
  connected_chapter bigint references contents_selected (id)
);

create table variables_main (
  id bigint not null primary key,
  variable text not null,
  version integer not null,
  created_at timestamp default now(),
  info text,
  named_variable text,
  options text[],
  how_many_options smallint not null
);

create table concepts_selected (
  id bigint not null primary key,
  created_at timestamp default now(),
  provided_concepts bigint references concepts_provided (id),
  position smallint,
  plan_id integer references self_plans (id),
  is_used boolean not null,
  added_concepts bigint references concepts_added (id),
  contents_info bigint references contents_selected (id)
);

create table provided_control (
  id bigint not null primary key,
  created_at timestamp default now(),
  control_provided text,
  connected_variable bigint references variables_main (id),
  default_position smallint,
  has_link text,
  changetext jsonb,
  connect_chapter bigint references contents_provided (id)
);

create table variables_contents_provided (
  id bigint not null primary key,
  variable bigint references variables_main (id),
  contents bigint references contents_provided (id),
  created_at timestamp default now()
);

create table variables_secondary (
  id bigint not null primary key,
  variable_main_connected bigint references variables_main (id),
  variable_secondary text,
  created_at timestamp default now(),
  variable_secondary_named text
);

create table variables_selected (
  id bigint not null primary key,
  variable_selected bigint references variables_secondary (id),
  created_at timestamp default now(),
  plan_id integer references self_plans (id),
  selected_option smallint
);

create table chapter_preferences (
  id bigint not null primary key,
  created_at timestamp default now(),
  plan_id integer references self_plans (id),
  uses_purpose boolean not null,
  uses_supervisors boolean not null,
  uses_manegment boolean not null,
  uses_control boolean not null,
  uses_docs boolean not null
);

create table provided_manegment (
  id bigint not null primary key,
  provided_manegment text,
  connected_variable bigint references variables_secondary (id),
  created_at timestamp default now(),
  connected_chapter bigint references contents_provided (id),
  has_link text,
  default_position smallint not null,
  changetext jsonb
);

create table chapter_material (
  id bigint not null primary key,
  created_at timestamp default now(),
  chapter_selected bigint references contents_selected (id),
  chapter_content bigint references provided_manegment (id),
  is_used boolean not null
);

