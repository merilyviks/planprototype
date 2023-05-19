"use client";

import TextButton from "@/components/buttons/Textbutton";
import SearchBar from "./SearchBar";

export default function toolBar() {
  return (
    <div className="tool-bar">
      <TextButton
        ButtonLink="/createplan/"
        ButtonText="Loo uus enesekontrolliplaan"
        OpenInNewTab={false}
      ></TextButton>

      <SearchBar></SearchBar>
    </div>
  );
}
