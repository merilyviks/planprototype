import { Self_plans } from "@/lib/general/generalTypes";
import { createServerClient } from "@/utils/supabase-server";
import VariablesSettings from "../../../../../components/pages/components/VariablesSettings";
import TitlepageVariablesSettings from "../../../../../components/pages/components/TitlepageVariablesSettings";

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

export default async function TitlePageSetUp({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const selfPlan = await getPlanInfo({ planId });

  return (
    <div className="titlepage settings">
      <VariablesSettings/>

      {/* <section className="chapter-settings">
        <tr>
          <td>
            <label>Ettevõtte ährinimi:</label>
          </td>
          <td>
            <input>{selfPlan.self_plan_name}</input>
          </td>
        </tr>
      </section> */}

      <table>
        {selfPlan.company_info?.is_company ? (
          <>
            <tr>
              <td>Ettevõtte ärinimi:</td>
              <td>{selfPlan.company_info?.company_name}</td>
            </tr>
            <tr>
              <td>Registrikood:</td>
              <td>{selfPlan.company_info?.register_code}</td>
            </tr>
            <tr>
              <td>Juriidiline aadress:</td>
              <td>{selfPlan.company_info?.company_location}</td>
            </tr>
          </>
        ) : (
          <>
            <tr>
              <td>Vastatava eraisiku nimi:</td>
              <td>{selfPlan.company_info?.company_name}</td>
            </tr>
            <tr>
              <td>Isikukood:</td>
              <td>{selfPlan.company_info?.register_code}</td>
            </tr>
          </>
        )}

        <tr>
          <td>Tegevuskoha aadress:</td>
          <td>{selfPlan.location_address}</td>
        </tr>
        <br />
        <tr>
          <td>Kontaktisik:</td>
          <td>
            {selfPlan.contact_person?.firstname}{" "}
            {selfPlan.contact_person?.lastname}
          </td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>{selfPlan.contact_person?.phone}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{selfPlan.contact_person?.email}</td>
        </tr>
      </table>
    </div>
  );
}
