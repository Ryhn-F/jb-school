import { Suspense } from "react";
import type { Metadata } from "next";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { TitleHero } from "@/components/shared/TitleHero";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactSkeleton } from "@/components/contact/ContactSkeleton";
import { tokens } from "@/styles/tokens";

export const metadata: Metadata = {
  title: "Contact Us - JB School, Bali",
  description:
    "Find JB School on Google Maps and contact us: Jalan Raya Kuta No. 1, Badung, Bali. Phone +62 361 752554, WhatsApp 081138816881.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <TitleHero
        title="CONTACT US"
        image={tokens.assets.contact.hero}
        alt="JB School teachers and staff group photo"
      />
      <ContactMap />
      <ContactInfoCard />
      <PartnerLogos />
    </Suspense>
  );
}
