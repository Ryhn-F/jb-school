import { Suspense } from "react";
import type { Metadata } from "next";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { TitleHero } from "@/components/shared/TitleHero";
import { ProcedureList } from "@/components/admission/ProcedureList";
import { SchoolVisit } from "@/components/admission/SchoolVisit";
import { AdmissionSkeleton } from "@/components/admission/AdmissionSkeleton";
import { tokens } from "@/styles/tokens";

export const metadata: Metadata = {
  title: "Admission - JB School, Bali",
  description:
    "JB School Bali admission procedure, required registration documents, and how to arrange a school visit.",
};

export default function AdmissionPage() {
  return (
    <Suspense fallback={<AdmissionSkeleton />}>
      <TitleHero
        title="ADMISSION"
        image={tokens.assets.admission.hero}
        alt="JB School student practising Chinese calligraphy"
      />
      <ProcedureList />
      <SchoolVisit />
      <PartnerLogos />
    </Suspense>
  );
}
