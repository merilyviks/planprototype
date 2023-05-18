import {
  Contents_provided,
  Contents_selected,
  Self_plans,
} from "@/lib/general/generalTypes";

import { createServerClient } from "@/utils/supabase-server";
import RemoveContentButton from "../../../../../../components/settings/main/RemoveContentButton";
import AddContentButton from "../../../../../../components/settings/main/ButtonUpdateUsage";
import SelectContentButton from "../../../../../../components/settings/main/SelectContentButton";
import ChapterName from "../../../../../../components/settings/main/ChapterName";
import ButtonUpdateUsage from "../../../../../../components/settings/main/ButtonUpdateUsage";

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

async function getUserContents({ planId }: { planId: number }) {
  const supabase = createServerClient();
  const { data: contentsSelected, error } = await supabase
    .from("contents_selected")
    .select(`*, contents_provided(*)`)
    .eq("plan_id", planId);

  if (error) {
    throw new Error(error.message);
  }
  const ContentsSelectedData: Contents_selected[] = JSON.parse(
    JSON.stringify(contentsSelected)
  );
  return ContentsSelectedData;
}

async function getAllContents({
  unUsedProvidedContentsString,
}: {
  unUsedProvidedContentsString: string;
}) {
  const supabase = createServerClient();
  const { data: contentsProvided, error } = await supabase
    .from("contents_provided")
    .select()
    .not("id", "in", `${unUsedProvidedContentsString}`);

  if (error) {
    throw new Error(error.message);
  }
  const ContentsProvidedData: Contents_provided[] = JSON.parse(
    JSON.stringify(contentsProvided)
  );
  return ContentsProvidedData;
}

