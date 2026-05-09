import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function InvestmentSlide() {
  const pillars = [
    {
      title: 'Omnichannel & Cinematic Production',
      color: '#2563EB', // Blue
      items: [
        '25–30 Premium Posts & 20–30 Reels/mo',
        'Celebrity-Level Production & Shoots',
        'Multi-Platform Dominance (IG, LI, X, YT)',
        'Global Digital Brand Ecosystem'
      ]
    },
    {
      title: 'Performance & Search Authority',
      color: '#EAB308', // Yellow
      items: [
        'PAN India Scale Meta & Google Ads',
        'Full-Funnel Lead Generation Systems',
        '100+ Keyword SEO Dominance & 12+ Blogs',
        'AI-Powered Sales & Retargeting Engine'
      ]
    },
    {
      title: 'Enterprise Digital Infrastructure',
      color: '#10B981', // Green
      items: [
        'Custom Enterprise Web Architecture',
        'HubSpot/CRM & Analytics Integration',
        'AI Workflow Automation Ecosystem',
        'Dedicated Weekly Strategic Sprints'
      ]
    },
    {
      title: 'PR, Offline & Authority Positioning',
      color: '#9333EA', // Purple
      items: [
        'Premium Outdoor & Mall Branding Support',
        'TV, News & PR Influencer Outreach',
        'Comprehensive Trademark & IP Advisory',
        'Outsourced CMO & Marketing War-Room'
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-10 md:py-16 px-4 md:px-8 relative z-10">
      <div className="mb-10 md:mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 md:gap-4 mb-4">
           <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-transparent to-karn-green"></div>
           <p className="font-heading text-karn-green text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">The K.A.R.N. Warfare Commitment</p>
           <div className="w-8 md:w-12 h-[2px] bg-gradient-to-l from-transparent to-karn-green"></div>
        </motion.div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light leading-tight">
          Enterprise Partnership <span className="font-medium">Investment</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
         <motion.div 
           initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
           className="col-span-1 lg:col-span-5 relative group"
         >
           <div className="absolute inset-0 bg-gradient-to-b from-karn-green/20 via-karn-blue/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
           <div className="glass-panel border-gray-900/10 shadow-2xl relative z-10 w-full h-full rounded-[2rem] bg-white p-6 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-500">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-karn-green/30 bg-karn-green/5 text-karn-green text-[10px] md:text-xs font-heading tracking-[0.2em] uppercase mb-8 md:mb-12 shadow-[0_0_30px_rgba(16,185,129,0.1)] font-bold">
                 <div className="w-2.5 h-2.5 rounded-full bg-karn-green animate-pulse"></div>
                 Annual Brand Retainer
              </div>

              <div className="flex items-start justify-center gap-1 md:gap-2 mb-2 relative w-full">
                 <span className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-light mt-1 md:mt-2">₹</span>
                 <span className="text-5xl md:text-7xl lg:text-[8rem] font-heading font-medium text-gray-900 tracking-tighter leading-none drop-shadow-sm">2.40</span>
                 <span className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light mt-auto mb-2 md:mb-3">Cr</span>
              </div>
              
              <p className="text-gray-500 tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm lg:text-base uppercase mb-8 md:mb-12 font-semibold">Per Annum (Billed Quarterly/Monthly)</p>
              
              <div className="w-full p-6 md:p-8 rounded-[1.5rem] bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-900/10 shadow-inner mt-auto relative overflow-hidden text-left">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-karn-red/5 rounded-full blur-2xl -mt-10 -mr-10"></div>
                 <p className="text-gray-700 text-sm md:text-base leading-relaxed relative z-10 font-medium text-center">
                   <strong className="text-gray-900 block mb-2 md:mb-3 text-base md:text-lg font-heading font-bold">Complete Growth Ecosystem</strong>
                   Dedicated 12+ person unit operating as your in-house CMO, media production, and digital growth agency.
                 </p>
              </div>
           </div>
         </motion.div>

         <div className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="glass-panel p-6 md:p-8 rounded-[2rem] bg-white border border-gray-900/5 shadow-lg relative overflow-hidden group hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                {/* Embedded Karn Color Accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" style={{ backgroundColor: pillar.color }}></div>
                
                <h3 className="text-lg md:text-xl font-heading font-medium text-gray-900 mb-4 md:mb-6 flex items-center gap-3 relative z-10 font-bold">
                   <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_10px_currentColor]" style={{ backgroundColor: pillar.color, color: pillar.color }}></div>
                   {pillar.title}
                </h3>
                
                <ul className="space-y-4 relative z-10">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 opacity-70" style={{ color: pillar.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
