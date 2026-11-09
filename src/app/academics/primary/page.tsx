import { Suspense } from "react";
import type { Metadata } from "next";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { LevelHero } from "@/components/academics/LevelHero";
import { LevelProfile } from "@/components/academics/LevelProfile";
import { LevelCurriculum } from "@/components/academics/LevelCurriculum";
import { LevelActivities } from "@/components/academics/LevelActivities";
import { LevelPageSkeleton } from "@/components/academics/LevelPageSkeleton";
import { PRIMARY_SCHOOL_PAGE as content } from "@/lib/level-pages";

export const metadata: Metadata = {
  title: "Primary School - JB School, Bali",
  description:
    "Primary School at JB School Bali: the Indonesian National Curriculum with Cambridge Math and Science in English, plus English and Mandarin taught by native speakers.",
};

export default function PrimarySchoolPage() {
  return (
    <Suspense fallback={<LevelPageSkeleton />}>
      <LevelHero hero={content.hero} />
      <LevelProfile profile={content.profile} justify={content.justifyText} />
      <LevelCurriculum text={content.curriculum} justify={content.justifyText} />
      <LevelActivities activities={content.activities} />
      <PartnerLogos />
    </Suspense>
  );
}
