'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet, Flower2, Sparkles } from 'lucide-react';

const ingredients = [
  {
    name: 'Bulgarian Rose',
    origin: 'Bulgaria',
    description: 'The finest rose petals, harvested at dawn when their scent is most potent',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Agarwood (Oud)',
    origin: 'Southeast Asia',
    description: 'Precious resinous wood, aged to perfection for deep, complex notes',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Bergamot',
    origin: 'Calabria, Italy',
    description: 'Citrus essence cold-pressed from sun-ripened bergamot oranges',
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1582893351828-5103e87b2f66?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Tahitian Vanilla',
    origin: 'French Polynesia',
    description: 'Rich, creamy vanilla pods with complex fruity and floral undertones',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=800&auto=format&fit=crop',
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-24 px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            Premium Ingredients
          </h2>
          <p className="font-lato text-lg text-charcoal/70 max-w-3xl mx-auto">
            We source only the most exceptional ingredients from around the world,
            working directly with growers and distillers to ensure unparalleled quality
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <motion.img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-4">
                    <ingredient.icon className="text-purple" size={24} />
                  </div>
                  <h3 className="font-playfair text-3xl text-charcoal mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="font-lato text-sm text-purple uppercase tracking-wide mb-4">
                    {ingredient.origin}
                  </p>
                  <p className="font-lato text-charcoal/70 leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-lato text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Every ingredient is carefully selected and ethically sourced, ensuring
            the highest standards of quality and sustainability in every bottle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple hover:bg-gold text-white font-lato px-10 py-4 rounded-full transition-all duration-300 shadow-lg"
          >
            Learn More About Our Process
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
