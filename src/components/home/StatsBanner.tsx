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
      className="pt-[4.4vw] pb-[4.9vw] lg:py-20 bg-white"
      aria-label="JB School Statistics"
    >
      <div className="max-w-7xl mx-auto px-[4.5vw] lg:px-8">
        <div className="grid grid-cols-4 gap-[1vw] lg:gap-10 items-start justify-items-center">
          {STATS_DATA.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center space-y-[1.2vw] lg:space-y-3 group"
            >
              {/* Illustrated Ripple Badge */}
              <div className="relative w-[18.5vw] lg:w-44 xl:w-52 aspect-[122/111] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1024px) 208px, 19vw"
                  className="object-contain"
                />
              </div>

              {/* Number and Label */}
              <div className="lg:space-y-1">
                <div className="text-[max(17px,4.4vw)]/[1.15] lg:text-5xl font-bold text-jb-navy font-sans">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <div className="text-[max(11px,2.27vw)]/[1.25] lg:text-xl font-normal tracking-[0.09em] text-jb-navy uppercase font-sans">
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
