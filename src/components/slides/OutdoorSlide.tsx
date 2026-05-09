import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function OutdoorSlide() {
  return (
    <div className="w-full h-full flex flex-col py-12 relative z-10">
      <div className="mb-12 text-center w-full max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-8 h-px bg-karn-purple"></div>
           <p className="font-heading text-karn-purple text-xs tracking-[0.3em] uppercase">Physical Presence</p>
           <div className="w-8 h-px bg-karn-purple"></div>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] tracking-tight"
        >
          Large-Scale Brand <br />
          <span className="font-medium text-white">Visibility</span>
        </motion.h2>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: false, amount: 0.2 }}
         className="flex-1 relative w-full rounded-[3rem] overflow-hidden glass-panel group shadow-2xl border border-white/5"
      >
        <div className="absolute inset-0 bg-black-matte z-0"></div>
        <img
          src={images.billboard}
          className="relative z-0 w-full h-full object-cover opacity-50 filter contrast-125 sepia-[.3] group-hover:scale-105 group-hover:opacity-70 transition-all duration-[2s]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black-matte via-black-matte/50 to-transparent"></div>
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Airport Terminals",
                d: "Capturing high-net-worth B2B traffic in domestic & international hubs.",
                c: colors.karn.blue
              },
              { t: "Strategic OOH", d: "Commanding urban placement in commercial manufacturing zones.", c: colors.karn.red },
              {
                t: "Financial Districts",
                d: "Positioning alongside multinational banks & trading houses.",
                c: colors.karn.yellow
              },
              { t: "Expo Dominance", d: "Buying out physical airspace around tier-1 trade events.", c: colors.karn.green },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="relative"
              >
                <div
                  className="w-12 h-1.5 mb-6 rounded-full shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: item.c, color: item.c }}
                ></div>
                <h4 className="text-xl font-heading font-medium text-white mb-3">
                  {item.t}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
