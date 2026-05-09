import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function ContentSlide() {
  return (
    <div className="w-full h-full flex flex-col pt-12 relative overflow-hidden z-10">
      <div className="mb-16 relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-3 h-3 rounded-full bg-karn-red shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
           <p className="font-heading text-white/70 text-xs tracking-[0.3em] uppercase">Cinematic Production</p>
           <div className="w-3 h-3 rounded-full bg-karn-yellow shadow-[0_0_15px_rgba(234,179,8,0.6)]"></div>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-heading font-light leading-[1.1] tracking-tight">
          Enterprise <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Storytelling</span>
        </h2>
      </div>

      <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden hidden md:block">
        <img
          src={images.cover}
          className="w-full h-full object-cover opacity-10 sepia-[.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0c] via-[#0d0c0c]/80 to-[#0d0c0c]/20"></div>
      </div>

      <div className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 w-full max-w-7xl mx-auto">
        {[
          { t: "Cinematic Brand Films", d: "High-budget visual storytelling establishing market dominance.", c: colors.karn.red },
          { t: "Documentary Series", d: "Inside the facility: showcasing precision, scale, and trust.", c: colors.karn.blue },
          { t: "Viral Short-Form", d: "Attention-grabbing cuts designed for B2B LinkedIn & Reels.", c: colors.karn.yellow },
          { t: "Executive Presence", d: "Positioning leadership as industry visionaries.", c: colors.karn.green },
          { t: "Product Cinematography", d: "Framerates and lighting that elevate coffee to art.", c: colors.karn.purple },
          { t: "3D Motion Graphics", d: "Visualizing processes and scale beyond physical limits.", c: "#ffffff" },
        ].map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            key={i}
            className="glass-panel rounded-[2rem] p-8 flex flex-col items-start text-left hover:bg-white/5 transition-all group overflow-hidden relative border border-white/5 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[40px]" style={{ backgroundColor: item.c }}></div>
            <div className="w-12 h-1 mb-6 rounded-full" style={{ backgroundColor: item.c }}></div>
            <h4 className="text-2xl font-heading font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">{item.t}</h4>
            <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
