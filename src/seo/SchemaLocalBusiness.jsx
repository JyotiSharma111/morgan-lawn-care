export function SchemaLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://morganlawncare.com/#localbusiness",
    "name": "Morgan Lawn Care & Landscaping",
    "image": "https://morganlawncare.com/images/hero.jpg",
    "url": "https://morganlawncare.com",
    "telephone": "+14699126553",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9829 Cherry Hill Ln",
      "addressLocality": "Providence Village",
      "addressRegion": "TX",
      "postalCode": "76227",
      "addressCountry": "US"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.234351560474,
      "longitude": -96.96545242430997
    },

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],

    "priceRange": "$$",

    "description":
      "Morgan Lawn Care & Landscaping provides lawn mowing, landscaping, trimming, cleanup, and yard maintenance services in Providence Village, Little Elm, Aubrey, and surrounding North Texas areas.",

    "areaServed": [
      "Providence Village",
      "Little Elm",
      "Aubrey",
      "Cross Roads",
      "Savannah",
      "Frisco",
      "Denton",
      "North Texas"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
