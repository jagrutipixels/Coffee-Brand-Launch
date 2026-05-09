import React from 'react';
import { images } from '@/lib/constants';

export default function SeoSlide() {
  return (
    <div className="w-full h-full flex flex-col py-12">
      <div className="mb-12">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">SEO & Search Visibility</p>
        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight">
          Long-Term Organic <br/>
          <span className="font-medium">Growth Strategy</span>
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
           {[
             { t: 'Technical SEO', c: '#2563EB', i: '01' },
             { t: 'Google Visibility', c: '#DC2626', i: '02' },
             { t: 'Keyword Strategy', c: '#EAB308', i: '03' },
             { t: 'Blog Content', c: '#16A34A', i: '04' },
             { t: 'National Rankings', c: '#9333EA', i: '05' },
             { t: 'International Reach', c: '#D4AF37', i: '06' },
           ].map((item, i) => (
             <div key={i} className="glass-panel p-6 rounded-xl border-l-[3px]" style={{ borderLeftColor: item.c }}>
               <span className="font-heading text-white/30 text-2xl font-light mb-2 block">{item.i}</span>
               <h4 className="text-lg font-medium text-white/90">{item.t}</h4>
             </div>
           ))}
        </div>
        
        <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden relative">
           <img src={images.dashboard} className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
