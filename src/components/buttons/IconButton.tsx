import Link from "next/link";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { TiHome } from "react-icons/ti";
import { TiZoomIn } from "react-icons/ti";
import { TiZoomOut } from "react-icons/ti";
import { TiCog } from "react-icons/ti";

type MyIconProps = {
  name: "home" | "toLeft" | "toRight" | "zoomIn" | "zoomOut" | "configure";
};

export default function IconButton({ name }: MyIconProps) {
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
        <button className="icon-button">
          <TiCog />
        </button>
      );
  }
}

/*     const MyIcon = ({ name }: MyIconProps) => {
      return <img src={name} />;
    };
    export default MyIcon;




    const Icons = ({ name, className }) => {
        switch (name) {
          case "home":
            return <button><TiHome/></button>
        }
      };
      export default Icons; */
