import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';

export default function BrandPositioningSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-10 md:py-20 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-karn-red/5 via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 lg:order-1 px-4 lg:px-0">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className="flex items-center gap-4 mb-6">
             <div className="w-8 h-[2px] bg-karn-red"></div>
             <p className="font-heading text-karn-red text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Brand Warfare</p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-[1.1] mb-8 md:mb-12 tracking-tight text-gray-900"
          >
            Building A Premium <br/>
            <span className="font-medium text-gray-900">Manufacturing Identity.</span>
          </motion.h2>
          
          <div className="space-y-6 md:space-y-8 pl-4 lg:pl-6 border-l border-gray-100">
            {[
              { title: 'Global Identity Architecture', desc: 'Crafting a visual and tonal language that instantly competes with established multinationals.', c: colors.karn.red },
              { title: 'Manufacturing Authority', desc: 'Highlighting extreme scale, clinical hygiene, and proprietary roasting technology.', c: colors.karn.blue },
              { title: 'Institutional Trust', desc: 'Positioning your structure to pass rigorous vendor compliance for global buyers.', c: colors.karn.yellow },
              { title: 'Strategic Partnership Perception', desc: 'Moving from a commoditized vendor to an integrated, irreplaceable supply chain partner.', c: colors.karn.green }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 md:gap-6 items-start group relative"
              >
                 <div className="absolute -left-[23px] lg:-left-[31px] top-2 w-2.5 h-2.5 rounded-full transition-all duration-500 group-hover:scale-150 border-2 border-white shadow-md" style={{ backgroundColor: item.c, boxShadow: `0 0 12px ${item.c}` }}></div>
                 <div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-gray-900 mb-1 group-hover:translate-x-2 transition-transform">{item.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-md group-hover:text-gray-900 transition-colors">{item.desc}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="h-auto aspect-square md:aspect-auto md:h-[60vh] lg:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-gray-100 shadow-2xl group order-1 lg:order-2 mx-4 lg:mx-0"
        >
          <img src={images.espresso} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s] ease-out filter contrast-[1.05]" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
             <div className="w-12 h-[3px] bg-karn-red mb-4 md:mb-6 shadow-[0_0_15px_#DC2626]"></div>
             <p className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-heading tracking-tight mb-1 block font-light">Quality at <span className="font-medium">Scale.</span></p>
             <p className="text-gray-500 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold">Integrity in every batch</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
