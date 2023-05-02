import { Self_plans } from "@/lib/general/generalTypes";
import Top from "../../../../../components/sidebar/Top";

export default function Contents({
  params,
}: {
  params: { planId: number; selfPlan: string };
}) {
  const planId = params.planId;
  const selfPlans = params.selfPlan;
  console.log("tee", selfPlans);
  return (
    <div className="contents">
      <h1>tere</h1>
      <Top
        params={{
          planId: planId,
          selfPlan: selfPlans,
        }}
      />
    </div>
  );
}
