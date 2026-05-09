import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/constants";

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
          <span className="font-medium text-gray-900">Visibility</span>
        </motion.h2>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {[
            {
              t: "Airport Terminals",
              d: "Capturing high-net-worth B2B traffic in domestic & international hubs with dynamic digital displays.",
              c: colors.karn.blue,
              metric: "Global Hubs"
            },
            { 
              t: "Strategic OOH", 
              d: "Commanding urban placement in commercial and heavy manufacturing zones for omnipresence.", 
              c: colors.karn.red,
              metric: "Industrial Zones"
            },
            {
              t: "Financial Districts",
              d: "Positioning alongside multinational banks, trading houses, and capital hubs to attract institutional trust.",
              c: colors.karn.yellow,
              metric: "CBD Dominance"
            },
            { 
              t: "Expo Dominance", 
              d: "Buying out physical airspace and high-traffic corridors around tier-1 global trade events.", 
              c: colors.karn.green,
              metric: "Trade Fairs"
            },
          ].map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
               className="glass-panel p-8 md:p-10 rounded-[2.5rem] border border-gray-900/5 relative overflow-hidden group shadow-2xl flex flex-col justify-between min-h-[240px]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: item.c }}></div>
              <div className="absolute left-0 top-0 w-1.5 h-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.c }}></div>

              <div className="relative z-10 flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full shadow-[0_0_12px_currentColor]" style={{ backgroundColor: item.c, color: item.c }}></div>
                    <h4 className="text-2xl font-heading font-medium text-gray-900">{item.t}</h4>
                 </div>
                 <div className="px-3 py-1 rounded-full border border-gray-900/10 text-gray-900 text-xs font-mono tracking-wider uppercase bg-black-matte/40 group-hover:bg-gray-900/5 group-hover:text-gray-900 transition-colors">
                    {item.metric}
                 </div>
              </div>

              <p className="text-gray-900/90 text-base leading-relaxed relative z-10 max-w-md">
                {item.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
