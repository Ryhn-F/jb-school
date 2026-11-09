import { Suspense } from "react";
import type { Metadata } from "next";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { TitleHero } from "@/components/shared/TitleHero";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsSkeleton } from "@/components/news/NewsSkeleton";
import { tokens } from "@/styles/tokens";

export const metadata: Metadata = {
  title: "News - JB School, Bali",
  description:
    "News, activities and student achievements at JB School Bali. Follow @jbschool.bali on Instagram for the latest updates.",
};

export default function NewsPage() {
  return (
    <Suspense fallback={<NewsSkeleton />}>
      <TitleHero
        title="NEWS"
        image={tokens.assets.news.hero}
        alt="JB School scouts at a camping activity"
      />
      <NewsGrid />
      <PartnerLogos />
    </Suspense>
  );
}
