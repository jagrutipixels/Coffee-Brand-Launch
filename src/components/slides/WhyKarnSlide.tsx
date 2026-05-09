import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function WhyKarnSlide() {
  return (
    <div className="w-full h-full flex flex-col py-12 relative z-10 max-w-4xl">
      <div className="w-full">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-red"></div>
           <p className="font-heading text-karn-red text-xs tracking-[0.3em] uppercase">The Unfair Advantage</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-12 tracking-tight"
        >
          Why K.A.R.N. <br />
          <span className="font-medium text-gray-900">Warfare LLP</span>
        </motion.h2>

        <div className="space-y-10 pl-6 border-l border-gray-900/10 relative">
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-karn-red via-karn-purple to-transparent origin-top scale-y-0 animate-[scaleY_2s_ease-out_forwards]"></div>
          
          {[
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
          ].map((item, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 + (i * 0.15) }}
               className="relative group"
            >
              <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 border-black-matte transition-all duration-300 group-hover:scale-150" style={{ backgroundColor: item.c, boxShadow: `0 0 10px ${item.c}` }}></div>
              <div>
                <h4 className="text-xl font-heading font-medium text-gray-900 mb-2 group-hover:translate-x-2 transition-transform">
                  {item.t}
                </h4>
                <p className="text-gray-900 text-sm max-w-lg leading-relaxed">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
