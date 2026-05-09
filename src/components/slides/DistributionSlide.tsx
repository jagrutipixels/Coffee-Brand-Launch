import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function DistributionSlide() {
  return (
    <div className="w-full h-full flex flex-col pt-12 relative z-10">
      <div className="mb-12 relative z-10 w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[2px] bg-karn-yellow"></div>
           <p className="font-heading text-karn-yellow text-xs tracking-[0.3em] uppercase">Logistics & Scale</p>
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-heading font-light leading-[1.1] tracking-tight"
        >
          Expanding Global <br />
          <span className="font-medium text-gray-900">Distribution Networks</span>
        </motion.h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 pb-12">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
           className="col-span-1 md:col-span-2 relative rounded-[2rem] overflow-hidden glass-panel group"
        >
          <img
            src={images.team}
            className="absolute inset-0 w-full h-full object-cover opacity-30 filter sepia-[.3] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-black-matte/80 to-transparent"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-end w-3/4">
            <h3 className="text-3xl font-heading font-medium mb-3 text-gray-900">
              Distributor Partnerships
            </h3>
            <p className="text-gray-900 text-sm leading-relaxed max-w-sm">
              Identifying and securing lucrative partnerships with major
              regional and global coffee distributors through highly targeted outbound campaigns.
            </p>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
           className="col-span-1 glass-panel rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-full h-1" style={{ backgroundColor: colors.karn.red }}></div>
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 blur-[20px] transition-opacity" style={{ backgroundColor: colors.karn.red }}></div>
          <h3 className="text-2xl font-heading font-medium mb-3 text-gray-900">
            Trade Shows & Expos
          </h3>
          <p className="text-gray-900 text-sm leading-relaxed">
            High-impact visual superiority at international F&B
            exhibitions to dominate foot traffic.
          </p>
        </motion.div>

        <div className="col-span-1 flex flex-col gap-6">
          <motion.div 
             initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
             className="flex-1 glass-panel rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: colors.karn.blue }}></div>
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 blur-[20px] transition-opacity" style={{ backgroundColor: colors.karn.blue }}></div>
            <h3 className="text-xl font-heading font-medium text-gray-900 mb-2">
              Export Visibility
            </h3>
            <p className="text-gray-900 text-xs">Digitizing your supply capabilities.</p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
             className="flex-1 glass-panel rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: colors.karn.green }}></div>
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 blur-[20px] transition-opacity" style={{ backgroundColor: colors.karn.green }}></div>
            <h3 className="text-xl font-heading font-medium text-gray-900 mb-2">
              B2B Sales Support
            </h3>
            <p className="text-gray-900 text-xs">Arming reps with premium collateral.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
