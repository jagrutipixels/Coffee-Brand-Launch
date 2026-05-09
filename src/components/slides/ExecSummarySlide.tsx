import React from 'react';
import { motion } from 'motion/react';
import { images } from '@/lib/constants';

export default function ExecSummarySlide() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center relative py-12">
       
       {/* Background Abstract Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

       <div className="w-full md:w-1/2 pr-0 md:pr-16 relative z-10 mb-12 md:mb-0">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col gap-6"
          >
             <div className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-gold"></div>
                <p className="font-heading text-gold text-xs tracking-[0.3em] uppercase">Executive Summary</p>
             </div>
             <h2 className="text-5xl lg:text-7xl font-heading font-light leading-[1.1] tracking-tight">
               Globally Scalable <br/>
               <span className="font-medium text-white">Manufacturing.</span>
             </h2>
             <p className="text-white/60 text-lg max-w-xl font-light mt-4 leading-relaxed">
               Establishing your brand as the premium, trusted authority in global B2B coffee operations through a unified 360° strategy.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: false, amount: 0.3 }}
               transition={{ delay: 0.2 }} 
               className="glass-panel p-6 rounded-2xl relative overflow-hidden group shadow-lg"
             >
               <div className="absolute top-0 left-0 w-full h-[2px] bg-karn-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               <h3 className="text-white font-medium mb-3 text-lg group-hover:text-karn-blue transition-colors">Market Positioning</h3>
               <p className="text-white/50 text-sm leading-relaxed">Establish your brand as the premium authority in global B2B coffee manufacturing.</p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: false, amount: 0.3 }}
               transition={{ delay: 0.3 }} 
               className="glass-panel p-6 rounded-2xl relative overflow-hidden group shadow-lg"
             >
               <div className="absolute top-0 left-0 w-full h-[2px] bg-karn-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               <h3 className="text-white font-medium mb-3 text-lg group-hover:text-karn-red transition-colors">Lead Generation</h3>
               <p className="text-white/50 text-sm leading-relaxed">Build automated systems to capture high-value contracts and institutional buyers.</p>
             </motion.div>
          </div>
       </div>

       <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative z-10 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group"
          >
             <img src={images.beans} alt="Premium Coffee" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s]" />
             <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/90 via-black-matte/40 to-transparent"></div>
             
             {/* Floating UI Elements inside Image */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, amount: 0.8 }}
               transition={{ delay: 0.4 }}
               className="absolute bottom-10 left-10 glass-panel p-6 rounded-2xl max-w-[280px] backdrop-blur-xl border border-white/20"
             >
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#16A34A] animate-pulse"></div>
                   <span className="text-xs uppercase tracking-wider text-white/70">Global Capacity</span>
                </div>
                <div className="text-4xl font-heading font-medium text-white">100%</div>
                <div className="text-white/50 text-xs mt-1">Export-ready infrastructure</div>
             </motion.div>
          </motion.div>
       </div>
    </div>
  );
}
