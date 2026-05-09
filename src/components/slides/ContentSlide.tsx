import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function ContentSlide() {
  return (
    <div className="w-full h-full flex flex-col pt-12 relative overflow-hidden z-10">
      <div className="mb-16 relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-3 h-3 rounded-full bg-karn-red shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
           <p className="font-heading text-gray-900 text-xs tracking-[0.3em] uppercase">Cinematic Production</p>
           <div className="w-3 h-3 rounded-full bg-karn-yellow shadow-[0_0_15px_rgba(234,179,8,0.6)]"></div>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-heading font-light leading-[1.1] tracking-tight">
          Enterprise <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900/40">Storytelling</span>
        </h2>
      </div>

      <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden hidden md:block">
        <img src={images.cover}
          className="w-full h-full object-cover opacity-10 sepia-[.3]" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/80 to-black-matte/20"></div>
      </div>

      <div className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 w-full max-w-7xl mx-auto">
        {[
          { t: "Cinematic Brand Films", d: "High-budget visual storytelling establishing market dominance.", details: "Hero pieces for the homepage that frame the facility like a cutting-edge laboratory, focusing on scale and cleanliness.", c: colors.karn.red },
          { t: "Documentary Series", d: "Inside the facility: showcasing precision, scale, and trust.", details: "A multi-part series detailing the journey of coffee processing, humanizing the production line and highlighting ESG criteria.", c: colors.karn.blue },
          { t: "Viral Short-Form", d: "Attention-grabbing cuts designed for B2B LinkedIn & Reels.", details: "High-retention 15-to-30-second clips of roasting operations or executive soundbites engineered to dominate business feeds.", c: colors.karn.yellow },
          { t: "Executive Presence", d: "Positioning leadership as industry visionaries.", details: "Ghostwritten thought-leadership and on-camera interviews that position the founders as voices of authority in global commodities.", c: colors.karn.green },
          { t: "Product Cinematography", d: "Framerates and lighting that elevate coffee to art.", details: "Ultra-high-speed macro shots of beans and crema, creating an irresistible visual standard that rivals luxury brands.", c: colors.karn.purple },
          { t: "3D Motion Graphics", d: "Visualizing processes and scale beyond physical limits.", details: "Animated diagrams and data-viz showing supply chain reach, processing technology, and logistical superiority.", c: "#ffffff" },
        ].map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            key={i}
            className="glass-panel rounded-[2rem] p-8 flex flex-col items-start text-left hover:bg-gray-900/5 transition-all group overflow-hidden relative border border-gray-900/5 shadow-xl min-h-[220px] cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-[40px] rounded-bl-full -mr-4 -mt-4" style={{ backgroundColor: item.c }}></div>
            
            {/* Default Content */}
            <div className="flex flex-col h-full transform transition-transform duration-500 group-hover:-translate-y-full absolute inset-0 p-8 w-full">
              <div className="w-12 h-1 mb-6 rounded-full" style={{ backgroundColor: item.c }}></div>
              <h4 className="text-2xl font-heading font-medium text-gray-900 mb-3">{item.t}</h4>
              <p className="text-gray-900 text-sm leading-relaxed">{item.d}</p>
            </div>

            {/* Hover Details Content */}
            <div 
              className="flex flex-col justify-center h-full absolute inset-0 p-8 backdrop-blur-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full"
              style={{ backgroundColor: `${item.c}10` }}
            >
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.c }}></div>
                 <h4 className="text-sm font-medium" style={{ color: item.c }}>{item.t}</h4>
              </div>
              <p className="text-gray-900/90 text-sm leading-relaxed">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
