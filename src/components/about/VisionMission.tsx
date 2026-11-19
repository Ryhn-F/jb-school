const MISSION_ITEMS = [
  "Conducting the teaching and learning process optimally.",
  "Providing essential language education, namely: Balinese, Indonesian, Mandarin, and English.",
  "Developing children's talents and creativity.",
  "Providing introductory computer education and basic skills.",
  "Providing ethical (character) education, moral education, and applied religious education.",
  "Preparing graduates to compete for higher education levels at both national and international schools.",
];

export function VisionMission() {
  return (
    <section className="bg-white pt-[5vw] pb-[4.9vw] lg:py-8" aria-label="Vision and Mission">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-start gap-[3.2vw] px-[4.6vw] text-black lg:gap-[8%] lg:px-8">
        <div>
          <h2 className="font-sans text-[max(16px,2.4vw)] font-bold tracking-[0.08em] lg:tracking-[0.1em] lg:text-2xl xl:text-[26px]">
            VISION
          </h2>
          <p className="mt-[1.1vw] font-sans text-[max(13px,1.57vw)] leading-[1.48] tracking-[0.1em] text-left sm:text-justify hyphens-auto lg:mt-3 lg:hyphens-manual lg:leading-[1.42] lg:text-lg xl:text-xl">
            &ldquo;Educating the nation&apos;s youth so they are prepared to play
            an active role as agents of development, ready to face future
            challenges, and able to thrive in a complex and highly uncertain
            global competition.&rdquo;
          </p>
        </div>

        <div>
          <h2 className="font-sans text-[max(16px,2.4vw)] font-bold tracking-[0.08em] lg:tracking-[0.1em] lg:text-2xl xl:text-[26px]">
            MISSION
          </h2>
          <ul className="mt-[1.1vw] list-disc pl-[max(18px,2.4vw)] font-sans text-[max(13px,1.57vw)] leading-[1.48] tracking-[0.1em] text-left sm:text-justify hyphens-auto marker:text-black lg:mt-3 lg:hyphens-manual lg:pl-6 lg:leading-[1.42] lg:text-lg xl:text-xl">
            {MISSION_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
