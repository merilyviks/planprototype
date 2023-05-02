import { createServerClient } from "@/utils/supabase-server";
import MainChapter from "./top/MainChapter";
import OneChapter from "./top/OneChapter";
import { Contents_selected, Self_plans } from "@/lib/general/generalTypes";

async function getContentsPre({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: Contents, error } = await supabase
    .from("contents_selected")
    .select(`*, contents_provided(*)`)
    .eq("plan_id", planId)
    .order("position", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  const ContentsData: Contents_selected[] = JSON.parse(
    JSON.stringify(Contents)
  );
  return ContentsData;
}

export default async function Top({
  params,
}: {
  params: { planId: number; selfPlan: string };
}) {
  const planId = params.planId;
  const selfPlanString = params.selfPlan;
  const selfPlans = JSON.parse(selfPlanString);
  const contentsData = await getContentsPre({ planId });

  const contentsPre = contentsData.filter((obj) => obj.chapter_type === "pre");
  const contentsHaccp = contentsData.filter(
    (obj) => obj.chapter_type === "haccp"
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
        {selfPlans.has_concepts ? (
          <OneChapter
            urlTitle={"concepts"}
            id={planId}
            chosenTitle={"Mõisted"}
          />
        ) : (
          "none"
        )}

        {selfPlans.has_pre_chapter ? (
          <MainChapter
            mainCount={mainChaptersCount++}
            contents={contentsPre}
            planId={planId}
            title={"Eeltingimuste programm"}
          />
        ) : (
          "none"
        )}

        {selfPlans.has_haccp_chapter ? (
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
