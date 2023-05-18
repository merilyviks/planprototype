"use client";
import { TiArrowLeft, TiArrowRight, TiCog } from "react-icons/ti";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NavButtons({
  navList,
}: {
  navList: (string | undefined)[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameName = usePathname().split("/")[2];
  const pathnameId = usePathname().split("/")[1];
  const settingsPathname = pathname + "/settings";
  const next = navList[navList.indexOf(pathnameName as never) + 1];
  const prev = navList[navList.indexOf(pathnameName as never) - 1];
  const prevPage = navList.includes(pathnameName as never)
    ? prev !== undefined
      ? pathnameId + "/" + prev
      : pathnameId
    : pathnameId + "/" + navList[navList.length - 1];
  const nextPage = navList.includes(pathnameName as never)
    ? next !== undefined
      ? pathnameId + "/" + next
      : pathnameId
    : pathnameId + "/contents";
  router.prefetch(settingsPathname);
  router.prefetch(prevPage);
  router.prefetch(nextPage);
  return (
    <div className="nav-buttons">
      <button className="icon-button" onClick={() => router.push(prevPage)}>
        <TiArrowLeft />
      </button>
      <button
        className="icon-button"
        onClick={() => router.push(settingsPathname)}
      >
        <TiCog />
      </button>
      <button className="icon-button" onClick={() => router.push(nextPage)}>
        <TiArrowRight />
      </button>
    </div>
  );
}
