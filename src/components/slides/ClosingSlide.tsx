import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';

export default function ClosingSlide() {

  return (
    <div className="relative w-full h-[85vh] rounded-[3rem] overflow-hidden group shadow-2xl border border-gray-900/5">
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
           className="mt-auto mb-auto flex flex-col items-center justify-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-light tracking-tight mb-8 max-w-5xl leading-[1.1]">
            Ready To Build A Global <br />
            <span className="font-medium text-gray-900">Coffee Empire?</span>
          </h1>
          
          <p className="text-sm md:text-base text-karn-yellow font-heading tracking-widest uppercase glass-panel inline-flex px-8 py-3 rounded-full border border-karn-yellow/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            Transforming Manufacturing Brands Into Market Leaders
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-auto flex flex-col items-center gap-4 text-gray-900 text-sm border-t border-gray-900/10 pt-8 w-full max-w-3xl"
        >
          <div className="flex gap-2 mb-4">
            {[colors.karn.blue, colors.karn.red, colors.karn.purple, colors.karn.yellow, colors.karn.green].map((c, i) => (
              <div key={i} className="w-12 h-1.5 shadow-[0_0_10px_currentColor]" style={{ backgroundColor: c, color: c }}></div>
            ))}
          </div>
          <p className="font-heading tracking-widest uppercase text-gray-900/90 text-lg sm:text-xl">K.A.R.N. Marketing Warfare LLP</p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-base sm:text-lg">
               <a href="mailto:karnmarketingwarfarellp@gmail.com" className="hover:text-gray-900 transition-colors">karnmarketingwarfarellp@gmail.com</a>
               <span className="w-1.5 h-1.5 bg-gray-900/30 rounded-full hidden sm:block"></span>
               <a href="tel:9372060357" className="hover:text-gray-900 transition-colors">+91 93720 60357</a>
            </div>
            <p className="text-center text-sm sm:text-base mt-2 max-w-md sm:max-w-xl text-gray-900">Office no 7, 5th floor, C-39A, Gami Industrial park, Pawane, Turbhe, Navi Mumbai - 400710.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
