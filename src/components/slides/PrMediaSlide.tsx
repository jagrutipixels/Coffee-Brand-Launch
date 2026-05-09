import React from "react";
import { motion } from "motion/react";
import { images, colors } from "@/lib/constants";

export default function PrMediaSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-10 md:py-20 relative z-10 px-4 md:px-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[2px] bg-karn-blue"></div>
               <p className="font-heading text-karn-blue text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Executive PR & Media</p>
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
               className="text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-[1.1] mb-8 tracking-tight text-gray-900"
            >
              Building Industry <br />
              <span className="font-medium">Trust & Authority</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed max-w-md">
              We position your brand and leadership team as the definitive authority in the global coffee manufacturing space.
            </motion.p>
            
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {[
                {
                  t: "Premium Business PR",
                  d: "Securing features and editorial placements in top-tier financial and industry publications.",
                  c: colors.karn.blue
                },
                {
                  t: "Executive Branding",
                  d: "Building strong personal brands for your founders to attract high-value partnerships and talent.",
                  c: colors.karn.red
                },
                {
                  t: "Industry Broadcasting",
                  d: "Getting your leadership featured on influential business podcasts, interviews, and trade panels.",
                  c: colors.karn.yellow
                },
                {
                  t: "Reputation Management",
                  d: "Proactively managing public perception to ensure the brand narrative is always positive and controlled.",
                  c: colors.karn.green
                },
              ].map((item, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + (i * 0.1) }}
                   viewport={{ once: true }}
                   className="bg-white p-5 rounded-[1.5rem] border border-gray-100 flex gap-5 items-center group hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                     <div className="w-3 h-3 rounded-full border border-white" style={{ backgroundColor: item.c, boxShadow: `0 0 12px ${item.c}` }}></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-gray-900 mb-0.5 transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed pr-4">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true, amount: 0.3 }}
             className="w-full lg:w-1/2 h-full min-h-[400px] md:min-h-[500px] lg:min-h-[650px] flex flex-col items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-karn-blue/10 via-transparent to-transparent -z-10"></div>
            <div className="w-full relative bg-white p-2 md:p-3 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-gray-100 group h-full max-h-[700px]">
              <div className="w-full h-full relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
                <img src={images.boardroom}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]"
                  alt="Boardroom" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                  <div className="w-12 h-[3px] bg-karn-blue mb-6 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                  <h3 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight font-light">
                    Authoritative <span className="font-medium">Placements</span>
                  </h3>
                  <p className="text-gray-600 max-w-sm text-sm md:text-lg leading-relaxed font-medium">
                    We secure coverage where it matters, putting your brand in front of targeted institutional buyers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
