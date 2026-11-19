// Google's keyless place embed for "JB School" (place id from https://maps.app.goo.gl/3fX6oCHcBZDi1FgJA),
// so the map shows the place card with "Open in Maps" like the Figma frame.
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6!2d115.1839063!3d-8.7061369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bcb95aef79%3A0xb540496e885cbf69!2sJB%20School!5e0!3m2!1sen!2sid!4v1794844000000!5m2!1sen!2sid";

export function FacilitiesMap() {
  return (
    <section
      className="@container bg-white pt-[1.8vw] pb-[3.6vw] font-sans text-black lg:pt-[3.8vw] lg:pb-[5.4vw]"
      aria-labelledby="facilities-map-title"
    >
      <h2
        id="facilities-map-title"
        className="text-center text-[max(16px,2.14vw)] leading-[1.4] font-bold tracking-[0.1em] lg:text-[1.85cqw]"
      >
        SEE US AT GOOGLE MAPS
      </h2>
      <iframe
        src={MAP_EMBED_URL}
        title="JB School location on Google Maps"
        className="mx-auto mt-[2vw] block aspect-[950/392] w-[88%] border-0 lg:aspect-[908/369] lg:mt-[2.6cqw] lg:w-[84%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
