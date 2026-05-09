import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';
import { ArrowUpRight, Target, Globe2, ShieldCheck } from 'lucide-react';

export default function MarketOpportunitySlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-12 relative z-10">
      <div className="mb-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="flex items-center gap-4 mb-4">
           <div className="w-8 h-[2px] bg-karn-yellow"></div>
           <p className="font-heading text-karn-yellow text-xs tracking-[0.3em] uppercase">Market Opportunity & Our Role</p>
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
           className="text-4xl md:text-5xl lg:text-7xl font-heading font-light leading-[1.1] tracking-tight"
        >
          Bridging The Gap Between <br className="hidden md:block" />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900/60">Capacity & Global Dominance.</span>
        </motion.h2>
      </div>

      <div className="w-full grid grid-flow-row-dense grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
        {/* Main Image Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
           className="lg:col-span-8 relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-black-matte border border-gray-900/5 flex flex-col justify-end min-h-[300px]"
        >
           <img src={images.beans} 
             className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
             alt="Coffee Beans" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/95 via-black-matte/60 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-transparent"></div>
           
           <div className="relative z-10 p-8 md:p-10 flex flex-col gap-4 w-full md:w-4/5">
              <div className="flex items-center gap-3">
                <Globe2 className="text-karn-blue w-5 h-5" />
                <span className="text-gray-900 font-mono text-xs tracking-widest uppercase text-karn-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]">The Macro Deficit</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading text-gray-900 leading-tight">Global Demand is Surging,<br/>But Trust is Segmented.</h3>
              <p className="text-gray-900/90 text-base md:text-lg leading-relaxed mix-blend-screen">
                International demand for premium, high-volume coffee manufacturing is at an all-time high. Your facility has the raw capacity, but international conglomerates and Tier-1 hospitality groups buy <span className="text-gray-900 font-medium">brand trust and operational authority</span>, not just product.
              </p>
           </div>
        </motion.div>

        {/* Info Card 1 - KMW's Role */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
           className="lg:col-span-4 bg-gradient-to-br from-black-matte to-black-matte rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden group border border-gray-900/10 hover:border-karn-yellow/30 transition-all"
        >
           <div className="absolute top-0 right-0 w-40 h-40 opacity-10 bg-karn-yellow blur-[40px] rounded-bl-full transition-all group-hover:opacity-20 group-hover:scale-110"></div>
           
           <div className="w-12 h-12 rounded-full bg-gray-900/5 border border-gray-900/10 flex items-center justify-center mb-6 z-10">
             <Target className="w-6 h-6 text-karn-yellow" />
           </div>
           
           <h4 className="text-2xl font-heading font-medium mb-4 text-gray-900 z-10">How We Play <br/>The Crucial Role</h4>
           <div className="w-8 h-[1px] bg-gray-900/20 mb-4 z-10"></div>
           <p className="text-gray-900/90 text-sm leading-relaxed z-10">
             We architect the narrative. We transition your identity from a generic supplier to a <strong>Tier-1 Institutional Partner</strong>. KMW builds the digital infrastructure, trust signals, and B2B funnels that intercept decision-makers before they even look at your competitors.
           </p>
        </motion.div>

        {/* Info Card 2 */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }}
           className="lg:col-span-5 bg-gradient-to-b from-black-matte to-black-matte rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group border border-gray-900/5"
        >
           <div className="absolute top-0 left-0 w-32 h-32 opacity-[0.03] group-hover:opacity-10 bg-gray-900 blur-[30px] rounded-br-full transition-all"></div>
           
           <div>
             <div className="flex items-center gap-3 mb-4">
               <ShieldCheck className="text-karn-green w-5 h-5" />
               <span className="text-gray-900 font-mono text-xs tracking-widest uppercase">Private Label & DTC</span>
             </div>
             <h4 className="text-2xl font-heading font-medium mb-3 text-gray-900">Capturing Institutional Volume</h4>
             <p className="text-gray-900 text-sm leading-relaxed">
               Ambitious retail brands and massive DTC disruptors want turnkey manufacturing partners. We build targeted outreach campaigns that sell your reliability and scale directly to their procurement heads.
             </p>
           </div>
        </motion.div>

        {/* Action Card / The KMW Catalyst */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.3 }}
           className="lg:col-span-7 bg-black-matte border border-gray-900/10 hover:border-gray-900/20 transition-all rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between relative overflow-hidden group cursor-pointer"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-karn-purple/5 via-transparent to-transparent"></div>
           
           <div className="relative z-10 max-w-sm mb-6 sm:mb-0">
              <span className="text-karn-purple tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block">The KMW Catalyst</span>
              <h3 className="text-3xl font-heading font-normal text-gray-900 leading-tight">Translating Capacity<br/>Into <span className="font-medium italic">Brand Equity.</span></h3>
           </div>
           
           <div className="relative z-10 sm:text-right">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-black-matte flex items-center justify-center sm:ml-auto group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
