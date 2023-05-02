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
          created_at: string | null
          id: number
          is_used: boolean
          plan_id: number
          position: number | null
          provided_concepts: number | null
        }
        Insert: {
          added_concepts?: number | null
          created_at?: string | null
          id?: number
          is_used?: boolean
          plan_id: number
          position?: number | null
          provided_concepts?: number | null
        }
        Update: {
          added_concepts?: number | null
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
      contents_provided: {
        Row: {
          chapter_type: Database["public"]["Enums"]["chaptertype"]
          id: number
          title: string
          title_chosen: string
        }
        Insert: {
          chapter_type?: Database["public"]["Enums"]["chaptertype"]
          id?: number
          title: string
          title_chosen: string
        }
        Update: {
          chapter_type?: Database["public"]["Enums"]["chaptertype"]
          id?: number
          title?: string
          title_chosen?: string
        }
      }
      contents_selected: {
        Row: {
          chapter_type: Database["public"]["Enums"]["chaptertype"]
          contents_chosen: number
          contents_named: string | null
          created_at: string
          id: number
          is_used: boolean
          plan_id: number
          position: number
        }
        Insert: {
          chapter_type?: Database["public"]["Enums"]["chaptertype"]
          contents_chosen: number
          contents_named?: string | null
          created_at?: string
          id?: number
          is_used?: boolean
          plan_id: number
          position: number
        }
        Update: {
          chapter_type?: Database["public"]["Enums"]["chaptertype"]
          contents_chosen?: number
          contents_named?: string | null
          created_at?: string
          id?: number
          is_used?: boolean
          plan_id?: number
          position?: number
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
      todos: {
        Row: {
          id: number
          inserted_at: string
          is_complete: boolean | null
          task: string | null
          user_id: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id: string
        }
        Update: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id?: string
        }
      }
      variables_main: {
        Row: {
          created_at: string | null
          id: number
          info: string | null
          variable: string
          version: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          info?: string | null
          variable: string
          version?: number
        }
        Update: {
          created_at?: string | null
          id?: number
          info?: string | null
          variable?: string
          version?: number
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
