import { Helmet } from "react-helmet-async";
import { SchemaLocalBusiness } from "../seo/SchemaLocalBusiness.jsx";
import { SchemaWebsite } from "../seo/SchemaWebsite.jsx";
import { SchemaWebPage } from "../seo/SchemaWebPage.jsx";
import { SchemaBreadcrumbs } from "../seo/SchemaBreadcrumbs.jsx";
import { SchemaService } from "../seo/SchemaService.jsx";
import { Hero } from "../components/home/Hero.jsx";
import { ServicesOverview } from "../components/home/ServicesOverview.jsx";
import { WhyChooseUs } from "../components/home/WhyChooseUs.jsx";
import { Reviews } from "../components/home/Reviews.jsx";
import { ServiceAreasSection } from "../components/home/ServiceAreas.jsx";
import { Process } from "../components/home/Process.jsx";
import { FinalCTA } from "../components/home/FinalCTA.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Lawn Care Providence Village TX | Morgan Lawn Care & Landscaping
        </title>
        <meta
          name="description"
          content="Morgan Lawn Care & Landscaping provides reliable lawn mowing, landscaping, and yard clean-ups in Providence Village, Little Elm, Aubrey, and nearby North Texas communities."
        />
      </Helmet>
      <SchemaWebsite />
      <SchemaLocalBusiness />
      <SchemaWebPage
        title="Morgan Lawn Care & Landscaping"
        description="Professional lawn care and landscaping services in North Texas."
        url="https://morganlawncare.com"
      />
      <SchemaBreadcrumbs
        items={[{ name: "Home", url: "https://morganlawncare.com" }]}
      />

      {/* One service schema per service */}
      <SchemaService
        name="Lawn Mowing"
        description="Weekly and bi-weekly lawn mowing services."
        url="https://morganlawncare.com/services/lawn-mowing"
      />
      <SchemaService
        name="Landscaping"
        description="Professional landscaping design and maintenance."
        url="https://morganlawncare.com/services/landscaping"
      />

      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Reviews />
      <ServiceAreasSection />
      <Process />
      <FinalCTA />
    </>
  );
}
