import { Self_plans } from "@/lib/general/generalTypes";
import Top from "./Top";
import Bottom from "./Bottom";

export default function Sidebar({
  params,
}: {
  params: { planId: number; selfPlan: string };
}) {
  const planId = params.planId as number;
  const selfPlanString = params.selfPlan;
  const selfPlanData = JSON.parse(selfPlanString);
  return (
    <div className="sidebar">
      <h1>sidebar</h1>
      <Top
        params={{
          planId: planId,
          selfPlan: selfPlanString,
        }}
      />
      <Bottom planTitle={selfPlanData.self_plan_name} />
    </div>
  );
}
