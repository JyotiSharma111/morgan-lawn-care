import { Section } from "../ui/Section.jsx";
import { SectionHeading } from "../ui/Heading.jsx";
import { Card } from "../ui/Card.jsx";
import { Button } from "../ui/Button.jsx";
import { services } from "../../data/services.js";

export function ServicesOverview() {
  const featured = services.slice(0, 4);

  return (
    <Section id="services" className="bg-bg">
      <div className="space-y-block lg:space-y-blockLg">

        <SectionHeading
          eyebrow="Services"
          title="Lawn Care & Landscaping Services"
          subtitle="From weekly mowing to full landscape projects, Morgan Lawn Care & Landscaping offers services to keep your property looking its best."
        />
        <div className="grid gap-cardGap md:grid-cols-2">
          {featured.map((service) => (
            <Card key={service.id}>
              <div className="flex flex-col gap-3">
                  <img
    src={`/images/${service.image}`}
    alt={service.name}
    className="w-full h-40 object-cover rounded-xl"
  />
                <h3 className="text-base font-semibold text-text-primary">
                  {service.name}
                </h3>
                <p className="text-base text-text-secondary">{service.excerpt}</p>
                <Button
                  as="link"
                  to={`/services/${service.slug}`}
                  variant="ghost"
                  className="w-fit px-0 text-base font-semibold text-brand hover:text-brand-dark"
                >
                  Learn more →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-text-secondary">
            Need something specific? We can customize services for your
            property.
          </p>
          <div className="flex gap-3">
            <Button as="link" to="/services" variant="outline">
              View All Services
            </Button>
            <Button as="link" to="/contact">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
