import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function PrMediaSlide() {
  return (
    <div className="w-full flex-col justify-center py-12 relative z-10 flex">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[2px] bg-karn-blue"></div>
               <p className="font-heading text-karn-blue text-xs tracking-[0.3em] uppercase">Executive PR & Media</p>
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-8 tracking-tight"
            >
              Building Industry <br />
              <span className="font-medium text-gray-900">Trust & Authority</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-900/90 mb-12 text-lg leading-relaxed max-w-md">
              We position your brand and leadership team as the definitive authority in the global coffee manufacturing space.
            </motion.p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  t: "Premium Business PR",
                  d: "Securing features and editorial placements in top-tier financial and industry publications.",
                  c: colors.karn.blue
                },
                {
                  t: "Executive Branding",
                  d: "Building strong personal brands for your founders to attract high-value partnerships and talent.",
                  c: colors.karn.red
                },
                {
                  t: "Industry Broadcasting",
                  d: "Getting your leadership featured on influential business podcasts, interviews, and trade panels.",
                  c: colors.karn.yellow
                },
                {
                  t: "Reputation Management",
                  d: "Proactively managing public perception to ensure the brand narrative is always positive and controlled.",
                  c: colors.karn.green
                },
              ].map((item, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + (i * 0.1) }}
                   className="glass-panel p-6 rounded-[1.5rem] border border-gray-900/5 flex gap-5 items-center group hover:bg-gray-900/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-full glass-panel border border-gray-900/10 flex items-center justify-center shrink-0">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.c, boxShadow: `0 0 12px ${item.c}` }}></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-medium text-gray-900 mb-1 group-hover:text-gray-900 transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-sm text-gray-900 leading-relaxed pr-4">{item.d}</p>
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
             className="w-full lg:w-1/2 h-full min-h-[600px] flex flex-col items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-karn-blue/10 via-transparent to-transparent -z-10"></div>
            <div className="w-full feature-panel relative glass-panel p-3 rounded-[3rem] shadow-2xl border border-gray-900/10 group h-full max-h-[700px]">
              <div className="w-full h-full relative overflow-hidden rounded-[2.5rem]">
                <img
                  src={images.boardroom}
                  className="w-full h-full object-cover filter contrast-110 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]"
                  alt="Boardroom"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/90 via-black-matte/40 to-transparent z-10"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end z-20 bg-gradient-to-t from-black-matte via-black-matte/50 to-transparent">
                  <div className="w-12 h-[3px] bg-karn-blue mb-6 shadow-[0_0_10px_#2563EB]"></div>
                  <h3 className="font-heading text-4xl text-gray-900 mb-4 tracking-tight">
                    Authoritative Placements
                  </h3>
                  <p className="text-gray-900 max-w-sm text-lg">
                    We secure coverage where it matters, putting your brand in front of targeted institutional buyers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
