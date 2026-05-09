import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function PrMediaSlide() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-16 py-12 relative z-10">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-blue"></div>
           <p className="font-heading text-karn-blue text-xs tracking-[0.3em] uppercase">Executive PR & Media</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-12 tracking-tight"
        >
          Engineering Trust & <br />
          <span className="font-medium text-white">Authority</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 relative border-l border-white/10 pl-8">
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-karn-blue via-transparent to-transparent origin-top scale-y-0 animate-[scaleY_2s_ease-out_forwards]"></div>
          
          {[
            {
              t: "Tier-1 Business PR",
              d: "Strategic editorial placements in premium financial and F&B publications to instantly validate market position.",
              c: colors.karn.blue
            },
            {
              t: "Founder Monopolization",
              d: "Building individual executive brands that overshadow competitors and act as human capital magnets.",
              c: colors.karn.red
            },
            {
              t: "Broadcasting Partnerships",
              d: "Securing appearances on influential business podcasts and industry panels.",
              c: colors.karn.yellow
            },
            {
              t: "Crisis & Reputation",
              d: "Proactive narrative control to ensure the brand narrative remains entirely on your terms.",
              c: colors.karn.green
            },
          ].map((item, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 + (i * 0.1) }}
               className="flex gap-6 items-start group relative"
            >
              <div className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#0a0a0a] transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: item.c, boxShadow: `0 0 15px ${item.c}` }}></div>
              <div>
                <h4 className="text-xl font-heading font-medium text-white mb-2 group-hover:translate-x-2 transition-transform">
                  {item.t}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed max-w-lg">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: false, amount: 0.3 }}
         className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-karn-blue/10 via-transparent to-transparent -z-10"></div>
        <div className="w-full aspect-[4/5] max-w-md relative glass-panel p-3 rounded-[3rem] rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl border border-white/10 group">
          <div className="w-full h-full relative overflow-hidden rounded-[2.5rem]">
            <img
              src={images.boardroom}
              className="w-full h-full object-cover filter contrast-110 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0c0c]/80 via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-[black] via-[black]/80 to-transparent z-20">
              <p className="font-heading text-4xl font-light text-white mb-4 tracking-tight">
                Forbes
              </p>
              <div className="w-16 h-1 bg-karn-blue shadow-[0_0_10px_#2563EB]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
