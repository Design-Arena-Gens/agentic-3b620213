'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Midnight Essence',
    category: 'Eau de Parfum',
    price: 185,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    notes: ['Bergamot', 'Jasmine', 'Sandalwood'],
    description: 'A sophisticated blend of citrus and warm woods',
  },
  {
    id: 2,
    name: 'Royal Oud',
    category: 'Eau de Parfum',
    price: 225,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    notes: ['Oud', 'Rose', 'Amber'],
    description: 'Luxurious oriental fragrance with precious oud',
  },
  {
    id: 3,
    name: 'Garden Dreams',
    category: 'Eau de Toilette',
    price: 145,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59176?q=80&w=800&auto=format&fit=crop',
    notes: ['Peony', 'Lily', 'Musk'],
    description: 'Fresh floral bouquet perfect for everyday wear',
  },
  {
    id: 4,
    name: 'Velvet Noir',
    category: 'Eau de Parfum',
    price: 195,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop',
    notes: ['Vanilla', 'Patchouli', 'Tonka'],
    description: 'Deep, sensual fragrance with gourmand notes',
  },
  {
    id: 5,
    name: 'Coastal Breeze',
    category: 'Eau de Toilette',
    price: 165,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop',
    notes: ['Sea Salt', 'Driftwood', 'Citrus'],
    description: 'Refreshing aquatic scent inspired by the ocean',
  },
  {
    id: 6,
    name: 'Golden Hour',
    category: 'Eau de Parfum',
    price: 205,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop',
    notes: ['Saffron', 'Leather', 'Cedar'],
    description: 'Warm, spicy fragrance for confident individuals',
  },
];

const categories = ['All', 'Eau de Parfum', 'Eau de Toilette'];
const priceRanges = ['All', '$0-$150', '$150-$200', '$200+'];
const notes = ['All', 'Floral', 'Woody', 'Citrus', 'Oriental'];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedNote, setSelectedNote] = useState('All');

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;

    let priceMatch = true;
    if (selectedPrice === '$0-$150') priceMatch = product.price <= 150;
    else if (selectedPrice === '$150-$200') priceMatch = product.price > 150 && product.price <= 200;
    else if (selectedPrice === '$200+') priceMatch = product.price > 200;

    const noteMatch = selectedNote === 'All' || product.notes.some(note =>
      note.toLowerCase().includes(selectedNote.toLowerCase())
    );

    return categoryMatch && priceMatch && noteMatch;
  });

  return (
    <section id="shop" className="py-24 px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            Our Collection
          </h2>
          <p className="font-lato text-lg text-charcoal/70 max-w-2xl mx-auto">
            Explore our curated selection of premium fragrances, each crafted to perfection
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-8 justify-center"
        >
          {/* Category Filter */}
          <div>
            <label className="font-lato text-sm font-bold text-charcoal mb-3 block">
              CATEGORY
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-lato text-sm transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-purple text-white shadow-lg'
                      : 'bg-white text-charcoal hover:bg-purple/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <label className="font-lato text-sm font-bold text-charcoal mb-3 block">
              PRICE RANGE
            </label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedPrice(range)}
                  className={`px-5 py-2 rounded-full font-lato text-sm transition-all duration-300 ${
                    selectedPrice === range
                      ? 'bg-gold text-charcoal shadow-lg'
                      : 'bg-white text-charcoal hover:bg-gold/10'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Note Filter */}
          <div>
            <label className="font-lato text-sm font-bold text-charcoal mb-3 block">
              FRAGRANCE NOTES
            </label>
            <div className="flex flex-wrap gap-2">
              {notes.map((note) => (
                <button
                  key={note}
                  onClick={() => setSelectedNote(note)}
                  className={`px-5 py-2 rounded-full font-lato text-sm transition-all duration-300 ${
                    selectedNote === note
                      ? 'bg-purple text-white shadow-lg'
                      : 'bg-white text-charcoal hover:bg-purple/10'
                  }`}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-charcoal/60 font-lato text-lg mt-12"
          >
            No products match your filters. Try adjusting your selection.
          </motion.p>
        )}
      </div>
    </section>
  );
}
