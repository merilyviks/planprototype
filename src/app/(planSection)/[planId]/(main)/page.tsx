import { Self_plans } from "@/lib/general/generalTypes";

export default async function SpecificPlans({ params }: { params: any }) {
  /*  is (planId === ) */
  console.log(params);
  /*  const selfPlann = params.selfPlan; */
  /* 
  console.log(selfPlann); */

  /* const selfPlans = await getPlanInfo(); */
  return (
    <div className="titlepage">
      <h1>Enesekontrolliplaan</h1>
      {/* <h2>{selfPlan.self_plan_name}</h2> */}
      {/* <h2>toitlustamine</h2>
      {selfPlan. ? (
        <>
          <p>Ettevõtte ärinimi: {companyName}</p>
          <p>Registrikood: {regNumber}</p>
          <p>Juriidiline aadress: {companyAddress}</p>
          <p>
            Tegevuskoha aadress:{" "}
            {planLocation?.replace("addressName", "mutsike")}
          </p>
        </>
      ) : (
        <>
          <p>Vastatava eraisiku nimi: {companyName}</p>
          <p>Isikukood: {regNumber}</p>
          <p>
            Tegevuskoha aadress:{" "}
            {planLocation?.replace("addressName", "mutsike")}
          </p>
        </>
      )}
      <p>
        Kontaktisik: {contactPersonFirstname} {contactPersonLastname}
      </p>
      <p>Telefon: {contactPersonPhone}</p>
      <p>Email: {contactPersonEmail}</p> */}
    </div>
  );
}
