import { getProvidedPurposes } from "@/lib/fetch/getChapterInfo";

export async function ChapterPurpose({ chapterId }: { chapterId: number }) {
  const purposes = await getProvidedPurposes({ chapterId });
  return (
    <div>
      <h2>Eesmärk</h2>
      {purposes.map((obj, index) => {
        return <p key={index}>{obj.purpose}</p>;
      })}
    </div>
  );
}
