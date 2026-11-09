import { Skeleton } from "@/components/ui/skeleton";

export function ContactSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Contact Us">
      {/* TitleHero */}
      <Skeleton className="w-full aspect-[810/275] min-h-[240px] rounded-none" />

      {/* ContactMap */}
      <section className="pt-10 lg:pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto h-7 w-64" />
          <Skeleton className="mt-6 aspect-[4/3] w-full rounded-none sm:aspect-[684/282] lg:mt-8" />
        </div>
      </section>

      {/* ContactInfoCard */}
      <section className="py-10 lg:pt-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="mx-auto aspect-[510/332] w-full max-w-4xl rounded-none" />
        </div>
      </section>
    </div>
  );
}
