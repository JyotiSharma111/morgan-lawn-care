import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { Section } from "../components/ui/Section.jsx";
import { SectionHeading } from "../components/ui/Heading.jsx";
import { Card } from "../components/ui/Card.jsx";
import { portfolioItems } from "../data/portfolio.js";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio & Before/After | Morgan Lawn Care & Landscaping</title>
        <meta
          name="description"
          content="See examples of lawn care, clean-ups, mulch installation, and landscape projects completed by Morgan Lawn Care & Landscaping in Providence Village and North Texas."
        />
      </Helmet>
      <SchemaLocalBusiness />
      <Section className="bg-bg">
        <div className="space-y-block lg:space-y-blockLg">

          <SectionHeading
            eyebrow="Portfolio"
            title="Before & After Lawn and Landscape Projects"
            subtitle="Here are a few examples of how regular lawn care and simple landscape updates can transform a property."
          />
          <div className="grid gap-cardGap md:grid-cols-2">
            {portfolioItems.map((item) => (
              <Card key={item.id}>
                <div className="space-y-3 text-base text-text-secondary">
                  <h2 className="text-base font-semibold text-text-primary">
                    {item.title}
                  </h2>
                  <p className="text-xs font-medium text-text-muted">
                    {item.location}
                  </p>
                  <div className="grid gap-3 rounded-xl bg-bg-soft p-3 text-xs text-text-secondary sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-text-primary">Before</p>
                      <p className="mt-1">{item.before}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">After</p>
                      <p className="mt-1">{item.after}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-text-secondary">
                    {item.servicesUsed.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-bg-soft px-2 py-1 shadow-soft"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-xs text-text-muted">
            Note: Photos and visuals can be added here later. The layout is
            ready for real before/after images.
          </p>
        </div>
      </Section>
    </>
  );
}
