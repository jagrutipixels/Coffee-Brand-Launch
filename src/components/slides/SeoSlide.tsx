import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function SeoSlide() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-16 py-12 relative z-10">
      <div className="flex-1 w-full lg:w-1/2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-green"></div>
           <p className="font-heading text-karn-green text-xs tracking-[0.3em] uppercase">Search Monopoly</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] mb-12 tracking-tight"
        >
          Organic Market <br />
          <span className="font-medium text-gray-900">Domination.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
          {[
            { t: "Technical Infrastructure", d: "Sub-second load times and flawless indexing.", details: "Leveraging edge networks ensuring Google scores the site perfectly for core web vitals.", c: colors.karn.blue, i: "01" },
            { t: "Intent Hijacking", d: "Ranking for high-value competitor search terms.", details: "Targeting legacy manufacturers and diverting traffic to our modernized value proposition.", c: colors.karn.red, i: "02" },
            { t: "Enterprise Content", d: "Long-form editorial scaling domain authority.", details: "Publishing deeply researched 3,000+ word whitepapers on global coffee logistics.", c: colors.karn.yellow, i: "03" },
            { t: "B2B Keyword Matrix", d: "Targeting 'wholesale', 'manufacturer', 'distributor'.", details: "Creating hundreds of programmatic landing pages tailored for high-intent B2B search.", c: colors.karn.green, i: "04" },
            { t: "Domestic Dominance", d: "Owning the search landscape across India.", details: "Inescapable presence when domestic chains search for private label roasting partners.", c: colors.karn.purple, i: "05" },
            { t: "Global Corridors", d: "Targeting buyers in Europe, Middle East, NA.", details: "Deploying multi-lingual SEO sub-directories capturing institutional buyers globally.", c: colors.karn.yellow, i: "06" },
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              viewport={{ once: false, amount: 0.5 }}
              key={i}
              className="glass-panel rounded-[1.5rem] border-l-[4px] relative overflow-hidden group hover:bg-gray-900/5 transition-colors min-h-[160px] cursor-pointer"
              style={{ borderLeftColor: item.c }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 blur-[20px] transition-opacity" style={{ backgroundColor: item.c }}></div>
              
              {/* Default Content */}
              <div className="flex flex-col h-full transform transition-transform duration-500 group-hover:-translate-y-full absolute inset-0 p-6">
                <span className="font-heading text-gray-900 text-3xl font-light mb-3 block group-hover:text-gray-900 transition-colors">
                  {item.i}
                </span>
                <h4 className="text-xl font-medium text-gray-900/90 mb-2">{item.t}</h4>
                <p className="text-gray-900 text-xs leading-relaxed">{item.d}</p>
              </div>

              {/* Hover Details Content */}
              <div 
                className="flex flex-col justify-center h-full absolute inset-0 p-6 backdrop-blur-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundColor: `${item.c}10` }}
              >
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.c }}></div>
                   <h4 className="text-xs font-medium uppercase tracking-wider" style={{ color: item.c }}>{item.t}</h4>
                </div>
                <p className="text-gray-900/90 text-sm leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: false, amount: 0.3 }}
         className="w-full lg:w-[45%] h-[50vh] lg:h-[75vh] rounded-[3rem] overflow-hidden relative glass-panel border border-gray-900/5 flex flex-col p-4 shadow-2xl"
      >
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
           <img
             src={images.dashboard}
             className="w-full h-full object-cover opacity-60 filter contrast-125 sepia-[.2] scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/90 via-[#16A34A]/10 to-transparent"></div>
           <div className="absolute inset-0 bg-black-matte/40"></div>
           
           <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="space-y-4 w-full">
                 {[85, 92, 78].map((w, i) => (
                    <div key={i} className="w-full bg-gray-900/5 h-2 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + Math.random() }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: [colors.karn.blue, colors.karn.green, colors.karn.yellow][i] }}
                       ></motion.div>
                    </div>
                 ))}
                 <p className="text-gray-900 text-xs font-mono mt-4 uppercase tracking-wider">Search Impression Growth (12mo Forward)</p>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
