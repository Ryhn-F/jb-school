"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export function NavLink({ label, href, hasDropdown }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center gap-1 py-1 font-display text-[11px] font-bold tracking-wider transition-colors sm:text-xs",
        isActive ? "font-semibold text-neutral-400" : "text-black hover:text-jb-navy",
      )}
    >
      <span>{label}</span>
      {hasDropdown && (
        <FiChevronDown aria-hidden="true" className="h-3 w-3 stroke-[2.5] text-neutral-700" />
      )}
    </Link>
  );
}
