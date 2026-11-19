import { tokens } from "@/styles/tokens";
import { PhotoGallery, type GalleryPhoto } from "@/components/shared/PhotoGallery";

// Order follows the Figma "6.News" activities grid (row by row).
const ACTIVITIES: GalleryPhoto[] = [
  "Students and teachers posing on stage at the Run & Raise event",
  "Students dancing on stage at a school performance",
  "Students starting a running race at Sports Day",
  "Young students dancing in traditional costume on a red stage",
  "Students performing a dance in armour costumes",
  "Dragon dance and costumed performers at the Anniversary show",
  "Student playing a melodica at the Chinese New Year celebration",
  "Lion dance parade on the street during Chinese New Year",
].map((alt, i) => ({ src: tokens.assets.news.activities[i], alt }));

/** Also rendered invisibly by NewsSkeleton so its placeholder matches the paragraph height */
export const ACTIVITIES_INTRO =
  "Every year, the JB School campus comes alive with a vibrant tapestry of traditions, from the fierce but friendly rivalries of the JB Cup, Sports Day, and House Battles to our grand Anniversary and Chinese New Year celebrations. These highly anticipated annual milestones are more than just events; they are cherished moments where our entire school community unites to build lifelong memories, celebrate diverse talents, and ignite our school spirit.";

/** Figma sizes are px in a 1080px frame: mobile sizes are vw, desktop sizes are cqw of the section */
export function NewsActivities() {
  return (
    <section
      className="@container bg-white pt-[3.1vw] pb-[1.9vw] font-sans text-black lg:pt-[4.4cqw] lg:pb-[1.9cqw]"
      aria-labelledby="news-activities-title"
    >
      <div className="pr-[6.2vw] pl-[6.7vw] lg:px-[6.7%]">
        <h2
          id="news-activities-title"
          className="text-center text-[max(20px,2.65vw)] leading-[1.4] font-bold tracking-[0.1em] lg:text-[2.6cqw]"
        >
          ACTIVITIES
        </h2>
        <p className="mt-[1.8vw] text-justify text-[max(13px,1.57vw)] leading-[1.41] tracking-[0.1em] lg:mt-[1.67cqw] lg:text-[1.48cqw] lg:leading-[1.36]">
          {ACTIVITIES_INTRO}
        </p>
      </div>

      <div className="pr-[6vw] pl-[6.6vw] lg:pr-[5.8%] lg:pl-[5.1%]">
        <PhotoGallery
          photos={ACTIVITIES}
          label="Activity photos"
          // Mobile frame shows 6 photos in 3 columns: it drops photos 2 and 8
          listClassName="mt-[4.7vw] grid grid-cols-3 gap-x-[3.7vw] gap-y-[2.7vw] max-lg:[&>li:nth-child(2)]:hidden max-lg:[&>li:nth-child(8)]:hidden lg:mt-[2.7cqw] lg:grid-cols-4 lg:gap-x-[2.9cqw] lg:gap-y-[2.1cqw]"
          tileClassName="rounded-[7.3%] lg:rounded-[11%]"
          sizes="(min-width: 1024px) 25vw, 30vw"
        />
      </div>
    </section>
  );
}
