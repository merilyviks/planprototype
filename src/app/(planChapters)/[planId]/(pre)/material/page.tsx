import { ChapterPurpose } from "@/components/chapters/ChapterPurpose";
import ChapterWorkers from "@/components/chapters/ChapterWorkers";
import {
  getChapterInfo,
  getSpecificContentsInfo,
} from "@/lib/fetch/getChapterInfo";

export default async function Material({
  params: { planId },
}: {
  params: { planId: number };
}) {
  const contentsChosenId = 4;
  const contents = await getSpecificContentsInfo({ planId, contentsChosenId });
  const chapterUserId = contents.id;
  const chapterInfo = await getChapterInfo({ chapterUserId });

  return (
    <div className="Material Chapter-page">
      {contents.uses_purpose && <ChapterPurpose chapterId={contentsChosenId} />}
      {contents.uses_supervisors && (
        <ChapterWorkers planId={planId} contentId={contentsChosenId} />
      )}
      {/* {contents.uses_manegment && (
        <div>
          <h2>Töökorraldus</h2>
          {chapterInfo.map((manegment, index) => {
            const changeOptionsArray = manegment.provided_mangement?.test;
            let changeIndex = 2;
            let replacnementText = "";
            if (changeOptionsArray && changeOptionsArray.length > 0) {
              replacnementText = changeOptionsArray[changeIndex];
            }
            let text = manegment.provided_mangement?.provided_mangement;

            if (text?.includes("CHANGETEXT")) {
              text = text.replace("CHANGETEXT", replacnementText);
            }
            return <p key={index}>{text}</p>;
          })}
        </div>
      )} */}
      {contents.uses_control && (
        <div>
          <h2>Kontroll ja korrigeeriv tegevus</h2>
        </div>
      )}
      {contents.uses_docs && <h2>Dokumendid</h2>}
    </div>
  );
}
