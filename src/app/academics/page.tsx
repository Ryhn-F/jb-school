import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AcademicsHero } from "@/components/academics/AcademicsHero";
import { AcademicLevelsGrid } from "@/components/academics/AcademicLevelsGrid";
import { AcademicsSkeleton } from "@/components/academics/AcademicsSkeleton";

export const metadata: Metadata = {
  title: "Academics - JB School, Bali",
  description:
    "Early Childhood, Primary, Junior High and Senior High School at JB School Bali: building knowledge and shaping character through cooperation, communication and character.",
};

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<AcademicsSkeleton />}>
          <AcademicsHero />
          <AcademicLevelsGrid />
          <PartnerLogos />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
