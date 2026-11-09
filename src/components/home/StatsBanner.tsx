import Image from "next/image";
import { tokens } from "@/styles/tokens";
import { CountUp } from "@/components/shared/CountUp";

interface StatBadge {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
}

const STATS_DATA: StatBadge[] = [
  {
    icon: tokens.assets.stats.established,
    value: 2004,
    label: "ESTABLISHED",
  },
  {
    icon: tokens.assets.stats.students,
    value: 2200,
    suffix: "+",
    label: "ACTIVE STUDENTS",
  },
  {
    icon: tokens.assets.stats.graduates,
    value: 1900,
    suffix: "+",
    label: "GRADUATES",
  },
  {
    icon: tokens.assets.stats.studyAbroad,
    value: 40,
    suffix: "%",
    label: "STUDY ABROAD",
  },
];

export function StatsBanner() {
  return (
    <section
      className="py-14 sm:py-20 bg-white"
      aria-label="JB School Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-start justify-items-center">
          {STATS_DATA.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center space-y-3 group"
            >
              {/* Illustrated Ripple Badge */}
              <div className="relative w-28 sm:w-32 lg:w-44 xl:w-52 aspect-[122/111] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>

              {/* Number and Label */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-jb-navy font-sans">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <div className="text-sm sm:text-base lg:text-xl font-normal tracking-[0.09em] text-jb-navy uppercase font-sans">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
