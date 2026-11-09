import { Skeleton } from "@/components/ui/skeleton";

export function FacilitiesSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Facilities">
      {/* TitleHero */}
      <Skeleton className="w-full aspect-[810/275] min-h-[240px] rounded-none" />

      {/* FacilityGrid */}
      <section className="py-10 lg:pt-8 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-7 w-56" />
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-[4.2%] lg:mt-10 lg:gap-y-14">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i}>
                <Skeleton className="aspect-square w-full rounded-[8%]" />
                <Skeleton className="mt-3 h-5 w-2/3 lg:mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
