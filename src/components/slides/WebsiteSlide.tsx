import React from 'react';
import { motion } from 'motion/react';
import { images, colors } from '@/lib/constants';

export default function WebsiteSlide() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-20 items-center py-12">
      <div className="flex-1">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-blue"></div>
           <p className="font-heading text-karn-blue text-xs tracking-[0.3em] uppercase">Website Ecosystem</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 30 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: false, amount: 0.3 }}
           className="text-4xl md:text-6xl font-heading font-light leading-[1.1] mb-12"
        >
          Enterprise-Level <br/>
          <span className="font-medium text-gray-900">Digital Infrastructure.</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
           {[
             { t: 'Website Structure', c: colors.karn.blue, desc: 'A hub designed for premium B2B conversion.' },
             { t: 'Lead Gen System', c: colors.karn.red, desc: 'Seamlessly capture institutional tier inquiries.' },
             { t: 'Strategic Forms', c: colors.karn.yellow, desc: 'Pre-qualifying questionnaires for high-volume orders.' },
             { t: 'CRM Integration', c: colors.karn.green, desc: 'Automated deal flow mapping in Hubspot/Salesforce.' },
             { t: 'AI Chatbot', c: colors.karn.purple, desc: '24/7 global response capability.' },
             { t: 'SEO Framework', c: colors.karn.blue, desc: 'Built top-to-bottom for search supremacy.' },
           ].map((item, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.3 }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="flex flex-col gap-2 relative group"
             >
               <div className="absolute -left-5 top-2 w-1.5 h-1.5 rounded-full ring-2 ring-transparent group-hover:ring-gray-900/30 transition-all font-mono" style={{ backgroundColor: item.c, boxShadow: `0 0 10px ${item.c}` }}></div>
               <h4 className="text-xl font-medium text-gray-900/90 group-hover:translate-x-1 transition-transform">{item.t}</h4>
               <p className="text-gray-900 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
      
      <motion.div 
         initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
         whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
         viewport={{ once: false, amount: 0.3 }}
         transition={{ duration: 1 }}
         className="w-full md:w-[45%] h-[75vh] rounded-[2rem] overflow-hidden glass-panel border border-gray-900/5 p-4 shadow-2xl relative group"
      >
         <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img src={images.network} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] sepia-[.2]" alt="Digital Infrastructure" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-transparent"></div>
         </div>
      </motion.div>
    </div>
  );
}
