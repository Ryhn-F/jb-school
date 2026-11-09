import Image from "next/image";
import type { LevelPageContent } from "@/lib/level-pages";

export function LevelProfile({ profile }: { profile: LevelPageContent["profile"] }) {
  const { principal, stats } = profile;

  return (
    <section
      className="relative w-full bg-jb-blue lg:min-h-[54.8vw]"
      aria-labelledby="level-profile-title"
    >
      {/* White wave blob + principal cutout (Figma 355x444 of 810); name sits on the blob */}
      <div className="@container relative aspect-[355/444] w-full sm:w-2/3 lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[43.8%]">
        <Image
          src={principal.image}
          alt={`${principal.name}, ${principal.role}`}
          fill
          sizes="(min-width: 1024px) 44vw, (min-width: 640px) 67vw, 100vw"
          className="object-cover object-left-top"
        />
        <div className="absolute inset-x-0 top-[85%] w-[84.5%] text-center font-sans text-[5.3cqw] leading-[1.38] tracking-[0.09em] text-black">
          <p>{principal.name}</p>
          <p className="font-bold">{principal.role}</p>
        </div>
      </div>

      <div className="px-4 py-10 text-white sm:px-6 lg:pl-[47.5%] lg:pr-[4.7%] lg:pt-[3.8vw] lg:pb-[4vw]">
        <h2
          id="level-profile-title"
          className="text-center font-sans text-xl font-bold tracking-[0.09em] lg:text-2xl xl:text-3xl"
        >
          OUR PROFILE
        </h2>
        <p className="mt-4 font-sans text-sm leading-[1.42] tracking-[0.096em] lg:mt-5 lg:text-base xl:text-xl">
          &ldquo;{profile.body}&rdquo;
        </p>

        {stats && (
          <dl className="mt-6 grid grid-cols-2 gap-x-[8%] gap-y-2 lg:mt-[1.8vw]">
            {stats.map((stat) => (
              <div key={stat.label} className="font-sans">
                <dt className="text-sm tracking-[0.094em] lg:text-2xl xl:text-[30px]">
                  {stat.label}
                </dt>
                <dd className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold leading-none sm:text-5xl lg:text-6xl xl:text-[80px]">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-[0.11em] lg:text-base xl:text-xl">
                    {stat.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
