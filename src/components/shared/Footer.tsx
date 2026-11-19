import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { tokens } from "@/styles/tokens";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "ACADEMICS",
    links: [
      { label: "Early Childhood", href: "/academics/early-childhood" },
      { label: "Primary School", href: "/academics/primary" },
      { label: "Junior High School", href: "/academics/junior-high" },
      { label: "Senior High School", href: "/academics/senior-high" },
    ],
  },
  {
    title: "FACILITIES",
    links: [
      { label: "School Facilities", href: "/facilities" },
      { label: "Activities", href: "/activities" },
    ],
  },
  {
    title: "ADMISSION",
    links: [
      { label: "Procedure", href: "/admission" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const SOCIALS: { label: string; href: string; Icon: IconType; name: string }[] =
  [
    {
      label: "JBSCHOOL.BALI",
      href: "https://facebook.com/jbschool.bali",
      Icon: FaFacebook,
      name: "Facebook",
    },
    {
      label: "JBSCHOOL.BALI",
      href: "https://instagram.com/jbschool.bali",
      Icon: FaInstagram,
      name: "Instagram",
    },
    {
      label: "JBSCHOOL BALI",
      href: "https://www.youtube.com/@jbschool6942",
      Icon: FaYoutube,
      name: "YouTube",
    },
  ];

// Mobile (Figma Mobile/Footer, 1080 wide): logo | school info + socials, then the 3 link columns (wrapped so they stay legible).
// Desktop: Figma footer (1080 x 240): logo 138 | contact 348 | 95 | 83 | 84 columns, 58px gutters, 40px left / 60px right padding.
export function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-jb-blue font-sans text-white">
      <div className="flex flex-wrap gap-x-[2.6vw] gap-y-[3vw] px-[max(16px,3.1vw)] pt-[max(16px,2.1vw)] pb-[max(20px,4.7vw)] lg:grid lg:gap-y-8 lg:grid-cols-[138fr_348fr_95fr_83fr_84fr] lg:gap-x-[5.4vw] lg:pt-[3.1vw] lg:pb-[2.4vw] lg:pl-[3.7vw] lg:pr-[5.6vw]">
        {/* Stacked lockup: emblem over wordmark */}
        <Link
          href="/"
          aria-label="JB School home"
          className="flex w-[max(64px,15.7vw)] shrink-0 flex-col items-center gap-[6%] self-start lg:w-full lg:self-auto"
        >
          <Image
            src={tokens.assets.logo.emblem}
            alt=""
            width={1300}
            height={500}
            className="w-full h-auto"
          />
        </Link>

        <div className="min-w-0 flex-1 basis-[60%] pt-[1.6vw] lg:min-w-auto lg:pt-[0.65vw]">
          <h2 className="text-[max(13px,1.77vw)] font-bold lg:text-base xl:text-lg">
            JEMBATAN BUDAYA SCHOOL, BALI
          </h2>
          <address className="mt-[1vw] text-[max(11px,1.11vw)] not-italic leading-[2] tracking-[1px] lg:mt-[1.4vw] lg:text-[10px] lg:leading-[1.8] xl:text-xs">
            Jalan Raya Kuta No 1, Kuta, Badung, 80361 Bali - Indonesia
            <br />
            Telp : (+62 361) 752554, 752776, Fax : (+62 361) 756235
            <br />
            Email :{" "}
            <a href="mailto:info@jbschool-bali.com" className="hover:underline">
              info@jbschool-bali.com
            </a>
          </address>

          <ul className="mt-[2.7vw] flex flex-wrap gap-x-[max(10px,1.3vw)] gap-y-2 lg:mt-[2.6vw] lg:gap-x-2 lg:gap-y-3">
            {SOCIALS.map(({ label, href, Icon, name }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`JB School on ${name}`}
                  className="flex min-h-6 items-center gap-[max(4px,0.7vw)] font-condensed text-[max(13px,1.93vw)] transition-opacity hover:opacity-80 lg:min-h-0 lg:gap-2 lg:text-xs xl:text-sm"
                >
                  <Icon className="size-[max(18px,2.3vw)] lg:size-6 xl:size-7" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav
            key={column.title}
            aria-label={column.title}
            className="min-w-0 flex-1 basis-[25%] lg:min-w-auto text-[max(11px,1.11vw)] leading-6 lg:pt-[0.75vw] lg:text-[10px] lg:leading-[19px] xl:text-xs xl:leading-[22px]"
          >
            <h3 className="text-[max(12px,1.3vw)] font-bold lg:text-[1em]">{column.title}</h3>
            <ul className="tracking-[0.6px]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline lg:whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <hr />
      <p className="px-6 pb-4 pt-4 text-center text-[11px] tracking-[0.6px] text-white/80 lg:text-[10px] xl:text-xs">
        Powered by <span className="">Schoolink</span>
      </p>
    </footer>
  );
}
