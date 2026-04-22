export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JGS-ELEC",
    image: "https://www.jgs-elec.com/JGS-ELEC_LOGO_SANS_FOND.PNG",
    logo: "https://www.jgs-elec.com/JGS-ELEC_LOGO_SANS_FOND.PNG",
    "@id": "https://www.jgs-elec.com",
    url: "https://www.jgs-elec.com",
    telephone: "+33768752487",
    email: "georgeais@jgs-elec.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "68 RUE DE LA JUSTICE",
      addressLocality: "Boussy-Saint-Antoine",
      postalCode: "91800",
      addressRegion: "Essonne",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.6895,
      longitude: 2.5312,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:30",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Boussy-Saint-Antoine",
      },
      {
        "@type": "AdministrativeArea",
        name: "Essonne",
      },
      {
        "@type": "AdministrativeArea",
        name: "Val-de-Marne",
      },
      {
        "@type": "AdministrativeArea",
        name: "Seine-et-Marne",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/jgs-elec/?originalSubdomain=fr",
      "https://www.facebook.com/people/Jgs-Elec/61584087266005/",
      "https://www.instagram.com/jgs_elec?igsh=djVleGk3bXN5aXBk",
    ],
    serviceType: [
      "Dépannage électrique",
      "Installation électrique",
      "Rénovation électrique",
      "Mise aux normes",
      "Domotique",
      "Vidéosurveillance",
      "Borne de recharge véhicule électrique",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
