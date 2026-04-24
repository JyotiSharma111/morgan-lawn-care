import { Section } from "../ui/Section.jsx";
import { Button } from "../ui/Button.jsx";

export function FinalCTA() {
  return (
    <Section
      id="cta"
      className="bg-gradient-to-r from-[#0F2A1E] via-[#123726] to-[#0F2A1E]"
    >
      <div className="flex flex-col gap-4 text-center text-text-primary sm:items-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
          Ready for a better‑looking yard?
        </p>
        <h2 className="max-w-2xl text-2xl sm:text-3xl font-semibold">
          Get a free lawn care quote for your home in Providence Village or
          North Texas.
        </h2>
        <p className="max-w-xl text-base text-text-secondary">
          Call now or send a quick message and we’ll follow up with pricing and
          availability.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button as="a" href="tel:+14699126553">
            Call (469) 912-6553
          </Button>
          <Button
            as="link"
            to="/contact"
            variant="outline"
            className="border-brand-soft text-text-primary hover:bg-brand-soft hover:text-bg"
          >
            Request a Free Quote
          </Button>
        </div>
      </div>
    </Section>
  );
}
