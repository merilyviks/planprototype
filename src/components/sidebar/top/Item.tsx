import Link from "next/link";

type ItemProps = {
  key: number;
  id: number;
  mainCount: number;
  chapterCount: number;
  urlTitle?: string;
  chosenTitle?: string;
};

export default function Item({
  key,
  id,
  mainCount,
  chapterCount,
  urlTitle,
  chosenTitle,
}: ItemProps) {
  return (
    <li key={key}>
      <Link
        href={`/${encodeURIComponent(id)}/${encodeURIComponent(
          urlTitle ? urlTitle : "null"
        )}`}
        key={key * 10}
      >
        <p className="number">
          {mainCount}.{chapterCount}
        </p>
        <p className="title">{chosenTitle}</p>
      </Link>
    </li>
  );
}
