import React from 'react';
import { images } from '@/lib/constants';

export default function PerfMarketingSlide() {
  return (
    <div className="w-full h-full flex items-center py-12">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4 text-center">Performance Marketing</p>
        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight mb-16 text-center">
          Lead Generation & <br/>
          <span className="font-medium text-white">Growth System</span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 relative">
           <div className="md:col-span-4 h-1 absolute top-1/2 left-0 w-full bg-white/10 -z-10 translate-y-[-50%] hidden md:block"></div>
           
           {[
             { t: 'Awareness Campaigns', c: '#2563EB', d: 'Targeting top-of-funnel B2B buyers' },
             { t: 'Retargeting Ads', c: '#DC2626', d: 'Recapturing dropped institutional leads' },
             { t: 'Conversion Systems', c: '#EAB308', d: 'Optimized landing pages & funnels' },
             { t: 'B2B Inquiry Generation', c: '#16A34A', d: 'High-ticket contract acquisition' },
           ].map((step, i) => (
             <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center relative bg-black-matte border-t-2" style={{ borderTopColor: step.c }}>
                <div className="w-12 h-12 rounded-full mb-6 border-4 border-black-matte flex items-center justify-center -mt-12 bg-[#1A1513]">
                   <span className="text-gold font-heading text-sm">0{i+1}</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{step.t}</h4>
                <p className="text-white/60 text-sm">{step.d}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
