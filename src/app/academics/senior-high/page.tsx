import { Suspense } from "react";
import type { Metadata } from "next";
import { LevelHero } from "@/components/academics/LevelHero";
import { LevelProfile } from "@/components/academics/LevelProfile";
import { LevelCurriculum } from "@/components/academics/LevelCurriculum";
import { LevelActivities } from "@/components/academics/LevelActivities";
import { LevelStudyAbroad } from "@/components/academics/LevelStudyAbroad";
import { LevelPageSkeleton } from "@/components/academics/LevelPageSkeleton";
import { SENIOR_HIGH_PAGE as content } from "@/lib/level-pages";

export const metadata: Metadata = {
  title: "Senior High School - JB School, Bali",
  description:
    "Senior High School at JB School Bali: the Indonesian National Curriculum with Oxford AQA Math and Science, plus English and Mandarin taught by native speakers, preparing students for higher education.",
};

export default function SeniorHighPage() {
  return (
    <Suspense fallback={<LevelPageSkeleton />}>
      <LevelHero hero={content.hero} />
      {content.profile && <LevelProfile profile={content.profile} />}
      <LevelCurriculum curriculum={content.curriculum} />
      <LevelActivities activities={content.activities} />
      {content.studyAbroad && <LevelStudyAbroad columns={content.studyAbroad} />}
    </Suspense>
  );
}
