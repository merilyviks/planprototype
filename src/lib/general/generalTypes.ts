export interface Contents_provided {
  id: number   /* primary key */;
  title: string;
  title_chosen: string;
  chapter_type: any // type unknown;
  position?: number;
};

export interface Concepts_provided {
  id: number   /* primary key */;
  concept_name: string;
  concept_description: string;
  version: number;
  created_at?: string;
};

export interface Document_provided {
  id: number   /* primary key */;
  document_name?: string;
  content_provided?: number   /* foreign key to contents_provided.id */;
  contents_provided?: Contents_provided;
};

export interface Company_info {
  id: number   /* primary key */;
  company_name: string;
  register_code?: string;
  is_vatliable: boolean;
  vat_number?: number;
  company_country?: string;
  company_location?: string;
  created_at?: string;
  is_company?: boolean;
  company_phone?: number;
  company_email?: string;
};

export interface Pta_offices {
  id: number   /* primary key */;
  county: string;
  region: string;
  address: string;
  name: string;
  phone?: number;
  email: string;
  created_at?: string;
};

export interface Chapter_schema_provided {
  id: number   /* primary key */;
  name?: string;
  description?: string;
};

export interface Contact_person {
  id: number   /* primary key */;
  created_at?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
};

export interface Worker_tasks_provided {
  id: number   /* primary key */;
  task?: string;
  content_provided?: number   /* foreign key to contents_provided.id */;
  contents_provided?: Contents_provided;
};

export interface Purpose_provided {
  id: number   /* primary key */;
  purpose?: string;
  created_at?: string;
  connected_chapter?: number   /* foreign key to contents_provided.id */;
  version?: number;
  link?: string;
  contents_provided?: Contents_provided;
};

export interface Self_plans {
  id: number   /* primary key */;
  self_plan_description?: string;
  updated_at?: string;
  created_at?: string;
  connected_company?: number   /* foreign key to company_info.id */;
  website?: string;
  location_phone?: string;
  location_address?: string;
  selfplan_contact_person?: number   /* foreign key to contact_person.id */;
  location_email?: string;
  self_plan_name?: string;
  has_concepts: boolean;
  has_pre_chapter: boolean;
  has_haccp_chapter: boolean;
  user_id?: string;
  company_info?: Company_info;
  contact_person?: Contact_person;
};

export interface Workers_added {
  id: number   /* primary key */;
  created_at?: string;
  worker?: string;
  plan_id?: number   /* foreign key to self_plans.id */;
  self_plans?: Self_plans;
};

export interface Worker_task_connected {
  id: number   /* primary key */;
  worker_id?: number   /* foreign key to workers_added.id */;
  task_provided_id?: number   /* foreign key to worker_tasks_provided.id */;
  is_used?: boolean;
  workers_added?: Workers_added;
  worker_tasks_provided?: Worker_tasks_provided;
};

export interface Mtm_variables_main_contents_provided {
  id: number   /* primary key */;
  connected_haccp_contents?: number   /* foreign key to contents_provided.id */;
  connected_pre_contents?: number;
  created_at?: string;
  connected_plan: number   /* foreign key to self_plans.id */;
  contents_provided?: Contents_provided;
  self_plans?: Self_plans;
};

export interface Content_test {
  id: number   /* primary key */;
  test: number   /* foreign key to purpose_provided.id */;
  position?: number;
  is_used?: boolean;
  created_at?: string;
  purpose_provided?: Purpose_provided;
};

export interface Concepts_added {
  id: number   /* primary key */;
  concept_name: string;
  concept_description: string;
  created_at: string;
  connected_plan: number   /* foreign key to self_plans.id */;
  self_plans?: Self_plans;
};

export interface Contents_selected {
  id: number   /* primary key */;
  contents_named?: string;
  contents_chosen: number   /* foreign key to contents_provided.id */;
  is_used: boolean;
  plan_id: number   /* foreign key to self_plans.id */;
  uses_purpose: boolean;
  uses_supervisors: boolean;
  uses_manegment: boolean;
  uses_control: boolean;
  uses_docs: boolean;
  contents_provided?: Contents_provided;
  self_plans?: Self_plans;
};

