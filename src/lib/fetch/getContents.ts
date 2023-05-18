import { createServerClient } from "@/utils/supabase-server";
import { Contents_selected } from "../general/generalTypes";

export async function getContents({ planId }: { planId: number }) {
    const supabase = createServerClient();
    const { data: Contents, error } = await supabase
        .from("contents_selected")
        .select(`*, contents_provided(*)`)
        .eq("plan_id", planId)
        .eq("is_used", true);
    if (error) {
        throw new Error(error.message);
    }
    const ContentsData: Contents_selected[] = JSON.parse(
        JSON.stringify(Contents)
    );
    return ContentsData;
}