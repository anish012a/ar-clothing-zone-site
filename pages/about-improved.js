/**
 * Improved About Page with Configuration & SEO
 * Location: pages/about-improved.js
 * 
 * This is an enhanced version of the about page that:
 * - Uses centralized configuration
 * - Includes JSON-LD structured data
 * - Uses Next.js best practices
 */

import About from '../components/About';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '../utils/seo';
import appConfig from '../config/app.config';

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema(appConfig);
  const localBusinessSchema = generateLocalBusinessSchema(appConfig);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Us | AR Clothing Zone - Custom Anime Streetwear Nepal</title>
        <meta
          name="description"
          content="Learn about AR Clothing Zone, Nepal's premier custom clothing brand for Gen Z. Anime-inspired, affordable, and stylish personalized fashion."
        />
        <meta
          name="keywords"
          content="custom clothing Nepal, anime streetwear, personalized hoodies, Nepal fashion brand, Gen Z fashion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${appConfig.appUrl}/about`} />
        <meta property="og:title" content="About AR Clothing Zone" />
        <meta
          property="og:description"
          content="Custom fashion for Nepal's trendsetters. Express yourself with AR Clothing Zone."
        />
        <meta property="og:image" content={`${appConfig.appUrl}/og-image.png`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${appConfig.appUrl}/about`} />
        <meta property="twitter:title" content="About AR Clothing Zone" />
        <meta
          property="twitter:description"
          content="Custom fashion for Nepal's trendsetters. Express yourself with AR Clothing Zone."
        />
        <meta property="twitter:image" content={`${appConfig.appUrl}/og-image.png`} />

        {/* Canonical URL */}
        <link rel="canonical" href={`${appConfig.appUrl}/about`} />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>

      <Navbar />

      <main className="pt-20">
        <About />
      </main>
    </>
  );
}

/**
 * SEO Optimization Notes:
 * 
 * ✅ Structured data (JSON-LD) helps search engines understand content
 * ✅ Meta tags for social media sharing
 * ✅ Open Graph tags for Facebook/LinkedIn
 * ✅ Twitter Card tags for Twitter
 * ✅ Canonical URL to prevent duplicate content issues
 * ✅ Proper viewport for mobile
 * ✅ Robots meta tag for indexing
 * ✅ Semantic HTML structure (added by About component)
 * ✅ Alt text on images
 * ✅ Mobile-responsive design
 * ✅ Fast loading (optimized with Next.js)
 * 
 * For best results:
 * 1. Replace placeholder images with real ones
 * 2. Update meta descriptions with target keywords
 * 3. Ensure all images have descriptive alt text
 * 4. Add internal links to other pages
 * 5. Build backlinks from other websites
 */
