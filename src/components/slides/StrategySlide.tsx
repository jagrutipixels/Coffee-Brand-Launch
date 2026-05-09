import React from 'react';
import { motion } from 'motion/react';

export default function StrategySlide() {
  const steps = [
    { n: '1', t: 'Master Brand Identity', desc: 'Crafting investor-grade visual positioning', row: 1 },
    { n: '2', t: 'Digital Infrastructure', desc: 'Building enterprise AI-ready web platforms', row: 1 },
    { n: '3', t: 'Cinematic Content Hub', desc: 'Operating an in-house documentary engine', row: 1 },
    { n: '4', t: 'Social Authority', desc: 'B2B leadership on LinkedIn & Global Networks', row: 1 },
    
    { n: '5', t: 'Data-Driven Acquisition', desc: 'Aggressive multi-channel ad scaling', row: 2 },
    { n: '6', t: 'Global Search Monopoly', desc: 'Controlling intent across targeted markets', row: 2 },
    { n: '7', t: 'Tier-1 PR & Editorial', desc: 'Establishing unshakeable market trust', row: 2 },
    
    { n: '8', t: 'AI Sales Automation', desc: 'Deploying autonomous lead closing systems', row: 3 },
    { n: '9', t: 'Trade & Distribution', desc: 'Digital routing for international growth', row: 3 },
    { n: '10', t: 'OOH & Global Visibility', desc: 'Physical dominance in crucial trade hubs', row: 3 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center py-12">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-8 h-[2px] bg-karn-yellow"></div>
           <p className="font-heading text-karn-yellow text-xs tracking-[0.3em] uppercase">The Implementation Roadmap</p>
        </div>
        <h2 className="text-5xl lg:text-7xl font-heading font-light leading-tight">
          Complete Business <br/>
          <span className="font-medium text-white">Growth Ecosystem.</span>
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-8 perspective-[1200px]">
        
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {steps.filter(s => s.row === 1).map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel flex-1 min-w-[200px] h-48 rounded-[2rem] p-6 flex flex-col group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-karn-blue/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="font-heading text-5xl font-light text-white/5 group-hover:text-karn-blue transition-colors block mb-auto mt-2">0{step.n}</span>
              <div>
                 <h4 className="text-lg font-medium text-white/90 group-hover:-translate-y-1 transition-transform">{step.t}</h4>
                 <p className="text-white/40 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full md:px-12">
          {steps.filter(s => s.row === 2).map((step, idx) => (
            <motion.div 
              key={idx + 4}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: (idx + 4) * 0.1, duration: 0.6 }}
              className="glass-panel flex-1 min-w-[250px] h-48 rounded-[2rem] p-6 flex flex-col group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-karn-purple/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="font-heading text-5xl font-light text-white/5 group-hover:text-karn-purple transition-colors block mb-auto mt-2">0{step.n}</span>
              <div>
                 <h4 className="text-lg font-medium text-white/90 group-hover:-translate-y-1 transition-transform">{step.t}</h4>
                 <p className="text-white/40 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full md:px-24">
          {steps.filter(s => s.row === 3).map((step, idx) => (
            <motion.div 
              key={idx + 7}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: (idx + 7) * 0.1, duration: 0.6 }}
              className="glass-panel flex-1 min-w-[250px] h-48 rounded-[2rem] p-6 flex flex-col group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-karn-red/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="font-heading text-5xl font-light text-white/5 group-hover:text-karn-red transition-colors block mb-auto mt-2">{step.n.length === 1 ? `0${step.n}` : step.n}</span>
              <div>
                 <h4 className="text-lg font-medium text-white/90 group-hover:-translate-y-1 transition-transform">{step.t}</h4>
                 <p className="text-white/40 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