export interface Chapter_analyze_ccp {
  id: number   /* primary key */;
  ccp_number?: number;
  created_at?: string;
  description?: string;
  method?: string;
  method_supervisor?: string;
  monitoring_sheet?: string;
  critical_limit?: string;
  corrective_action?: string;
  chapter_connected?: number   /* foreign key to contents_selected.id */;
  contents_selected?: Contents_selected;
};

export interface Document_connected {
  id: number   /* primary key */;
  document_id?: number   /* foreign key to document_provided.id */;
  content_connected?: number   /* foreign key to contents_selected.id */;
  is_used?: boolean;
  document_provided?: Document_provided;
  contents_selected?: Contents_selected;
};

export interface Purpose_selected {
  id: number   /* primary key */;
  version?: number;
  created_at?: string;
  connected_chapter: number   /* foreign key to contents_selected.id */;
  contents_selected?: Contents_selected;
};

export interface Variables_main {
  id: number   /* primary key */;
  variable: string;
  version: number;
  created_at?: string;
  info?: string;
  named_variable?: string;
  options?: any // type unknown;
  how_many_options: number;
};

export interface Concepts_selected {
  id: number   /* primary key */;
  created_at?: string;
  provided_concepts?: number   /* foreign key to concepts_provided.id */;
  position?: number;
  plan_id: number   /* foreign key to self_plans.id */;
  is_used: boolean;
  added_concepts?: number   /* foreign key to concepts_added.id */;
  contents_info?: number   /* foreign key to contents_selected.id */;
  concepts_provided?: Concepts_provided;
  self_plans?: Self_plans;
  concepts_added?: Concepts_added;
  contents_selected?: Contents_selected;
};

export interface Provided_control {
  id: number   /* primary key */;
  created_at?: string;
  control_provided?: string;
  connected_variable?: number   /* foreign key to variables_main.id */;
  default_position?: number;
  has_link?: string;
  changetext?: any // type unknown;
  connect_chapter?: number   /* foreign key to contents_provided.id */;
  variables_main?: Variables_main;
  contents_provided?: Contents_provided;
};

export interface Variables_contents_provided {
  id: number   /* primary key */;
  variable?: number   /* foreign key to variables_main.id */;
  contents?: number   /* foreign key to contents_provided.id */;
  created_at?: string;
  variables_main?: Variables_main;
  contents_provided?: Contents_provided;
};

export interface Variables_secondary {
  id: number   /* primary key */;
  variable_main_connected?: number   /* foreign key to variables_main.id */;
  variable_secondary?: string;
  created_at?: string;
  variable_secondary_named?: string;
  variables_main?: Variables_main;
};

export interface Variables_selected {
  id: number   /* primary key */;
  variable_selected?: number   /* foreign key to variables_secondary.id */;
  created_at?: string;
  plan_id?: number   /* foreign key to self_plans.id */;
  selected_option?: number;
  variables_secondary?: Variables_secondary;
  self_plans?: Self_plans;
};

export interface Chapter_preferences {
  id: number   /* primary key */;
  created_at?: string;
  plan_id: number   /* foreign key to self_plans.id */;
  uses_purpose: boolean;
  uses_supervisors: boolean;
  uses_manegment: boolean;
  uses_control: boolean;
  uses_docs: boolean;
  self_plans?: Self_plans;
};

export interface Provided_manegment {
  id: number   /* primary key */;
  provided_manegment?: string;
  connected_variable?: number   /* foreign key to variables_secondary.id */;
  created_at?: string;
  connected_chapter: number   /* foreign key to contents_provided.id */;
  has_link?: string;
  default_position: number;
  changetext?: any // type unknown;
  variables_secondary?: Variables_secondary;
  contents_provided?: Contents_provided;
};

export interface Chapter_material {
  id: number   /* primary key */;
  created_at?: string;
  chapter_selected: number   /* foreign key to contents_selected.id */;
  chapter_content: number   /* foreign key to provided_manegment.id */;
  is_used: boolean;
  contents_selected?: Contents_selected;
  provided_manegment?: Provided_manegment;
};

