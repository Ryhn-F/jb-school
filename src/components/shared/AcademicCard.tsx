import Image from "next/image";
import Link from "next/link";
import type { AcademicLevel } from "@/lib/academic-levels";

/**
 * Square academic level card from the Figma "Academics" page.
 * Text sizes use container-query units (cqw) so the card keeps Figma's proportions at any width.
 * Below lg the text gets readable floors and sits in flow: the card is square (min-height from the
 * parent grid's @container width) and grows if the copy needs more room, keeping rows even.
 */
export function AcademicCard({ level }: { level: AcademicLevel }) {
  return (
    <Link
      href={level.href}
      className="@container group relative flex min-h-[calc((100cqw-3.9vw)/2)] w-full flex-col justify-end rounded-[2vw] shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jb-navy lg:block lg:aspect-square lg:min-h-0 lg:overflow-hidden lg:rounded-3xl"
    >
      <Image
        src={level.image}
        alt={level.alt}
        fill
        sizes="50vw"
        className="rounded-[inherit] object-cover"
      />

      <div className="relative px-[7%] pt-[6%] pb-[6%] text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.45)] lg:absolute lg:inset-x-0 lg:bottom-0 lg:pt-0 lg:[text-shadow:none]">
        <h3 className="font-sans text-[max(13px,7.5cqw)] font-bold leading-[1.13] lg:text-[7.5cqw]">{level.title}</h3>
        <p className="mt-[1%] font-sans text-[max(11px,3.45cqw)] font-bold leading-[1.3] text-jb-surface lg:max-w-[85%] lg:text-[3.45cqw]">
          &ldquo;{level.description}&rdquo;
        </p>
        <span className="mt-[3.5%] inline-flex h-[max(24px,10cqw)] w-[max(88px,42.5cqw)] items-center justify-center rounded-full border-2 border-jb-surface font-sans text-[max(11px,4.3cqw)] font-bold transition-colors duration-200 group-hover:bg-white group-hover:text-neutral-900 lg:h-[10cqw] lg:w-[42.5cqw] lg:border-[3px] lg:text-[4.3cqw]">
          LEARN MORE
        </span>
      </div>
    </Link>
  );
}
