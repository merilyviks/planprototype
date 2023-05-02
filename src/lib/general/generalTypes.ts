export interface Contents_provided {
    id: number   /* primary key */;
    title: string;
    title_chosen: string;
    chapter_type: any // type unknown;
  };
  
  export interface Concepts_provided {
    id: number   /* primary key */;
    concept_name: string;
    concept_description: string;
    version: number;
    created_at?: string;
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
  
  export interface Contact_person {
    id: number   /* primary key */;
    created_at?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
  };
  
  export interface Variables_main {
    id: number   /* primary key */;
    variable: string;
    version: number;
    created_at?: string;
    info?: string;
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
  
  export interface Todos {
    id: number   /* primary key */;
    user_id: string;
    task?: string;
    is_complete?: boolean;
    inserted_at: string;
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
  
  export interface Contents_selected {
    id: number   /* primary key */;
    created_at: string;
    contents_named?: string;
    contents_chosen: number   /* foreign key to contents_provided.id */;
    position: number;
    is_used: boolean;
    plan_id: number   /* foreign key to self_plans.id */;
    chapter_type: any // type unknown;
    contents_provided?: Contents_provided;
    self_plans?: Self_plans;
  };
  
  export interface Concepts_added {
    id: number   /* primary key */;
    concept_name: string;
    concept_description: string;
    created_at: string;
    connected_plan: number   /* foreign key to self_plans.id */;
    self_plans?: Self_plans;
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
  
  export interface Concepts_selected {
    id: number   /* primary key */;
    created_at?: string;
    provided_concepts?: number   /* foreign key to concepts_provided.id */;
    position?: number;
    plan_id: number   /* foreign key to self_plans.id */;
    is_used: boolean;
    added_concepts?: number   /* foreign key to concepts_added.id */;
    concepts_provided?: Concepts_provided;
    self_plans?: Self_plans;
    concepts_added?: Concepts_added;
  };
  
  