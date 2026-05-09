import React from 'react';
import { motion } from 'motion/react';

export default function OutcomesSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-12 relative z-10">
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-3 h-3 rounded-full bg-karn-blue shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
           <p className="font-heading text-white/70 text-xs tracking-[0.3em] uppercase">Expected Business Outcomes</p>
           <div className="w-3 h-3 rounded-full bg-karn-red shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-heading font-light leading-[1.1] tracking-tight">
          Projected Returns & <br/>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Market Domination</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
         {[
           { n: '50M+', t: 'Pipeline Generated', d: 'Targeting high-ticket B2B institutional orders and retail chains globally.', c: '#2563EB', bg: 'from-blue-600/20' },
           { n: '24/7', t: 'Lead Automation', d: 'Inbound systems capturing and qualifying international distributors around the clock.', c: '#DC2626', bg: 'from-red-600/20' },
           { n: 'Tier 1', t: 'Industry Authority', d: 'Positioned identically in perception to massive multi-national coffee conglomerates.', c: '#EAB308', bg: 'from-yellow-600/20' },
           { n: '360°', t: 'Digital Supremacy', d: 'Complete monopoly over specific geographic and intent-based search terms.', c: '#16A34A', bg: 'from-green-600/20' },
           { n: '10x', t: 'Content ROI', d: 'One cinematic shoot yielding thousands of hyper-targeted B2B marketing assets.', c: '#9333EA', bg: 'from-purple-600/20' },
           { n: 'IPO', t: 'Ready Valuation', d: 'Structuring brand perception and systems for maximum future enterprise valuation.', c: '#ffffff', bg: 'from-white/10' },
         ].map((item, i) => (
           <motion.div 
             key={i} 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.1 }}
             transition={{ duration: 0.6, delay: i * 0.1 }}
             className="glass-panel p-10 rounded-[2rem] flex flex-col relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-500"
           >
              {/* Animated Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
              
              <div className="relative z-10">
                <span className="text-6xl font-heading font-medium tracking-tighter mb-4 block" style={{ color: item.c }}>{item.n}</span>
                <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-6"></div>
                <h4 className="text-xl font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">{item.t}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
}
