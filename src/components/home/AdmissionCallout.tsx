import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { tokens } from "@/styles/tokens";

interface AdmissionPillLink {
  label: string;
  href: string;
}

// Reading order: one column on mobile, filled column-first into the Figma 2x2 grid on desktop.
const ADMISSION_LINKS: AdmissionPillLink[] = [
  { label: "EARLY CHILDHOOD", href: "/admission/" },
  { label: "PRIMARY SCHOOL", href: "/admission/" },
  { label: "JUNIOR HIGH SCHOOL", href: "/admission/" },
  { label: "SENIOR HIGH SCHOOL", href: "/admission/" },
];

export function AdmissionCallout() {
  return (
    <section
      id="admission"
      className="relative w-full overflow-hidden bg-jb-coral text-white lg:min-h-[31.7vw]"
    >
      {/* Students + brick shape artwork from the Figma mockup. Mobile: 560/1080 = 51.9vw, bottom-anchored; when
          min font sizes make the band taller than the artwork, the gradient extends the brick shape (ends at 527/560 = 94.1%)
          upward. */}
      <div className="absolute inset-y-0 left-0 w-[51.9vw] bg-[linear-gradient(to_right,var(--color-jb-brick)_94.1%,transparent_94.1%)] lg:hidden">
        <Image
          src={tokens.assets.home.admissionCallout}
          alt="JB School high-achieving students holding trophies"
          fill
          sizes="52vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* Desktop: brick panel with the students cutout fills the left 46% like the Figma frame */}
      <div className="hidden overflow-hidden bg-jb-brick lg:absolute lg:inset-y-0 lg:left-0 lg:block lg:w-[46%] lg:rounded-tr-[1.6rem] lg:rounded-br-[2.9rem]">
        <div className="absolute bottom-0 left-[5%] top-[4%] w-[68%]">
          <Image
            src={tokens.assets.home.admissionStudents}
            alt="JB School high-achieving students holding trophies"
            fill
            sizes="32vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="ml-[55vw] pr-[2.5vw] min-h-[43.7vw] lg:ml-[50%] lg:pr-0 lg:min-h-[31.7vw] flex flex-col justify-center py-[3.5vw] lg:py-12 space-y-[2vw] lg:space-y-6">
          <div>
            <span className="block text-[max(13px,2.65vw)]/[1.3] lg:text-3xl xl:text-4xl font-normal uppercase tracking-[0.1em]">
              ADMISSION
            </span>
            <p className="text-[max(13px,2.6vw)]/[1.3] lg:text-3xl xl:text-4xl font-normal tracking-[0.09em]">
              Are you ready to
            </p>
            <h2 className="text-[max(14px,3.4vw)]/[1.15] lg:text-4xl xl:text-5xl font-bold lg:leading-tight">
              unleash your potential
            </h2>
            <p className="text-[max(14px,3.4vw)]/[1.15] lg:text-4xl xl:text-5xl font-bold lg:leading-tight">
              <span className="text-[max(13px,2.6vw)] lg:text-3xl xl:text-4xl font-normal tracking-[0.09em]">
                and{" "}
              </span>
              conquer your future?
            </p>
          </div>

          <div className="grid w-full max-w-[max(34vw,10rem)] grid-cols-1 gap-y-[1.8vw] lg:max-w-xl lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-2.5">
            {ADMISSION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex min-h-[max(24px,3.8vw)] items-center justify-between rounded-full border-[1.5px] lg:border-[3px] border-jb-surface px-[2.4vw] lg:min-h-0 lg:px-4 lg:py-1.5 text-[max(11px,1.63vw)] lg:text-sm font-bold uppercase tracking-normal lg:tracking-wide transition-colors duration-200 hover:bg-white hover:text-jb-brick"
              >
                <span className="whitespace-nowrap lg:whitespace-normal">{link.label}</span>
                <FiChevronRight
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 lg:h-4 lg:w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
