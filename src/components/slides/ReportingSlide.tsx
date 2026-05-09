import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';

export default function ReportingSlide() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-16 py-12 items-center">
      <div className="w-full md:w-1/2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-4">
           <div className="w-8 h-[2px] bg-karn-purple"></div>
           <p className="font-heading text-karn-purple text-xs tracking-[0.3em] uppercase">Reporting & Transparency</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} 
           className="text-5xl md:text-6xl font-heading font-light leading-tight mb-8"
        >
          Enterprise <br/>
          <span className="font-medium text-white">Command Center.</span>
        </motion.h2>
        
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 mb-12 max-w-lg text-lg">
          Absolute transparency and dedicated resources. Watch your global footprint expand in real-time.
        </motion.p>

        <div className="space-y-6">
           {[
             { t: 'Live Performance Dashboards', c: colors.karn.blue },
             { t: 'C-Suite Quarterly Summits', c: colors.karn.red },
             { t: 'Dedicated Account Directorship', c: colors.karn.yellow },
             { t: 'Global Data Insights & Analytics', c: colors.karn.green },
             { t: 'Production & Campaign Calendars', c: colors.karn.purple }
           ].map((item, i) => (
              <motion.div 
                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
                 key={i} className="flex gap-5 items-center group"
              >
                 <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-white transition-colors flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: item.c, boxShadow: `0 0 10px ${item.c}` }}></div>
                 </div>
                 <span className="text-lg text-white/70 group-hover:text-white transition-colors tracking-wide">{item.t}</span>
              </motion.div>
           ))}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 h-[75vh] relative perspective-[1000px]">
         <motion.div 
            initial={{ opacity: 0, rotateY: 20, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-[2rem] glass-panel border border-white/10 p-8 flex flex-col gap-8 shadow-2xl overflow-hidden"
         >
            <div className="absolute inset-0 bg-gradient-to-br from-karn-blue/5 via-karn-purple/5 to-transparent"></div>
            
            <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-6">
               <div>
                  <span className="block text-white/40 text-xs tracking-widest uppercase mb-1">Global Pipeline</span>
                  <span className="text-white text-3xl font-heading">₹2.4B+</span>
               </div>
               <div className="flex gap-2">
                 <span className="w-3 h-3 rounded-full bg-karn-red/80 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                 <span className="w-3 h-3 rounded-full bg-karn-yellow/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                 <span className="w-3 h-3 rounded-full bg-karn-green/80 shadow-[0_0_10px_rgba(22,163,74,0.5)]"></span>
               </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-end gap-6">
               <div className="flex items-end gap-4 h-48">
                 {[40, 55, 30, 75, 50, 95, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm relative group cursor-crosshair">
                        <div className="absolute bottom-full mb-2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] text-white/80 bg-black-matte px-2 py-1 rounded">+{h}%</span>
                        </div>
                        <div className="w-full bg-gradient-to-t from-karn-blue/40 to-karn-blue/10 rounded-t-md border-t border-karn-blue/50 transition-all duration-700 hover:brightness-150" style={{ height: `${h}%` }}></div>
                    </div>
                 ))}
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">Active Deals</span>
                     <span className="text-2xl font-light text-white">124</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">Conversion Rate</span>
                     <span className="text-2xl font-light text-white">8.4%</span>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
    </div>
  );
}
