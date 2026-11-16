import { Suspense } from "react";
import type { Metadata } from "next";
import { LevelHero } from "@/components/academics/LevelHero";
import { LevelCurriculum } from "@/components/academics/LevelCurriculum";
import { LevelActivities } from "@/components/academics/LevelActivities";
import { LevelPageSkeleton } from "@/components/academics/LevelPageSkeleton";
import { JB_COLLEGE_PAGE as content } from "@/lib/level-pages";

export const metadata: Metadata = {
  title: "JB College - JB School, Bali",
  description:
    "JB College by Yayasan Jembatan Budaya: Diploma (D2) and Bachelor's (S1) programs in Mandarin language and culture, preparing future-ready global professionals.",
};

export default function JbCollegePage() {
  return (
    <Suspense fallback={<LevelPageSkeleton />}>
      <LevelHero hero={content.hero} />
      <LevelCurriculum curriculum={content.curriculum} />
      <LevelActivities activities={content.activities} layout="cards" />
    </Suspense>
  );
}
