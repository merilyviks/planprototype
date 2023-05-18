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
  const contentsChosenId = 7;
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
            Ettevõttes tekkivad jäätmed:
            <li>Segaolmejäätmed</li>
            <li>Taara</li>
          </p>
          <p>
            Segaolmejäätmed kogutakse ettevõtte siseruumides prügikasti, mis on
            sobiva konstruktsiooniga, heas seisukorras, kergesti puhastatavad ja
            vajaduse korral desinfitseeritavad. Prügikastides kasutatakse
            prügikotte.
          </p>
          <p>
            Mikrobioloogilise saastumise ja ebameeldiva lõhna tekke vältimiseks
            eemaldatakse jäätmed toidukäitlemisruumides prügikasti täitumisel
            75% ulatuses. Vähemalt iga tööpäeva lõpus tühjendatakse kõik
            prügikastid täiendavalt.
          </p>
          <p>
            Taara kogutakse kokku ja tööpäeva lõpus (vajadusel ka tööpäeva
            jooksul) viiakse toidukäitlemisalast majasisesesse kogumispunkti.
            Taara viiakse ära vastavalt kokkuleppele, kas töötaja viib ise omal
            soovil taara ära või tagastatakse koostöös taarat koguva
            ettevõttega.
          </p>
        </div>
      )}
      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
          <p>
            Juhataja kontrollib visuaalselt jäätmete kõrvaldamise nõuete
            täitmist, puuduste avastamisel (määrdunud prügikast, prügikast üle
            täitunud või õhtul välja viimata) puudused kõrvaldatakse esimesel
            võimalusel. Juhtum fikseeritakse kirjalikult, täidetakse SEIRELEHT-
            Kaebuste/märkuste registreerimine.
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
