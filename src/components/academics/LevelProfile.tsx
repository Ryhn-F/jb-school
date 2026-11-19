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
    "--name-top": `${(layout.nameTop / layout.height) * 100}%`,
    "--name-w": `${((layout.nameCenter * 2) / VISUAL_WIDTH) * 100}%`,
    // Negative margin % resolves against the visual's width, so this lands the name at nameTop on the image
    "--name-pull": `${(-(layout.height - layout.nameTop) / VISUAL_WIDTH) * 100}%`,
  } as CSSProperties;

  return (
    <section
      className="@container relative w-full overflow-hidden bg-jb-blue lg:min-h-(--band-h)"
      style={vars}
      aria-labelledby="level-profile-title"
    >
      {/* Mobile floats the visual so the body wraps beside it, then runs full width below (Figma keeps both columns) */}
      {/* Bleeds 1px past the band (clipped by overflow-hidden) so sub-pixel rounding never shows a hairline */}
      <div className="@container relative float-left mr-[3.3vw] w-[49.5%] lg:absolute lg:-inset-y-px lg:left-0 lg:float-none lg:mr-0 lg:w-(--visual-w)">
        <div className="relative aspect-(--visual-aspect) lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src={profile.image}
            alt={`${principal.name}, ${principal.role}`}
            fill
            sizes="(min-width: 1024px) 45vw, 50vw"
            className="object-cover object-left-top"
          />
        </div>
        {/* Mobile: in flow, pulled up onto the image's white foot so a wrapped name grows the float instead of overlapping;
            full visual width there so any overhang reads as the foot continuing */}
        <div className="relative mt-(--name-pull) w-full bg-white text-balance lg:w-(--name-w) text-center font-sans leading-[1.36] tracking-[0.1em] text-black lg:absolute lg:top-(--name-top) lg:left-0 lg:mt-0 lg:bg-transparent">
          <p style={{ fontSize: cqw(layout.nameSize) }}>{principal.name}</p>
          <p className="font-bold" style={{ fontSize: cqw(layout.roleSize) }}>
            {principal.role}
          </p>
        </div>
      </div>

      <div className="px-[6.2vw] pt-[3.4vw] pb-[4.4vw] text-white lg:pt-(--title-t) lg:pr-(--text-r) lg:pb-[3cqw] lg:pl-(--text-l)">
        <h2
          id="level-profile-title"
          className="text-center font-sans text-[2.14vw] leading-[1.4] font-bold tracking-[0.1em] lg:text-[1.85cqw]"
        >
          OUR PROFILE
        </h2>
        <p className="mt-[1vw] text-justify font-sans text-[1.57vw] leading-[1.41] tracking-[0.1em] hyphens-auto lg:mt-(--body-t) lg:text-(length:--body-size) lg:leading-(--body-lh) lg:hyphens-manual">
          {profile.body}
        </p>

        {profile.ageGroups && (
          <ul className="mt-[1.7vw] font-sans text-[1.89vw] leading-[1.7] tracking-[0.1em] lg:mt-[2.7cqw] lg:text-[2.13cqw] lg:leading-[1.8]">
            {profile.ageGroups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
