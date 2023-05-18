import { ChapterDocument } from "@/components/chapters/ChapterDocument";
import { ChapterPurpose } from "@/components/chapters/ChapterPurpose";
import { ChapterWorkers } from "@/components/chapters/ChapterWorkers";
import {
  getChapterInfo,
  getSpecificContentsInfo,
} from "@/lib/fetch/getChapterInfo";
import { getAllDocuments } from "@/lib/fetch/getDocuments";

export default async function RecipePage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentsChosenId = 24;
  const contents = await getSpecificContentsInfo({ planId, contentsChosenId });
  const chapterUserId = contents.id;
  const chapterInfo = await getChapterInfo({ chapterUserId });
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
        </div>
      )}

      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
          <p>Allpool nimetatud dokumente hoiustatakse vähemalt 24 kuud.</p>
          <table className="basic-chapter-table docs-table">
            <thead>
              <tr>
                <td>Kausta nimi</td>
                <td>Sisalduvad dokumendid</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Enesekontrolliplaan</td>
                <td>
                  {allDocs.map((obj, index) => {
                    return (
                      <li key={index}>
                        {obj.document_provided?.document_name}
                      </li>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {contents.uses_docs && (
        /* @ts-expect-error Async Server Component */
        <ChapterDocument planId={planId} chapterId={contentsChosenId} />
      )}
    </>
  );
}
