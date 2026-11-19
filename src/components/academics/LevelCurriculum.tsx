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
    <section className="@container bg-white pt-[4.4vw]" aria-labelledby="level-curriculum-title">
      <div className="px-[6.4vw] font-sans text-black lg:px-[6.3%]">
        <h2
          id="level-curriculum-title"
          className="text-center text-[max(17px,2.14vw)] leading-[1.4] font-bold tracking-[0.1em] lg:text-[1.85cqw]"
        >
          {curriculum.title}
        </h2>
        <div className="mt-[1.6vw] text-justify text-[max(13px,1.57vw)] leading-[1.41] tracking-[0.1em] hyphens-auto lg:mt-[1.67cqw] lg:text-[1.48cqw] lg:leading-[1.375] lg:hyphens-manual">
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
