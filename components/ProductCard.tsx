'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Maximize2, RotateCw } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  notes: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [show360, setShow360] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent flex flex-col items-center justify-end p-6"
        >
          <div className="flex gap-4 mb-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 hover:bg-white text-charcoal p-3 rounded-full shadow-xl transition-all"
              title="Zoom"
            >
              <Maximize2 size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShow360(!show360)}
              className="bg-white/90 hover:bg-white text-charcoal p-3 rounded-full shadow-xl transition-all"
              title="360° View"
            >
              <RotateCw size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* 360 View Badge */}
        {show360 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-2 rounded-full font-lato text-sm font-bold shadow-lg"
          >
            360° VIEW
          </motion.div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-playfair text-2xl text-charcoal mb-1">
              {product.name}
            </h3>
            <p className="font-lato text-sm text-charcoal/60 uppercase tracking-wide">
              {product.category}
            </p>
          </div>
          <span className="font-playfair text-2xl text-purple">
            ${product.price}
          </span>
        </div>

        <p className="font-lato text-charcoal/70 text-sm mb-4">
          {product.description}
        </p>

        {/* Fragrance Notes */}
        <div className="mb-5">
          <p className="font-lato text-xs text-charcoal/60 uppercase tracking-wide mb-2">
            Notes
          </p>
          <div className="flex flex-wrap gap-2">
            {product.notes.map((note) => (
              <span
                key={note}
                className="bg-offwhite text-charcoal px-3 py-1 rounded-full text-xs font-lato"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple hover:bg-gold text-white font-lato py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
