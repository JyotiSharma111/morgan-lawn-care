import { PhoneCall } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="tel:+14699126553"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-base font-semibold text-bg shadow-soft hover:bg-brand-dark hover:shadow-glow transition-all md:hidden"
      aria-label="Call Morgan Lawn Care & Landscaping"
    >
      <PhoneCall className="h-4 w-4" />
      <span>Call Now</span>
    </a>
  );
}
