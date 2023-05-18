import { getDocuments } from "@/lib/fetch/getDocuments";

export async function ChapterDocument({
  planId,
  chapterId,
}: {
  planId: number;
  chapterId: number;
}) {
  const documents = await getDocuments({ planId, chapterId });

  return (
    <>
      <h2>Dokumendid</h2>
      {documents.map((obj, index) => {
        return <li key={index}>{obj.document_provided.document_name}</li>;
      })}
    </>
  );
}
