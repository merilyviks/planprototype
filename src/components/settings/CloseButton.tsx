"use client";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

export default function CloseButton(): JSX.Element {
  const router = useRouter();
  function handleClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.defaultPrevented;
    router.back();
  }
  return (
    <button onClick={handleClose} className="close-button">
      <IoClose />
    </button>
  );
}
