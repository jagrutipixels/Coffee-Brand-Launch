import React from 'react';
import { motion } from 'motion/react';
import { colors } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSlide() {
  const portfolios = [
    { 
      name: "Savoir Studio", 
      url: "https://www.ssbykmw.com/", 
      desc: "Built the full-service content production arm for Karn Marketing Warfare from scratch. Live operational infrastructure.",
      c: colors.karn.blue,
      status: "STUDIO INCEPTION • LIVE"
    },
    { 
      name: "Casuall.in", 
      url: "https://casuall.in/", 
      desc: "Modern apparel focusing on everyday comfort without compromising on distinct style. E-commerce rollout.",
      c: colors.karn.red,
      status: "D2C APPAREL • LIVE"
    },
    { 
      name: "Tech Ev", 
      url: "https://candid-pegasus-1f86d2.netlify.app/#/", 
      desc: "Designed the digital launch strategy and high-performance UI structure for a new EV scooter brand. Live site.",
      c: colors.karn.green,
      status: "ELECTRIC MOBILITY • LIVE"
    },
    { 
      name: "DBN", 
      url: "https://icretepixels.vercel.app/", 
      desc: "Complete brand launch for premium Alphonso mango distribution. Covers naming, packaging, and digital.",
      c: colors.karn.yellow,
      status: "PREMIUM D2C • LIVE"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-[80vh] relative z-10 py-12">
      <div className="mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
           <div className="w-8 h-[2px] bg-white/20"></div>
           <p className="font-heading text-white/50 text-xs tracking-[0.3em] uppercase">KARN Portfolio</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-tight tracking-tight mb-4"
        >
          Brands We've <br />
          <span className="font-medium text-white">Successfully Built</span>
        </motion.h2>
      </div>

      <div className="w-full pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {portfolios.map((item, i) => (
            <motion.a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full rounded-[2.5rem] bg-[#0c0c0e] border border-white/5 group hover:border-white/20 transition-all block relative overflow-hidden shadow-2xl"
            >
              <div className="h-[280px] w-full relative overflow-hidden border-b border-white/10 bg-white/5">
                {/* Live Preview via Iframe Scale hack. Fallback to image if iframe fails */}
                <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                   <iframe src={item.url} className="w-full h-full border-none bg-white" loading="lazy" title={item.name} />
                </div>
                
                {/* Overlay Gradient to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-90 pointer-events-none"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black-matte/80 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full z-20">
                   <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-white/90">{item.status}</span>
                </div>

                {/* Hover Reveal Explore */}
                <div className="absolute inset-0 bg-[#0c0c0e]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-white text-black-matte flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      <ExternalLink size={24} />
                    </div>
                    <span className="text-white font-heading tracking-[0.2em] text-xs uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Explore Launch Site</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-4xl font-serif text-white mb-4 tracking-tight">{item.name}</h3>
                <p className="text-white/50 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
