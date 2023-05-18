import { Self_plans } from "@/lib/general/generalTypes";
import Top from "../../../../../components/sidebar/Top";
import { createServerClient } from "@/utils/supabase-server";

export const revalidate = 0;

async function getPlanInfo({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: SelfPlan, error } = await supabase
    .from("self_plans")
    .select(`*, contact_person(*), company_info(*)`)
    .eq("id", planId)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  const SelfPlanData: Self_plans = JSON.parse(JSON.stringify(SelfPlan));
  return SelfPlanData;
}

export default async function Contents({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const selfPlans = await getPlanInfo({ planId });
  return (
    <div className="contents">
      <Top
        params={{
          planId: planId,
          selfPlan: selfPlans,
        }}
      />
    </div>
  );
}
