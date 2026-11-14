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
      href: "https://youtube.com/@jbschoolbali",
      Icon: FaYoutube,
      name: "YouTube",
    },
  ];

// Figma footer (1080 x 240): logo 138 | contact 348 | 95 | 83 | 84 columns, 58px gutters, 40px left / 60px right padding.
export function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-jb-blue font-sans text-white">
      <div className="grid grid-cols-3 gap-x-6 gap-y-8 px-6 py-10 lg:grid-cols-[138fr_348fr_95fr_83fr_84fr] lg:gap-x-[5.4vw] lg:pt-[3.1vw] lg:pb-[5.4vw] lg:pl-[3.7vw] lg:pr-[5.6vw]">
        {/* Stacked lockup: emblem over wordmark */}
        <Link
          href="/"
          aria-label="JB School home"
          className="col-span-3 mx-auto flex w-32 flex-col items-center gap-[6%] lg:col-span-1 lg:mx-0 lg:w-full"
        >
          <Image
            src={tokens.assets.logo.emblem}
            alt=""
            width={1300}
            height={500}
            className="w-full h-auto"
          />
        </Link>

        <div className="col-span-3 text-center lg:col-span-1 lg:pt-[0.65vw] lg:text-left">
          <h2 className="text-base font-bold xl:text-lg">
            JEMBATAN BUDAYA SCHOOL, BALI
          </h2>
          <address className="mt-3 text-[11px] not-italic leading-[1.8] tracking-[1px] lg:mt-[1.4vw] lg:text-[10px] xl:text-xs">
            Jalan Raya Kuta No 1, Kuta, Badung, 80361 Bali - Indonesia
            <br />
            Telp : (+62 361) 752554, 752776, Fax : (+62 361) 756235
            <br />
            Email :{" "}
            <a href="mailto:info@jbschool-bali.com" className="hover:underline">
              info@jbschool-bali.com
            </a>
          </address>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-3 lg:mt-[2.6vw] lg:justify-start">
            {SOCIALS.map(({ label, href, Icon, name }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`JB School on ${name}`}
                  className="flex items-center gap-2 font-condensed text-xs transition-opacity hover:opacity-80 xl:text-sm"
                >
                  <Icon className="size-6 xl:size-7" aria-hidden="true" />
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
            className="text-[10px] leading-[19px] lg:pt-[0.75vw] xl:text-xs xl:leading-[22px]"
          >
            <h3 className="font-bold">{column.title}</h3>
            <ul className="tracking-[0.6px]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="whitespace-nowrap hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}
