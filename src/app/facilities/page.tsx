import { Suspense } from "react";
import type { Metadata } from "next";
import { FacilitiesHero } from "@/components/facilities/FacilitiesHero";
import { FacilityGrid } from "@/components/facilities/FacilityGrid";
import { FacilitiesMap } from "@/components/facilities/FacilitiesMap";
import { FacilitiesSkeleton } from "@/components/facilities/FacilitiesSkeleton";

export const metadata: Metadata = {
  title: "Facilities - JB School, Bali",
  description:
    "School facilities at JB School Bali: basketball court, swimming pool, sport hall, futsal and volleyball fields, music room, biology laboratory, classrooms and cafeteria.",
};

export default function FacilitiesPage() {
  return (
    <Suspense fallback={<FacilitiesSkeleton />}>
      <FacilitiesHero />
      <FacilityGrid />
      <FacilitiesMap />
    </Suspense>
  );
}
