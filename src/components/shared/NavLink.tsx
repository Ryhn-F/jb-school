"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface NavSubItem {
  label: string;
  href: string;
}

interface NavLinkProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
  /** Dropdown entries; the menu opens on hover and on keyboard focus */
  items?: NavSubItem[];
}

export function NavLink({ label, href, hasDropdown, items }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="group relative">
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup={items ? "true" : undefined}
        className={cn(
          "inline-flex items-center gap-1 py-1 font-display text-[11px] font-bold tracking-wider transition-colors sm:text-xs",
          isActive ? "font-semibold text-neutral-400" : "text-black hover:text-jb-navy",
        )}
      >
        <span>{label}</span>
        {hasDropdown && (
          <FiChevronDown
            aria-hidden="true"
            className={cn(
              "h-3 w-3 stroke-[2.5] text-neutral-700",
              items && "transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180",
            )}
          />
        )}
      </Link>

      {items && (
        // pt-2 bridges the gap so the menu stays open while the pointer moves down to it
        <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <ul className="min-w-60 border-t-[3px] border-jb-navy bg-white py-2 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            {items.map((item) => {
              const isItemActive = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isItemActive ? "page" : undefined}
                    className={cn(
                      "block whitespace-nowrap px-5 py-2.5 font-display text-sm font-normal tracking-wide transition-colors hover:text-jb-navy focus-visible:text-jb-navy focus-visible:outline-none",
                      isItemActive ? "text-jb-navy" : "text-neutral-800",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