export default async function ContentsSettings({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const selfPlans = await getPlanInfo({ planId });
  const userContentsDataUnSorted = await getUserContents({ planId });

  const userContentsData = userContentsDataUnSorted.sort(
    (a, b) => a.contents_provided?.position - b.contents_provided?.position
  );

  const unUsedProvidedContents = userContentsData.map(
    (item) => item.contents_provided?.id
  );
  const unUsedProvidedContentsString = JSON.stringify(unUsedProvidedContents)
    .replace("[", "(")
    .replace("]", ")");
  const allContents = await getAllContents({ unUsedProvidedContentsString });

  const userContentsIsUsed = userContentsData.filter(
    (obj) => obj.is_used === true
  );
  const userContentsIsNotUsed = userContentsData.filter(
    (obj) => obj.is_used === false
  );
  const contentsPreUsed = userContentsIsUsed.filter(
    (obj) => obj.contents_provided?.chapter_type === "pre"
  );
  const contentsHaccpUsed = userContentsIsUsed.filter(
    (obj) => obj.contents_provided?.chapter_type === "haccp"
  );
  const contentsPreNotUsed = userContentsIsNotUsed.filter(
    (obj) => obj.contents_provided?.chapter_type === "pre"
  );
  const contentsHaccpNotUsed = userContentsIsNotUsed.filter(
    (obj) => obj.contents_provided?.chapter_type === "haccp"
  );
  const contentsProvidedPreNotUsed = allContents.filter(
    (obj) => obj.chapter_type === "pre"
  );
  const contentsProvidedHaccpNotUsed = allContents.filter(
    (obj) => obj.chapter_type === "haccp"
  );

  let chaptersMainCount = 0;
  let chaptersPreCount = 1;
  let chaptersHaccpCount = 1;

  return (
    <div className="contents">
      <table className="used">
        <thead>
          <tr>
            <th>{++chaptersMainCount} Eeltingimuste programm</th>
          </tr>
        </thead>
        <tbody>
          {contentsPreUsed.length > 0 ? (
            contentsPreUsed.map((chapter, index) => {
              const id = chapter.id;
              const chapterName = chapter.contents_named
                ? chapter.contents_named
                : chapter.contents_provided?.title_chosen
                ? chapter.contents_provided?.title_chosen
                : chapter.contents_provided?.title;
              return (
                <tr key={index}>
                  <ChapterName
                    chapterName={chapterName as string}
                    mainCount={chaptersMainCount}
                    chapterCount={chaptersPreCount++}
                    id={id}
                  />
                  <td>
                    <ButtonUpdateUsage
                      id={id}
                      dbTable={"contents_selected"}
                      updateTo={false}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={2}>Peatükke pole, palun lisa vajalikud peatükid</td>
            </tr>
          )}
        </tbody>
        <thead>
          <tr>
            <th>{++chaptersMainCount} HACCP programm</th>
          </tr>
        </thead>
        <tbody>
          {contentsHaccpUsed.length > 0 ? (
            contentsHaccpUsed.map((chapter, index) => {
              const id = chapter.id;
              const chapterName = chapter.contents_named
                ? chapter.contents_named
                : chapter.contents_provided?.title_chosen
                ? chapter.contents_provided?.title_chosen
                : chapter.contents_provided?.title;
              return (
                <tr key={index}>
                  <ChapterName
                    chapterName={chapterName as string}
                    mainCount={chaptersMainCount}
                    chapterCount={chaptersHaccpCount++}
                    id={id}
                  />
                  <td>
                    <ButtonUpdateUsage
                      id={id}
                      dbTable={"contents_selected"}
                      updateTo={false}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={2}>Peatükke pole, palun lisa vajalikud peatükid</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className="unused">
        <thead>
          <tr>
            <th>Kasutamata peatükid eeltingimuste programmi osas</th>
          </tr>
        </thead>

        <tbody>
          {contentsPreNotUsed.length + contentsProvidedPreNotUsed.length > 0 ? (
            contentsPreNotUsed.map((chapter, index) => {
              const id = chapter.id;

              return (
                <tr key={index}>
                  <td>
                    {chapter.contents_named
                      ? chapter.contents_named
                      : chapter.contents_provided?.title_chosen
                      ? chapter.contents_provided?.title_chosen
                      : chapter.contents_provided?.title}
                  </td>
                  <td>
                    <ButtonUpdateUsage
                      id={id}
                      dbTable={"contents_selected"}
                      updateTo={true}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={2}>Kõik peatükid on lisatud</td>
            </tr>
          )}
        </tbody>
        <tbody>
          {contentsProvidedPreNotUsed.map((chapter, index) => {
            const id = chapter.id;

            return (
              <tr key={index}>
                <td>
                  {chapter.title_chosen ? chapter.title_chosen : chapter.title}
                </td>
                <td>
                  <SelectContentButton
                    contentsNamed={""}
                    contentsChosen={id}
                    planId={planId}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <thead>
          <tr>
            <th>Kasutamata peatükid HACCP-i osas</th>
          </tr>
        </thead>
        <tbody>
          {contentsHaccpNotUsed.length + contentsProvidedHaccpNotUsed.length >
          0 ? (
            contentsHaccpNotUsed.map((chapter, index) => {
              const id = chapter.id;

              return (
                <tr key={index}>
                  <td>
                    {chapter.contents_named
                      ? chapter.contents_named
                      : chapter.contents_provided?.title_chosen
                      ? chapter.contents_provided?.title_chosen
                      : chapter.contents_provided?.title}
                  </td>
                  <td>
                    <ButtonUpdateUsage
                      id={id}
                      dbTable={"contents_selected"}
                      updateTo={true}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={2}>Kõik peatükid on lisatud</td>
            </tr>
          )}
        </tbody>
        <tbody>
          {contentsProvidedHaccpNotUsed.map((chapter, index) => {
            const id = chapter.id;

            return (
              <tr key={index}>
                <td>
                  {chapter.title_chosen ? chapter.title_chosen : chapter.title}
                </td>
                <td>
                  <SelectContentButton
                    contentsNamed={""}
                    contentsChosen={id}
                    planId={planId}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
