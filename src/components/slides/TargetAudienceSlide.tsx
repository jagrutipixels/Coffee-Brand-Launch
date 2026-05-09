import React from 'react';
import { motion } from 'motion/react';

export default function TargetAudienceSlide() {
  const audiences = [
    { title: 'Café Chains', color: '#2563EB' },
    { title: 'Retail Coffee Brands', color: '#DC2626' },
    { title: 'Hotels & Resorts', color: '#EAB308' },
    { title: 'Hospitality Groups', color: '#16A34A' },
    { title: 'Distributors', color: '#9333EA' },
    { title: 'Private Label Businesses', color: '#D4AF37' },
    { title: 'Export Buyers', color: '#ffffff' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center py-12">
      <div className="mb-16 text-center">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">Target Audience</p>
        <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight">
          Who We Will <span className="font-medium text-white">Target</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
        {audiences.map((aud, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
            className="px-8 py-4 glass-panel rounded-full border border-white/10 hover:border-gold transition-colors cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: aud.color }}></div>
              <span className="text-lg font-medium text-white/90">{aud.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
