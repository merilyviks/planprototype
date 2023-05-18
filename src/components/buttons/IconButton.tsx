/* "use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { TiHome } from "react-icons/ti";
import { TiZoomIn } from "react-icons/ti";
import { TiZoomOut } from "react-icons/ti";
import { TiCog } from "react-icons/ti";

type MyIconProps = {
  name: "home" | "toLeft" | "toRight" | "zoomIn" | "zoomOut" | "configure";
  navList: [] | null;
};

export default function IconButton({ name }: MyIconProps): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const settingsPathname = pathname + "/settings";
  router.prefetch(settingsPathname);

  switch (name) {
    case "home":
      return (
        <button className="icon-button">
          <Link href="/">
            <TiHome />
          </Link>
        </button>
      );
    case "toLeft":
      return (
        <button className="icon-button">
          <TiArrowLeft />
        </button>
      );
    case "toRight":
      return (
        <button className="icon-button">
          <TiArrowRight />
        </button>
      );
    case "zoomIn":
      return (
        <button className="icon-button">
          <TiZoomIn />
        </button>
      );
    case "zoomOut":
      return (
        <button className="icon-button">
          <TiZoomOut />
        </button>
      );
    case "configure":
      return (
        <button
          className="icon-button"
          onClick={() => router.push(settingsPathname)}
        >
          <TiCog />
        </button>
      );
  }
}

 */
