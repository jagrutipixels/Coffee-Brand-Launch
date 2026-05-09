import React from 'react';
import { motion } from 'motion/react';
import { images } from '@/lib/constants';

export default function BrandPositioningSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-12 relative">
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} className="flex items-center gap-4 mb-6">
             <div className="w-8 h-[2px] bg-gold"></div>
             <p className="font-heading text-gold text-xs tracking-[0.3em] uppercase">Brand Positioning</p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-12"
          >
            Building A Premium <br/>
            <span className="font-medium text-white">Manufacturing Brand.</span>
          </motion.h2>
          
          <div className="space-y-8">
            {[
              { title: 'Premium Brand Identity', desc: 'Crafting a visual language that screams luxury and reliability.' },
              { title: 'Manufacturing Authority', desc: 'Highlighting scale, hygiene, and cutting-edge roasting technology.' },
              { title: 'Global Trust Building', desc: 'Positioning your company as a reliable international partner.' },
              { title: 'Long-Term Perception', desc: 'Moving from a vendor to an integrated, strategic coffee partner.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start group"
              >
                 <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-gold flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-white/30 group-hover:text-gold font-heading text-sm transition-colors">0{idx + 1}</span>
                 </div>
                 <div>
                    <h4 className="text-xl font-medium text-white/90 mb-2 group-hover:translate-x-2 transition-transform">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="h-[70vh] rounded-[2rem] overflow-hidden relative border border-white/5 shadow-2xl group"
        >
          <img src={images.espresso} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s] ease-in-out filter sepia-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/40 to-transparent"></div>
          
          <div className="absolute bottom-12 left-12">
             <div className="w-12 h-[2px] bg-gold mb-6"></div>
             <p className="text-white text-3xl font-heading tracking-wide mb-2 block">Quality at Scale.</p>
             <p className="text-white/60 tracking-widest text-xs uppercase">Integrity in every batch</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
