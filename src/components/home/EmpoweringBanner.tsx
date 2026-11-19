import Image from "next/image";
import { tokens } from "@/styles/tokens";

export function EmpoweringBanner() {
  return (
    <section className="relative w-full bg-jb-blue text-white overflow-hidden lg:py-0">
      <div className="max-w-7xl mx-auto px-[6.1vw] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[35.3vw] lg:min-h-[380px]">
          {/* Left Text Content (mobile: left ~52vw column beside the photo, Figma 1080 frame) */}
          <div className="w-[52vw] lg:w-auto lg:col-span-5 space-y-[1.7vw] lg:space-y-4 py-[2.6vw] lg:py-12 z-10">
            <div className="lg:space-y-1">
              <h2 className="text-[4.6vw]/[1.15] lg:text-5xl font-light tracking-[0.1em] lg:tracking-wider text-white uppercase font-sans">
                EMPOWERING
              </h2>
              <div className="flex items-baseline gap-[1.2vw] lg:gap-3 flex-wrap">
                <span className="text-[4.5vw]/[1.15] lg:text-5xl font-semibold tracking-tight  text-white uppercase font-sans">
                  STUDENTS
                </span>
                <span className="text-[4.5vw]/[1.15] lg:text-5xl font-light tracking-[0.1em] lg:tracking-wide text-white/95 uppercase font-sans">
                  FOR
                </span>
              </div>
              <h3 className="text-[4.5vw]/[1.15] lg:text-5xl font-semibold tracking-tight text-white uppercase font-sans">
                SUCCESS
              </h3>
            </div>

            <p className="text-[1.57vw]/[1.4] lg:text-sm text-white/90 max-w-lg lg:leading-5 tracking-widest pt-[0.8vw] lg:pt-2 font-sans">
              &ldquo;Empower your child&apos;s journey at JB School—a safe,
              supportive home for expanding knowledge, nurturing talents, and
              building a foundation for future success.&rdquo;
            </p>
          </div>

          {/* Right: Figma "Empowering assets" export, trimmed to the students (829x475).
              Desktop: 505x290 in a 1080x315 band = 92% of the band height, bottom-aligned.
              Mobile: the frame shows only the two youngest students, so the photo is
              height-fitted (37.9vw) and clipped to its left 35vw. */}
          <div className="absolute bottom-0 left-[59.5vw] w-[35vw] h-[37.9vw] lg:relative lg:left-auto lg:w-auto lg:col-span-7 self-end lg:h-[350px] lg:mt-[30px]">
            <Image
              src={tokens.assets.home.empoweringStudents}
              alt="JB School students from Early Childhood to Senior High School"
              fill
              priority
              sizes="(min-width: 1024px) 640px, 66vw"
              className="object-cover object-left-bottom lg:object-contain lg:object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
