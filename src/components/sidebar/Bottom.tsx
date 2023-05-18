"use clinet";
import Logout from "@/components/auth/Logout";
import IconButton from "@/components/buttons/IconButton";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

export default function Bottom({
  planTitle,
}: {
  planTitle: string | null | undefined;
}) {
  return (
    <div className="bottom">
      <div className="left">
        <button className="icon-button">
          <Link href="/">
            <TiHome />
          </Link>
        </button>
      </div>
      <div className="right">
        <h1 className="title">{planTitle}</h1>
        <Logout text={"Logi välja"} isSeen={true} />
      </div>
    </div>
  );
}
