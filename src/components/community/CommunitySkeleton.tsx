import { Skeleton } from "@/components/ui/skeleton";

function GallerySkeleton() {
  return (
    <section className="space-y-3 px-[4.7vw] pt-[2.9vw] pb-[0.5vw] lg:px-[4.4%] lg:pt-[3vw] lg:pb-4">
      <Skeleton className="h-7 w-[min(18rem,70%)]" />
      <Skeleton className="h-20 w-full" />
      <div className="grid grid-cols-2 gap-x-[4.4vw] gap-y-[4.2vw] pt-3 lg:grid-cols-3 lg:gap-x-[2.96vw] lg:gap-y-[2.7vw]">
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
      <Skeleton className="aspect-[1080/469] w-full rounded-none lg:aspect-[1080/335] lg:min-h-[200px]" />
      <GallerySkeleton />
      <GallerySkeleton />
      <section className="px-[6.4vw] pt-[2.3vw] pb-[3.5vw] lg:px-[6.5%] lg:pt-6 lg:pb-12">
        <Skeleton className="mx-auto h-7 w-[min(20rem,85%)]" />
        <Skeleton className="mt-6 aspect-video w-full" />
      </section>
    </div>
  );
}
