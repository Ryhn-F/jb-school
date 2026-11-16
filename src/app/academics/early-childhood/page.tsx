import { Suspense } from "react";
import type { Metadata } from "next";
import { LevelHero } from "@/components/academics/LevelHero";
import { LevelProfile } from "@/components/academics/LevelProfile";
import { LevelCurriculum } from "@/components/academics/LevelCurriculum";
import { LevelActivities } from "@/components/academics/LevelActivities";
import { LevelPageSkeleton } from "@/components/academics/LevelPageSkeleton";
import { EARLY_CHILDHOOD_PAGE as content } from "@/lib/level-pages";

export const metadata: Metadata = {
  title: "Early Childhood - JB School, Bali",
  description:
    "Playgroup and Kindergarten at JB School Bali: a first step to learning and discovering, blending the Indonesian National Curriculum with English and Mandarin taught by native speakers.",
};

export default function EarlyChildhoodPage() {
  return (
    <Suspense fallback={<LevelPageSkeleton />}>
      <LevelHero hero={content.hero} />
      {content.profile && <LevelProfile profile={content.profile} />}
      <LevelCurriculum curriculum={content.curriculum} />
      <LevelActivities activities={content.activities} />
    </Suspense>
  );
}
