"use client";

import Link from "next/link";
import React from "react";

type PlanSmallDetailsProps = {
  PlanName?: string;
  PlanDescription?: string;
  PlanId: number;
  CompanyName?: string;
  CreatedDate: string;
  LastChanged: string;
};

export default function Card({
  PlanName,
  PlanDescription,
  PlanId,
  CompanyName,
  CreatedDate,
  LastChanged,
}: PlanSmallDetailsProps) {
  return (
    <Link className="plan-info-card" href={`/${PlanId}`}>
      <h4>{PlanName}</h4>
      <p>{CompanyName}</p>
      <p>{PlanDescription}</p>
      <p>Loodud: {CreatedDate}</p>
      <p>Muudetud: {LastChanged}</p>
    </Link>
  );
}
