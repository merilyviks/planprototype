import { createServerClient } from "@/utils/supabase-server";
import { Document_connected } from "../general/generalTypes";

export async function getDocuments({ planId, chapterId }: { planId: number, chapterId: number }) {
    const supabase = createServerClient();
    const { data, error } = await supabase
        .from("document_connected")
        .select(`*, document_provided(*), content_connected!inner(*)`)
        .eq("is_used", true)
        .eq("content_connected.plan_id", planId)
        .eq("content_connected.contents_chosen", chapterId)

    if (error) {
        throw new Error(error.message);
    }
    const Result: Document_connected[] = JSON.parse(
        JSON.stringify(data)
    );
    return Result;
}

export async function getAllDocuments({ planId }: { planId: number }) {
    const supabase = createServerClient();
    const { data, error } = await supabase
        .from("document_connected")
        .select(`*, document_provided(*), content_connected!inner(*)`)
        .eq("is_used", true)
        .eq("content_connected.plan_id", planId)

    if (error) {
        throw new Error(error.message);
    }
    const Result: Document_connected[] = JSON.parse(
        JSON.stringify(data)
    );
    return Result;
}