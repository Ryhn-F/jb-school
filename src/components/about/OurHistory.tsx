interface HistoryPillar {
  title: string;
  body: string;
}

const HISTORY_PILLARS: HistoryPillar[] = [
  {
    title: "Empowering Global Communicators",
    body: "Recognizing the tremendous economic and cultural growth of China on the world stage, we understand that Mandarin has become an essential pillar of global communication. Today, it stands as the world's most vital international language alongside English. Driven by the critical importance of bilingual proficiency, JB School was established as a premier National Plus school offering comprehensive education with a strong emphasis on both Mandarin and English.",
  },
  {
    title: "Shaping the Leaders of Tomorrow",
    body: "As a trailblazer for National Plus education in Bali, we are deeply committed to our core responsibility: shaping and preparing exceptional individuals who are ready to thrive. We are dedicated to developing highly capable, globally minded students equipped with the skills and character necessary to confidently navigate, adapt, and succeed in today's fast-paced and highly competitive global era.",
  },
];

export function OurHistory() {
  return (
    <section className="bg-white py-10 lg:pt-8 lg:pb-8" aria-labelledby="our-history-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-black">
        <header className="text-center">
          <h2
            id="our-history-title"
            className="font-sans text-xl font-bold tracking-[0.1em] lg:text-2xl xl:text-[26px]"
          >
            OUR HISTORY
          </h2>
          <p className="mt-2 font-sans text-base tracking-[0.1em] lg:text-xl xl:text-[22px]">
            Established by Mr. Putu Kangen Disastra (已故江连福先生) in 2004
          </p>
        </header>

        <p className="mt-6 font-sans text-sm leading-[1.42] tracking-[0.09em] lg:mt-8 lg:text-lg xl:text-xl">
          Officially established on July 19, 2004, Sekolah Jembatan Budaya (JB
          School) was envisioned and founded by the Chairman of the Jembatan
          Budaya Foundation, the late Mr. Putu Kangen Disastra (已故江连福先生).
          Our institution was built with a pioneering mission: to popularize and
          integrate Mandarin language education within Indonesia&apos;s formal
          education system, particularly here in Bali
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[6%] lg:mt-8">
          {HISTORY_PILLARS.map((pillar) => (
            <article key={pillar.title}>
              <h3 className="font-sans text-sm font-bold tracking-[0.1em] lg:text-lg xl:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-[1.42] tracking-[0.1em] lg:mt-6 lg:text-lg xl:text-xl">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
