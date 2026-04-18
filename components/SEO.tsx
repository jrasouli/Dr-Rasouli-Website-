import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  item: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: string | string[];
  breadcrumbs?: Breadcrumb[];
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath, schema, breadcrumbs }) => {
  const domain = 'https://www.drrasouli.com';
  const canonicalUrl = canonicalPath ? `${domain}${canonicalPath}` : domain;
  
  // If multiple schemas are provided as an array, map them to multiple scripts
  const schemaScripts = Array.isArray(schema) ? schema : schema ? [schema] : [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": b.name,
        "item": b.item.startsWith('http') ? b.item : `${domain}${b.item}`
      }))
    });
    schemaScripts.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${domain}/images/dr-rasouli-og-image.jpg`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema.org Structured Data */}
      {schemaScripts.map((schemaContent, index) => (
        <script type="application/ld+json" key={index}>
          {schemaContent}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
