import { Suspense } from "react";
import { HeroBanner } from "@/components/home/HeroBanner";
import { AcademicPillars } from "@/components/home/AcademicPillars";
import { EmpoweringBanner } from "@/components/home/EmpoweringBanner";
import { StatsBanner } from "@/components/home/StatsBanner";
import { AdmissionCallout } from "@/components/home/AdmissionCallout";
import { VideoTour } from "@/components/home/VideoTour";
import { StayConnected } from "@/components/home/StayConnected";
import { HomeSkeleton } from "@/components/home/HomeSkeleton";

export default function Home() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HeroBanner />
      <AcademicPillars />
      <EmpoweringBanner />
      <StatsBanner />
      <AdmissionCallout />
      <VideoTour />
      <StayConnected />
    </Suspense>
  );
}
