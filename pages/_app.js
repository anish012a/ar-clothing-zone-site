/**
 * App Layout Component
 * Location: pages/_app.js (Pages Router) or app/layout.js (App Router)
 * 
 * Main layout wrapper for all pages in the application
 * Includes global styles, fonts, and common elements
 */

import '../styles/globals.css';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// Customize this layout as needed
export default function RootLayout({ Component, pageProps }) {
  const router = useRouter();

  // Page transition animation
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/brand-logo-cropped.png" />

        {/* Meta Tags */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />

        {/* Fonts (Optional - add custom fonts here) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Apple Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Analytics (Optional) */}
        {/* Add your analytics script here */}
      </Head>

      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-white"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

/**
 * If using Next.js App Router (v13+), use app/layout.js instead:
 * 
 * export const metadata = {
 *   title: 'AR Clothing Zone',
 *   description: 'Custom clothing and anime streetwear for Nepal',
 * };
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en">
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 */
