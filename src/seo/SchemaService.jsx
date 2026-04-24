import React from "react";
import { Helmet } from "react-helmet-async";

export function SchemaService({ service }) {
  if (!service) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Morgan Lawn Care & Landscaping",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9829 Cherry Hill Ln",
        addressLocality: "Providence Village",
        addressRegion: "TX",
        postalCode: "76227",
        addressCountry: "US",
      },
      telephone: "+14699126553",
    },
    areaServed: [
      "Providence Village, TX",
      "Little Elm, TX",
      "Aubrey, TX",
      "Prosper, TX",
      "Frisco, TX",
      "Cross Roads, TX",
      "The Colony, TX",
      "Oak Point, TX",
    ],
    serviceType: service.name,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
