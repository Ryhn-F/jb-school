import { Skeleton } from "@/components/ui/skeleton";

/** Mirrors FacilitiesHero, FacilityGrid and FacilitiesMap (Figma 1080px frames: mobile in vw, desktop lg:) */
export function FacilitiesSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Facilities">
      <Skeleton className="aspect-[1080/469] w-full rounded-none lg:aspect-[1080/334] lg:min-h-[200px]" />

      <section className="space-y-[2.5vw] px-[6.6vw] pt-[4.9vw] pb-[3.6vw] lg:space-y-6 lg:px-[6.4%] lg:pt-[2.6vw] lg:pb-12">
        <Skeleton className="mx-auto h-[2.9vw] w-[24vw] lg:h-7 lg:w-56" />
        <Skeleton className="h-[13vw] w-full lg:h-24" />
        <div className="grid grid-cols-3 gap-x-[3.5vw] gap-y-[2.3vw] lg:gap-x-[3.6vw] lg:gap-y-[2.4vw]">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i}>
              <Skeleton className="aspect-square w-full rounded-[7.7%]" />
              <Skeleton className="mt-[1.3vw] h-[2vw] w-2/3 lg:mt-3 lg:h-5" />
            </div>
          ))}
        </div>
        <Skeleton className="h-[15vw] w-full lg:h-24" />
        <Skeleton className="mx-auto h-[2.9vw] w-[32vw] lg:h-7 lg:w-64" />
        {/* -mx-[0.6vw]: the real map is 88vw centred on the page, slightly wider than this padded box */}
        <Skeleton className="-mx-[0.6vw] aspect-[950/392] w-[88vw] lg:mx-auto lg:aspect-[908/369] lg:w-[85%]" />
      </section>
    </div>
  );
}
