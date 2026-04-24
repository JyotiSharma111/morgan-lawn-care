import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { Section } from "../components/ui/Section.jsx";
import { SectionHeading } from "../components/ui/Heading.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Lawn Care & Landscaping Services | Morgan Lawn Care</title>
        <meta
          name="description"
          content="Explore lawn mowing, shrub trimming, clean-ups, mulch installation, weed control, tree trimming, and sod installation services from Morgan Lawn Care & Landscaping in Providence Village, TX."
        />
      </Helmet>
      <SchemaLocalBusiness />

      <SchemaWebPage
        title="Our Lawn Care & Landscaping Services"
        description="Explore our lawn care, mowing, landscaping, and yard maintenance services."
        url="https://morganlawncare.com/services"
      />

      <SchemaBreadcrumbs
        items={[
          { name: "Home", url: "https://morganlawncare.com" },
          { name: "Services", url: "https://morganlawncare.com/services" },
        ]}
      />

      {services.map((service) => (
        <SchemaService
          key={service.slug}
          name={service.name}
          description={service.description}
          url={`https://morganlawncare.com/services/${service.slug}`}
        />
      ))}

      <Section className="bg-bg">
        <div className="space-y-block lg:space-y-blockLg">
          <SectionHeading
            eyebrow="Services"
            title="Lawn Care & Landscaping Services"
            subtitle="Morgan Lawn Care & Landscaping offers a full range of services to keep your yard clean, healthy, and inviting."
          />
          <div className="grid gap-cardGap md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id}>
                <div className="flex flex-col gap-3">
                  <h2 className="text-base font-semibold text-text-primary">
                    {service.name}
                  </h2>
                  <p className="text-base text-text-secondary">
                    {service.excerpt}
                  </p>
                  <Button
                    as="link"
                    to={`/services/${service.slug}`}
                    variant="ghost"
                    className="w-fit px-0 text-base font-semibold text-brand hover:text-brand-dark"
                  >
                    View service details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-text-secondary">
              Not sure which service you need? We can walk the property and
              recommend the right options.
            </p>
            <Button as="link" to="/contact">
              Request a Free Quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
