type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
};

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,

    description,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },

    author: {
      "@type": "Organization",
      name: "Real Estate Media House",
      url: "https://www.realestatemediahouse.net",
    },

    publisher: {
      "@type": "Organization",
      name: "Real Estate Media House",
      url: "https://www.realestatemediahouse.net",
    },

    ...(datePublished
      ? {
          datePublished,
        }
      : {}),

    ...(dateModified
      ? {
          dateModified,
        }
      : {}),
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