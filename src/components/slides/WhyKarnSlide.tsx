import React from 'react';
import { images } from '@/lib/constants';

export default function WhyKarnSlide() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-12 items-center py-12">
      <div className="flex-1">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">Why K.A.R.N.</p>
        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight mb-8">
          Why K.A.R.N. Marketing <br/>
          <span className="font-medium text-white">Warfare LLP</span>
        </h2>
        
        <div className="space-y-8">
           {[
             { t: 'Strategic Growth Expertise', d: 'We don’t just market; we build scalable business ecosystems.' },
             { t: 'Cinematic Production', d: 'World-class visual storytelling that elevates your brand perception.' },
             { t: 'Enterprise Marketing Systems', d: 'Robust frameworks built for high-volume B2B lead generation.' },
             { t: 'AI-Powered Execution', d: 'Leveraging the latest technology for efficiency and reach.' },
             { t: 'Global Branding Mindset', d: 'Positioning your company not just locally, but as an international leader.' }
           ].map((item, i) => (
             <div key={i} className="flex gap-6 items-start relative group">
                <div className="absolute -left-6 top-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors"></div>
                <div>
                   <h4 className="text-lg font-medium text-white mb-1 group-hover:text-gold transition-colors">{item.t}</h4>
                   <p className="text-white/50 text-sm max-w-md">{item.d}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
      
      <div className="w-full md:w-[45%] h-[70vh] rounded-2xl overflow-hidden glass-panel border border-white/10 p-2">
         <img src={images.factory} className="w-full h-full object-cover rounded-xl filter contrast-125 saturate-50" />
      </div>
    </div>
  );
}
