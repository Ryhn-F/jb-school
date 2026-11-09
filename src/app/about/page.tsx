import { Suspense } from "react";
import type { Metadata } from "next";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { AboutHero } from "@/components/about/AboutHero";
import { OurHistory } from "@/components/about/OurHistory";
import { DirectorMessage } from "@/components/about/DirectorMessage";
import { VisionMission } from "@/components/about/VisionMission";
import { AboutSkeleton } from "@/components/about/AboutSkeleton";

export const metadata: Metadata = {
  title: "About Us - JB School, Bali",
  description:
    "The history, director's message, vision and mission of Sekolah Jembatan Budaya (JB School), a National Plus pioneer in Bali since 2004.",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<AboutSkeleton />}>
      <AboutHero />
      <OurHistory />
      <DirectorMessage />
      <VisionMission />
      <PartnerLogos />
    </Suspense>
  );
}
