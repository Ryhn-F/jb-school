import { AcademicCard } from "@/components/shared/AcademicCard";
import { ACADEMIC_LEVELS } from "@/lib/academic-levels";

export function AcademicLevelsGrid() {
  return (
    <section className="bg-white py-10 lg:pt-9 lg:pb-12" aria-labelledby="academics-title">
      <div className="mx-auto max-w-7xl px-4 text-black sm:px-6 lg:px-8">
        <header className="text-center">
          <span className="block font-sans text-sm font-bold tracking-[0.1em] lg:text-lg xl:text-xl">
            ACADEMICS
          </span>
          <h2
            id="academics-title"
            className="mt-2 font-sans text-lg font-bold sm:text-2xl lg:text-3xl"
          >
            COOPERATION, COMMUNICATION, CHARACTER
          </h2>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-[4.7%] md:gap-y-10 lg:mt-12 lg:gap-y-16 xl:gap-y-[76px]">
          {ACADEMIC_LEVELS.map((level) => (
            <AcademicCard key={level.id} level={level} />
          ))}
        </div>

        <blockquote className="mx-auto mt-12 max-w-4xl text-center font-sans text-base leading-normal tracking-[0.01em] lg:mt-16 lg:text-xl xl:text-[23px]">
          &ldquo;True education equips students with the Communication to be
          heard, the Cooperation to work globally, and the Character to lead
          with integrity.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
