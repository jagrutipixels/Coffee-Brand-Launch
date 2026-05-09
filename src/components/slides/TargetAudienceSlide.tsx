import React from 'react';
import { motion } from 'motion/react';
import { colors } from '@/lib/constants';

export default function TargetAudienceSlide() {
  const tiers = [
    {
      tier: "Tier 1: Institutional Volume",
      desc: "Massive scale contracts with focus on supply chain reliability.",
      color: colors.karn.blue,
      targets: [
        { name: 'Global Distribution Networks', focus: 'Regional supply monopolies' },
        { name: 'FMCG & Retail Giants', focus: 'High-volume contract manufacturing' },
        { name: 'Multi-National HORECA', focus: 'Enterprise hotel & resort procurement' }
      ]
    },
    {
      tier: "Tier 2: Premium Recurring",
      desc: "Consistent, standardized volume for brand-centric businesses.",
      color: colors.karn.red,
      targets: [
        { name: 'Global Café Chains', focus: 'Consistent roasting standardization' },
        { name: 'Premium DTC Brands', focus: 'High-margin private label' },
        { name: 'Corporate Hospitality', focus: 'Volume with quality expectations' }
      ]
    },
    {
      tier: "Tier 3: Specialty Segments",
      desc: "High-margin, niche operations requiring bespoke processing.",
      color: colors.karn.yellow,
      targets: [
        { name: 'Boutique Roasteries', focus: 'Specialty green/roasted sourcing' },
        { name: 'C-Suite Gifting', focus: 'Ultra-premium corporate packages' },
        { name: 'Specialty Exporters', focus: 'Niche international corridors' }
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center py-12 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-karn-blue/5 via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-6">
           <div className="w-8 h-px bg-karn-blue"></div>
           <p className="font-heading text-karn-blue text-xs tracking-[0.3em] uppercase">The Target Matrix</p>
           <div className="w-8 h-px bg-karn-blue"></div>
        </motion.div>
        <motion.h2 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-7xl font-heading font-light leading-tight tracking-tight"
        >
          High Net-Worth <br />
          <span className="font-medium text-gray-900">Tiered Acquisition</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 lg:px-0 w-full">
        {tiers.map((tier, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-8 border border-gray-900/5 hover:border-gray-900/20 transition-all relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] transform origin-left transition-transform duration-700" style={{ backgroundColor: tier.color }}></div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 blur-[30px] rounded-full transition-opacity" style={{ backgroundColor: tier.color }}></div>
            
            <div className="mb-8">
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-2">{tier.tier}</h3>
              <p className="text-gray-900 text-xs leading-relaxed uppercase tracking-wider">{tier.desc}</p>
            </div>

            <div className="space-y-4 relative z-10">
               {tier.targets.map((tgt, idx) => (
                  <div key={idx} className="bg-black-matte/40 rounded-xl p-4 border border-gray-900/5 group/tgt hover:bg-gray-900/5 transition-colors">
                     <div className="flex items-center gap-3 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: tier.color, color: tier.color }}></div>
                        <span className="text-gray-900/90 text-sm font-medium group-hover/tgt:text-gray-900">{tgt.name}</span>
                     </div>
                     <p className="text-gray-900 text-xs pl-4">{tgt.focus}</p>
                  </div>
               ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
