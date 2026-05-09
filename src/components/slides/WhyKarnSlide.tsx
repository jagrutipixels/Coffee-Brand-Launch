import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/constants";

export default function WhyKarnSlide() {
  const items = [
    {
      t: "Strategic Enterprise Expertise",
      d: "We don't sell 'services'. We architect and deploy scalable, impenetrable business ecosystems designed for market dominance.",
      c: colors.karn.red
    },
    {
      t: "In-House Cinematic Production",
      d: "World-class visual storytelling handled entirely internally, avoiding vendor fragmentation and ensuring brand consistency.",
      c: colors.karn.blue
    },
    {
      t: "Data-Backed Growth Systems",
      d: "Every piece of creative is driven by hard data, algorithmic optimization, and closed-loop CRM revenue tracking.",
      c: colors.karn.yellow
    },
    {
      t: "Global Positioning Mindset",
      d: "We structure your operations, PR, and web presence to instantly compete with the largest multinationals in your space.",
      c: colors.karn.green
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12 md:py-16 relative z-10 max-w-6xl mx-auto px-4 md:px-8">
      
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center mb-12 md:mb-16">
         <div className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-red"></div>
           <p className="font-heading text-karn-red text-xs md:text-sm tracking-[0.3em] uppercase">The Unfair Advantage</p>
           <div className="w-8 h-[2px] bg-karn-red"></div>
         </div>
         <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-[1.1] text-center tracking-tight"
         >
           Why K.A.R.N. <br className="md:hidden" />
           <span className="font-medium text-gray-900">Warfare LLP</span>
         </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full">
        {items.map((item, i) => (
          <motion.div 
             key={i} 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 + (i * 0.15) }}
             className="relative group p-6 md:p-8 rounded-[2rem] bg-white border border-gray-900/5 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full transition-transform duration-500 group-hover:scale-150" style={{ backgroundColor: item.c }}></div>
            
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="flex-shrink-0 w-3 h-3 rounded-full border-2 border-white mt-1.5 shadow-md transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: item.c, boxShadow: `0 0 10px ${item.c}` }}></div>
              <h4 className="text-xl md:text-2xl font-heading font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                {item.t}
              </h4>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10 pl-7">
              {item.d}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
