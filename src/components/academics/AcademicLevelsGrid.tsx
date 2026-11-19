import { AcademicCard } from "@/components/shared/AcademicCard";
import { ACADEMIC_LEVELS } from "@/lib/academic-levels";

export function AcademicLevelsGrid() {
  return (
    <section
      className="bg-white pt-[3.2vw] pb-[2.5vw] lg:pt-9 lg:pb-12"
      aria-labelledby="academics-title"
    >
      <div className="mx-auto max-w-7xl px-[6vw] text-black lg:px-8">
        <header className="text-center">
          <span className="block font-sans text-[2.27vw] font-normal tracking-[0.1em] lg:text-lg lg:font-bold xl:text-xl">
            ACADEMICS
          </span>
          <h2
            id="academics-title"
            className="mt-[1vw] font-sans text-[3.44vw] font-bold lg:mt-2 lg:text-3xl"
          >
            COOPERATION, COMMUNICATION, CHARACTER
          </h2>
        </header>

        <div className="@container mt-[3.1vw] grid grid-cols-2 gap-x-[3.9vw] gap-y-[4.1vw] lg:mt-12 lg:gap-x-[4.7%] lg:gap-y-16 xl:gap-y-[76px]">
          {ACADEMIC_LEVELS.map((level) => (
            <AcademicCard key={level.id} level={level} />
          ))}
        </div>

        <blockquote className="mx-auto mt-[4vw] max-w-4xl text-center font-sans text-[1.5vw] leading-normal tracking-[0.01em] lg:mt-16 lg:text-xl xl:text-[23px]">
          &ldquo;True education equips students with the{" "}
          <span className="font-bold">Communication</span> to be heard, the{" "}
          <span className="font-bold">Cooperation</span> to work globally, and{" "}
          the <span className="font-bold">Character</span> to lead with
          integrity.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
