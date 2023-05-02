"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MainChapterProps = {
  urlTitle: string;
  id: number;
  chosenTitle: string;
};

export default function OneChapter({
  urlTitle,
  id,
  chosenTitle,
}: MainChapterProps) {
  const activeRoute = usePathname();
  /*   const mainUrlll = `/${encodeURIComponent(
    id
  )} {urlTitle ? /${encodeURIComponent(urlTitle)} : none
  }`; */
  const mainUrl =
    `/${encodeURIComponent(id)}` +
    (urlTitle ? `/${encodeURIComponent(urlTitle)}` : "");

  /*   const mainUreel = `/${encodeURIComponent(id)}`;
  const url = `/${encodeURIComponent(urlTitle)}`; */

  return (
    <>
      <ul className="main-chapters">
        <Link href={mainUrl}>
          <li className={mainUrl === activeRoute ? "active" : "wrong"}>
            <p className="title">{chosenTitle}</p>
          </li>
        </Link>
      </ul>
    </>
  );
}
