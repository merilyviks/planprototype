import { cookies } from "next/headers";
import { createServerClient } from "@/utils/supabase-server";
import { notFound } from "next/navigation";
import NavButtons from "@/components/buttons/NavButtons";
import { Contents_selected, Self_plans } from "@/lib/general/generalTypes";
import Sidebar from "@/components/sidebar/Sidebar";
import ChapterTitle from "@/components/chapters/ChapterTitle";

// do not cache this page
export const revalidate = 0;

async function getPlanInfo({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: SelfPlan, error } = await supabase
    .from("self_plans")
    .select(`*, contact_person(*), company_info(*)`)
    .eq("id", planId)
    .single();

  /* if (error) {
    throw new Error(error.message);
  } */
  const SelfPlanData: Self_plans = JSON.parse(JSON.stringify(SelfPlan));
  return SelfPlanData;
}

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

export default async function PlansLayout({
  children,
  params: { planId },
}: {
  children: React.ReactNode;
  params: { planId: number };
}) {
  const selfPlan = await getPlanInfo({ planId });
  const contentsUnSorted = await getContents({ planId });
  const contentsData = contentsUnSorted.sort(
    (a, b) => a.contents_provided?.position! - b.contents_provided?.position!
  );
  const navNames = contentsData.map((obj) => obj.contents_provided?.title);

  if (selfPlan.has_concepts) {
    navNames.unshift("concepts");
    navNames.unshift("contents");
  } else {
    navNames.unshift("contents");
  }

  if (!cookies().size) {
    return notFound();
  }

  return (
    <>
      <main className="chapter-body">
        <Sidebar
          params={{
            planId: planId,
            selfPlan: selfPlan,
          }}
        />
        <div className="chapter">
          <div className="chapter-container">
            {/* <DocHeader selfPlan={selfPlan} companyInfo={companyName} /> */}
            <ChapterTitle chapters={contentsData} />

            {children}

            <NavButtons navList={navNames} />
          </div>
        </div>
        {/*    </Providers> */}
      </main>
    </>
  );
}
