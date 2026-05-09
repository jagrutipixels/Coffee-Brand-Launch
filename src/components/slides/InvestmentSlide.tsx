import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function InvestmentSlide() {
  const pillars = [
    {
      title: 'Global Digital Infrastructure',
      color: '#2563EB', // Blue
      items: ['Enterprise B2B Web Ecosystem', 'Global Search & Technical SEO Engine', 'Custom AI Sales Assistant Integration', 'Full Hubspot/Salesforce CRM Pipelines']
    },
    {
      title: 'Cinematic Production Unit',
      color: '#DC2626', // Red
      items: ['Quarterly Brand Documentaries', 'High-End Factory & Product Cinematography', 'Consistent Executive Founder Series', 'International Trade Show Video Assets']
    },
    {
      title: 'Performance & Lead Growth',
      color: '#EAB308', // Yellow
      items: ['Multi-Channel Paid Acquisition', 'Automated Lead Nurturing Workflows', 'LinkedIn B2B Account-Based Marketing', 'Data-Driven Retargeting Infrastructures']
    },
    {
      title: 'Media & Global Positioning',
      color: '#9333EA', // Purple
      items: ['Tier-1 International PR Outreach', 'Podcast & Speaking Placements', 'Global Distributor Network Collateral', 'Dedicated Account Executive & Weekly Sprints']
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12 relative z-10">
      <div className="mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-4 mb-4">
           <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-karn-green"></div>
           <p className="font-heading text-karn-green text-xs tracking-[0.3em] uppercase">The K.A.R.N. Warfare Commitment</p>
           <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-karn-green"></div>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight">
          Enterprise Partnership <span className="font-medium">Investment</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
         <motion.div 
           initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}
           className="col-span-1 lg:col-span-5 glass-panel rounded-3xl p-1 relative overflow-hidden"
         >
           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-transparent"></div>
           <div className="relative z-10 w-full h-full rounded-[22px] bg-black-matte/90 px-8 py-16 flex flex-col items-center justify-center text-center">
              <div className="inline-block px-5 py-2 rounded-full border border-gray-900/20 bg-gray-900/5 text-gray-900/90 text-xs font-heading tracking-[0.2em] uppercase mb-12 shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                 Annual Brand Domination Retainer
              </div>
              <div className="flex items-start justify-center gap-2 mb-4">
                 <span className="text-4xl text-gray-900 font-light mt-1">₹</span>
                 <span className="text-7xl lg:text-[7rem] font-heading font-medium text-gray-900 tracking-tighter leading-none">2.40</span>
                 <span className="text-3xl text-gray-900 font-light mt-auto mb-2">Cr</span>
              </div>
              <p className="text-gray-900 tracking-widest text-sm uppercase mb-12">Per Annum (Billed Quarterly/Monthly)</p>
              
              <div className="w-full p-6 rounded-2xl bg-gray-900/5 border border-gray-900/10">
                 <p className="text-gray-900 text-sm leading-relaxed">Dedicated 12+ person unit operating as your in-house CMO, media production, and digital growth agency.</p>
              </div>
           </div>
         </motion.div>

         <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1 * i }}
                className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-gray-900/20 transition-all duration-300"
              >
                {/* Embedded Karn Color Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundImage: `radial-gradient(circle at top right, ${pillar.color}, transparent)` }}></div>
                
                <h3 className="text-xl font-heading font-medium text-gray-900 mb-6 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color, boxShadow: `0 0 10px ${pillar.color}` }}></div>
                   {pillar.title}
                </h3>
                
                <ul className="space-y-4">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start text-gray-900/90 text-sm group-hover:text-gray-900 transition-colors">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 opacity-50" style={{ color: pillar.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
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
