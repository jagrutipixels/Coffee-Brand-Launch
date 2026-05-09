import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';

export default function MarketOpportunitySlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-12 relative z-10">
      <div className="mb-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="flex items-center gap-4 mb-4">
           <div className="w-8 h-[2px] bg-karn-yellow"></div>
           <p className="font-heading text-karn-yellow text-xs tracking-[0.3em] uppercase">Market Opportunity</p>
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
           className="text-5xl lg:text-7xl font-heading font-light leading-tight tracking-tight"
        >
          The Growing Demand In <br/>
          <span className="font-medium text-white">The Coffee Industry.</span>
        </motion.h2>
      </div>

      <div className="w-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-12 gap-6 h-[500px]">
        {/* Main Image Banner */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
           className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-white/5 border border-white/5"
        >
           <img 
             src={images.beans} 
             className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[2s]" 
             alt="Coffee Beans" 
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/90 via-black-matte/40 to-transparent"></div>
           <div className="absolute inset-0 p-10 flex flex-col justify-end z-10 w-3/4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] animate-pulse" style={{ backgroundColor: colors.karn.purple, color: colors.karn.purple }}></div>
                <span className="text-white/80 font-mono text-sm tracking-widest uppercase">Export Volume</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading mb-4 text-white">Global Export Potential</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">International demand for high-quality, processed coffee is surging. Your manufacturing capacity positions you perfectly for scalable export operations to key global corridors.</p>
           </div>
        </motion.div>

        {/* Info Card 1 */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
           className="md:col-span-4 glass-panel rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/5"
        >
           <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 blur-[30px] rounded-bl-full -mr-4 -mt-4 transition-all" style={{ backgroundColor: colors.karn.blue }}></div>
           <h3 className="text-white/20 font-heading text-6xl mb-auto font-light group-hover:text-white/30 transition-colors">01</h3>
           <div>
             <h4 className="text-2xl font-heading font-medium mb-3 text-white">Private Label</h4>
             <p className="text-white/50 text-sm leading-relaxed">Surging demand from global café chains and ambitious retail DTC brands explicitly looking for institutional manufacturing partners.</p>
           </div>
        </motion.div>

        {/* Info Card 2 */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }}
           className="md:col-span-5 glass-panel rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/5 transition-colors border border-white/5"
        >
           <div className="absolute top-0 left-0 w-32 h-32 opacity-10 group-hover:opacity-20 blur-[30px] rounded-br-full -ml-4 -mt-4 transition-all" style={{ backgroundColor: colors.karn.red }}></div>
           <h4 className="text-2xl font-heading font-medium mb-3 text-white">B2B Institutional Growth</h4>
           <p className="text-white/50 text-sm leading-relaxed">Tier-1 hotels, corporate hospitality groups, and international distribution conglomerates are actively seeking reliable, premium suppliers.</p>
        </motion.div>

        {/* Data Metric Card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.3 }}
           className="md:col-span-7 bg-[#0f0f13] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center items-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-karn-yellow/5 to-transparent"></div>
           <div className="text-center z-10">
              <span className="text-7xl font-heading font-medium text-white mb-2 block tracking-tighter">Scale</span>
              <span className="text-karn-yellow tracking-[0.4em] uppercase text-sm font-bold">Unlocking Global Capacity</span>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
