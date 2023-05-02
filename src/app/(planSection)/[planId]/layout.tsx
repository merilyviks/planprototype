import { cookies } from "next/headers";

import { createServerClient } from "@/utils/supabase-server";

import { notFound } from "next/navigation";
import NavButtons from "@/components/buttons/NavButtons";
import { Self_plans } from "@/lib/general/generalTypes";
import Sidebar from "@/components/sidebar/Sidebar";

// do not cache this page
export const revalidate = 0;

async function getPlanInfo({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: SelfPlan, error } = await supabase
    .from("self_plans")
    .select(`*, contact_person(*), company_info(*)`)
    .eq("id", planId)
    .single();

  // Output: CA
  if (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(error.message);
  }
  const SelfPlanData: Self_plans = JSON.parse(JSON.stringify(SelfPlan));
  return SelfPlanData;
}

export default async function PlansLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { planId: number; selfPlan: string };
}) {
  console.log(params.planId);
  const planId = params.planId;
  const selfPlansData = await getPlanInfo({ planId });
  params.selfPlan = JSON.stringify(selfPlansData);

  if (!cookies().size) {
    return notFound();
  }

  return (
    <>
      <main className="chapter-body">
        {/*    <Providers> */}
        <Sidebar
          params={{
            planId: planId,
            selfPlan: params.selfPlan,
          }}
        />
        <div className="chapter">
          <div className="chapter-container">
            {/* <DocHeader selfPlan={selfPlan} companyInfo={companyName} /> */}

            {children}
            <NavButtons />
          </div>
        </div>
        {/*    </Providers> */}
      </main>
    </>
  );
}
