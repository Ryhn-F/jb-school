import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors the NewsGrid card grid; also used as its Suspense fallback */
export function NewsGridSkeleton() {
  return (
    <section className="px-4 pt-8 pb-12 sm:px-6 lg:px-[7.4%] lg:pt-[2vw] lg:pb-[5.6vw]">
      <Skeleton className="mx-auto h-8 w-72" />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[2.9vw] lg:grid-cols-4 lg:gap-x-[2.5vw] lg:gap-y-[2.3vw]">
        {Array.from({ length: 12 }, (_, i) => (
          <Skeleton key={i} className="aspect-[210/312] w-full rounded-[9.5%/6.4%]" />
        ))}
      </div>
      <Skeleton className="mx-auto mt-8 h-11 w-44 lg:mt-[3vw]" />
    </section>
  );
}

/** Mirrors NewsHero, NewsActivities and NewsGrid (Figma 1080px frame) */
export function NewsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading News">
      <Skeleton className="aspect-[1080/334] min-h-[200px] w-full rounded-none" />

      <section className="px-4 pt-8 pb-6 sm:px-6 lg:px-[5.1%] lg:pt-[4.4vw] lg:pb-[1.9vw]">
        <Skeleton className="mx-auto h-8 w-48" />
        <Skeleton className="mt-4 h-24 w-full" />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-[2.7vw] lg:gap-x-[2.9vw] lg:gap-y-[2.1vw]">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-[11%]" />
          ))}
        </div>
      </section>

      <NewsGridSkeleton />
    </div>
  );
}
