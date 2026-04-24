import { Section } from "../ui/Section.jsx";
import { SectionHeading } from "../ui/Heading.jsx";
import { Card } from "../ui/Card.jsx";

export function WhyChooseUs() {
  const items = [
    {
      title: "Local, Owner‑Operated",
      text: "You’re working directly with a local lawn care professional who takes pride in every yard.",
    },
    {
      title: "Reliable & Communicative",
      text: "Clear communication, dependable scheduling, and respect for your property and time.",
    },
    {
      title: "Quality‑First Work",
      text: "Attention to detail on mowing, edging, trimming, and clean‑up every visit.",
    },
    {
      title: "Focused on North Texas Lawns",
      text: "We understand local grass types, soil, and seasonal needs in Providence Village and surrounding cities.",
    },
  ];

  return (
    <Section id="why-us" className="bg-bg-soft">
      <div className="space-y-block lg:space-y-blockLg">

        <SectionHeading
          eyebrow="Why Choose Morgan"
          title="A Lawn Care Partner You Can Count On"
          subtitle="We treat your yard like our own—showing up on time, doing the job right, and keeping your property looking sharp."
        />
        <div className="grid gap-cardGap md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-text-secondary">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
