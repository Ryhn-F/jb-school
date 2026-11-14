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
    <section className="bg-white py-10 lg:py-8" aria-label="Vision and Mission">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 text-black sm:px-6 md:grid-cols-2 md:gap-[8%] lg:px-8">
        <div>
          <h2 className="font-sans text-xl font-bold tracking-[0.1em] lg:text-2xl xl:text-[26px]">
            VISION
          </h2>
          <p className="mt-3 font-sans text-sm leading-[1.42] tracking-[0.1em] text-justify lg:text-lg xl:text-xl">
            &ldquo;Educating the nation&apos;s youth so they are prepared to play
            an active role as agents of development, ready to face future
            challenges, and able to thrive in a complex and highly uncertain
            global competition.&rdquo;
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xl font-bold tracking-[0.1em] lg:text-2xl xl:text-[26px]">
            MISSION
          </h2>
          <ul className="mt-3 list-disc pl-6 font-sans text-sm leading-[1.42] tracking-[0.1em] text-justify marker:text-black lg:text-lg xl:text-xl">
            {MISSION_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
