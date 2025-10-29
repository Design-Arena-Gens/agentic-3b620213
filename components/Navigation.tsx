'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Shop', 'About', 'Our Story', 'Ingredients', 'Blog'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-playfair text-2xl lg:text-3xl font-bold text-white tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            H&H Fragrances
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-gold transition-colors duration-300 text-base font-lato font-light tracking-wide"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gold transition-colors"
            >
              <Search size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gold transition-colors"
            >
              <ShoppingBag size={24} />
            </motion.button>
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-charcoal/98 backdrop-blur-md"
        >
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-white hover:text-gold transition-colors text-lg font-lato"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
