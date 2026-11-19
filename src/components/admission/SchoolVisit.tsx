import Image from "next/image";
import { tokens } from "@/styles/tokens";

const linkClass = "hover:text-jb-navy";

/** Figma "5.Admission": text column beside a wave-cut photo (mobile: x 69–500 / 520–1080; desktop: x 90–521 / 501–1080 of a 1080px frame), contact lines below.
 * Mobile body is left-aligned with tighter tracking: justified text in the ~40vw column left wide rivers at phone widths. */
export function SchoolVisit() {
  return (
    <section
      className="@container bg-white font-sans tracking-[0.1em] text-black pb-[3.8cqw] lg:pb-[4cqw]"
      aria-labelledby="school-visit-title"
    >
      <div className="relative grid grid-cols-[48.1%_51.9%] items-center lg:block">
        <div className="pt-[4.35cqw] pr-[1.85cqw] pl-[6.4cqw] lg:absolute lg:top-[4.6cqw] lg:left-[8.3%] lg:w-[39.9%] lg:p-0">
          <h2
            id="school-visit-title"
            className="text-center text-[2.65cqw] leading-[calc(2/1.5)] font-bold whitespace-nowrap lg:text-[2.78cqw]"
          >
            SCHOOL VISIT
          </h2>
          <div className="mt-[2.2cqw] text-[1.56cqw] leading-[1.35] tracking-[0.04em] lg:mt-[0.74cqw] lg:text-justify lg:text-[1.57cqw] lg:tracking-[0.1em]">
            <p>
              &ldquo;Discover our vibrant learning environment firsthand. We
              invite you to explore our campus and meet our dedicated team, who
              will guide you on an exclusive tour and share comprehensive
              insights into our educational approach.
            </p>
            <p>
              To arrange your visit, kindly contact us via phone at +62 361 –
              752554 / 752776, whatsapp at 081138816881 or email{" "}
              <a href="mailto:info@jbschool-bali.com" className={linkClass}>
                info@jbschool-bali.com
              </a>
              &rdquo;
            </p>
          </div>
        </div>

        <div className="relative aspect-[560/420] w-full lg:mt-[3.4cqw] lg:ml-auto lg:aspect-[579/419] lg:w-[53.6%]">
          <Image
            src={tokens.assets.admission.schoolVisit}
            alt="JB School building with the Jembatan Budaya emblem"
            fill
            sizes="(min-width: 1024px) 54vw, 52vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-[3.2cqw] px-4 text-center text-[1.57cqw] leading-[calc(1.25/0.875)] lg:mt-[3.3cqw] lg:text-[1.57cqw]">
        <p>If you have a question please contact us at&nbsp;:</p>
        <p className="mt-[1.85cqw] lg:mt-[1.76cqw]">
          Telp :{" "}
          <a href="tel:+62361752554" className={linkClass}>(+62 361) 752554</a>,{" "}
          <a href="tel:+62361752776" className={linkClass}>752776</a>, Fax : (+62&nbsp;361) 756235 Whatsapp :{" "}
          <a
            href="https://wa.me/6281138816881"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            081138816881
          </a>
        </p>
      </div>
    </section>
  );
}
