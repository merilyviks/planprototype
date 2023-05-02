import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from "../lib/supabase/types";

export const createServerClient = () =>
    createServerComponentSupabaseClient<Database>({
        headers,
        cookies
    });