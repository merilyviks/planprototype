"use client";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CreateNewConcept({
  planId,
}: {
  planId: number;
}): JSX.Element {
  const router = useRouter();
  const { supabase } = useSupabase();

  const [conceptName, setConceptName] = useState<string>("");
  const [conceptDescription, setConceptDescription] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<HTMLTableRowElement>(null);
  /* const inputRef = useRef<HTMLInputElement>(null); */

  const handleFocus = () => {
    setIsFocused(true);
    /*     inputRef.current?.focus(); */
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setConceptName(conceptName);
        setConceptName(conceptDescription);
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
  }, [isFocused, conceptName, conceptDescription]);
  const saveInput = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { data: ConceptsAddedData, error: ConceptsAddedError } =
      await supabase
        .from("concepts_added")
        .insert([
          {
            concept_name: `${conceptName}`,
            connected_plan: planId,
            concept_description: `${conceptDescription}`,
          },
        ])
        .select("id");
    if (ConceptsAddedError) {
      throw new Error(ConceptsAddedError.message);
    } else {
      const id = ConceptsAddedData[0].id;
      const { data: ConceptsSelectedData, error: ConceptsSelectedError } =
        await supabase.from("concepts_selected").insert([
          {
            plan_id: planId,
            is_used: true,
            added_concepts: id,
          },
        ]);

      if (ConceptsSelectedError) {
        throw new Error(ConceptsSelectedError.message);
      } else {
        setConceptName("");
        setConceptDescription("");
        setIsFocused(false);
        router.refresh();
      }
    }

    /* const { data, error } = await supabase.from("concepts_selected").insert([
      {
        plan_id: planId,
        is_used: true,
        provided_concepts: [
          {
            concept_name: `${conceptName}`,
            connected_plan: planId,
            concepts_description: `${conceptDescription}`,
          },
        ],
      },
    ]);

    if (error) {
      throw new Error(error.message);
    } else {
      router.refresh();
    } */
  };
  const cancelNameChange = () => {
    setConceptName("");
    setConceptDescription("");
    setIsFocused(false);
  };

  return (
    <tr ref={ref}>
      <td>
        <input
          type="text"
          /*    ref={inputRef} */
          value={conceptName}
          onChange={(e) => setConceptName(e.target.value)}
          onFocus={handleFocus}
          placeholder="Mõiste nimetus"
          /* onBlur={handleBlur} */
        ></input>
      </td>
      <td>
        <input
          type="text"
          /*     ref={inputRef} */
          value={conceptDescription}
          onChange={(e) => setConceptDescription(e.target.value)}
          onFocus={handleFocus}
          placeholder="Mõiste seletus"
          /* onBlur={handleBlur} */
        ></input>
      </td>

      <td>
        {isFocused && <button onClick={cancelNameChange}>tühista</button>}
        <button type="submit" onClick={(e) => saveInput(e)}>
          Lisa
        </button>
      </td>
    </tr>
  );
}
