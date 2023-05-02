import { Contents_selected } from "@/lib/general/generalTypes";
import AllChapterNames from "./AllChapterNames";

type MainChapterProps = {
  mainCount: number;
  contents: Contents_selected[];
  planId: number;
  title: string;
};

export default function MainChapter({
  mainCount,
  contents,
  planId,
  title,
}: MainChapterProps) {
  return (
    <>
      <ul className="main-chapters">
        <li>
          <p className="number">{mainCount} osa</p>
          <p className="title">{title}</p>
        </li>
        <ul className="all-chapters">
          <AllChapterNames
            mainCount={mainCount}
            list={contents}
            planId={planId}
          />
        </ul>
      </ul>
    </>
  );
}
