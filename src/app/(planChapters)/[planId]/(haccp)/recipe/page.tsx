import { ChapterPurpose } from "@/components/chapters/ChapterPurpose";
import { ChapterWorkers } from "@/components/chapters/ChapterWorkers";
import AllergyTable from "@/components/information/AllergyTable";
import {
  getChapterInfo,
  getSpecificContentsInfo,
} from "@/lib/fetch/getChapterInfo";
import { getWorkerTaskConnections } from "@/lib/fetch/getWorker";

export default async function RecipePage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentsChosenId = 18;
  const contents = await getSpecificContentsInfo({ planId, contentsChosenId });
  const chapterUserId = contents.id;
  const chapterInfo = await getChapterInfo({ chapterUserId });

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      {contents.uses_purpose && <ChapterPurpose chapterId={contentsChosenId} />}

      {contents.uses_supervisors && (
        /* @ts-expect-error Async Server Component */
        <ChapterWorkers planId={planId} contentId={contentsChosenId} />
      )}
      {contents.uses_manegment && (
        <div>
          <h2>Töökorraldus</h2>
          <p>
            Toidu tehniline kirjeldus ehk retsept koostatakse toote
            väljatöötamisel.
          </p>
          <p>Retsept sisaldab järgmisi andmeid:</p>
          <li>toote nimetus</li>
          <li>toote koostis (kasutatavate komponentide täielik nimekiri)</li>
          <li>toote valmistamise tehnoloogilised võtted</li>
          <li>allergeenid</li>
        </div>
      )}
      <p>
        Toodetes sisalduvate allergeenide kohta infot saab liittoitude puhul
        märgistuselt (tooraine). Allergeenid, mille kohta esitatakse kliendile
        infot küsimisel:
      </p>
      <AllergyTable />

      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
          <p>Retsepti tagab juhataja ja vastutab selle olemasolu eest.</p>
        </div>
      )}
      {contents.uses_docs && (
        <>
          <h2>Dokumendid</h2>
          <li>Retseptid</li>
        </>
      )}
    </>
  );
}
