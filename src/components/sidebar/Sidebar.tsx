import { Self_plans } from "@/lib/general/generalTypes";
import Top from "./Top";
import Bottom from "./Bottom";

export default function Sidebar({
  params: { planId, selfPlan },
}: {
  params: { planId: number; selfPlan: Self_plans };
}): JSX.Element {
  return (
    <div className="sidebar">
      {/* @ts-expect-error Async Server Component */}
      <Top
        params={{
          planId: planId,
          selfPlan: selfPlan,
        }}
      />
      <Bottom planTitle={selfPlan.self_plan_name} />
    </div>
  );
}
