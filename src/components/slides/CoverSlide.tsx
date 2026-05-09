import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '@/lib/constants';

const FloatingBeans = () => {
  // Generate random properties for beans (particles)
  const beans = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    rotate: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    blur: Math.random() * 4,
    color: Math.random() > 0.5 ? '#2c1e16' : '#1a110b', // Deep coffee colors
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" style={{ perspective: '1000px' }}>
      {beans.map((bean) => (
        <motion.div
           key={bean.id}
           className="absolute rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] shadow-2xl"
           style={{
             width: bean.size,
             height: bean.size * 1.4,
             backgroundColor: bean.color,
             left: `${bean.x}%`,
             top: `${bean.y}%`,
             filter: `blur(${bean.blur}px)`,
             boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.8), inset 2px 2px 4px rgba(255,255,255,0.1)',
           }}
           animate={{
             y: ['-20vh', '120vh'], // Fall down or float up? Let's make them float up like roasting smoke/beans
             rotateX: [0, 720],
             rotateY: [0, 360],
             rotateZ: [bean.rotate, bean.rotate + 360],
             x: ['0vw', `${Math.random() * 20 - 10}vw`]
           }}
           transition={{
             duration: bean.duration,
             repeat: Infinity,
             delay: bean.delay,
             ease: "linear"
           }}
        >
          {/* Slit of the coffee bean */}
          <div className="absolute top-[10%] left-[40%] w-[20%] h-[80%] bg-[#0f0a07] rounded-full rotate-[-10deg] opacity-60 mix-blend-multiply blur-[0.5px]"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default function CoverSlide() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative w-full h-[95vh] rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/80 border border-[#2c1e16]/30 mx-auto bg-[#0a0604]">
      {/* 3D Coffee Bean Particles */}
      <FloatingBeans />

      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0604] via-[#0a0604]/60 to-[#0a0604]/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-transparent to-transparent z-10 mix-blend-multiply"></div>
        
        {/* Dynamic Abstract Roasting glow */}
        <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 -right-1/4 w-[120vh] h-[120vh] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-10"
        />

        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 25, ease: "easeOut" }}
          src={"https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=2874&auto=format&fit=crop"} 
          alt="Coffee Manufacturing Roaster" 
          className="w-full h-full object-cover opacity-60 sepia-[.4] contrast-[1.2] grayscale-[50%] mix-blend-luminosity"
        />
        {/* Adds a second grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-10"></div>
      </motion.div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center p-12 md:p-24">
        <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: '6rem' }}
           transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
           className="w-[1px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent mb-8"
        />
        
        <div className="flex flex-col items-center gap-1 mb-8 perspective-[1000px]">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#d4af37] font-mono tracking-[0.4em] text-xs md:text-sm uppercase mb-4"
          >
            Phase 1: Inception
          </motion.p>
          
          <h1 className="flex flex-col items-center gap-2 overflow-hidden py-2">
            <motion.span 
              initial={{ opacity: 0, y: 100, rotateX: -30 }} 
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-light tracking-tighter leading-[0.8] text-white"
            >
              Mastering the <span className="font-serif italic text-white/50">Roast</span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 100, rotateX: -30 }} 
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fcd34d] to-[#d4af37]"
            >
              Global Expansion.
            </motion.span>
          </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed mt-4"
        >
          A highly-calibrated, full-spectrum marketing infrastructure designed to position your operations at the apex of the global coffee supply chain.
        </motion.p>
      </div>

      <motion.div 
         style={{ opacity }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
         <div className="w-[1px] h-16 relative overflow-hidden bg-white/10">
           <motion.div 
             animate={{ y: ['-100%', '200%'] }} 
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
           />
         </div>
         <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono">Ignite Experience</span>
      </motion.div>
    </div>
  );
}
