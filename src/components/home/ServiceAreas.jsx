import { Section } from "../ui/Section.jsx";
import { SectionHeading } from "../ui/Heading.jsx";
import { serviceAreas } from "../../data/serviceAreas.js";
import { Button } from "../ui/Button.jsx";

export function ServiceAreasSection() {
  return (
    <Section id="service-areas" className="bg-bg-soft">
      <div className="space-y-block lg:space-y-blockLg">

        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly Serving North Texas Neighborhoods"
          subtitle="Morgan Lawn Care & Landscaping is based in Providence Village and serves nearby communities across North Texas."
        />

<div className="grid gap-cardGap md:grid-cols-[1.2fr,1fr] md:items-start">

  {/* LEFT: Service Area Chips inside a premium card */}
  <div className="rounded-2xl border border-border-subtle bg-bg-card p-5 shadow-soft">
    <h2 className="text-lg font-heading tracking-tightest text-text-primary mb-3">
      Areas We Serve
    </h2>

    <div className="flex flex-wrap gap-2">
      {serviceAreas.map((area) => (
        <span
          key={area}
          className="rounded-full border border-border-subtle bg-bg px-4 py-2 text-sm font-medium text-text-secondary shadow-soft"
        >
          {area}
        </span>
      ))}
    </div>
  </div>

  {/* RIGHT: Map Card */}
  <div className="rounded-2xl border border-border-subtle bg-bg-card p-5 shadow-soft space-y-4">

    <h2 className="text-lg font-heading tracking-tightest text-text-primary">
      Service Area Map
    </h2>

    <div className="rounded-xl overflow-hidden border border-border-subtle shadow-soft">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.2271688648398!2d-96.96545242430997!3d33.234351560474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c37977674f32b%3A0xf717fd2f05522a0a!2sMorgan%20Lawn%20Care%20%26%20Landscaping!5e0!3m2!1sen!2sus!4v1776983441543!5m2!1sen!2sus"
        className="w-full h-48 md:h-64"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <p className="text-base leading-relaxed text-text-secondary/90">
      If you’re in or near any of these areas, we’d be glad to take a look at your
      property and provide a quote.
    </p>

    <Button
      as="link"
      to="/service-areas"
      variant="ghost"
      className="px-0 text-base font-semibold text-brand hover:text-brand-dark"
    >
      View detailed service area →
    </Button>

  </div>
</div>

      </div>
    </Section>
  );
}
