import Image from "next/image";
import { tokens } from "@/styles/tokens";

const linkClass = "hover:text-jb-navy transition-colors";

export function ContactInfoCard() {
  return (
    <section className="bg-white py-10 lg:pt-14 lg:pb-20" aria-labelledby="contact-info-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Figma: 510x332 card centered under the map; text left, directions map right */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 bg-jb-surface px-6 py-8 shadow-sm sm:grid-cols-[1fr_41.6%] sm:gap-[4%] sm:py-[3%] sm:pr-[3.5%] sm:pl-0">
          <div className="text-center font-sans">
            <h2
              id="contact-info-title"
              className="text-3xl font-normal text-jb-navy-dark lg:text-4xl"
            >
              Jembatan Budaya
            </h2>
            <span aria-hidden="true" className="mx-auto mt-5 block h-0.5 w-9 bg-jb-sky" />
            <p className="mt-6 text-xl text-jb-navy-dark lg:text-2xl">Informasi &amp; Pendaftaran :</p>

            <address className="mt-6 space-y-1.5 text-sm not-italic leading-relaxed text-neutral-600 lg:text-base">
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

          <div className="relative mx-auto aspect-[212/296] w-full max-w-xs sm:max-w-none">
            <Image
              src={tokens.assets.contact.directionsMap}
              alt="Directions map: JB School is on Sunset Road near Jl. Mertasari, beside Hotel Harris and Sushi Kyuden"
              fill
              sizes="(min-width: 640px) 360px, 320px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
