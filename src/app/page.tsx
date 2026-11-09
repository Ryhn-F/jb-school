import { Suspense } from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { HeroBanner } from "@/components/home/HeroBanner";
import { AcademicPillars } from "@/components/home/AcademicPillars";
import { EmpoweringBanner } from "@/components/home/EmpoweringBanner";
import { StatsBanner } from "@/components/home/StatsBanner";
import { AdmissionCallout } from "@/components/home/AdmissionCallout";
import { HomeSkeleton } from "@/components/home/HomeSkeleton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<HomeSkeleton />}>
          <HeroBanner />
          <AcademicPillars />
          <EmpoweringBanner />
          <StatsBanner />
          <AdmissionCallout />
          <PartnerLogos />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
