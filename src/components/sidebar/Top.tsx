import { createServerClient } from "@/utils/supabase-server";
import MainChapter from "./top/MainChapter";
import OneChapter from "./top/OneChapter";
import { Contents_selected, Self_plans } from "@/lib/general/generalTypes";

async function getContents({ planId }: { planId: number }) {
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

export default async function Top({
  params: { planId, selfPlan },
}: {
  params: { planId: number; selfPlan: Self_plans };
}): Promise<JSX.Element> {
  const contentsDataUnsorted = await getContents({ planId });

  const contentsData = contentsDataUnsorted.sort(
    (a, b) => a.contents_provided?.position! - b.contents_provided?.position!
  );

  const contentsPre = contentsData.filter(
    (obj) => obj.contents_provided?.chapter_type === "pre"
  );
  const contentsHaccp = contentsData.filter(
    (obj) => obj.contents_provided?.chapter_type === "haccp"
  );

  let mainChaptersCount = 1;

  return (
    <div className="top">
      <ul>
        <OneChapter urlTitle={""} id={planId} chosenTitle={"Tiitelleht"} />
        <OneChapter
          urlTitle={"contents"}
          id={planId}
          chosenTitle={"Sisukord"}
        />
        {selfPlan.has_concepts ? (
          <OneChapter
            urlTitle={"concepts"}
            id={planId}
            chosenTitle={"Mõisted"}
          />
        ) : (
          "none"
        )}

        {selfPlan.has_pre_chapter ? (
          <MainChapter
            mainCount={mainChaptersCount++}
            contents={contentsPre}
            planId={planId}
            title={"Eeltingimuste programm"}
          />
        ) : (
          "none"
        )}

        {selfPlan.has_haccp_chapter ? (
          <MainChapter
            mainCount={mainChaptersCount++}
            contents={contentsHaccp}
            planId={planId}
            title={"HACCP"}
          />
        ) : (
          "none"
        )}
      </ul>
    </div>
  );
}
