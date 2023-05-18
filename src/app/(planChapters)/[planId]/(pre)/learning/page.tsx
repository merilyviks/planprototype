import { ChapterPurpose } from "@/components/chapters/ChapterPurpose";
import { ChapterDocument } from "@/components/chapters/ChapterDocument";
import { ChapterWorkers } from "@/components/chapters/ChapterWorkers";
import {
  getChapterInfo,
  getSpecificContentsInfo,
} from "@/lib/fetch/getChapterInfo";

export default async function WastePage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentsChosenId = 11;
  const contents = await getSpecificContentsInfo({ planId, contentsChosenId });
  const chapterUserId = contents.id;
  const chapterInfo = await getChapterInfo({ chapterUserId });

  return (
    <div className="waste Chapter-page">
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
            Töötajad läbivad tööle tulemisel vähemalt 6 akadeemilise tunni
            pikkuse toiduhügieeni koolituse vastavat koolitust korraldavas
            ettevõttes. Täiendkoolitus läbitakse iga 5 aasta möödumisel.
          </p>
          <p>
            Juhul kui tööle asumisel on töötajal kehtiv toiduhügieeni koolituse
            läbimise tõend/tunnistus, mis ei ole vanem kuni 5 aastat
            arvestatakse selle koolituse kehtivust. Kui töötajal puudub tööle
            tulemisel koolitust tõendav dokument, siis töötaja suunatakse
            toiduhügieeni koolitusele hiljemalt 30 päeva jooksul alates tööle
            tulemisest.
          </p>
        </div>
      )}
      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
          <p>
            Juhul kui töötaja eksib pidevalt ettevõttes kehtestatud kordade
            vastu, viiakse läbi täiendav instrueerimine või saadetakse
            täiendavale toiduhügieeni koolitusele. Täiendaval instrueerimisel
            selgitatakse töötajale eksimustest tingitud ohtusid, arutletakse
            eksimuste põhjusi ja leitakse võimalused edaspidiseks paremaks
            töökorralduseks. Juhtum fikseeritakse kirjalikult, täidetakse
            SEIRELEHT- Kaebuste/märkuste registreerimine.
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
