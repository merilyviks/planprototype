import { Suspense } from "react";
import CardContainer from "@/components/pages/front/CardContainer";
import ToolBar from "@/components/pages/front/ToolBar";
import { createServerClient } from "@/utils/supabase-server";
import { Self_plans } from "@/lib/general/generalTypes";

// do not cache this page
export const revalidate = 0;

async function getPlanInfo() {
  const supabase = createServerClient();
  const { data: SelfPlan, error } = await supabase
    .from("self_plans")
    .select(`*, contact_person(*), company_info(*)`);

  // Output: CA
  if (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(error.message);
  }
  const SelfPlanData: Self_plans[] = JSON.parse(JSON.stringify(SelfPlan));
  return SelfPlanData;
}

export default async function Plans() {
  const selfPlans = await getPlanInfo();
  return (
    <>
      <ToolBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <CardContainer selfPlans={selfPlans} />
      </Suspense>
    </>
  );
}
