import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Zap,
  Truck,
  DollarSign,
  Palette,
  Headphones,
  Star,
  Heart,
  Facebook,
  Instagram,
  Music,
  Check
} from 'lucide-react';

// Reusable Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

// Hero Section Component
const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
  >
    {/* Background Image/Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop")',
        opacity: 0.3,
      }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.h1
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
      >
        Wear Your Style.
        <br />
        <span className="text-red-600">Own Your Vibe.</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Custom clothing, personalized designs, and anime-inspired streetwear crafted
        specifically for Gen Z culture lovers in Nepal.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="flex flex-col md:flex-row gap-6 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors"
        >
          Shop Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-red-600 text-red-600 font-bold text-lg rounded-lg hover:bg-red-600 hover:text-white transition-colors"
        >
          Customize Your Outfit
        </motion.button>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
    >
      <div className="text-white text-center">
        <p className="text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center">
          <motion.div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
      </div>
    </motion.div>
  </motion.section>
);

// Brand Story Section Component
const BrandStorySection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-20 bg-white"
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          variants={slideFromLeft}
          className="order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-red-600">Story</span>
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            AR Clothing Zone was born from a passion for custom fashion and a love for anime culture. We're a Nepal-based brand dedicated to bringing unique, personalized clothing to Gen Z trendsetters, students, anime enthusiasts, and style-conscious individuals across the country.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            What started as a small creative project has evolved into a movement. We believe everyone deserves the chance to express their personality through clothing that's affordable, high-quality, and distinctly theirs.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            From oversized hoodies and anime-inspired tees to custom couple apparel and personalized gifts, we deliver stylish fashion across Nepal with the same premium quality and attention to detail that defines the AR Clothing Zone experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={slideFromRight}
          className="order-1 md:order-2"
        >
          <div className="relative h-96 md:h-full bg-black rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555820552-72935f85db4e?w=600&h=600&fit=crop"
              alt="AR Clothing Zone Team"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Mission & Vision Section Component
const MissionVisionSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-20 bg-black text-white"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Mission & <span className="text-red-600">Vision</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Mission Card */}
        <motion.div
          variants={scaleVariants}
          whileHover={{ y: -10 }}
          className="bg-gray-900 rounded-2xl p-8 border border-red-600/30 hover:border-red-600 transition-colors"
        >
          <div className="flex items-center mb-4">
            <Zap className="w-12 h-12 text-red-600 mr-4" />
            <h3 className="text-2xl font-bold">Mission</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            To help people express their personality through affordable and creative
            custom fashion. We empower individuals to wear what makes them feel
            confident and unique, breaking boundaries with personalized designs
            across Nepal.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          variants={scaleVariants}
          whileHover={{ y: -10 }}
          className="bg-gray-900 rounded-2xl p-8 border border-red-600/30 hover:border-red-600 transition-colors"
        >
          <div className="flex items-center mb-4">
            <Star className="w-12 h-12 text-red-600 mr-4" />
            <h3 className="text-2xl font-bold">Vision</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            To become one of Nepal's leading youth-focused custom streetwear brands,
            recognized for innovation, quality, and customer excellence. We aspire to
            inspire millions to own their style and redefine what custom fashion means
            in South Asia.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Premium Quality Printing',
      description: 'High-quality DTG and screen printing that lasts',
    },
    {
      icon: Truck,
      title: 'Delivery All Over Nepal',
      description: 'Fast and reliable shipping to every corner of Nepal',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Premium quality at prices that respect your budget',
    },
    {
      icon: Palette,
      title: 'Personalized Designs',
      description: 'Custom names, photos, logos, and unique artwork',
    },
    {
      icon: Music,
      title: 'Trendy Anime & Streetwear',
      description: 'Curated collections inspired by anime and street culture',
    },
    {
      icon: Headphones,
      title: 'Fast Customer Support',
      description: 'Responsive support team ready to help anytime',
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
        >
          Why Choose <span className="text-red-600">AR Clothing Zone</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(220, 38, 38, 0.1)',
                }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-600 transition-all"
              >
                <Icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Product Quality Section Component
