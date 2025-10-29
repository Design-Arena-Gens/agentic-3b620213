'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120vh]"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight"
        >
          Elegance in Every Note
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-lato text-lg md:text-xl text-white/90 mb-12 max-w-2xl"
        >
          Discover our signature collection of artisanal fragrances,
          crafted with the world's finest ingredients
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.05, backgroundColor: '#FFD700' }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple hover:bg-gold text-white font-lato px-12 py-4 rounded-full text-lg tracking-wide transition-all duration-300 shadow-2xl"
        >
          Explore Collection
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
