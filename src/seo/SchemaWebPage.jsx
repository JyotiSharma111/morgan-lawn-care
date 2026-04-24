export function SchemaWebPage({ title, description, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": url,
    "description": description,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://morganlawncare.com/#website"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
