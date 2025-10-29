'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-3xl mb-4">H&H Fragrances</h3>
            <p className="font-lato text-white/70 text-sm leading-relaxed">
              Crafting extraordinary olfactory experiences since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-lato font-bold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Shop', 'About', 'Our Story', 'Ingredients', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="font-lato text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-lato font-bold text-sm uppercase tracking-wide mb-4">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping & Returns', 'FAQ', 'Size Guide', 'Track Order'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-lato text-white/70 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-lato font-bold text-sm uppercase tracking-wide mb-4">
              Newsletter
            </h4>
            <p className="font-lato text-white/70 text-sm mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-lato text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple hover:bg-gold text-white p-2 rounded-full transition-colors"
              >
                <Mail size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-lato text-white/60 text-sm">
            © {currentYear} H&H Fragrances. All rights reserved.
          </p>

          <div className="flex gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/70 hover:text-gold transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
