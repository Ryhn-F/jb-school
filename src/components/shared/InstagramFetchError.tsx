import { FiAlertCircle } from "react-icons/fi";
import { cn } from "@/lib/utils";

/** Shown in place of the Instagram grid when the Graph API request fails */
export function InstagramFetchError({ className }: { className?: string }) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center gap-2 rounded-xl border border-jb-border bg-jb-surface px-6 py-10 text-center font-sans text-neutral-800",
        className,
      )}
    >
      <FiAlertCircle aria-hidden="true" className="h-8 w-8 text-jb-brick" />
      <p className="font-bold">Couldn&apos;t fetch Instagram posts.</p>
      <p className="text-sm">Please try again later.</p>
    </div>
  );
}
