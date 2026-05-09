import React from 'react';
import { images } from '@/lib/constants';

export default function PrMediaSlide() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-16 py-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">PR & Media Strategy</p>
        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight mb-12">
          Building Industry Trust & <br/>
          <span className="font-medium text-white">Authority</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
           {[
             { t: 'PR Campaigns', d: 'Strategic placements in top-tier business and coffee industry publications.' },
             { t: 'Founder Branding', d: 'Positioning leadership as visionary voices in the global coffee space.' },
             { t: 'Media Outreach', d: 'Proactive engagement with journalists and industry analysts.' },
             { t: 'Podcast Features', d: 'Securing guest spots on high-impact B2B and FMCG podcasts.' },
           ].map((item, i) => (
             <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center shrink-0 text-white/50 font-heading">
                   {i+1}
                </div>
                <div>
                   <h4 className="text-lg font-medium text-white mb-1">{item.t}</h4>
                   <p className="text-sm text-white/50">{item.d}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
        <div className="w-full aspect-[4/5] max-w-md relative glass-panel p-4 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
           <div className="w-full h-full relative overflow-hidden rounded-xl">
              <img src={images.boardroom} className="w-full h-full object-cover grayscale opacity-80" />
              <div className="absolute inset-0 bg-[#1A1513]/40 mix-blend-color"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black-matte to-transparent">
                 <p className="font-heading text-3xl font-light text-white mb-2">Forbes</p>
                 <div className="w-12 h-1 bg-gold"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
