import { Skeleton } from "@/components/ui/skeleton";
import { ACTIVITIES_INTRO } from "@/components/news/NewsActivities";

/** Mirrors the NewsGrid card grid; also used as its Suspense fallback */
export function NewsGridSkeleton() {
  return (
    <section className="pt-[1.5vw] pr-[6vw] pb-[2.8vw] pl-[6.6vw] lg:px-[7.4%] lg:pt-[2vw] lg:pb-[5.6vw]">
      <Skeleton className="mx-auto h-[3.7vw] w-[35vw] lg:h-8 lg:w-72" />
      <div className="mt-[1.9vw] grid grid-cols-3 gap-x-[3.2vw] gap-y-[3vw] max-lg:[&>*:nth-child(n+10)]:hidden lg:mt-[2.9vw] lg:grid-cols-4 lg:gap-x-[2.5vw] lg:gap-y-[2.3vw]">
        {Array.from({ length: 12 }, (_, i) => (
          <Skeleton key={i} className="aspect-[210/312] w-full rounded-[9.5%/6.4%]" />
        ))}
      </div>
      <Skeleton className="mx-auto mt-[3.7vw] h-[max(32px,4.2vw)] w-[max(140px,16.5vw)] lg:mt-[3vw] lg:h-11 lg:w-44" />
    </section>
  );
}

/** Mirrors NewsHero, NewsActivities and NewsGrid (Figma 1080px frame) */
export function NewsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading News">
      <Skeleton className="aspect-[1080/469] w-full rounded-none lg:aspect-[1080/334] lg:min-h-[200px]" />

      <section className="pt-[3.1vw] pr-[6vw] pb-[1.9vw] pl-[6.6vw] lg:px-[5.1%] lg:pt-[4.4vw] lg:pb-[1.9vw]">
        <Skeleton className="mx-auto h-[3.7vw] w-[16.5vw] lg:h-8 lg:w-48" />
        <Skeleton className="mt-[1.8vw] w-full lg:mt-4 lg:h-24">
          {/* Invisible copy of the paragraph: keeps its height in step with the real line wraps */}
          <p
            aria-hidden="true"
            className="invisible pr-[0.2vw] pl-[0.1vw] font-sans text-[1.57vw] leading-[1.41] tracking-[0.1em] lg:hidden"
          >
            {ACTIVITIES_INTRO}
          </p>
        </Skeleton>
        <div className="mt-[4.7vw] grid grid-cols-3 gap-x-[3.7vw] gap-y-[2.7vw] max-lg:[&>*:nth-child(n+7)]:hidden lg:mt-[2.7vw] lg:grid-cols-4 lg:gap-x-[2.9vw] lg:gap-y-[2.1vw]">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-[7.3%] lg:rounded-[11%]" />
          ))}
        </div>
      </section>

      <NewsGridSkeleton />
    </div>
  );
}
