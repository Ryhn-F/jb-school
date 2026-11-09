import { Suspense } from "react";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { HeroBanner } from "@/components/home/HeroBanner";
import { AcademicPillars } from "@/components/home/AcademicPillars";
import { EmpoweringBanner } from "@/components/home/EmpoweringBanner";
import { StatsBanner } from "@/components/home/StatsBanner";
import { AdmissionCallout } from "@/components/home/AdmissionCallout";
import { HomeSkeleton } from "@/components/home/HomeSkeleton";

export default function Home() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HeroBanner />
      <AcademicPillars />
      <EmpoweringBanner />
      <StatsBanner />
      <AdmissionCallout />
      <PartnerLogos />
    </Suspense>
  );
}
