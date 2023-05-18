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
            Tervisetõendi väljastab perearst või töötervishoiuarst. Tööle astuja
            esitab nakkushaiguste suhtes tervisekontrolli läbimise kohta
            kirjaliku tervisetõendi, mida säilitatakse töösuhte kestuse jooksul
            ning vähemalt aasta pärast töösuhte lõppemist.{" "}
          </p>
          <p>
            Perioodilist tervisekontrolli ei ole kehtestatud. Vajadusel on
            tööandjal on õigus asutusesiseselt määrata täiendava
            tervisekontrolli läbimise kohustus. Täiendava tervisekontrolli
            vajaduse otsustab tööandja kindlate juhtumite korral (sündmuspõhine
            lähenemine). Võimalikud riskid, mis võivad põhjustada täiendava
            tervisekontrolli on:
          </p>
          <p>
            <li>
              töökollektiivis ilmneb mõnel töötajal nakkushaigus või esineb
              nakkushaiguse levik;
            </li>
            <li>tööprotsesside käigus on toimunud nakkushaiguse levik;</li>
            <li>kaebus nakkushaiguse esinemisest/kahtlusest;</li>
            <li>järelevalve asutuse korraldusel.</li>
            <li>enne ja pärast suitsetamist; </li>
          </p>
          <p>Haigusest teavitamine</p>
          <p>
            Inimest, kes põeb sellist haigust või on sellise haiguse nakkuse
            kandja, mis võib levida toidu kaudu, näiteks infitseerunud haavad,
            nahahaigused, põletikud või kõhulahtisus, ei lubata mingis ulatuses
            toitu käsitseda või siseneda toidukäsitsemisalasse, kui mis tahes
            otsene või kaudne saastumine on tõenäoline. Kõik nimetatud
            probleemidega töötavad isikud, kes võivad tõenäoliselt sattuda
            toiduga kokkupuutesse, peavad oma haigustest või sümptomitest ja
            võimalusel ka nende põhjustest otsest ülemust kohe teavitama.
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
