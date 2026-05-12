/**
 * About Page
 * Location: pages/about.js or app/about/page.js (depending on Next.js version)
 * 
 * This is the main page that exports the About component.
 * For Next.js App Router (v13+), rename this to page.js and place in app/about/ folder
 * For Next.js Pages Router, place this in pages/ folder as about.js
 */

import About from '../components/About';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | AR Clothing Zone - Custom Anime Streetwear Nepal</title>
        <meta
          name="description"
          content="Learn about AR Clothing Zone, Nepal's premier custom clothing brand for Gen Z. Anime-inspired, affordable, and stylish personalized fashion."
        />
        <meta
          name="keywords"
          content="custom clothing Nepal, anime streetwear, personalized hoodies, Nepal fashion brand"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About AR Clothing Zone" />
        <meta
          property="og:description"
          content="Custom fashion for Nepal's trendsetters. Express yourself with AR Clothing Zone."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <About />
      </main>
    </>
  );
}

/**
 * SEO Optimization Notes:
 * - Structured data (JSON-LD) can be added for schema.org markup
 * - Images should have alt text (already implemented)
 * - Mobile-first responsive design ensures good Core Web Vitals
 * - Semantic HTML structure improves SEO
 * - Social media meta tags help with sharing
 */
