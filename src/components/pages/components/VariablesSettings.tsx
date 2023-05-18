"use client";
import { useEffect, useState } from "react";

export default function VariablesSettings() {
  const [variableSettingsVisability, setVariableSettingsVisability] =
    useState(false);

  useEffect(() => {
    setVariableSettingsVisability(false); // set visibility to false when the component mounts
  }, []);

  const handleClick = () => {
    setVariableSettingsVisability(true);
  };
  return (
    <section className="variable-settings">
      <div
        style={{
          visibility: variableSettingsVisability ? "visible" : "hidden",
        }}
      >
        <p>hiiii</p>
      </div>
      <button
        style={{
          visibility: variableSettingsVisability ? "hidden" : "visible",
        }}
        onClick={handleClick}
      >
        Muuda
      </button>
    </section>
  );
}
