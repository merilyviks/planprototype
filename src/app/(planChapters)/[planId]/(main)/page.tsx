import TextRow from "@/components/chapters/TextRow";
import { Self_plans } from "@/lib/general/generalTypes";
import { createServerClient } from "@/utils/supabase-server";

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

export default async function TitlePage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const selfPlan = await getPlanInfo({ planId });

  return (
    <div className="subchapter titlepage">
      <h1>Enesekontrolliplaan</h1>
      <h2>{selfPlan.self_plan_name}</h2>
      <h2>toitlustamine</h2>

      <section>
        {selfPlan.company_info?.is_company ? (
          <>
            <TextRow
              elements={[
                "Ettevõtte ärinimi:",
                "päike",
                `${selfPlan.company_info.company_name}`,
              ]}
            />
            <TextRow
              elements={[
                "Registrikood:",
                `${selfPlan.company_info.register_code}`,
              ]}
            />
            <TextRow
              elements={[
                "Juriidiline aadress:",
                `${selfPlan.company_info.company_location}`,
              ]}
            />
          </>
        ) : (
          <>
            |
            <TextRow
              elements={[
                "Vastatava eraisiku nimi:",

                `${selfPlan.company_info?.company_name}`,
              ]}
            />
            <TextRow
              elements={[
                "Isikukood:",
                `${selfPlan.company_info?.register_code}`,
              ]}
            />
          </>
        )}
        <TextRow
          elements={["Tegevuskoha aadress:", `${selfPlan.location_address}`]}
        />

        <br />

        <TextRow
          elements={[
            "Kontaktisik:",
            `${selfPlan.contact_person?.firstname} ${selfPlan.contact_person?.lastname}`,
          ]}
        />
        <TextRow elements={["Telefon:", `${selfPlan.contact_person?.phone}`]} />

        <TextRow elements={["Email:", `${selfPlan.contact_person?.email}`]} />
      </section>
    </div>
  );
}
