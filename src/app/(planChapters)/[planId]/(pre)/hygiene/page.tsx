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
  const contentsChosenId = 12;
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
          <p>Tööriietus</p>
          <p>
            Teenindustöö riietuseks on puhas ja mugav riietus, kantakse lisaks
            vahetusjalanõusid ja hoitakse juuksed kinni. Vajadusel kantakse ka
            ühekordseid kindaid toidu käitlemisel. Köögitöö riietuseks on samuti
            puhtad ja mugav riietus, kantakse vahetusjalanõusid, hoitakse
            juuksed kinni ja/või kantakse peakatet. Vajadusel kantakse ka
            ühekordseid kindaid.
          </p>
          <p>
            Mikrobioloogilise saastumise ja ebameeldiva lõhna tekke vältimiseks
            eemaldatakse jäätmed toidukäitlemisruumides prügikasti täitumisel
            75% ulatuses. Vähemalt iga tööpäeva lõpus tühjendatakse kõik
            prügikastid täiendavalt.
          </p>
          <p>
            <li>enne töö alustamist;</li>
            <li>kui käed on saastunud; </li>
            <li>pärast WC kasutamist;</li>
            <li>enne ja pärast söömist;</li>
            <li>enne ja pärast suitsetamist; </li>
            <li>
              pärast musta objekti ja materjali puudutamist sh peale
              prügikastide tühjendamist;
            </li>
            <li>pärast köhimist, nina nuuskamist.</li>
          </p>
          <p>
            Käte kuivatamine korduvkasutatav käterätiga on keelatud ning
            kasutatakse selleks paberkäterätte.
          </p>
        </div>
      )}
      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
          <p>
            Juhataja jälgib visuaalselt hügieeninõuete täitmist ja
            kõrvalekallete korral uuritakse kõrvalekalde põhjuseid ning
            vajadusel saadetakse töötaja täiendavale koolitusele. Täidetakse
            SEIRELEHT- Kaebuste/rikkumiste registreerimine
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
