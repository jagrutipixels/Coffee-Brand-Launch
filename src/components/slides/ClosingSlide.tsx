import React from 'react';
import { motion } from 'motion/react';
import { images } from '@/lib/constants';

export default function ClosingSlide() {
  return (
    <div className="relative w-full h-[85vh] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-black-matte/50 to-transparent z-10"></div>
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          viewport={{ once: false }}
          src={images.cover} 
          alt="Coffee Manufacturing" 
          className="w-full h-full object-cover opacity-30 sepia-[.2]"
        />
      </div>

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-12 md:p-24 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-light tracking-tight mb-6 max-w-5xl leading-[1.1]">
            Ready To Build A Global <br />
            <span className="font-medium text-white">Coffee Empire?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gold mb-12 font-heading tracking-widest uppercase text-sm glass-panel inline-block px-8 py-3 rounded-full border border-gold/30">
            Transforming Manufacturing Brands Into Market Leaders
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 mb-16"
        >
          <button className="px-8 py-4 bg-white text-black-matte font-medium rounded-full hover:bg-gold hover:text-white transition-colors duration-300 transform hover:scale-105 active:scale-95 shadow-xl">
             Schedule Strategy Meeting
          </button>
          <button className="px-8 py-4 glass-panel border border-white/20 text-white rounded-full hover:border-gold transition-colors duration-300 transform hover:scale-105 active:scale-95">
             Download Proposal PDF
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-auto flex flex-col items-center gap-4 text-white/50 text-sm border-t border-white/10 pt-8 w-full max-w-2xl"
        >
          <div className="flex gap-2 mb-2">
            {['#2563EB', '#DC2626', '#9333EA', '#EAB308', '#16A34A'].map((c, i) => (
              <div key={i} className="w-10 h-1" style={{ backgroundColor: c }}></div>
            ))}
          </div>
          <p className="font-heading tracking-widest uppercase">K.A.R.N. Marketing Warfare LLP</p>
          <div className="flex items-center gap-6">
             <span>contact@karn.agency</span>
             <span className="w-1 h-1 bg-white/20 rounded-full"></span>
             <span>www.karn.agency</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
