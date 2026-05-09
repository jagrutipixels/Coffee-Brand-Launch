import React from 'react';
import { images } from '@/lib/constants';

export default function ContentSlide() {
  return (
    <div className="w-full h-full flex flex-col pt-12 relative overflow-hidden">
      <div className="mb-12 relative z-10 w-full max-w-4xl mx-auto text-center">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">Content Production</p>
        <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight">
          Cinematic Brand <span className="font-medium">Storytelling</span>
        </h2>
      </div>

      <div className="absolute inset-0 z-0">
         <img src={images.cover} className="w-full h-full object-cover opacity-20" />
         <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/70 to-transparent"></div>
      </div>

      <div className="flex-1 relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pb-12">
        {[
          'Brand Films',
          'Manufacturing Documentaries',
          'Social Media Content',
          'Product Photography',
          'Founder Storytelling',
          'Corporate Visuals'
        ].map((item, i) => (
           <div key={i} className="glass-panel rounded-2xl p-8 flex items-center justify-center text-center hover:bg-white/10 transition-colors border-t-2" style={{ borderTopColor: ['#2563EB', '#DC2626', '#EAB308', '#16A34A', '#9333EA', '#D4AF37'][i] }}>
              <h4 className="text-xl font-medium text-white/90">{item}</h4>
           </div>
        ))}
      </div>
    </div>
  );
}
