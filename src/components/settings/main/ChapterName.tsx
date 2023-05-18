import ChangeText from "../ChangeText";

export default function ChapterName({
  chapterName,
  mainCount,
  chapterCount,
  id,
}: {
  chapterName: string;
  mainCount: number;
  chapterCount: number;
  id: number;
}) {
  return (
    <td>
      {mainCount}.{chapterCount}{" "}
      <ChangeText
        name={chapterName}
        id={id}
        tableName={"contents_selected"}
        rowName={"contents_named"}
      />
    </td>
  );
}
