import React from 'react';
import { motion } from 'motion/react';
import { images } from '@/lib/constants';

export default function MarketOpportunitySlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-12 relative z-10">
      <div className="mb-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="flex items-center gap-4 mb-4">
           <div className="w-8 h-[2px] bg-gold"></div>
           <p className="font-heading text-gold text-xs tracking-[0.3em] uppercase">Market Opportunity</p>
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
           className="text-5xl lg:text-7xl font-heading font-light leading-[1.1]"
        >
          The Growing Demand In <br/>
          <span className="font-medium text-white">The Coffee Industry.</span>
        </motion.h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
           initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
           className="col-span-2 relative rounded-[2rem] overflow-hidden group shadow-2xl min-h-[500px]"
        >
           <img src={images.logistics} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 filter sepia-[0.2]" alt="Global Trade" />
           <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/40 to-transparent"></div>
           <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="w-12 h-[2px] bg-karn-purple mb-6"></div>
              <h3 className="text-4xl font-heading mb-4 text-white">Global Export Potential</h3>
              <p className="text-white/60 max-w-lg text-lg leading-relaxed">The international demand for high-quality, processed coffee is surging. Your manufacturing capacity positions you perfectly for scalable export operations.</p>
           </div>
        </motion.div>

        <div className="col-span-1 flex flex-col gap-6">
           <motion.div 
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 glass-panel rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/5"
           >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-karn-blue to-transparent transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h4 className="text-2xl font-heading mb-4 text-white/90">Private Label Expansion</h4>
              <p className="text-white/50 leading-relaxed">Growing demand from café chains and retail brands looking for trusted manufacturing partners.</p>
           </motion.div>
           <motion.div 
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 glass-panel rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/5"
           >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-karn-red to-transparent transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h4 className="text-2xl font-heading mb-4 text-white/90">B2B Growth</h4>
              <p className="text-white/50 leading-relaxed">Hotels, hospitality groups, and distributors are actively seeking reliable, premium suppliers.</p>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
