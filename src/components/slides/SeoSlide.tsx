import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function SeoSlide() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-16 py-12 relative z-10">
      <div className="flex-1 w-full lg:w-1/2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-green"></div>
           <p className="font-heading text-karn-green text-xs tracking-[0.3em] uppercase">Search Monopoly</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-12 tracking-tight"
        >
          Organic Market <br />
          <span className="font-medium text-white">Domination.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
          {[
            { t: "Technical Infrastructure", d: "Sub-second load times and flawless indexing.", c: colors.karn.blue, i: "01" },
            { t: "Intent Hijacking", d: "Ranking for high-value competitor search terms.", c: colors.karn.red, i: "02" },
            { t: "Enterprise Content", d: "Long-form editorial scaling domain authority.", c: colors.karn.yellow, i: "03" },
            { t: "B2B Keyword Matrix", d: "Targeting 'wholesale', 'manufacturer', 'distributor'.", c: colors.karn.green, i: "04" },
            { t: "Domestic Dominance", d: "Owning the search landscape across India.", c: colors.karn.purple, i: "05" },
            { t: "Global Corridors", d: "Targeting buyers in Europe, Middle East, NA.", c: colors.karn.yellow, i: "06" },
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              viewport={{ once: false, amount: 0.5 }}
              key={i}
              className="glass-panel p-6 rounded-[1.5rem] border-l-[4px] relative overflow-hidden group hover:bg-white/5 transition-colors"
              style={{ borderLeftColor: item.c }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 blur-[20px] transition-opacity" style={{ backgroundColor: item.c }}></div>
              <span className="font-heading text-white/20 text-3xl font-light mb-3 block group-hover:text-white/40 transition-colors">
                {item.i}
              </span>
              <h4 className="text-xl font-medium text-white/90 mb-2">{item.t}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: false, amount: 0.3 }}
         className="w-full lg:w-[45%] h-[50vh] lg:h-[75vh] rounded-[3rem] overflow-hidden relative glass-panel border border-white/5 flex flex-col p-4 shadow-2xl"
      >
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
           <img
             src={images.dashboard}
             className="w-full h-full object-cover opacity-60 filter contrast-125 sepia-[.2] scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/90 via-[#16A34A]/10 to-transparent mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-black-matte/40"></div>
           
           <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="space-y-4 w-full">
                 {[85, 92, 78].map((w, i) => (
                    <div key={i} className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + Math.random() }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: [colors.karn.blue, colors.karn.green, colors.karn.yellow][i] }}
                       ></motion.div>
                    </div>
                 ))}
                 <p className="text-white/40 text-xs font-mono mt-4 uppercase tracking-wider">Search Impression Growth (12mo Forward)</p>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
