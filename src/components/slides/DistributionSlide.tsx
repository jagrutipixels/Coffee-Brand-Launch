import React from 'react';
import { images } from '@/lib/constants';

export default function DistributionSlide() {
  return (
    <div className="w-full h-full flex flex-col pt-12 relative">
      <div className="mb-12 relative z-10 w-full max-w-4xl">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">Trade & Distribution</p>
        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight">
          Expanding Global <br/>
          <span className="font-medium text-white">Distribution Networks</span>
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 pb-12">
        <div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden glass-panel">
            <img src={images.team} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-black-matte/80 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end w-2/3">
               <h3 className="text-2xl font-medium mb-2 text-white">Distributor Partnerships</h3>
               <p className="text-white/60 text-sm">Identifying and securing lucrative partnerships with major regional and global coffee distributors.</p>
            </div>
        </div>
        
        <div className="col-span-1 glass-panel rounded-2xl p-8 flex flex-col justify-end border-b-4 border-[#DC2626]">
            <h3 className="text-xl font-medium mb-2 text-white">Trade Shows & Expos</h3>
            <p className="text-white/60 text-sm">High-impact visibility at international food and beverage exhibitions.</p>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
           <div className="flex-1 glass-panel rounded-2xl p-6 flex flex-col justify-end border-b-4 border-[#2563EB]">
              <h3 className="text-lg font-medium text-white">Export Visibility</h3>
           </div>
           <div className="flex-1 glass-panel rounded-2xl p-6 flex flex-col justify-end border-b-4 border-[#EAB308]">
              <h3 className="text-lg font-medium text-white">B2B Sales Support</h3>
           </div>
        </div>
      </div>
    </div>
  );
}
