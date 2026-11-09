import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function EmpoweringBanner() {
  return (
    <section className="relative w-full bg-jb-blue text-white overflow-hidden py-10 sm:py-14 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] lg:min-h-[380px]">
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-4 lg:py-12 z-10">
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wider text-white uppercase font-sans">
                EMPOWERING
              </h2>
              <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight  text-white uppercase font-sans">
                  STUDENTS
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white/95 uppercase font-sans">
                  FOR
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase font-sans">
                SUCCESS
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-white/90 max-w-lg leading-5 tracking-widest pt-2 font-sans">
              &ldquo;Empower your child&apos;s journey at JB School—a safe,
              supportive home for expanding knowledge, nurturing talents, and
              building a foundation for future success.&rdquo;
            </p>
          </div>

          {/* Right Students Cutout Image */}
          <div className="lg:col-span-7 relative flex items-end justify-center lg:justify-end self-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none h-64 sm:h-80 lg:h-[360px]">
              <Image
                src={tokens.assets.images.empoweringStudents}
                alt="JB School Empowering Students for Success"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
