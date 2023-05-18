"use client";
import {
  Contents_provided,
  Contents_selected,
} from "@/lib/general/generalTypes";
import { usePathname } from "next/navigation";

export default function ChapterTitle({
  chapters,
}: {
  chapters: Contents_selected[];
}): JSX.Element {
  const activeChapter = usePathname().split("/")[2];
  const titleObj = chapters.find(
    (obj) => obj.contents_provided?.title === activeChapter
  );
  const titleOptions =
    activeChapter === "concepts"
      ? "Mõisted"
      : activeChapter === "contents"
      ? "Sisukord"
      : null;

  const usedTitle =
    (titleObj?.contents_named?.length! > 0
      ? titleObj?.contents_named
      : titleObj?.contents_provided?.title_chosen) ?? titleOptions;

  return <h1>{usedTitle}</h1>;
}
