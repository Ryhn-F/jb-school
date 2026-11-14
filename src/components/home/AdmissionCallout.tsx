import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { tokens } from "@/styles/tokens";

interface AdmissionPillLink {
  label: string;
  href: string;
}

// Row-major order matches the Figma 2x2 grid.
const ADMISSION_LINKS: AdmissionPillLink[] = [
  { label: "EARLY CHILDHOOD", href: "/admission/" },
  { label: "JUNIOR HIGH SCHOOL", href: "/admission/" },
  { label: "PRIMARY SCHOOL", href: "/admission/" },
  { label: "SENIOR HIGH SCHOOL", href: "/admission/" },
];

export function AdmissionCallout() {
  return (
    <section
      id="admission"
      className="relative w-full overflow-hidden bg-jb-coral text-white lg:min-h-[31.7vw]"
    >
      {/* Brick panel with the students cutout; on desktop it fills the left 46% like the Figma frame */}
      <div className="relative mx-auto aspect-[497/343] w-full max-w-md overflow-hidden rounded-r-[2.5rem] bg-jb-brick lg:absolute lg:inset-y-0 lg:left-0 lg:mx-0 lg:aspect-auto lg:w-[46%] lg:max-w-none lg:rounded-tr-[1.6rem] lg:rounded-br-[2.9rem]">
        <div className="absolute bottom-0 left-[5%] top-[4%] w-[68%]">
          <Image
            src={tokens.assets.home.admissionStudents}
            alt="JB School high-achieving students holding trophies"
            fill
            sizes="(min-width: 1024px) 32vw, 300px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:ml-[50%] lg:min-h-[31.7vw] flex flex-col justify-center py-10 lg:py-12 space-y-6">
          <div>
            <span className="block text-xl lg:text-3xl xl:text-4xl font-normal uppercase tracking-[0.1em]">
              ADMISSION
            </span>
            <p className="text-xl lg:text-3xl xl:text-4xl font-normal tracking-[0.09em]">
              Are you ready to
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              unleash your potential
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-xl lg:text-3xl xl:text-4xl font-normal tracking-[0.09em]">
                and{" "}
              </span>
              conquer your future?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 max-w-xl">
            {ADMISSION_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between rounded-full border-[3px] border-jb-surface px-4 py-1.5 text-xs lg:text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:bg-white hover:text-jb-brick"
              >
                <span>{link.label}</span>
                <FiChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
