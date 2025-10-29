'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import AboutSection from '@/components/AboutSection';
import IngredientsSection from '@/components/IngredientsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductGrid />
      <AboutSection />
      <IngredientsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
