import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Lenis from '@studio-freight/lenis';
import { cn } from '@/lib/utils';
import CoverSlide from './slides/CoverSlide';
import ExecSummarySlide from './slides/ExecSummarySlide';
import MarketOpportunitySlide from './slides/MarketOpportunitySlide';
import BrandPositioningSlide from './slides/BrandPositioningSlide';
import TargetAudienceSlide from './slides/TargetAudienceSlide';
import StrategySlide from './slides/StrategySlide';
import WebsiteSlide from './slides/WebsiteSlide';
import ContentSlide from './slides/ContentSlide';
import SocialSlide from './slides/SocialSlide';
import PerfMarketingSlide from './slides/PerfMarketingSlide';
import SeoSlide from './slides/SeoSlide';
import AiSlide from './slides/AiSlide';
import PrMediaSlide from './slides/PrMediaSlide';
import DistributionSlide from './slides/DistributionSlide';
import OutdoorSlide from './slides/OutdoorSlide';
import ReportingSlide from './slides/ReportingSlide';
import OutcomesSlide from './slides/OutcomesSlide';
import InvestmentSlide from './slides/InvestmentSlide';
import WhyKarnSlide from './slides/WhyKarnSlide';
import ClosingSlide from './slides/ClosingSlide';

const sections = [
  { id: 'cover', Component: CoverSlide },
  { id: 'summary', Component: ExecSummarySlide },
  { id: 'market', Component: MarketOpportunitySlide },
  { id: 'positioning', Component: BrandPositioningSlide },
  { id: 'audience', Component: TargetAudienceSlide },
  { id: 'strategy', Component: StrategySlide },
  { id: 'website', Component: WebsiteSlide },
  { id: 'content', Component: ContentSlide },
  { id: 'social', Component: SocialSlide },
  { id: 'perf', Component: PerfMarketingSlide },
  { id: 'seo', Component: SeoSlide },
  { id: 'ai', Component: AiSlide },
  { id: 'prmedia', Component: PrMediaSlide },
  { id: 'distribution', Component: DistributionSlide },
  { id: 'outdoor', Component: OutdoorSlide },
  { id: 'reporting', Component: ReportingSlide },
  { id: 'outcomes', Component: OutcomesSlide },
  { id: 'investment', Component: InvestmentSlide },
  { id: 'whykarn', Component: WhyKarnSlide },
  { id: 'closing', Component: ClosingSlide },
];

export default function Presentation() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-black-matte text-cream font-sans">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-yellow-600 origin-left z-50 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        style={{ scaleX }}
      />
      
      {/* Branding Sticky Left */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center pointer-events-none select-none flex items-center gap-4 z-50">
        <span className="font-heading font-medium tracking-[0.25em] text-[10px] uppercase text-white/40">K.A.R.N.</span>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <span className="font-heading tracking-[0.2em] text-[10px] uppercase text-gold">Marketing Warfare LLP</span>
      </div>

      {/* Content Container */}
      <main className="w-full flex flex-col items-center">
        {sections.map((section, idx) => {
          const SectionComponent = section.Component;
          return (
            <motion.section 
              key={section.id} 
              id={section.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full min-h-screen flex items-center justify-center px-10 md:px-24 py-24 relative"
            >
              <div className="w-full max-w-[1400px]">
                <SectionComponent />
              </div>
            </motion.section>
          );
        })}
      </main>

      {/* Ambient Background Glows featuring K.A.R.N Colors */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-40">
        <motion.div 
          animate={{ x: ['-20%', '20%', '-20%'], y: ['-20%', '20%', '-20%'] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-karn-blue/10 rounded-full blur-[150px]"
        ></motion.div>
        <motion.div 
          animate={{ x: ['20%', '-20%', '20%'], y: ['20%', '-20%', '20%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-karn-purple/10 rounded-full blur-[150px]"
        ></motion.div>
        <motion.div 
          animate={{ x: ['10%', '-30%', '10%'], y: ['-10%', '30%', '-10%'] }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[40%] right-[20%] w-[40vw] h-[40vw] bg-karn-red/5 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ x: ['-30%', '10%', '-30%'], y: ['30%', '-10%', '30%'] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[20%] left-[20%] w-[45vw] h-[45vw] bg-karn-yellow/5 rounded-full blur-[120px]"
        ></motion.div>
      </div>
    </div>
  );
}
