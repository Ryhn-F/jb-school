import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { TitleHero } from "@/components/shared/TitleHero";
import { tokens } from "@/styles/tokens";
import { FacilityGrid } from "@/components/facilities/FacilityGrid";
import { FacilitiesSkeleton } from "@/components/facilities/FacilitiesSkeleton";

export const metadata: Metadata = {
  title: "Facilities - JB School, Bali",
  description:
    "School facilities at JB School Bali: basketball court, swimming pool, sport hall, music room, biology laboratory, cafeteria, classrooms, futsal and volleyball fields.",
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<FacilitiesSkeleton />}>
          <TitleHero
            title="FACILITIES"
            image={tokens.assets.facilities.hero}
            alt="JB School main building"
          />
          <FacilityGrid />
          <PartnerLogos />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
