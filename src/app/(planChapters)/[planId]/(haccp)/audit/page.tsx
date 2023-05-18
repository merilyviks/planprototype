import { ChapterDocument } from "@/components/chapters/ChapterDocument";
import { ChapterPurpose } from "@/components/chapters/ChapterPurpose";
import { ChapterWorkers } from "@/components/chapters/ChapterWorkers";
import {
  getChapterInfo,
  getProvidedManegment,
  getSpecificContentsInfo,
} from "@/lib/fetch/getChapterInfo";
import { getAllDocuments } from "@/lib/fetch/getDocuments";

export default async function AuditPage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentsChosenId = 23;
  const contents = await getSpecificContentsInfo({ planId, contentsChosenId });
  const chapterId = contents.id;
  const chapterInfo = await getProvidedManegment({ contentsChosenId });
  const allDocs = await getAllDocuments({ planId });

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
          {chapterInfo.map((manegment, index) => {
            const text = manegment.provided_manegment;

            return <p key={index}>{text}</p>;
          })}
        </div>
      )}

      {contents.uses_docs && (
        /* @ts-expect-error Async Server Component */
        <ChapterDocument planId={planId} chapterId={contentsChosenId} />
      )}
    </>
  );
}
