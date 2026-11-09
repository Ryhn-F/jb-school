import { Suspense } from "react";
import type { Metadata } from "next";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { AcademicsHero } from "@/components/academics/AcademicsHero";
import { AcademicLevelsGrid } from "@/components/academics/AcademicLevelsGrid";
import { AcademicsSkeleton } from "@/components/academics/AcademicsSkeleton";

export const metadata: Metadata = {
  title: "Academics - JB School, Bali",
  description:
    "Early Childhood, Primary, Junior High and Senior High School at JB School Bali: building knowledge and shaping character through cooperation, communication and character.",
};

export default function AcademicsPage() {
  return (
    <Suspense fallback={<AcademicsSkeleton />}>
      <AcademicsHero />
      <AcademicLevelsGrid />
      <PartnerLogos />
    </Suspense>
  );
}
