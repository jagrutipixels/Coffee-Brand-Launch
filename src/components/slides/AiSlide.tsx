import React from 'react';

export default function AiSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
         <div className="w-[800px] h-[800px] rounded-full border border-white border-dashed animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute w-[600px] h-[600px] rounded-full border border-[#2563EB] border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="relative z-10 text-center mb-16">
        <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-4">AI Automation</p>
        <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight">
          AI-Powered Marketing <br/>
          <span className="font-medium text-white">Infrastructure</span>
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl w-full">
         <div className="md:col-span-1"></div>
         {[
           { t: 'AI Sales Assistant', c: '#2563EB' },
           { t: 'Automated Follow-ups', c: '#DC2626' },
           { t: 'AI Media Management', c: '#EAB308' },
           { t: 'AI CRM Workflows', c: '#16A34A' },
           { t: 'AI Analytics', c: '#9333EA' },
         ].map((item, i) => (
           <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:h-48 group hover:bg-white/5 transition-colors">
              <div className="w-3 h-3 rounded-full mb-4 shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ backgroundColor: item.c, boxShadow: `0 0 20px ${item.c}` }}></div>
              <h4 className="text-sm font-medium text-white/90">{item.t}</h4>
           </div>
         ))}
      </div>
    </div>
  );
}
