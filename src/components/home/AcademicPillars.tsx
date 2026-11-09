import { AcademicCards } from "@/components/home/AcademicCards";

export function AcademicPillars() {
  return (
    <section id="academics" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Text Block */}
          <div className="w-full lg:w-1/4 space-y-2 text-left">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-800">
              ACADEMICS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight tracking-tight uppercase font-sans">
              COOPERATION, <br />
              COMMUNICATION, <br />
              CHARACTER
            </h2>
          </div>

          {/* Right Cards Gallery: interactive, hover-expanding cards */}
          <AcademicCards />
        </div>
      </div>
    </section>
  );
}
