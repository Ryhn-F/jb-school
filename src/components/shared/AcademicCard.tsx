import Image from "next/image";
import Link from "next/link";
import type { AcademicLevel } from "@/lib/academic-levels";

/**
 * Square academic level card from the Figma "Academics" page.
 * Text sizes use container-query units (cqw) so the card keeps Figma's proportions at any width.
 */
export function AcademicCard({ level }: { level: AcademicLevel }) {
  return (
    <Link
      href={level.href}
      className="@container group relative block aspect-square w-full overflow-hidden rounded-3xl shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jb-navy"
    >
      <Image
        src={level.image}
        alt={level.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 px-[7%] pb-[6%] text-white">
        <h3 className="font-sans text-[7.5cqw] font-bold leading-[1.13]">{level.title}</h3>
        <p className="mt-[1%] max-w-[85%] font-sans text-[3.45cqw] font-bold leading-[1.3] text-jb-surface">
          &ldquo;{level.description}&rdquo;
        </p>
        <span className="mt-[3.5%] inline-flex h-[10cqw] w-[42.5cqw] items-center justify-center rounded-full border-[3px] border-jb-surface font-sans text-[4.3cqw] font-bold transition-colors duration-200 group-hover:bg-white group-hover:text-neutral-900">
          LEARN MORE
        </span>
      </div>
    </Link>
  );
}
