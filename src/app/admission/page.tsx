import { Suspense } from "react";
import type { Metadata } from "next";
import { AdmissionHero } from "@/components/admission/AdmissionHero";
import { ProcedureList } from "@/components/admission/ProcedureList";
import { SchoolVisit } from "@/components/admission/SchoolVisit";
import { AdmissionSkeleton } from "@/components/admission/AdmissionSkeleton";

export const metadata: Metadata = {
  title: "Admission - JB School, Bali",
  description:
    "JB School Bali admission procedure, required registration documents, and how to arrange a school visit.",
};

export default function AdmissionPage() {
  return (
    <Suspense fallback={<AdmissionSkeleton />}>
      <AdmissionHero />
      <ProcedureList />
      <SchoolVisit />
    </Suspense>
  );
}
