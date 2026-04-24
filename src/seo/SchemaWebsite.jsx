export function SchemaWebsite() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://morganlawncare.com/#website",
    "url": "https://morganlawncare.com",
    "name": "Morgan Lawn Care & Landscaping",
    "description":
      "Professional lawn care and landscaping services in Providence Village, Little Elm, Aubrey, and surrounding North Texas areas.",
    "publisher": {
      "@type": "Organization",
      "name": "Morgan Lawn Care & Landscaping",
      "logo": {
        "@type": "ImageObject",
        "url": "https://morganlawncare.com/images/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://morganlawncare.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
