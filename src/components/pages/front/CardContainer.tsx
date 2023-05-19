"use client";

import Card from "./Card";
import { Self_plans } from "../../../lib/general/generalTypes";

export default function CardContainer({
  selfPlans,
}: {
  selfPlans: Self_plans[];
}): JSX.Element {
  return (
    <div className="card-container">
      {selfPlans.map((selfPlan, index) => (
        <Card
          key={index}
          PlanName={selfPlan.self_plan_name}
          PlanDescription={selfPlan?.self_plan_description}
          PlanId={selfPlan.id}
          CompanyName={selfPlan?.company_info?.company_name}
          CreatedDate={
            selfPlan.created_at
              ? new Date(selfPlan.created_at).toLocaleDateString("et-ET", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",

                  /* hour: "numeric",
            minute: "numeric",
            hour12: false, */
                })
              : ""
          }
          LastChanged={
            selfPlan.updated_at
              ? new Date(selfPlan.updated_at).toLocaleDateString("et-ET", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })
              : ""
          }
        />
      ))}
    </div>
  );
}
