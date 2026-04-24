import { Section } from "../ui/Section.jsx";
import { SectionHeading } from "../ui/Heading.jsx";
import { Card } from "../ui/Card.jsx";

export function Process() {
  const steps = [
    {
      step: "1",
      title: "Request a Quote",
      text: "Call or send a quick message with your address and what you’d like help with.",
    },
    {
      step: "2",
      title: "Walk the Property",
      text: "We’ll review your yard, discuss options, and recommend services that fit your goals and budget.",
    },
    {
      step: "3",
      title: "Schedule Service",
      text: "Choose a date and frequency that works for you—weekly, bi‑weekly, or one‑time projects.",
    },
    {
      step: "4",
      title: "Enjoy Your Yard",
      text: "We handle the work so you can enjoy a clean, well‑maintained outdoor space.",
    },
  ];

  return (
    <Section id="process" className="bg-bg">
      <div className="space-y-block lg:space-y-blockLg">

        <SectionHeading
          eyebrow="How It Works"
          title="Simple, Straightforward Lawn Care"
          subtitle="We keep the process easy so you can get back to enjoying your yard."
        />

        <div className="grid gap-cardGap md:grid-cols-4">

          {steps.map((step) => (
            <Card
              key={step.step}
              className="flex flex-col gap-4 p-6 shadow-soft hover:shadow-glow transition-all"
            >
              {/* Step Number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand bg-bg-soft text-base font-semibold text-brand">
                {step.step}
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading tracking-tightest text-text-primary">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-text-secondary/90">
                {step.text}
              </p>
            </Card>
          ))}

        </div>
      </div>
    </Section>
  );
}
