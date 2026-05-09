import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function SocialSlide() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-16 items-center py-12 relative z-10">
      <motion.div 
         initial={{ opacity: 0, x: -50, rotateY: 20 }}
         whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: false, amount: 0.3 }}
         className="w-full lg:w-[45%] h-[60vh] lg:h-[75vh] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10"
      >
        <img
          src={images.social}
          className="w-full h-full object-cover opacity-60 sepia-[.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0c0c] via-[#0d0c0c]/40 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-[black] to-transparent">
          <div className="flex gap-4">
            {[colors.karn.blue, colors.karn.red, colors.karn.yellow, colors.karn.green, colors.karn.purple].map(
              (c, i) => (
                <div
                  key={i}
                  className="w-12 h-1.5 rounded-full shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: c, color: c }}
                ></div>
              ),
            )}
          </div>
          <p className="mt-6 text-white/50 text-sm font-heading tracking-widest uppercase">Multi-Platform Ecosystem</p>
        </div>
      </motion.div>

      <div className="flex-1 w-full mt-8 lg:mt-0">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-blue"></div>
           <p className="font-heading text-karn-blue text-xs tracking-[0.3em] uppercase">Digital Ecosystem</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-12 tracking-tight"
        >
          Global Social <br />
          <span className="font-medium text-white">Authority</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-4 mb-12 flex-wrap">
          {[
            { n: "LinkedIn", c: colors.karn.blue },
            { n: "Instagram", c: colors.karn.red },
            { n: "YouTube", c: colors.karn.yellow },
            { n: "Google Biz", c: colors.karn.green },
            { n: "X", c: colors.karn.purple },
          ].map((plat, i) => (
            <div
              key={i}
              className="px-6 py-2.5 rounded-full border border-white/20 text-white/80 text-xs tracking-widest uppercase bg-white/5 shadow-lg"
              style={{ borderBottomColor: plat.c }}
            >
              {plat.n}
            </div>
          ))}
        </motion.div>

        <div className="space-y-8">
          {[
            { t: "Viral Short-Form Architecture", d: "Creating a relentless volume of attention-grabbing assets specifically to drive international B2B inquiries.", c: colors.karn.red },
            { t: "LinkedIn Executive Dominance", d: "Positioning your founders as thought leaders to hijack attention from C-level executives globally.", c: colors.karn.blue },
            { t: "Community Incubation", d: "Building an exclusive digital moat of distributors, roasters, and buyers interacting around your brand.", c: colors.karn.yellow },
          ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 + (i * 0.1) }}
               className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 w-2 h-full opacity-50" style={{ backgroundColor: item.c }}></div>
                <h4 className="text-xl font-medium text-white mb-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: item.c, color: item.c }}></span>{" "}
                  {item.t}
                </h4>
                <p className="text-white/50 text-sm">{item.d}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
