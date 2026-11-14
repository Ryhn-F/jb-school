import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { tokens } from "@/styles/tokens";

export function Footer() {
  return (
    <footer id="contact" className="bg-jb-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* School Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
              JEMBATAN BUDAYA SCHOOL, BALI
            </h4>
            <div className="space-y-1 text-xs text-white/95 leading-relaxed font-sans">
              <p>Jalan Raya Kuta No 1, Kuta, Badung, 80361 Bali - Indonesia</p>
              <p>Telp : (+62 361) 752554, 752776 | Fax : (+62 361) 756235</p>
              <p>
                Email :{" "}
                <a
                  href="mailto:info@jbschool-bali.com"
                  className="underline hover:text-white transition-colors"
                >
                  info@jbschool-bali.com
                </a>
              </p>
            </div>

            {/* Social Handle text badges matching Figma: [f] JBSCHOOL.BALI, [ig] JBSCHOOL.BALI, [yt] JBSCHOOL BALI */}
            <div className="flex items-center gap-4 sm:gap-6 pt-4 text-xs font-bold text-white flex-wrap">
              <a
                href="https://facebook.com/jbschool.bali"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded bg-white text-jb-blue text-[10px] font-black">
                  <FaFacebookF className="w-3 h-3" />
                </span>
                <span className="uppercase text-[11px] tracking-wider">JBSCHOOL.BALI</span>
              </a>

              <a
                href="https://instagram.com/jbschool.bali"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded bg-white text-jb-blue text-[10px] font-black">
                  <FaInstagram className="w-3 h-3" />
                </span>
                <span className="uppercase text-[11px] tracking-wider">JBSCHOOL.BALI</span>
              </a>

              <a
                href="https://youtube.com/@jbschoolbali"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded bg-white text-jb-blue text-[10px] font-black">
                  <FaYoutube className="w-3 h-3" />
                </span>
                <span className="uppercase text-[11px] tracking-wider">JBSCHOOL BALI</span>
              </a>
            </div>
          </div>

          {/* Nav Column 1: Academics */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              ACADEMICS
            </h5>
            <ul className="space-y-1.5 text-white/90">
              <li><Link href="/academics/early-childhood" className="hover:text-white transition-colors">Early Childhood</Link></li>
              <li><Link href="/academics/primary" className="hover:text-white transition-colors">Primary School</Link></li>
              <li><Link href="/academics/junior-high" className="hover:text-white transition-colors">Junior High School</Link></li>
              <li><Link href="/academics/senior-high" className="hover:text-white transition-colors">Senior High School</Link></li>
            </ul>
          </div>

          {/* Nav Column 2: Facilities */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              FACILITIES
            </h5>
            <ul className="space-y-1.5 text-white/90">
              <li><Link href="/facilities" className="hover:text-white transition-colors">School Facilities</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* Nav Column 3: Admission */}
          <div className="lg:col-span-1 space-y-2 text-xs">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              ADMISSION
            </h5>
            <ul className="space-y-1.5 text-white/90">
              <li><Link href="/admission" className="hover:text-white transition-colors">Procedure</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Right Column: JB School Crest Badge */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <Image
                src={tokens.assets.logo.emblem}
                alt="JB School Crest Emblem"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
