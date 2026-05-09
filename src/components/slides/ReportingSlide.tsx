import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';

export default function ReportingSlide() {
  return (
    <div className="w-full flex justify-center py-12 relative z-10">
      <div className="w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6 justify-center">
           <div className="w-8 h-[2px] bg-karn-purple"></div>
           <p className="font-heading text-karn-purple text-xs tracking-[0.3em] uppercase">Reporting & Transparency</p>
           <div className="w-8 h-[2px] bg-karn-purple"></div>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
           className="text-5xl md:text-7xl font-heading font-light leading-tight mb-6 text-center"
        >
          Clear, Actionable <br/>
          <span className="font-medium text-gray-900">Performance Tracking</span>
        </motion.h2>
        
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-900/90 mb-16 max-w-2xl mx-auto text-center text-lg">
          We strip away vanity metrics to provide absolute transparency.
          You get complete visibility into the ROI of every campaign and strategic initiative.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
             {[
               { 
                 t: 'Live Performance Dashboards', 
                 d: '24/7 access to real-time analytics, lead flow, and campaign tracking.',
                 c: colors.karn.blue 
               },
               { 
                 t: 'C-Suite Strategy Summits', 
                 d: 'Quarterly deep-dives with our leadership to align marketing with your P&L goals.',
                 c: colors.karn.red 
               },
               { 
                 t: 'Dedicated Account Director', 
                 d: 'A single point of contact driving your growth strategy and ensuring swift execution.',
                 c: colors.karn.yellow 
               },
               { 
                 t: 'Global Data Insights', 
                 d: 'Market intelligence and competitor tracking translated into actionable directives.',
                 c: colors.karn.green 
               }
             ].map((item, i) => (
                <motion.div 
                   initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
                   key={i} className="glass-panel p-6 rounded-[2rem] border border-gray-900/5 hover:bg-gray-900/5 transition-all group flex items-start gap-4"
                >
                   <div className="w-10 h-10 rounded-full glass-panel border border-gray-900/10 shrink-0 flex items-center justify-center mt-1">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.c, boxShadow: `0 0 10px ${item.c}` }}></div>
                   </div>
                   <div>
                     <h4 className="text-xl font-heading font-medium text-gray-900 mb-2">{item.t}</h4>
                     <p className="text-sm text-gray-900 leading-relaxed max-w-md">{item.d}</p>
                   </div>
                </motion.div>
             ))}
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative rounded-[2.5rem] overflow-hidden glass-panel border border-gray-900/10 shadow-2xl group h-full min-h-[400px]"
          >
             <div className="absolute inset-0 bg-black-matte z-0"></div>
             <img src={images.dashboard} 
               alt="Analytics Dashboard" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 filter sepia-[0.1]" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-gray-900/10 backdrop-blur-xl">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-gray-900/90 font-mono text-xs uppercase tracking-widest">Total ROI Tracking</span>
                 <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-karn-green shadow-[0_0_8px_#16A34A] animate-pulse"></div>
                   <span className="text-karn-green text-xs font-mono">Live</span>
                 </div>
               </div>
               <div className="w-full h-2 bg-gray-900/5 rounded-full overflow-hidden">
                 <div className="w-[78%] h-full bg-gradient-to-r from-karn-blue to-karn-purple rounded-full relative">
                   <div className="absolute inset-0 bg-gray-900/20 animate-pulse"></div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