const ProductQualitySection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-20 bg-black text-white"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Our <span className="text-red-600">Quality Standards</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={slideFromLeft}
          className="relative h-96"
        >
          <div className="relative h-full bg-gray-800 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop"
              alt="Product Quality"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={slideFromRight}
        >
          <div className="space-y-6">
            {[
              {
                title: 'High-Quality Printing',
                description:
                  'We use advanced DTG and screen printing technology to ensure vibrant, long-lasting prints that withstand multiple washes.',
              },
              {
                title: 'Premium Fabrics',
                description:
                  'Comfortable, breathable cotton and cotton-blend fabrics that feel great on the skin and maintain their shape.',
              },
              {
                title: 'Durable Construction',
                description:
                  'Reinforced stitching and quality seams ensure your custom pieces last for years, not months.',
              },
              {
                title: 'Modern Oversized Fit',
                description:
                  'Contemporary oversized silhouettes that are comfortable and on-trend, perfect for Gen Z style.',
              },
              {
                title: 'Attention to Detail',
                description:
                  'Every product undergoes quality control to meet our premium standards before shipping to you.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Customization Section Component
const CustomizationSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-20 bg-white"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-black"
      >
        Personalized <span className="text-red-600">Customization</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto"
      >
        Create something uniquely yours. From custom names to personalized designs,
        we bring your vision to life.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {[
          {
            title: 'Upload Your Design',
            icon: '🎨',
            description: 'Submit your own artwork or let our designers bring your ideas to life',
          },
          {
            title: 'Custom Names & Text',
            icon: '✍️',
            description: 'Add your name, initials, or custom text in various fonts and styles',
          },
          {
            title: 'Photos & Logos',
            icon: '📸',
            description: 'Personalize with your favorite photos or brand logos',
          },
          {
            title: 'Personalized Gifts',
            icon: '🎁',
            description: 'Create memorable gifts for friends, family, or special occasions',
          },
          {
            title: 'Custom Couple Hoodies',
            icon: '👫',
            description: 'Matching designs for couples with personalized touches',
          },
          {
            title: 'Business Logo Printing',
            icon: '🏢',
            description: 'Bulk orders for company merch with your business branding',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-black text-white rounded-xl p-8 text-center hover:shadow-xl transition-all border border-gray-800 hover:border-red-600"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        variants={itemVariants}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors"
        >
          Create Your Custom Design
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

// Trust Building Section Component
const TrustSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Anime Enthusiast',
      content:
        'The quality of the hoodie is amazing! Custom design turned out exactly as I imagined. Highly recommend AR Clothing Zone.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Fashion Blogger',
      content:
        'Finally found a brand that understands Gen Z fashion. The oversized hoodies are comfy and stylish. Love their customer service!',
      rating: 5,
    },
    {
      name: 'Amit Poudel',
      role: 'Student',
      content:
        'Ordered a custom couple hoodie for my girlfriend. Delivery was fast and the printing quality is incredible!',
      rating: 5,
    },
  ];

  const stats = [
    { number: '2500+', label: 'Happy Customers' },
    { number: '4800+', label: 'Orders Delivered' },
    { number: '1200+', label: 'Custom Designs' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Trusted by <span className="text-red-600">Nepal's Fashion Lovers</span>
        </motion.h2>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-red-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            What Our Customers Say
          </h3>

          {/* Active Testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-900 rounded-2xl p-8 border border-red-600/30 mb-8"
          >
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[activeTestimonial].rating
                      ? 'text-red-600 fill-red-600'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-300 text-lg mb-6 italic">
              "{testimonials[activeTestimonial].content}"
            </p>

            <div>
              <p className="font-bold text-white">
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-gray-400">
                {testimonials[activeTestimonial].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === index
                    ? 'bg-red-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// CTA Banner Section Component
const CTABannerSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white"
  >
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Ready to Wear Something Unique?
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-xl mb-12 max-w-2xl mx-auto opacity-90"
      >
        Join thousands of satisfied customers and express your style with custom
        designs made just for you.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-6 justify-center"
      >
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-colors"
        >
          Order Now
        </motion.button>
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center gap-2"
        >
          <Facebook className="w-5 h-5" />
          Message on Facebook
        </motion.a>
      </motion.div>
    </div>
  </motion.section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-black text-white py-16 border-t border-gray-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            AR Clothing Zone
          </h3>
          <p className="text-gray-400">
            Custom fashion for Nepal's trendsetters. Express yourself.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Custom Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                About Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-bold mb-4">Get in Touch</h4>
          <p className="text-gray-400 mb-4">
            📧 info@arclothingzone.com
          </p>
          <p className="text-gray-400 mb-6">
            📱 +977-1-4123456
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2, color: '#dc2626' }}
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#dc2626' }}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#dc2626' }}
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <Music className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 pt-8 text-center text-gray-400"
      >
        <p>
          © 2024 AR Clothing Zone. All rights reserved. |{' '}
          <a href="#" className="hover:text-red-600 transition-colors">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="hover:text-red-600 transition-colors">
            Terms of Service
          </a>
        </p>
      </motion.div>
    </div>
  </footer>
);

// Main About Component
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <HeroSection />
      <BrandStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <ProductQualitySection />
      <CustomizationSection />
      <TrustSection />
      <CTABannerSection />
      <Footer />
    </motion.div>
  );
}
