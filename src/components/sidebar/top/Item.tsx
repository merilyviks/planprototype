import Link from "next/link";

type ItemProps = {
  index: number;
  id: number;
  mainCount: number;
  chapterCount: number;
  urlTitle?: string;
  chosenTitle?: string;
};

export default function Item({
  index,
  id,
  mainCount,
  chapterCount,
  urlTitle,
  chosenTitle,
}: ItemProps) {

  return (
    <li key={`${chosenTitle}-${index}`}>
      <Link
        href={`/${encodeURIComponent(id)}/${encodeURIComponent(
          urlTitle ? urlTitle : "null"
        )}`}
        key={`${chosenTitle}-${index}`}
      >
        <p className="number">
          {mainCount}.{chapterCount}
        </p>
        <p className="title">{chosenTitle}</p>
      </Link>
    </li>
  );
}
