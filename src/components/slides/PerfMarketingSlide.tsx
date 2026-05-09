import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/constants";

export default function PerfMarketingSlide() {
  return (
    <div className="w-full h-full flex items-center py-12 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-karn-blue/5 via-transparent to-transparent pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-8 h-px bg-karn-blue"></div>
           <p className="font-heading text-karn-blue text-xs tracking-[0.3em] uppercase">Data Acquisition & Capital Flow</p>
           <div className="w-8 h-px bg-karn-blue"></div>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-20 text-center tracking-tight"
        >
          Aggressive <br />
          <span className="font-medium text-white">Digital Warfare.</span>
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          <div className="lg:col-span-4 h-0.5 absolute top-1/2 left-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 hidden lg:block"></div>

          {[
            {
              t: "Precision Targeting",
              c: colors.karn.blue,
              n: "01",
              d: "Deploying capital strictly against C-suite and procurement heads in target geographies.",
            },
            {
              t: "Omnichannel Funnels",
              c: colors.karn.purple,
              n: "02",
              d: "Following institutional leads across LinkedIn, Google, and premium editorial sites.",
            },
            {
              t: "Conversion Architecture",
              c: colors.karn.red,
              n: "03",
              d: "High-friction qualification forms filtering out retail to focus entirely on wholesale/B2B.",
            },
            {
              t: "Capital Scaling",
              c: colors.karn.yellow,
              n: "04",
              d: "Increasing ad spend algorithmically based on closed-won data, not just lead volume.",
            },
          ].map((step, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              key={i}
              className="glass-panel p-8 rounded-[2rem] flex flex-col items-center text-center relative border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-2 bg-[#0a0a0a]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 blur-[30px] rounded-bl-full transition-opacity" style={{ backgroundColor: step.c }}></div>
              
              <div className="w-16 h-16 rounded-full mb-8 border-2 flex items-center justify-center bg-black-matte shadow-2xl relative" style={{ borderColor: step.c }}>
                <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: step.c }}></div>
                <span className="font-heading text-lg font-medium tracking-widest text-white">{step.n}</span>
              </div>
              
              <h4 className="text-xl font-medium text-white mb-4 leading-tight">{step.t}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
