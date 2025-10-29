'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
              Our Story
            </h2>
            <p className="font-lato text-lg text-charcoal/80 mb-6 leading-relaxed">
              Founded in 2010, H&H Fragrances was born from a passion for creating
              extraordinary olfactory experiences. Our master perfumers travel the world
              to source the finest ingredients, bringing you scents that tell stories
              and evoke emotions.
            </p>
            <p className="font-lato text-lg text-charcoal/80 mb-8 leading-relaxed">
              Each fragrance in our collection is meticulously crafted in our atelier,
              where tradition meets innovation. We believe that perfume is more than just
              a scent—it's an expression of identity, a moment captured in time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-playfair text-4xl text-purple mb-2">15+</div>
                <div className="font-lato text-sm text-charcoal/60 uppercase">
                  Years
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl text-purple mb-2">50+</div>
                <div className="font-lato text-sm text-charcoal/60 uppercase">
                  Fragrances
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl text-purple mb-2">100K+</div>
                <div className="font-lato text-sm text-charcoal/60 uppercase">
                  Customers
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-offwhite p-8 rounded-lg">
              <div className="w-14 h-14 bg-purple/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-purple" size={28} />
              </div>
              <h3 className="font-playfair text-2xl text-charcoal mb-3">
                Artisanal Craftsmanship
              </h3>
              <p className="font-lato text-charcoal/70">
                Every bottle is a masterpiece, hand-crafted by our expert perfumers
                using time-honored techniques and the finest natural ingredients.
              </p>
            </div>

            <div className="bg-offwhite p-8 rounded-lg">
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                <Award className="text-gold" size={28} />
              </div>
              <h3 className="font-playfair text-2xl text-charcoal mb-3">
                Award-Winning Excellence
              </h3>
              <p className="font-lato text-charcoal/70">
                Our fragrances have received international recognition, winning
                prestigious awards for quality, innovation, and sustainability.
              </p>
            </div>

            <div className="bg-offwhite p-8 rounded-lg">
              <div className="w-14 h-14 bg-purple/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-purple" size={28} />
              </div>
              <h3 className="font-playfair text-2xl text-charcoal mb-3">
                Sustainable & Ethical
              </h3>
              <p className="font-lato text-charcoal/70">
                We're committed to ethical sourcing and sustainable practices,
                ensuring our fragrances are as kind to the planet as they are luxurious.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
