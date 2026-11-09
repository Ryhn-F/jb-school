const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8464118071383!2d115.18132601085036!3d-8.70613158869107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bcb95aef79%3A0xb540496e885cbf69!2sJB%20School!5e0!3m2!1sid!2sid!4v1794247431390!5m2!1sid!2sid";

export function ContactMap() {
  return (
    <section className="bg-white pt-10 lg:pt-6" aria-labelledby="google-maps-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="google-maps-title"
          className="text-center font-sans text-lg font-bold tracking-[0.09em] text-black lg:text-2xl xl:text-[25px]"
        >
          SEE US AT GOOGLE MAPS
        </h2>

        {/* Figma: 684x282 map, 84% of the page width */}
        <div className="mx-auto mt-6 aspect-[4/3] w-full overflow-hidden bg-neutral-100 sm:aspect-[684/282] lg:mt-8">
          <iframe
            src={MAP_EMBED_URL}
            title="JB School location on Google Maps"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
