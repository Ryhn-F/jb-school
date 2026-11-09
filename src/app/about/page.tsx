import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<AboutSkeleton />}>
          <AboutHero />
          <OurHistory />
          <DirectorMessage />
          <VisionMission />
          <PartnerLogos />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
