import React from 'react';
import { motion } from 'framer-motion';

export default function MenuGrid({ title, items }) {
  return (
    <div className="py-10">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl md:text-4xl font-serif text-brand-dark mb-8 border-b border-brand-gold/30 pb-4 inline-block"
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl mb-4 shadow-md">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-brand-brown/70 font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}