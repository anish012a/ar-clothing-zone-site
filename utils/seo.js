/**
 * SEO & Structured Data Utilities
 * Location: utils/seo.js
 * 
 * Utilities for SEO optimization and JSON-LD structured data
 */

/**
 * Generate Organization Schema (JSON-LD)
 * Helps search engines understand your organization
 */
export const generateOrganizationSchema = (config) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: config.company.name,
  description: config.company.description,
  url: config.appUrl,
  logo: `${config.appUrl}/logo.png`,
  sameAs: [
    config.social.facebook,
    config.social.instagram,
    config.social.tiktok,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: config.contact.phone,
    contactType: 'Customer Service',
    email: config.contact.email,
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NP',
    addressLocality: 'Nepal',
  },
});

/**
 * Generate Local Business Schema (JSON-LD)
 * Improves local search visibility
 */
export const generateLocalBusinessSchema = (config) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: config.company.name,
  description: config.company.description,
  url: config.appUrl,
  telephone: config.contact.phone,
  email: config.contact.email,
  areaServed: 'NP',
  image: `${config.appUrl}/images/og-image.png`,
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    config.social.facebook,
    config.social.instagram,
  ],
});

/**
 * Generate Product Schema (JSON-LD)
 * Use for product pages
 */
export const generateProductSchema = (product) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: product.name,
  image: product.image,
  description: product.description,
  brand: {
    '@type': 'Brand',
    name: 'AR Clothing Zone',
  },
  offers: {
    '@type': 'Offer',
    url: product.url,
    priceCurrency: 'NPR',
    price: product.price,
    availability: 'https://schema.org/InStock',
  },
});

/**
 * Generate Breadcrumb Schema (JSON-LD)
 * Improves navigation in search results
 */
export const generateBreadcrumbSchema = (breadcrumbs, baseUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${baseUrl}${crumb.url}`,
  })),
});

/**
 * Generate FAQPage Schema (JSON-LD)
 * Use for FAQ sections
 */
export const generateFaqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * Meta Tags Helper
 * Returns standard meta tags for a page
 */
export const getMetaTags = ({
  title,
  description,
  image = '/og-image.png',
  url = '',
  type = 'website',
}) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    image,
    url,
    type,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    image,
  },
});

export default {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateProductSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
  getMetaTags,
};
