'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Layering Fragrances',
    excerpt: 'Discover the secrets to creating your own unique scent profile by expertly layering different fragrances.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
    date: 'October 15, 2025',
    category: 'Tips & Tricks',
  },
  {
    id: 2,
    title: 'Behind the Scenes: Creating Midnight Essence',
    excerpt: 'Join us on a journey through the creative process behind our bestselling fragrance.',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop',
    date: 'October 8, 2025',
    category: 'Behind the Scenes',
  },
  {
    id: 3,
    title: 'Sustainable Luxury: Our Commitment',
    excerpt: 'How H&H Fragrances is pioneering eco-friendly practices in the luxury fragrance industry.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
    date: 'September 29, 2025',
    category: 'Sustainability',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            Latest Stories
          </h2>
          <p className="font-lato text-lg text-charcoal/70 max-w-2xl mx-auto">
            Explore the world of fragrance through our journal—insights, stories,
            and inspiration from the H&H atelier
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-offwhite rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple text-white px-4 py-2 rounded-full font-lato text-xs uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-charcoal/60 text-sm font-lato mb-4">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-playfair text-2xl text-charcoal mb-3 group-hover:text-purple transition-colors">
                  {post.title}
                </h3>
                <p className="font-lato text-charcoal/70 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-purple hover:text-gold font-lato font-bold uppercase text-sm tracking-wide transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-charcoal hover:bg-purple text-white font-lato px-10 py-4 rounded-full transition-all duration-300 shadow-lg"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
