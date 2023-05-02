"use clinet";
import Logout from "@/components/auth/Logout";
import IconButton from "@/components/buttons/IconButton";

export default function Bottom({
  planTitle,
}: {
  planTitle: string | null | undefined;
}) {
  return (
    <div className="bottom">
      <div className="left">
        <IconButton name="home" />
      </div>
      <div className="right">
        <h1 className="title">{planTitle}</h1>
        <Logout text={"Logi välja"} isSeen={true} />
      </div>
    </div>
  );
}
