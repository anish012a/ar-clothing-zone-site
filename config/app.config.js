/**
 * Application Configuration
 * Location: config/app.config.ts or .js
 * 
 * Centralized configuration for the application
 * Use environment variables defined in .env.local
 */

export const appConfig = {
  // App URLs
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  
  // Navigation Links
  links: {
    shop: process.env.NEXT_PUBLIC_SHOP_URL || '/shop',
    products: process.env.NEXT_PUBLIC_PRODUCTS_URL || '/products',
    customDesign: process.env.NEXT_PUBLIC_CUSTOM_DESIGN_URL || '/custom-design',
    contact: process.env.NEXT_PUBLIC_CONTACT_URL || '/contact',
    about: '/about',
  },

  // Social Media Links
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://www.tiktok.com',
  },

  // Contact Information
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@arclothingzone.com',
    phone: process.env.NEXT_PUBLIC_PHONE || '+977-1-4123456',
  },

  // Company Information
  company: {
    name: 'AR Clothing Zone',
    description: 'Nepal-based custom clothing brand for Gen Z, anime enthusiasts, and streetwear lovers.',
    year: new Date().getFullYear(),
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  // Feature Flags
  features: {
    enableChat: true,
    enableAnalytics: true,
    enableErrorTracking: false,
  },
};

export default appConfig;
