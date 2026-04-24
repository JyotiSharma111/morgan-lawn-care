import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { Section } from "../components/ui/Section.jsx";
import { SectionHeading } from "../components/ui/Heading.jsx";
import { Card } from "../components/ui/Card.jsx";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Morgan Lawn Care & Landscaping | Providence Village TX</title>
        <meta
          name="description"
          content="Learn about Morgan Lawn Care & Landscaping, a local, owner-operated lawn care company serving Providence Village, Little Elm, Aubrey, and surrounding North Texas communities."
        />
      </Helmet>
      <SchemaLocalBusiness />
      <Section className="bg-bg">
        <div className="space-y-block lg:space-y-blockLg">

          <SectionHeading
            eyebrow="About"
            title="Local Lawn Care, Done the Right Way"
            subtitle="Morgan Lawn Care & Landscaping is a local, owner-operated business focused on reliable service, clear communication, and quality work for every yard."
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-base text-text-secondary">
              <p>
                We started Morgan Lawn Care & Landscaping with a simple goal:
                give homeowners in Providence Village and nearby communities a
                lawn care partner they can actually rely on. That means showing
                up when we say we will, doing the job right, and treating every
                property with respect.
              </p>
              <p>
                From weekly mowing routes to one-time clean-ups and landscape
                projects, we focus on the details—clean edging, thorough
                trimming, and full clean-up after every visit. We want you to
                feel proud every time you pull into your driveway.
              </p>
              <p>
                Because we’re local, we understand North Texas lawns, soil, and
                weather. We know how quickly grass can grow in the season and
                how important it is to stay ahead of weeds and overgrowth.
              </p>
            </div>
            <Card>
              <div className="space-y-3 text-base text-text-secondary">
                <h2 className="text-base font-semibold text-text-primary">
                  What You Can Expect
                </h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Clear communication and easy scheduling</li>
                  <li>Respect for your property, gates, and pets</li>
                  <li>Consistent, quality work every visit</li>
                  <li>Honest recommendations—no pressure or upselling</li>
                  <li>Local knowledge of North Texas lawns and landscapes</li>
                </ul>
                <p className="pt-2 text-base text-text-secondary">
                  Whether you need ongoing lawn maintenance or help with a
                  one-time project, we’d be glad to take a look and provide a
                  quote.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
