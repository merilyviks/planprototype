export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      chapter_analyze_ccp: {
        Row: {
          ccp_number: number | null
          chapter_connected: number | null
          corrective_action: string | null
          created_at: string | null
          critical_limit: string | null
          description: string | null
          id: number
          method: string | null
          method_supervisor: string | null
          monitoring_sheet: string | null
        }
        Insert: {
          ccp_number?: number | null
          chapter_connected?: number | null
          corrective_action?: string | null
          created_at?: string | null
          critical_limit?: string | null
          description?: string | null
          id?: number
          method?: string | null
          method_supervisor?: string | null
          monitoring_sheet?: string | null
        }
        Update: {
          ccp_number?: number | null
          chapter_connected?: number | null
          corrective_action?: string | null
          created_at?: string | null
          critical_limit?: string | null
          description?: string | null
          id?: number
          method?: string | null
          method_supervisor?: string | null
          monitoring_sheet?: string | null
        }
      }
      chapter_material: {
        Row: {
          chapter_content: number
          chapter_selected: number
          created_at: string | null
          id: number
          is_used: boolean
        }
        Insert: {
          chapter_content: number
          chapter_selected: number
          created_at?: string | null
          id?: number
          is_used?: boolean
        }
        Update: {
          chapter_content?: number
          chapter_selected?: number
          created_at?: string | null
          id?: number
          is_used?: boolean
        }
      }
      chapter_preferences: {
        Row: {
          created_at: string | null
          id: number
          plan_id: number
          uses_control: boolean
          uses_docs: boolean
          uses_manegment: boolean
          uses_purpose: boolean
          uses_supervisors: boolean
        }
        Insert: {
          created_at?: string | null
          id?: number
          plan_id: number
          uses_control?: boolean
          uses_docs?: boolean
          uses_manegment?: boolean
          uses_purpose?: boolean
          uses_supervisors?: boolean
        }
        Update: {
          created_at?: string | null
          id?: number
          plan_id?: number
          uses_control?: boolean
          uses_docs?: boolean
          uses_manegment?: boolean
          uses_purpose?: boolean
          uses_supervisors?: boolean
        }
      }
      company_info: {
        Row: {
          company_country: string | null
          company_email: string | null
          company_location: string | null
          company_name: string
          company_phone: number | null
          created_at: string | null
          id: number
          is_company: boolean | null
          is_vatliable: boolean
          register_code: string | null
          vat_number: number | null
        }
        Insert: {
          company_country?: string | null
          company_email?: string | null
          company_location?: string | null
          company_name: string
          company_phone?: number | null
          created_at?: string | null
          id?: number
          is_company?: boolean | null
          is_vatliable: boolean
          register_code?: string | null
          vat_number?: number | null
        }
        Update: {
          company_country?: string | null
          company_email?: string | null
          company_location?: string | null
          company_name?: string
          company_phone?: number | null
          created_at?: string | null
          id?: number
          is_company?: boolean | null
          is_vatliable?: boolean
          register_code?: string | null
          vat_number?: number | null
        }
      }
      concepts_added: {
        Row: {
          concept_description: string
          concept_name: string
          connected_plan: number
          created_at: string
          id: number
        }
        Insert: {
          concept_description: string
          concept_name: string
          connected_plan: number
          created_at?: string
          id?: number
        }
        Update: {
          concept_description?: string
          concept_name?: string
          connected_plan?: number
          created_at?: string
          id?: number
        }
      }
      concepts_provided: {
        Row: {
          concept_description: string
          concept_name: string
          created_at: string | null
          id: number
          version: number
        }
        Insert: {
          concept_description: string
          concept_name: string
          created_at?: string | null
          id?: number
          version?: number
        }
        Update: {
          concept_description?: string
          concept_name?: string
          created_at?: string | null
          id?: number
          version?: number
        }
      }
      concepts_selected: {
        Row: {
          added_concepts: number | null
          contents_info: number | null
          created_at: string | null
          id: number
          is_used: boolean
          plan_id: number
          position: number | null
          provided_concepts: number | null
        }
        Insert: {
          added_concepts?: number | null
          contents_info?: number | null
          created_at?: string | null
          id?: number
          is_used?: boolean
          plan_id: number
          position?: number | null
          provided_concepts?: number | null
        }
        Update: {
          added_concepts?: number | null
          contents_info?: number | null
          created_at?: string | null
          id?: number
          is_used?: boolean
          plan_id?: number
          position?: number | null
          provided_concepts?: number | null
        }
      }
      contact_person: {
        Row: {
          created_at: string | null
          email: string | null
          firstname: string | null
          id: number
          lastname: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          firstname?: string | null
          id?: number
          lastname?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          firstname?: string | null
          id?: number
          lastname?: string | null
          phone?: string | null
        }
      }
      content_test: {
        Row: {
          created_at: string | null
          id: number
          is_used: boolean | null
          position: number | null
          test: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_used?: boolean | null
          position?: number | null
          test: number
        }
        Update: {
          created_at?: string | null
          id?: number
          is_used?: boolean | null
          position?: number | null
          test?: number
        }
      }
      contents_provided: {
        Row: {
          chapter_type: Database["public"]["Enums"]["chaptertype"]
          id: number
          position: number | null
          title: string
          title_chosen: string
        }
        Insert: {
          chapter_type?: Database["public"]["Enums"]["chaptertype"]
          id?: number
          position?: number | null
          title: string
          title_chosen: string
        }
        Update: {
          chapter_type?: Database["public"]["Enums"]["chaptertype"]
          id?: number
          position?: number | null
          title?: string
          title_chosen?: string
        }
      }
      contents_selected: {
        Row: {
          contents_chosen: number
          contents_named: string | null
          created_at: string
          id: number
          is_used: boolean
          plan_id: number
          uses_control: boolean
          uses_docs: boolean
          uses_manegment: boolean
          uses_purpose: boolean
          uses_supervisors: boolean
        }
        Insert: {
          contents_chosen: number
          contents_named?: string | null
          created_at?: string
          id?: number
          is_used?: boolean
          plan_id: number
          uses_control?: boolean
          uses_docs?: boolean
          uses_manegment?: boolean
          uses_purpose?: boolean
          uses_supervisors?: boolean
        }
        Update: {
          contents_chosen?: number
          contents_named?: string | null
          created_at?: string
          id?: number
          is_used?: boolean
          plan_id?: number
          uses_control?: boolean
          uses_docs?: boolean
          uses_manegment?: boolean
          uses_purpose?: boolean
          uses_supervisors?: boolean
        }
      }
      mtm_variables_main_contents_provided: {
        Row: {
          connected_haccp_contents: number | null
          connected_plan: number
          connected_pre_contents: number | null
          created_at: string | null
          id: number
        }
        Insert: {
          connected_haccp_contents?: number | null
          connected_plan: number
          connected_pre_contents?: number | null
          created_at?: string | null
          id?: number
        }
        Update: {
          connected_haccp_contents?: number | null
          connected_plan?: number
          connected_pre_contents?: number | null
          created_at?: string | null
          id?: number
        }
      }
      provided_control: {
        Row: {
          changetext: Json | null
          connect_chapter: number | null
          connected_variable: number | null
          control_provided: string | null
          created_at: string | null
          default_position: number | null
          has_link: string | null
          id: number
        }
        Insert: {
          changetext?: Json | null
          connect_chapter?: number | null
          connected_variable?: number | null
          control_provided?: string | null
          created_at?: string | null
          default_position?: number | null
          has_link?: string | null
          id?: number
        }
        Update: {
          changetext?: Json | null
          connect_chapter?: number | null
          connected_variable?: number | null
          control_provided?: string | null
          created_at?: string | null
          default_position?: number | null
          has_link?: string | null
          id?: number
        }
      }
      provided_manegment: {
        Row: {
          changetext: Json | null
          connected_chapter: number
          connected_variable: number | null
          created_at: string | null
          default_position: number
          has_link: string | null
          id: number
          provided_manegment: string | null
        }
        Insert: {
          changetext?: Json | null
          connected_chapter: number
          connected_variable?: number | null
          created_at?: string | null
          default_position: number
          has_link?: string | null
          id?: number
          provided_manegment?: string | null
        }
        Update: {
          changetext?: Json | null
          connected_chapter?: number
          connected_variable?: number | null
          created_at?: string | null
          default_position?: number
          has_link?: string | null
          id?: number
          provided_manegment?: string | null
        }
      }
      pta_offices: {
        Row: {
          address: string
          county: string
          created_at: string | null
          email: string
          id: number
          name: string
          phone: number | null
          region: string
        }
        Insert: {
          address?: string
          county?: string
          created_at?: string | null
          email?: string
          id?: number
          name?: string
          phone?: number | null
          region?: string
        }
        Update: {
          address?: string
          county?: string
          created_at?: string | null
          email?: string
          id?: number
          name?: string
          phone?: number | null
          region?: string
        }
      }
      purpose_provided: {
        Row: {
          connected_chapter: number | null
          created_at: string | null
          id: number
          link: string | null
          purpose: string | null
          version: number | null
        }
        Insert: {
          connected_chapter?: number | null
          created_at?: string | null
          id?: number
          link?: string | null
          purpose?: string | null
          version?: number | null
        }
        Update: {
          connected_chapter?: number | null
          created_at?: string | null
          id?: number
          link?: string | null
          purpose?: string | null
          version?: number | null
        }
      }
      purpose_selected: {
        Row: {
          connected_chapter: number
          created_at: string | null
          id: number
          version: number | null
        }
        Insert: {
          connected_chapter: number
          created_at?: string | null
          id?: number
          version?: number | null
        }
        Update: {
          connected_chapter?: number
          created_at?: string | null
          id?: number
          version?: number | null
        }
      }
      self_plans: {
        Row: {
          connected_company: number | null
          created_at: string | null
          has_concepts: boolean
          has_haccp_chapter: boolean
          has_pre_chapter: boolean
          id: number
          location_address: string | null
          location_email: string | null
          location_phone: string | null
          self_plan_description: string | null
          self_plan_name: string | null
          selfplan_contact_person: number | null
          updated_at: string | null
          user_id: string | null
          website: string | null
        }
        Insert: {
          connected_company?: number | null
          created_at?: string | null
          has_concepts?: boolean
          has_haccp_chapter?: boolean
          has_pre_chapter?: boolean
          id?: number
          location_address?: string | null
          location_email?: string | null
          location_phone?: string | null
          self_plan_description?: string | null
          self_plan_name?: string | null
          selfplan_contact_person?: number | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Update: {
          connected_company?: number | null
          created_at?: string | null
          has_concepts?: boolean
          has_haccp_chapter?: boolean
          has_pre_chapter?: boolean
          id?: number
          location_address?: string | null
          location_email?: string | null
          location_phone?: string | null
          self_plan_description?: string | null
          self_plan_name?: string | null
          selfplan_contact_person?: number | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
      }
      variables_contents_provided: {
        Row: {
          contents: number | null
          created_at: string | null
          id: number
          variable: number | null
        }
        Insert: {
          contents?: number | null
          created_at?: string | null
          id?: number
          variable?: number | null
        }
        Update: {
          contents?: number | null
          created_at?: string | null
          id?: number
          variable?: number | null
        }
      }
      variables_main: {
        Row: {
          created_at: string | null
          how_many_options: number
          id: number
          info: string | null
          named_variable: string | null
          options: string[] | null
          variable: string
          version: number
        }
        Insert: {
          created_at?: string | null
          how_many_options?: number
          id?: number
          info?: string | null
          named_variable?: string | null
          options?: string[] | null
          variable: string
          version?: number
        }
        Update: {
          created_at?: string | null
          how_many_options?: number
          id?: number
          info?: string | null
          named_variable?: string | null
          options?: string[] | null
          variable?: string
          version?: number
        }
      }
      variables_secondary: {
        Row: {
          created_at: string | null
          id: number
          variable_main_connected: number | null
          variable_secondary: string | null
          variable_secondary_named: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          variable_main_connected?: number | null
          variable_secondary?: string | null
          variable_secondary_named?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          variable_main_connected?: number | null
          variable_secondary?: string | null
          variable_secondary_named?: string | null
        }
      }
      variables_selected: {
        Row: {
          created_at: string | null
          id: number
          plan_id: number | null
          selected_option: number | null
          variable_selected: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          plan_id?: number | null
          selected_option?: number | null
          variable_selected?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          plan_id?: number | null
          selected_option?: number | null
          variable_selected?: number | null
        }
      }
      worker_task_connected: {
        Row: {
          created_at: string | null
          id: number
          is_used: boolean | null
          task_provided_id: number | null
          worker_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_used?: boolean | null
          task_provided_id?: number | null
          worker_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_used?: boolean | null
          task_provided_id?: number | null
          worker_id?: number | null
        }
      }
      worker_tasks_provided: {
        Row: {
          content_provided: number | null
          id: number
          task: string | null
        }
        Insert: {
          content_provided?: number | null
          id?: number
          task?: string | null
        }
        Update: {
          content_provided?: number | null
          id?: number
          task?: string | null
        }
      }
      workers_added: {
        Row: {
          created_at: string | null
          id: number
          plan_id: number | null
          worker: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          plan_id?: number | null
          worker?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          plan_id?: number | null
          worker?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      chaptertype: "pre" | "haccp"
      mainplantype: "toitlustus" | "jaemüük" | "hulgimüük"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
