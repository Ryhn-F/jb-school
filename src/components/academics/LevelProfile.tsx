import Image from "next/image";
import type { CSSProperties } from "react";
import type { LevelPageContent } from "@/lib/level-pages";

/** Figma level pages are 1080px wide; layout numbers in the content are Figma px */
const FIGMA_WIDTH = 1080;
/** profile.png is the band's left 480px: white wave, Academic Blob and principal cutout */
const VISUAL_WIDTH = 480;
/** Rendered height of the 20px Open Sans "OUR PROFILE" line */
const TITLE_HEIGHT = 27;

export function LevelProfile({ profile }: { profile: NonNullable<LevelPageContent["profile"]> }) {
  const { principal, layout } = profile;
  const vw = (px: number) => `${(px / FIGMA_WIDTH) * 100}vw`;
  // Text sizes resolve against the section (@container), so they track content width, not the scrollbar-inclusive viewport
  const cq = (px: number) => `${(px / FIGMA_WIDTH) * 100}cqw`;
  const pct = (px: number) => `${(px / FIGMA_WIDTH) * 100}%`;
  const cqw = (px: number) => `${(px / VISUAL_WIDTH) * 100}cqw`;

  const vars = {
    "--band-h": vw(layout.height),
    "--visual-w": pct(VISUAL_WIDTH),
    "--visual-aspect": `${VISUAL_WIDTH} / ${layout.height}`,
    "--text-l": pct(layout.textLeft),
    "--text-r": pct(FIGMA_WIDTH - layout.textLeft - layout.textWidth),
    "--title-t": cq(layout.titleTop),
    "--body-t": cq(layout.bodyTop - layout.titleTop - TITLE_HEIGHT),
    "--body-size": cq(layout.bodySize),
    "--body-lh": String(layout.bodyLineHeight / layout.bodySize),
  } as CSSProperties;

  return (
    <section
      className="@container relative w-full overflow-hidden bg-jb-blue lg:min-h-(--band-h)"
      style={vars}
      aria-labelledby="level-profile-title"
    >
      {/* Bleeds 1px past the band (clipped by overflow-hidden) so sub-pixel rounding never shows a hairline */}
      <div className="@container relative aspect-(--visual-aspect) w-full sm:w-2/3 lg:absolute lg:-inset-y-px lg:left-0 lg:aspect-auto lg:w-(--visual-w)">
        <Image
          src={profile.image}
          alt={`${principal.name}, ${principal.role}`}
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 640px) 67vw, 100vw"
          className="object-cover object-left-top"
        />
        <div
          className="absolute left-0 text-center font-sans leading-[1.36] tracking-[0.1em] text-black"
          style={{
            top: `${(layout.nameTop / layout.height) * 100}%`,
            width: `${((layout.nameCenter * 2) / VISUAL_WIDTH) * 100}%`,
          }}
        >
          <p style={{ fontSize: cqw(layout.nameSize) }}>{principal.name}</p>
          <p className="font-bold" style={{ fontSize: cqw(layout.roleSize) }}>
            {principal.role}
          </p>
        </div>
      </div>

      <div className="px-4 py-10 text-white sm:px-6 lg:pt-(--title-t) lg:pr-(--text-r) lg:pb-[3cqw] lg:pl-(--text-l)">
        <h2
          id="level-profile-title"
          className="text-center font-sans text-xl font-bold tracking-[0.1em] lg:text-[1.85cqw]"
        >
          OUR PROFILE
        </h2>
        <p className="mt-4 text-justify font-sans text-sm leading-[1.42] tracking-[0.1em] lg:mt-(--body-t) lg:text-(length:--body-size) lg:leading-(--body-lh)">
          {profile.body}
        </p>

        {profile.ageGroups && (
          <ul className="mt-6 font-sans text-base leading-[1.8] tracking-[0.1em] lg:mt-[2.7cqw] lg:text-[2.13cqw]">
            {profile.ageGroups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
