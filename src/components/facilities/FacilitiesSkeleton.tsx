import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors FacilitiesHero, FacilityGrid and FacilitiesMap (Figma 1080px frame) */
export function FacilitiesSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Facilities">
      <Skeleton className="aspect-[1080/334] min-h-[200px] w-full rounded-none" />

      <section className="space-y-6 px-4 pt-8 pb-12 sm:px-6 lg:px-[6.4%] lg:pt-[2.6vw]">
        <Skeleton className="mx-auto h-7 w-56" />
        <Skeleton className="h-24 w-full" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:gap-x-[3.6vw] lg:gap-y-[2.4vw]">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i}>
              <Skeleton className="aspect-square w-full rounded-[7.7%]" />
              <Skeleton className="mt-3 h-5 w-2/3" />
            </div>
          ))}
        </div>
        <Skeleton className="h-24 w-full" />
        <Skeleton className="mx-auto h-7 w-64" />
        <Skeleton className="mx-auto aspect-[908/369] w-full lg:w-[85%]" />
      </section>
    </div>
  );
}
