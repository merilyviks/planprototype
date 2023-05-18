import ButtonUpdateUsage from "@/components/settings/main/ButtonUpdateUsage";
import CreateNewConcept from "@/components/settings/main/concepts/CreateNewConcept";
import NewProvidedConceptsTable from "@/components/settings/main/concepts/NewProvidedConceptsTable";
import OneTableRow from "@/components/settings/main/concepts/OneTableRow";
import TableRow from "@/components/settings/main/concepts/TableRow";
import {
  Concepts_provided,
  Concepts_selected,
  Self_plans,
} from "@/lib/general/generalTypes";
import { createServerClient } from "@/utils/supabase-server";

export const revalidate = 0;

async function getConcepts({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: conceptsSelected, error } = await supabase
    .from("concepts_selected")
    .select(`*, concepts_added(*), concepts_provided(*)`)
    .eq("plan_id", planId);

  if (error) {
    throw new Error(error.message);
  }
  const ConceptsSelectedData: Concepts_selected[] = JSON.parse(
    JSON.stringify(conceptsSelected)
  );
  return ConceptsSelectedData;
}

async function getAllProvidedConcepts({
  unUsedProvidedConceptsString,
}: {
  unUsedProvidedConceptsString: string;
}) {
  const supabase = createServerClient();
  const { data: conceptsProvided, error } = await supabase
    .from("concepts_provided")
    .select()
    .not("id", "in", `${unUsedProvidedConceptsString}`);

  if (error) {
    throw new Error(error.message);
  }
  const ConceptsProvidedData: Concepts_provided[] = JSON.parse(
    JSON.stringify(conceptsProvided)
  );
  return ConceptsProvidedData;
}

export default async function ConceptsSettings({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const userConceptsDataUnSorted = await getConcepts({ planId });

  const userUsedConceptsDataUnSorted = userConceptsDataUnSorted.filter(
    (item) => item.is_used === true
  );
  const userUnUsedConceptsDataUnSorted = userConceptsDataUnSorted.filter(
    (item) => item.is_used === false
  );
  const usedProvidedConcepts = userConceptsDataUnSorted.map(
    (item) => item.concepts_provided?.id ?? 0
  );
  const unUsedProvidedConceptsString = JSON.stringify(usedProvidedConcepts)
    .replace("[", "(")
    .replace("]", ")");

  const unUsedProvidedConceptsUnSorted = await getAllProvidedConcepts({
    unUsedProvidedConceptsString,
  });

  const userConceptsUsed = userUsedConceptsDataUnSorted.sort((a, b) => {
    const firstA =
      a.concepts_provided?.concept_name[0][0] ??
      a.concepts_added?.concept_name[0][0];
    const firstB =
      b.concepts_provided?.concept_name[0][0] ??
      b.concepts_added?.concept_name[0][0];
    return firstA && firstB ? firstA.localeCompare(firstB) : 0;
  });
  const userConceptsUnUsed = userUnUsedConceptsDataUnSorted.sort((a, b) => {
    const firstA =
      a.concepts_provided?.concept_name[0][0] ??
      a.concepts_added?.concept_name[0][0];
    const firstB =
      b.concepts_provided?.concept_name[0][0] ??
      b.concepts_added?.concept_name[0][0];
    return firstA && firstB ? firstA.localeCompare(firstB) : 0;
  });
  const providedUnUsedConceptsUsed = unUsedProvidedConceptsUnSorted.sort(
    (a, b) => {
      const firstA = a.concept_name[0][0];
      const firstB = b.concept_name[0][0];
      return firstA.localeCompare(firstB);
    }
  );

  return (
    <div className="concepts">
      <table className="used settings-table">
        <thead>
          <OneTableRow name={"Ametlikud mõisted"} />
        </thead>
        <tbody>
          {userConceptsUsed.every((val) => val.concepts_provided === null) ? (
            <OneTableRow name={"Lisa sobivad mõisted"} />
          ) : (
            userConceptsUsed.map((concept, index) => {
              if (concept.concepts_provided !== null) {
                const conceptName = concept.concepts_provided?.concept_name;
                const conceptDescription =
                  concept.concepts_provided?.concept_description;
                const id = concept.id;
                return (
                  <TableRow
                    key={index}
                    name={conceptName!}
                    description={conceptDescription!}
                    id={id}
                    update={false}
                  />
                );
              }
            })
          )}
        </tbody>
      </table>

      <table className="unused settings-table">
        <thead>
          <OneTableRow name={"Ametlikud mõisted, mis on plaani lisamata"} />
        </thead>
        <tbody>
          {userConceptsUnUsed.every((val) => val.concepts_provided === null) ? (
            <OneTableRow name={"Kõik on juba lisatud"} />
          ) : (
            userConceptsUnUsed.map((concept, index) => {
              if (concept.concepts_provided !== null) {
                const conceptName = concept.concepts_provided?.concept_name;
                const conceptDescription =
                  concept.concepts_provided?.concept_description;
                const id = concept.id;
                return (
                  <TableRow
                    key={index}
                    name={conceptName!}
                    description={conceptDescription!}
                    id={id}
                    update={true}
                  />
                );
              }
            })
          )}
        </tbody>
      </table>

      {providedUnUsedConceptsUsed.length > 0 && (
        <NewProvidedConceptsTable
          obj={providedUnUsedConceptsUsed}
          planId={planId}
        />
      )}

      <table className="used settings-table">
        <thead>
          <OneTableRow name={"Isiklikud mõisted"} />
        </thead>
        <tbody>
          {userConceptsUsed.every((val) => val.concepts_added === null) ? (
            <OneTableRow name={"Lisa sobivad mõisted"} />
          ) : (
            userConceptsUsed.map((concept, index) => {
              if (concept.concepts_added !== null) {
                const conceptName = concept.concepts_added?.concept_name;
                const conceptDescription =
                  concept.concepts_added?.concept_description;
                const id = concept.id;
                const tableRowId = concept.concepts_added?.id;
                return (
                  <TableRow
                    key={index}
                    name={conceptName!}
                    description={conceptDescription!}
                    id={id}
                    update={false}
                    tableRowId={tableRowId}
                  />
                );
              }
            })
          )}
        </tbody>
      </table>

      <table className="used settings-table">
        <thead>
          <OneTableRow name={"Isiklikud mõisted, mis on plaani lisamata"} />
        </thead>
        <tbody>
          {userConceptsUnUsed.every((val) => val.concepts_added === null) ? (
            <OneTableRow name={"Kõik on juba lisatud"} />
          ) : (
            userConceptsUnUsed.map((concept, index) => {
              if (concept.concepts_added !== null) {
                const conceptName = concept.concepts_added?.concept_name;
                const conceptDescription =
                  concept.concepts_added?.concept_description;
                const id = concept.id;
                const tableRowId = concept.concepts_added?.id;
                return (
                  <TableRow
                    key={index!}
                    name={conceptName!}
                    description={conceptDescription!}
                    id={id}
                    update={true}
                    tableRowId={tableRowId}
                  />
                );
              }
            })
          )}
        </tbody>
      </table>

      <table className="used settings-table">
        <thead>
          <OneTableRow name={"Lisa uus isiklik mõiste"} />
        </thead>
        <tbody>
          <CreateNewConcept planId={planId} />
        </tbody>
      </table>
    </div>
  );
}
