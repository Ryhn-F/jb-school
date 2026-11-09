import { Skeleton } from "@/components/ui/skeleton";

export function NewsSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading News">
      {/* TitleHero */}
      <Skeleton className="w-full aspect-[810/275] min-h-[240px] rounded-none" />

      {/* NewsGrid */}
      <section className="py-10 lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-9 w-72" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-x-[2.8%] lg:gap-y-10">
            {Array.from({ length: 12 }, (_, i) => (
              <Skeleton key={i} className="aspect-[158/237] w-full rounded-[7.6%/5.1%]" />
            ))}
          </div>
          <Skeleton className="mx-auto mt-10 h-12 w-56 lg:mt-16 lg:h-16 lg:w-64" />
        </div>
      </section>
    </div>
  );
}
