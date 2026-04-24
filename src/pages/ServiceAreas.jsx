import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { Section } from "../components/ui/Section.jsx";
import { SectionHeading } from "../components/ui/Heading.jsx";
import { serviceAreas } from "../data/serviceAreas.js";
import { Button } from "../components/ui/Button.jsx";

export default function ServiceAreas() {
  return (
    <>
      <Helmet>
        <title>Service Areas | Morgan Lawn Care & Landscaping</title>
        <meta
          name="description"
          content="Morgan Lawn Care & Landscaping serves Providence Village, Little Elm, Aubrey, Prosper, Frisco, Cross Roads, The Colony, Oak Point, and nearby North Texas communities."
        />
      </Helmet>
      <SchemaLocalBusiness />
      <Section className="bg-bg-soft">
        <div className="space-y-block lg:space-y-blockLg">

          <SectionHeading
            eyebrow="Service Areas"
            title="Lawn Care & Landscaping in Providence Village and North Texas"
            subtitle="Based in Providence Village, Morgan Lawn Care & Landscaping serves nearby neighborhoods and communities across North Texas."
          />
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-start">
            <div className="space-y-4 text-base text-text-secondary">
              <p>
                We focus on serving homeowners in and around Providence Village,
                TX. If you’re nearby and don’t see your city listed, feel free
                to reach out—we may still be able to help or recommend options.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border-subtle bg-bg px-3 py-1 text-xs font-medium text-text-secondary shadow-soft"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-text-muted">
                Target keywords: lawn care Providence Village TX, lawn mowing
                Little Elm TX, landscaping Aubrey TX, landscaper near me.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-bg" />
              <p className="text-xs text-text-secondary">
                This area can be replaced with an embedded Google Map centered
                on Providence Village, TX, highlighting your service radius.
              </p>
              <Button as="link" to="/contact">
                Check Availability in Your Area
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
