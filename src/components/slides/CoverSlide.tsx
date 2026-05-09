import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '@/lib/constants';

export default function CoverSlide() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const title1 = "360° BRAND".split(" ");
  const title2 = "LAUNCH &".split(" ");
  const title3 = "MARKET EXPANSION.".split(" ");

  const textVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 20 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <div className="relative w-full h-[95vh] rounded-[3rem] overflow-hidden group shadow-2xl shadow-black border border-white/5 mx-auto">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/30 to-black-matte/10 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-matte/80 via-transparent to-transparent z-10 mix-blend-multiply"></div>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          src={images.factory} 
          alt="Coffee Manufacturing" 
          className="w-full h-full object-cover opacity-50 sepia-[.2] contrast-125"
        />
      </motion.div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center p-12 md:p-24 lg:p-32 w-2/3">
        <motion.div
           initial={{ opacity: 0, width: 0 }}
           animate={{ opacity: 1, width: '4rem' }}
           transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
           className="h-[2px] bg-gradient-to-r from-gold to-transparent mb-8"
        />
        
        <div className="flex flex-col gap-2 mb-12 perspective-[1000px]">
          <div className="flex gap-4 overflow-hidden py-2">
            {title1.map((word, i) => (
              <motion.span custom={i} variants={textVariants} initial="hidden" animate="visible" key={i} className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-light tracking-tight leading-[0.9] text-white/90">
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-4 overflow-hidden py-2">
            {title2.map((word, i) => (
              <motion.span custom={i + title1.length} variants={textVariants} initial="hidden" animate="visible" key={i} className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-light tracking-tight leading-[0.9] text-white/90">
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-4 overflow-hidden py-2">
            {title3.map((word, i) => (
              <motion.span custom={i + title1.length + title2.length} variants={textVariants} initial="hidden" animate="visible" key={i} className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-medium tracking-tight leading-[0.9] text-gold drop-shadow-lg">
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/60 text-lg md:text-2xl font-light tracking-wide max-w-xl"
        >
          GLOBAL BRAND DOMINATION PROPOSAL
        </motion.p>
      </div>

      {/* Floating abstract element */}
      <motion.div 
        initial={{ opacity: 0, right: '-10%', rotate: 45 }}
        animate={{ opacity: 0.8, right: '-5%', rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[40vw] h-[80vh] border border-white/5 rounded-[4rem] backdrop-blur-sm z-10 glass-panel"
      >
        <div className="absolute inset-10 border border-gold/10 rounded-[3rem]"></div>
      </motion.div>

      <motion.div 
         style={{ opacity }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
         <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Scroll to explore</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </div>
  );
}
