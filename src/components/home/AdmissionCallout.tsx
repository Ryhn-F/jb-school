import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { tokens } from "@/styles/tokens";

interface AdmissionPillLink {
  label: string;
  href: string;
}

const ADMISSION_LINKS: AdmissionPillLink[] = [
  { label: "EARLY CHILDHOOD", href: "/admission/early-childhood" },
  { label: "JUNIOR HIGH SCHOOL", href: "/admission/junior-high" },
  { label: "PRIMARY SCHOOL", href: "/admission/primary" },
  { label: "SENIOR HIGH SCHOOL", href: "/admission/senior-high" },
];

export function AdmissionCallout() {
  return (
    <section id="admission" className="relative w-full bg-jb-coral text-white overflow-hidden py-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[300px] lg:min-h-[360px]">
          {/* Left Student Cutout with Organic Backdrop */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-start self-end">
            <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 lg:h-[340px]">
              <Image
                src={tokens.assets.images.admissionBanner}
                alt="JB School High-Achieving Students"
                fill
                priority
                className="object-contain object-bottom lg:object-left-bottom"
              />
            </div>
          </div>

          {/* Right Text Content & 2x2 Pill Buttons */}
          <div className="lg:col-span-7 space-y-6 lg:py-10">
            <div className="space-y-1">
              <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
                ADMISSION
              </span>
              <p className="text-xl sm:text-2xl font-normal text-white">
                Are you ready to
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                unleash your potential
              </h3>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                and conquer your future?
              </h3>
            </div>

            {/* 2x2 Grid of Admission Level Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg pt-1">
              {ADMISSION_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-jb-brick transition-all duration-200 text-xs font-bold tracking-wider uppercase group"
                >
                  <span>{link.label}</span>
                  <FiChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
