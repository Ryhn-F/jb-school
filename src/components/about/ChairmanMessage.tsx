const CHAIRMAN_PARAGRAPHS = [
  "On behalf of the Jembatan Budaya Foundation, it is my distinct honor to welcome our students, parents, educators, and the wider community. Since our establishment, our foundation has been driven by a singular, profound vision: to provide a holistic and transformative education that shapes the leaders of tomorrow.",
  "At Jembatan Budaya School, we believe that true education goes far beyond academic achievement. Our primary vision is to nurture students who possess a noble heart and a strong moral character. We are deeply committed to cultivating an environment where compassion, integrity, and resilience are just as important as test scores. We want our students to grow into kind, responsible individuals who contribute positively to society.",
  "Furthermore, we recognize that we are living in a highly interconnected era. To navigate and lead in this modern landscape, effective communication is paramount. Therefore, we equip our students with outstanding proficiency in both English and Mandarin. By immersing our students in a rich, multilingual environment, we break down cultural barriers and broaden their horizons.",
  "Through this unique blend of strong character education, rigorous academics, and exceptional linguistic training, we ensure that every Jembatan Budaya graduate is fully prepared to thrive and compete on the global stage. Our alumni step out into the world not only with brilliant minds but with the confidence and intercultural competence needed to succeed anywhere they choose to go.",
  "Thank you for your continuous trust and support in Jembatan Budaya School. Together, let us continue to build a bridge to a brighter, globally-connected future for our children.",
];

// Only in the Figma mobile frame ("Message From Chairman"); the desktop design has no such section, so it is hidden from lg up.
export function ChairmanMessage() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-[4.3vw] pb-[3.2vw] text-black lg:hidden"
      aria-labelledby="chairman-message-title"
    >
      {/* Figma "Decorative Blob": moss shape flush right. Floated so text that outgrows it wraps under it instead of leaving the right side empty. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 416 735"
        preserveAspectRatio="none"
        className="pointer-events-none float-right -mr-[4.3vw] ml-[6.5vw] mt-[21.5vw] h-[68vw] w-[38.5vw] fill-jb-moss"
      >
        <path d="M416 0C380 25 300 45 237 43C180 41 150 28 100 38C40 50 5 100 2 170C0 240 20 290 60 340C110 400 130 450 150 540C175 650 230 720 337 732C370 735 400 733 416 730Z" />
      </svg>

      <div>
        <header className="text-center">
          <h2
            id="chairman-message-title"
            className="font-sans text-[2.27vw] font-bold leading-[1.35] tracking-[0.08em]"
          >
            MESSAGE FROM CHAIRMAN OF THE JEMBATAN BUDAYA FOUNDATION
          </h2>
          <p className="mt-[0.7vw] font-sans text-[1.85vw] tracking-[0.09em]">
            Mr. Putu Bahaduri <span className="whitespace-nowrap">(江睿 先生)</span>
          </p>
        </header>

        <div className="mt-[2.7vw] space-y-[2.2vw] font-sans text-[1.57vw] leading-[1.42] tracking-[0.1em] text-left sm:text-justify hyphens-auto">
          {CHAIRMAN_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
