import { createServerClient } from "@/utils/supabase-server";
import { Chapter_material, Contents_selected, Provided_manegment, Purpose_provided } from "../general/generalTypes";

export async function getChapterInfo({ chapterUserId }: { chapterUserId: number }) {
    const supabase = createServerClient();
    const { data: ContentsInfo, error } = await supabase
        .from("chapter_material")
        .select(`*, chapter_content(*)`)
        .eq("chapter_selected", chapterUserId)
        .is("is_used", true);

    if (error) {
        throw new Error(error.message);
    }
    const ContentsInfoData: Chapter_material[] = JSON.parse(
        JSON.stringify(ContentsInfo)
    );
    return ContentsInfoData;
}

export async function getSpecificContentsInfo({ planId, contentsChosenId }: { planId: number, contentsChosenId: number }) {
    const supabase = createServerClient();
    const { data: ContentsInfo, error } = await supabase
        .from("contents_selected")
        .select(
            "id, contents_named, contents_provided(title_chosen, title, id), contents_chosen, is_used, uses_purpose, uses_supervisors, uses_manegment, uses_control, uses_docs "
        )
        .match({ contents_chosen: contentsChosenId, plan_id: `${planId}` })
        .single();

    if (error) {
        throw new Error(error.message);
    }
    const ContentsInfoData: Contents_selected = JSON.parse(
        JSON.stringify(ContentsInfo)
    );
    return ContentsInfoData;
}


export async function getProvidedPurposes({ chapterId }: { chapterId: number }) {
    const supabase = createServerClient()
    const { data, error } = await supabase.from("purpose_provided").select("*").eq("connected_chapter", chapterId)

    if (error) {
        throw new Error(error.message);
    }
    const providedPurposesData: Purpose_provided[] = JSON.parse(
        JSON.stringify(data)
    );
    return providedPurposesData;
}

export async function getProvidedManegment({ contentsChosenId }: { contentsChosenId: number }) {
    const supabase = createServerClient()
    const { data, error } = await supabase.from("provided_manegment")
        .select("*")
        .eq("connected_chapter", contentsChosenId)


    if (error) {
        throw new Error(error.message);
    }
    const providedPurposesData: Provided_manegment[] = JSON.parse(
        JSON.stringify(data)
    );
    return providedPurposesData;
}

