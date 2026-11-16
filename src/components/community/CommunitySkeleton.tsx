import { Skeleton } from "@/components/ui/skeleton";

function GallerySkeleton() {
  return (
    <section className="space-y-3 px-4 pt-8 pb-4 sm:px-6 lg:px-[4.4%] lg:pt-[3vw]">
      <Skeleton className="h-7 w-72" />
      <Skeleton className="h-20 w-full" />
      <div className="grid grid-cols-1 gap-5 pt-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-[2.96vw] lg:gap-y-[2.7vw]">
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} className="aspect-[307/222] w-full rounded-[2px]" />
        ))}
      </div>
    </section>
  );
}

/** Mirrors CommunityHero, both CommunityGallery sections and CommunityTestimonial */
export function CommunitySkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Community">
      <Skeleton className="aspect-[1080/335] min-h-[200px] w-full rounded-none" />
      <GallerySkeleton />
      <GallerySkeleton />
      <section className="px-4 pt-6 pb-12 sm:px-6 lg:px-[6.5%]">
        <Skeleton className="mx-auto h-7 w-80" />
        <Skeleton className="mt-6 aspect-video w-full" />
      </section>
    </div>
  );
}
