import type { Metadata } from "next";
import { NotFoundMessage } from "@/components/not-found/NotFoundMessage";

export const metadata: Metadata = {
  title: "Page Not Found - JB School, Bali",
};

// Root not-found also catches every unmatched URL; it renders inside the root layout (navbar + footer).
export default function NotFound() {
  return <NotFoundMessage />;
}
