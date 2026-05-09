import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/constants";

export default function AiSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-12 relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-gray-900/20 border-dashed animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full border border-karn-blue/50 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
        <div className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full border border-karn-purple/50 border-dashed animate-[spin_30s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 text-center mb-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-3 h-3 rounded-full bg-karn-purple shadow-[0_0_15px_rgba(147,51,234,0.6)] animate-pulse"></div>
           <p className="font-heading text-gray-900 text-xs tracking-[0.3em] uppercase">Autonomous Growth</p>
           <div className="w-3 h-3 rounded-full bg-karn-blue shadow-[0_0_15px_rgba(37,99,235,0.6)] animate-pulse"></div>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] tracking-tight"
        >
          AI-Powered Market <br />
          <span className="font-medium text-gray-900">Infrastructure</span>
        </motion.h2>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-7xl w-full">
        {[
          { t: "AI Sales Desk", d: "24/7 lead qualification", details: "Autonomous agents responding to inbound wholesale queries.", c: colors.karn.blue },
          { t: "Predictive Analytics", d: "Data-driven forecasting", details: "Forecasting global coffee price fluctuations and yields.", c: colors.karn.purple },
          { t: "Automated CRM", d: "Zero-latency follow-ups", details: "Instantaneous onboarding ensuring leads never grow cold.", c: colors.karn.yellow },
          { t: "Media Intelligence", d: "Algorithmic ad bidding", details: "Machine-learning optimization of ad budgets.", c: colors.karn.red },
          { t: "Market Monitoring", d: "Real-time competitor tracking", details: "Scraping competitor pricing and digital footprint changes.", c: colors.karn.green },
        ].map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            key={i}
            className={`glass-panel p-6 rounded-[2rem] border border-gray-900/5 flex flex-col items-center justify-center text-center group hover:bg-gray-900/5 transition-all overflow-hidden relative min-h-[200px] cursor-pointer ${i === 4 ? 'col-span-2 sm:col-span-1 sm:col-start-2 lg:col-span-1 lg:col-start-auto' : ''}`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-[20px]" style={{ backgroundColor: item.c }}></div>
            
            {/* Default Content */}
            <div className="flex flex-col items-center justify-center h-full transform transition-transform duration-500 group-hover:-translate-y-full absolute inset-0 p-6 w-full">
              <div
                className="w-4 h-4 rounded-full mb-6 relative"
                style={{ backgroundColor: item.c, boxShadow: `0 0 20px ${item.c}` }}
              >
                <div className="absolute inset-0 rounded-full animate-ping opacity-50 block" style={{ backgroundColor: item.c }}></div>
              </div>
              <h4 className="text-lg font-heading font-medium text-gray-900 mb-2">{item.t}</h4>
              <p className="text-xs text-gray-900">{item.d}</p>
            </div>

            {/* Hover Details Content */}
            <div 
              className="flex flex-col justify-center items-center h-full absolute inset-0 p-6 backdrop-blur-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full"
              style={{ backgroundColor: `${item.c}10` }}
            >
              <h4 className="text-sm font-medium mb-2" style={{ color: item.c }}>{item.t}</h4>
              <p className="text-gray-900/90 text-sm leading-relaxed">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
