import React from 'react';
import { images } from '@/lib/constants';

export default function SocialSlide() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-12 items-center py-12">
       <div className="w-full md:w-1/2 h-[70vh] rounded-2xl overflow-hidden relative">
          <img src={images.social} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black-matte/40 mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black-matte to-transparent">
             <div className="flex gap-4">
               {['#2563EB', '#DC2626', '#EAB308', '#16A34A', '#9333EA'].map((c, i) => (
                 <div key={i} className="w-12 h-1 rounded-full" style={{ backgroundColor: c }}></div>
               ))}
             </div>
          </div>
       </div>

       <div className="flex-1">
          <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">Social Media Strategy</p>
          <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight mb-12">
            Building A Strong Global <br/>
            <span className="font-medium text-white">Digital Presence</span>
          </h2>

          <div className="flex gap-4 mb-12 flex-wrap">
             {['LinkedIn', 'Instagram', 'YouTube', 'Google Business', 'X / Twitter'].map((plat, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm">
                   {plat}
                </div>
             ))}
          </div>

          <div className="space-y-8">
             <div>
                <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#2563EB]"></span> Content Strategy</h4>
                <p className="text-white/60">Data-driven content pillars tailored for B2B engagement and global brand awareness.</p>
             </div>
             <div>
                <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#DC2626]"></span> Thought Leadership</h4>
                <p className="text-white/60">Positioning your executives as industry authorities in coffee manufacturing.</p>
             </div>
             <div>
                <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#EAB308]"></span> Community Engagement</h4>
                <p className="text-white/60">Building an active network of buyers, distributors, and industry partners.</p>
             </div>
          </div>
       </div>
    </div>
  );
}
