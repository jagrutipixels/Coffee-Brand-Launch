import React from 'react';
import { motion } from 'motion/react';
import { colors } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSlide() {
  const portfolios = [
    { 
      name: "Savoir Studio", 
      url: "https://www.ssbykmw.com/", 
      desc: "A premium lifestyle and aesthetic brand offering curated luxury experiences.",
      c: colors.karn.blue,
      status: "Live"
    },
    { 
      name: "Casuall", 
      url: "https://casuall.in/", 
      desc: "Modern apparel focusing on everyday comfort without compromising on distinct style.",
      c: colors.karn.red,
      status: "Live"
    },
    { 
      name: "DBN", 
      url: "https://icretepixels.vercel.app/", 
      desc: "Next-generation digital infrastructure for scalable enterprise deployment.",
      c: colors.karn.yellow,
      status: "Under Development"
    },
    { 
      name: "Tech Ev", 
      url: "https://candid-pegasus-1f86d2.netlify.app/#/", 
      desc: "Innovative electric vehicle solutions paving the way for sustainable mobility.",
      c: colors.karn.green,
      status: "Under Development"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[80vh] relative z-10 px-4">
      <div className="mb-16 text-center w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-8 h-[2px] bg-white/20"></div>
           <p className="font-heading text-white/50 text-xs tracking-[0.3em] uppercase">KARN Portfolio</p>
           <div className="w-8 h-[2px] bg-white/20"></div>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-tight tracking-tight mb-6"
        >
          Brands We've <br />
          <span className="font-medium text-white">Successfully Built</span>
        </motion.h2>
        
        <motion.p 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
           className="text-white/50 text-lg max-w-2xl mx-auto"
        >
          A selection of proprietary brands engineered from the ground up by KARN Marketing Warfare.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {portfolios.map((item, i) => (
          <motion.a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            className="glass-panel p-10 rounded-[2.5rem] border border-white/5 group hover:border-white/20 transition-all block relative overflow-hidden shadow-2xl cursor-pointer min-h-[250px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 group-hover:opacity-15 blur-[50px] transition-all duration-700 pointer-events-none rounded-bl-full" style={{ backgroundColor: item.c }}></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-3xl font-heading font-medium text-white group-hover:text-white/90 transition-colors">{item.name}</h3>
                  <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 border-white/10">
                    <ExternalLink size={18} className="text-white" />
                  </div>
                </div>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-mono tracking-wider" style={{ color: item.c }}>{item.status}</span>
                <span className="text-xs uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">Live Preview</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
