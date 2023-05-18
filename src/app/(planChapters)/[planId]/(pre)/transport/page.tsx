import { ChapterPurpose } from "@/components/chapters/ChapterPurpose";
import { ChapterDocument } from "@/components/chapters/ChapterDocument";
import { ChapterWorkers } from "@/components/chapters/ChapterWorkers";
import {
  getChapterInfo,
  getSpecificContentsInfo,
} from "@/lib/fetch/getChapterInfo";

export default async function Material({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentsChosenId = 5;
  const contents = await getSpecificContentsInfo({ planId, contentsChosenId });
  const chapterUserId = contents.id;
  const chapterInfo = await getChapterInfo({ chapterUserId });

  return (
    <div className="Material Chapter-page">
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
            Ettevõtte kasutab tooraine, valmistoodangu ja pakendite
            transportimiseks selleks ettenähtud teenust. Üldiselt ettevõte ei
            tegele transpordiga ise, kuid kui peaks vajadust tekkima siis
            järgitakse vastavaid töö korraldusi.
          </p>
          <p>
            Veopäeva alguses kontrollitakse auto nõuetele vastavust, et ei oleks
            otseseid ohte veetavale toidule ja auto on puhas. Kindlasti
            jälgitakse tugeva lõhna puudumist, kauba paigutamiseks vajaliku
            ruumi ja kastide olemasolu. Täidetakse VORM – sõiduvahendite ja
            autojuhtide nimekiri.
          </p>
          <p>
            Auto puhastatakse vajadusel enne toidu transportimist pihustatava
            puhastusvahendiga ja pühkides paberkäterättide. Vajadusel toimub
            lisaks tolmuimejaga puhastamine. Puhastustöid teostab autojuht.
          </p>
          <p>
            Toidu transportimine toimub pakendatult. Eritemperatuuri vajavad
            toidud (tooraine) transporditakse vajadusel termokastides ja eriti
            soojal perioodil pannakse kastidesse jahutuselemendid jaheda
            temperatuuri tagamiseks.
          </p>
          <p>
            Kaste puhastatakse peale kasutamist pihustatava puhastusvahendiga.
            Mittepuhastavate kastide sisse pannakse kilekotid toidu kaitseks iga
            kord enne toidu transportimist.
          </p>
        </div>
      )}
      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
          <p>
            Puhastamise ja transporditingimuste nõuetele vastavust
            kontrollitakse visuaalselt ja kui toimub kõrvalekaldeid,
            kõrvaldatakse puudus kohe. Vajadusel teostatakse täiendavaid
            puhastamisi.
          </p>
        </div>
      )}
      {contents.uses_docs && (
        /* @ts-expect-error Async Server Component */
        <ChapterDocument planId={planId} chapterId={contentsChosenId} />
      )}
    </div>
  );
}
