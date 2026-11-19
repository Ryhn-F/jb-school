import Image from "next/image";
import Link from "next/link";
import { tokens } from "@/styles/tokens";
import { NavLink, type NavSubItem } from "@/components/shared/NavLink";
import { PARTNERS } from "@/components/shared/PartnerLogos";
import { ACADEMIC_LEVELS } from "@/lib/academic-levels";

interface NavLinkItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: NavSubItem[];
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "ACADEMICS",
    href: "/academics",
    hasDropdown: true,
    items: [
      ...ACADEMIC_LEVELS.map(({ title, href }) => ({ label: title, href })),
      { label: "JB COLLEGE", href: "/academics/jb-college" },
    ],
  },
  {
    label: "FACILITIES",
    href: "/facilities",
    hasDropdown: true,
    // Same hrefs as the footer's Facilities column
    items: [
      { label: "SCHOOL FACILITIES", href: "/facilities" },
      { label: "ACTIVITIES", href: "/activities" },
    ],
  },
  {
    label: "ADMISSION",
    href: "/admission",
    hasDropdown: true,
    // Same hrefs as the footer's Admission column
    items: [
      { label: "PROCEDURES", href: "/admission" },
      { label: "FAQ", href: "/faq" },
      { label: "CONTACT US", href: "/contact" },
    ],
  },
  { label: "NEWS", href: "/news" },
  { label: "COMMUNITY", href: "/community" },
];

export function Navbar() {
  return (
    <header className=" top-0 z-50 bg-white shadow-sm">
      {/* Mobile (Figma Mobile/Header, 1080 wide): logo | partner logos, then the nav row(s) full width */}
      <div className="w-full px-[4.1vw] pt-[3.7vw] pb-[3.1vw] lg:px-[4.9%] lg:pt-5 lg:pb-0">
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-[3vw] gap-y-[2vw] lg:flex lg:justify-between lg:gap-8 lg:py-5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={tokens.assets.logo.main}
              alt="JB School 文桥三语学校"
              width={4096}
              height={1366}
              sizes="300px"
              priority
              className="h-[max(32px,8.5vw)] w-auto object-contain lg:h-20"
            />
          </Link>

          <div className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:items-end lg:gap-4">
            {/* Partner logos (Figma header, top right) */}
            <ul
              className="flex items-center justify-self-end gap-[1.6vw] lg:gap-7"
              aria-label="Educational Partners"
            >
              {PARTNERS.map((p) => (
                <li key={p.src}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes="120px"
                    className="h-[max(14px,2.8vw)] w-auto object-contain lg:h-7"
                  />
                </li>
              ))}
            </ul>

            <nav
              className="relative col-span-2 flex flex-wrap items-center justify-end gap-x-[2.6vw] gap-y-0.5 lg:gap-7"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Blue line separator matching Figma (y: 88, h: 15) */}
      <div className="w-full h-[2.1vw] lg:h-5 bg-linear-to-r from-[#1A135A] to-[#245CEB]"></div>
    </header>
  );
}
