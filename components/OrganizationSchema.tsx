export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Real Estate Media House",
    url: "https://www.realestatemediahouse.net",
    description:
      "Interactive cabinetry presentation support for cabinet makers, including 3D visualisation, 360 degree panoramas, presentation sheets and private client project pages.",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    knowsAbout: [
      "Cabinet making visualisation",
      "Joinery visualisation",
      "Kitchen visualisation",
      "Bathroom cabinetry visualisation",
      "Interactive 360 degree presentations",
      "Cabinetry presentation design",
      "3D rendering for cabinet makers",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}