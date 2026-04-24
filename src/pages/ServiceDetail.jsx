import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { SchemaService } from "../seo/SchemaService.jsx";
import { Section } from "../components/ui/Section.jsx";
import { SectionHeading } from "../components/ui/Heading.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";
import { getServiceBySlug, services } from "../data/services.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Section className="bg-bg">
        <p className="text-base text-text-secondary">
          Service not found.{" "}
          <Link to="/services" className="text-brand">
            View all services
          </Link>
          .
        </p>
      </Section>
    );
  }

  const title = `${service.name} | Morgan Lawn Care & Landscaping`;
  const description =
    service.description ||
    `Learn more about ${service.name} from Morgan Lawn Care & Landscaping in Providence Village, TX.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <SchemaLocalBusiness />
      <SchemaService service={service} />
      <Section className="bg-bg">
        <div className="space-y-block lg:space-y-blockLg">

          <SectionHeading
            eyebrow="Service Detail"
            title={service.name}
            subtitle={service.excerpt}
          />
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="space-y-4 text-base text-text-secondary">
              <p>{service.description}</p>
              <Card>
                <h2 className="text-base font-semibold text-text-primary">
                  What’s included
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-text-secondary">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <p className="text-base text-text-secondary">
                Service availability may vary by property size and layout. We’ll
                walk your yard, answer questions, and provide a clear quote
                before any work begins.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <h2 className="text-base font-semibold text-text-primary">
                  Get a quote for {service.shortName}
                </h2>
                <p className="mt-2 text-xs text-text-secondary">
                  Share your address and what you’d like help with. We’ll follow
                  up with pricing and availability.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <Button as="a" href="tel:+14699126553">
                    Call Now for Pricing
                  </Button>
                  <Button as="link" to="/contact" variant="outline">
                    Request a Quote Online
                  </Button>
                </div>
              </Card>
              <Card>
                <h2 className="text-base font-semibold text-text-primary">
                  Other services you may need
                </h2>
                <ul className="mt-2 space-y-2 text-xs text-text-secondary">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="text-brand hover:text-brand-dark"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
