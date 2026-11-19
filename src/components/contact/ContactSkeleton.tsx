import { Skeleton } from "@/components/ui/skeleton";

export function ContactSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading Contact Us">
      {/* TitleHero */}
      <Skeleton className="w-full aspect-[1080/469] rounded-none lg:aspect-[810/275] lg:min-h-[240px]" />

      {/* ContactMap */}
      <section className="pt-[3vw] lg:pt-6">
        <div className="mx-auto max-w-7xl px-[5.6vw] lg:px-8">
          <Skeleton className="mx-auto h-[3.98vw] w-[34vw] lg:h-7 lg:w-64" />
          <Skeleton className="mt-[2.8vw] aspect-video w-full rounded-none lg:mt-8 lg:aspect-[684/282]" />
        </div>
      </section>

      {/* ContactInfoCard */}
      <section className="py-[4.6vw] lg:pt-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-[5.6vw] lg:px-8">
          {/* Mobile: same grid and font-size formulas as the card, so its height tracks the real text column */}
          <div className="mx-auto grid max-w-4xl grid-cols-[1fr_36%] items-center gap-[3%] bg-jb-surface py-[3%] pr-[3.5%] lg:hidden">
            <div className="flex flex-col items-center pl-[2%]">
              <Skeleton className="h-[1.5em] w-[70%] text-[2.8vw]" />
              <Skeleton className="mt-[1.85vw] h-0.5 w-[max(24px,3.3vw)] rounded-none" />
              <Skeleton className="mt-[2.2vw] h-[1.5em] w-[85%] text-[2vw]" />
              <div className="mt-[2.2vw] flex w-full flex-col items-center space-y-[0.6vw] text-[1.57vw]">
                <Skeleton className="h-[1.375em] w-[30%]" />
                <Skeleton className="h-[2.75em] w-[90%]" />
                {/* Phone line wraps to two lines below ~410px */}
                <Skeleton className="h-[2.75em] w-[80%] min-[410px]:h-[1.375em]" />
                <Skeleton className="h-[1.375em] w-[70%]" />
                <Skeleton className="h-[1.375em] w-[70%]" />
                <Skeleton className="h-[1.375em] w-[80%]" />
              </div>
            </div>
            <Skeleton className="aspect-[212/296] w-full rounded-none" />
          </div>
          <Skeleton className="mx-auto hidden aspect-[510/332] w-full max-w-4xl rounded-none lg:block" />
        </div>
      </section>
    </div>
  );
}
