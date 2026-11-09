import { cn } from "@/lib/utils";

export function LevelCurriculum({ text, justify }: { text: string; justify?: boolean }) {
  return (
    <section className="bg-white pt-8 lg:pt-6" aria-labelledby="level-curriculum-title">
      <div className="mx-auto max-w-7xl px-4 text-black sm:px-6 lg:px-8">
        <h2
          id="level-curriculum-title"
          className="text-center font-sans text-xl font-bold tracking-[0.09em] lg:text-2xl xl:text-[28px]"
        >
          OUR CURRICULUM
        </h2>
        <p
          className={cn(
            "mt-4 font-sans text-sm leading-[1.42] tracking-[0.1em] lg:mt-5 lg:text-lg xl:text-xl",
            justify && "text-justify",
          )}
        >
          &ldquo;{text}&rdquo;
        </p>
      </div>
    </section>
  );
}
