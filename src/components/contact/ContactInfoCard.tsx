import Image from "next/image";
import { tokens } from "@/styles/tokens";

const linkClass = "hover:text-jb-navy transition-colors";

export function ContactInfoCard() {
  return (
    <section className="bg-white pt-[4.6vw] pb-[4.6vw] lg:pt-14 lg:pb-20" aria-labelledby="contact-info-title">
      <div className="mx-auto max-w-7xl px-[5.6vw] lg:px-8">
        {/* Figma: 510x332 card centered under the map; text left, directions map right (kept two-column on mobile like the sibling School Visit block, map column narrowed so the address lines fit at 360px) */}
        <div className="mx-auto grid max-w-4xl grid-cols-[1fr_36%] items-center gap-[3%] bg-jb-surface py-[3%] pr-[3.5%] pl-0 lg:grid-cols-[1fr_41.6%] lg:gap-[4%] shadow-sm">
          <div className="pl-[2%] text-center font-sans lg:pl-0">
            <h2
              id="contact-info-title"
              className="text-[max(20px,2.8vw)] font-normal text-jb-navy-dark lg:text-4xl"
            >
              Jembatan Budaya
            </h2>
            <span aria-hidden="true" className="mx-auto mt-[1.85vw] block h-0.5 w-[max(24px,3.3vw)] bg-jb-sky lg:mt-5 lg:w-9" />
            <p className="mt-[2.2vw] text-[max(14px,2vw)] text-jb-navy-dark lg:mt-6 lg:text-2xl">Informasi &amp; Pendaftaran&nbsp;:</p>

            <address className="mt-[2.2vw] space-y-[0.6vw] text-[max(13px,1.57vw)] not-italic leading-snug text-neutral-600 lg:mt-6 lg:space-y-1.5 lg:text-base lg:leading-relaxed">
              <p className="font-bold">Alamat:</p>
              <p>
                Jalan Raya Kuta No. 1 Badung
                <br />
                80361 BALI – INDONESIA
              </p>
              <p>
                <span className="font-bold">Phone :</span>{" "}
                <a href="tel:+62361752554" className={linkClass}>+62 361 – 752554</a>,{" "}
                <a href="tel:+62361752776" className={linkClass}>752776</a>
              </p>
              <p>
                <span className="font-bold">Fax :</span> +62 361 – 756235
              </p>
              <p>
                <span className="font-bold">Email :</span>{" "}
                <a href="mailto:info@schoolink.id" className={linkClass}>info@schoolink.id</a>
              </p>
              <p>
                <span className="font-bold">Whatsapp :</span>{" "}
                <a
                  href="https://wa.me/6281138816881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  081138816881
                </a>
              </p>
            </address>
          </div>

          <div className="relative mx-auto aspect-[212/296] w-full">
            <Image
              src={tokens.assets.contact.directionsMap}
              alt="Directions map: JB School is on Sunset Road near Jl. Mertasari, beside Hotel Harris and Sushi Kyuden"
              fill
              sizes="(min-width: 1024px) 360px, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
