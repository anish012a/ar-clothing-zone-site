/**
 * Navbar Component
 * Location: components/Navbar.jsx
 * 
 * Responsive navigation bar for the website
 * Can be used on all pages
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import appConfig from '../config/app.config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Shop', href: appConfig.links.shop },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: appConfig.links.about },
    { label: 'Contact', href: appConfig.links.contact },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            AR Clothing Zone
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-red-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={appConfig.links.customDesign}
              className="px-6 py-2 bg-red-600 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Design Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 border-t border-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={appConfig.links.customDesign}
              className="block w-full mt-4 px-6 py-3 bg-red-600 text-center rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Design Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
