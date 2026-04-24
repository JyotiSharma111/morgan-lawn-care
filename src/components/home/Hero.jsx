import { Section } from "../ui/Section.jsx";
import { Button } from "../ui/Button.jsx";
import { serviceAreas } from "../../data/serviceAreas.js";

export function Hero() {
  return (
<Section id="hero" className="relative overflow-hidden py-section lg:py-sectionLg">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/hero_morgan.jpeg"
      alt="Lawn care background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg/90"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl space-y-block">
    <h1 className="text-4xl sm:text-5xl font-heading tracking-tightest text-text-primary">
      Premium Lawn Care & Landscaping in North Texas
    </h1>

    <p className="text-lg leading-relaxed text-text-secondary/90 max-w-xl">
      Morgan Lawn Care & Landscaping keeps your yard sharp, clean, and guest‑ready.
    </p>

    <div className="flex gap-4 pt-4">
      <Button>Call Now</Button>
      <Button variant="secondary">Request a Quote</Button>
    </div>
  </div>

</Section>

  );
}
