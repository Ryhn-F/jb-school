import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { LevelPageContent } from "@/lib/level-pages";

/** Figma level pages are 810px wide; layout numbers in the content are Figma px */
const FIGMA_WIDTH = 810;

export function LevelProfile({
  profile,
  justify,
}: {
  profile: LevelPageContent["profile"];
  justify?: boolean;
}) {
  const { principal, stats, layout } = profile;
  const pctOfPage = (px: number) => `${(px / FIGMA_WIDTH) * 100}%`;
  const cqwOfVisual = (px: number) => `${(px / layout.visualWidth) * 100}cqw`;

  const vars = {
    "--band-h": `${(layout.height / FIGMA_WIDTH) * 100}vw`,
    "--visual-w": pctOfPage(layout.visualWidth),
    "--visual-aspect": `${layout.visualWidth} / ${layout.height}`,
    "--text-l": pctOfPage(layout.textLeft),
    "--text-r": pctOfPage(FIGMA_WIDTH - layout.textRight),
  } as CSSProperties;

  return (
    <section
      className="relative w-full bg-jb-blue lg:min-h-(--band-h)"
      style={vars}
      aria-labelledby="level-profile-title"
    >
      {/* White wave blob + principal cutout exported from Figma; name sits on the blob */}
      <div className="@container relative aspect-(--visual-aspect) w-full sm:w-2/3 lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-(--visual-w)">
        <Image
          src={principal.image}
          alt={`${principal.name}, ${principal.role}`}
          fill
          sizes="(min-width: 1024px) 44vw, (min-width: 640px) 67vw, 100vw"
          className="object-cover object-left-top"
        />
        <div
          className="absolute left-0 text-center font-sans leading-[1.38] tracking-[0.09em] text-black"
          style={{
            top: `${(layout.nameTop / layout.height) * 100}%`,
            width: `${((layout.nameCenter * 2) / layout.visualWidth) * 100}%`,
          }}
        >
          <p style={{ fontSize: cqwOfVisual(layout.nameSize) }}>{principal.name}</p>
          <p className="font-bold" style={{ fontSize: cqwOfVisual(layout.roleSize) }}>
            {principal.role}
          </p>
        </div>
      </div>

      <div className="px-4 py-10 text-white sm:px-6 lg:pl-(--text-l) lg:pr-(--text-r) lg:pt-[3.8vw] lg:pb-[4vw]">
        <h2
          id="level-profile-title"
          className="text-center font-sans text-xl font-bold tracking-[0.09em] lg:text-2xl xl:text-3xl"
        >
          OUR PROFILE
        </h2>
        <p
          className={cn(
            "mt-4 font-sans text-sm leading-[1.42] tracking-[0.096em] lg:mt-5 lg:text-base xl:text-xl",
            justify && "text-justify",
          )}
        >
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
