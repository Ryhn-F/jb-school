import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<LevelPageSkeleton />}>
          <LevelHero hero={content.hero} />
          <LevelProfile profile={content.profile} justify={content.justifyText} />
          <LevelCurriculum text={content.curriculum} justify={content.justifyText} />
          <LevelActivities activities={content.activities} />
          <PartnerLogos />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
