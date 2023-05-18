"use client";

import Item from "./Item";
import { Contents_selected } from "@/lib/general/generalTypes";

interface Contents {
  planId: number;
  mainCount: number;
  list: Contents_selected[];
}

export default function AllChapterNames({ planId, mainCount, list }: Contents) {
  let chaptersCount = 1;

  return (
    <ul className="all-chapters" key={mainCount}>
      {list.map((content, index) => {
        const urlTitle = content.contents_provided?.title;
        const chosenTitle = content.contents_named
          ? content.contents_named
          : content.contents_provided?.title_chosen
          ? content.contents_provided?.title_chosen
          : content.contents_provided?.title;

        return (
          <Item
            key={content.contents_provided?.position}
            id={planId}
            mainCount={mainCount}
            chapterCount={chaptersCount++}
            urlTitle={urlTitle}
            chosenTitle={chosenTitle}
          />
        );
      })}
    </ul>
  );
}
