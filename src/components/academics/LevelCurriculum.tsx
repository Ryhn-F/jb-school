import { cn } from "@/lib/utils";
import type { LevelPageContent, TextRun } from "@/lib/level-pages";

function Runs({ runs }: { runs: TextRun[] }) {
  return runs.map((run, i) =>
    run.bold ? <strong key={i}>{run.text}</strong> : <span key={i}>{run.text}</span>,
  );
}

/** Rich body copy; Figma sizes are px in a 1080px frame, so desktop sizes are in cqw of the section */
export function LevelCurriculum({ curriculum }: { curriculum: LevelPageContent["curriculum"] }) {
  return (
    <section className="@container bg-white pt-8 lg:pt-[4.4vw]" aria-labelledby="level-curriculum-title">
      <div className="px-4 font-sans text-black sm:px-6 lg:px-[6.3%]">
        <h2
          id="level-curriculum-title"
          className="text-center text-xl font-bold tracking-[0.1em] lg:text-[1.85cqw]"
        >
          {curriculum.title}
        </h2>
        <div className="mt-4 text-justify text-sm leading-[1.375] tracking-[0.1em] lg:mt-[1.67cqw] lg:text-[1.48cqw]">
          {curriculum.blocks.map((block, i) => {
            const spacing = block.spaced && "mt-[1lh]";
            return block.type === "p" ? (
              <p key={i} className={cn(spacing)}>
                <Runs runs={block.runs} />
              </p>
            ) : (
              <ul key={i} className={cn("list-disc pl-[1.6em]", spacing)}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Runs runs={item} />
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}
