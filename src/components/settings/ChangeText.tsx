"use client";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ChangeText({
  name,
  id,
  tableName,
  rowName,
}: {
  name: string;
  id: number;
  tableName: string;
  rowName: string;
}) {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [newName, setNewName] = useState<string>(name);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setNewName(name);
        setIsFocused(false);
      }
    }

    if (isFocused) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused, name]);

  const saveInput = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.defaultPrevented;
    const { data, error } = await supabase
      .from(tableName)
      .update({ [rowName.trim()]: `${newName}` })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    } else {
      setIsFocused(false);
      router.refresh();
    }
  };

  const cancelNameChange = () => {
    setNewName(name);
    setIsFocused(false);
  };

  return (
    <div ref={ref}>
      <input
        type="text"
        ref={inputRef}
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        onFocus={handleFocus}
        /* onBlur={handleBlur} */
      ></input>
      {isFocused ? (
        <>
          <button onClick={cancelNameChange}>Tühista</button>
          <button type="submit" onClick={(e) => saveInput(e)}>
            Salvesta
          </button>
        </>
      ) : (
        <button onClick={handleFocus}>muuda</button>
      )}
    </div>
  );
}
