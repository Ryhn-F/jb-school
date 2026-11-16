import { Suspense } from "react";
import type { Metadata } from "next";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsActivities } from "@/components/news/NewsActivities";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsGridSkeleton, NewsSkeleton } from "@/components/news/NewsSkeleton";

export const metadata: Metadata = {
  title: "News - JB School, Bali",
  description:
    "News, activities and student achievements at JB School Bali. Follow @jbschool.bali on Instagram for the latest updates.",
};

export default function NewsPage() {
  return (
    <Suspense fallback={<NewsSkeleton />}>
      <NewsHero />
      <NewsActivities />
      {/* Instagram fetch streams in on its own */}
      <Suspense fallback={<NewsGridSkeleton />}>
        <NewsGrid />
      </Suspense>
    </Suspense>
  );
}
