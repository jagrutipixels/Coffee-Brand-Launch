import React from 'react';
import { images } from '@/lib/constants';

export default function OutdoorSlide() {
  return (
    <div className="w-full h-full flex flex-col py-12">
      <div className="mb-12 text-center w-full max-w-4xl mx-auto">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">Outdoor & Global Visibility</p>
        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight">
          Large-Scale Brand <span className="font-medium">Visibility Campaigns</span>
        </h2>
      </div>

      <div className="flex-1 relative w-full rounded-2xl overflow-hidden glass-panel group">
         <img src={images.billboard} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
         <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black-matte via-black-matte/80 to-transparent">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { t: 'Airport Branding', d: 'High-net-worth terminal visibility' },
                 { t: 'Billboards', d: 'Strategic urban placements' },
                 { t: 'Business Districts', d: 'Targeting corporate hubs globally' },
                 { t: 'Expo Branding', d: 'Commanding presence at events' }
               ].map((item, i) => (
                 <div key={i}>
                    <div className="w-8 h-1 mb-4" style={{ backgroundColor: ['#2563EB', '#DC2626', '#EAB308', '#16A34A'][i] }}></div>
                    <h4 className="text-lg font-medium text-white mb-1">{item.t}</h4>
                    <p className="text-white/60 text-sm">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
