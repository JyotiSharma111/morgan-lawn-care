import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { Section } from "../components/ui/Section.jsx";
import { SectionHeading } from "../components/ui/Heading.jsx";
import { ContactForm } from "../components/layout/ContactForm.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Morgan Lawn Care & Landscaping | Free Quote</title>
        <meta
          name="description"
          content="Contact Morgan Lawn Care & Landscaping for a free lawn care or landscaping quote in Providence Village, Little Elm, Aubrey, and surrounding North Texas areas."
        />
      </Helmet>
      <SchemaLocalBusiness />

      <SchemaWebPage
        title="Contact Morgan Lawn Care & Landscaping"
        description="Request a free lawn care quote."
        url="https://morganlawncare.com/contact"
      />

      <SchemaBreadcrumbs
        items={[
          { name: "Home", url: "https://morganlawncare.com" },
          { name: "Contact", url: "https://morganlawncare.com/contact" },
        ]}
      />

      <Section className="bg-bg">
        <div className="space-y-block lg:space-y-blockLg">
          <SectionHeading
            eyebrow="Contact"
            title="Request a Free Lawn Care Quote"
            subtitle="Call, text, or send a quick message and we’ll follow up with pricing and availability for your property."
          />
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-start">
            <ContactForm />
            <div className="space-y-4">
              <Card>
                <h2 className="text-base font-semibold text-text-primary">
                  Contact Details
                </h2>
                <div className="mt-3 space-y-2 text-base text-text-secondary">
                  <p>
                    <span className="font-semibold text-text-primary">
                      Phone:
                    </span>{" "}
                    <a href="tel:+14699126553" className="text-brand">
                      (469) 912-6553
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">
                      Address:
                    </span>{" "}
                    9829 Cherry Hill Ln, Providence Village, TX 76227
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">
                      Hours:
                    </span>{" "}
                    Mon–Sat, 8:00 AM – 6:00 PM
                  </p>
                </div>
                <Button as="a" href="tel:+14699126553" className="mt-4 w-full">
                  Call Now
                </Button>
              </Card>
              <Card>
                <h2 className="text-base font-semibold text-text-primary">
                  Service Area Map
                </h2>

                <div className="mt-3 rounded-xl overflow-hidden border border-border-subtle shadow-soft">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.2271688648398!2d-96.96545242430997!3d33.234351560474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c37977674f32b%3A0xf717fd2f05522a0a!2sMorgan%20Lawn%20Care%20%26%20Landscaping!5e0!3m2!1sen!2sus!4v1776983441543!5m2!1sen!2sus"
                    className="w-full h-48 md:h-64"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
