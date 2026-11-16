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

/** Figma sizes are px in a 1080px frame, so desktop sizes are cqw of the section */
export function NewsActivities() {
  return (
    <section
      className="@container bg-white pt-8 pb-6 font-sans text-black lg:pt-[4.4cqw] lg:pb-[1.9cqw]"
      aria-labelledby="news-activities-title"
    >
      <div className="px-4 sm:px-6 lg:px-[6.7%]">
        <h2
          id="news-activities-title"
          className="text-center text-xl font-bold tracking-[0.1em] lg:text-[2.6cqw]"
        >
          ACTIVITIES
        </h2>
        <p className="mt-4 text-justify text-sm leading-[1.36] tracking-[0.1em] lg:mt-[1.67cqw] lg:text-[1.48cqw]">
          Every year, the JB School campus comes alive with a vibrant tapestry
          of traditions, from the fierce but friendly rivalries of the JB Cup,
          Sports Day, and House Battles to our grand Anniversary and Chinese New
          Year celebrations. These highly anticipated annual milestones are more
          than just events; they are cherished moments where our entire school
          community unites to build lifelong memories, celebrate diverse
          talents, and ignite our school spirit.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:pr-[5.8%] lg:pl-[5.1%]">
        <PhotoGallery
          photos={ACTIVITIES}
          label="Activity photos"
          listClassName="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-[2.7cqw] lg:gap-x-[2.9cqw] lg:gap-y-[2.1cqw]"
          tileClassName="rounded-[11%]"
          sizes="(min-width: 640px) 25vw, 50vw"
        />
      </div>
    </section>
  );
}
