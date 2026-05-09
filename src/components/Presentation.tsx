import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { ChevronUp } from 'lucide-react';
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
import PortfolioSlide from './slides/PortfolioSlide';
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
  { id: 'portfolio', Component: PortfolioSlide },
  { id: 'closing', Component: ClosingSlide },
];

const navLinks = [
  { label: 'Overview', id: 'summary' },
  { label: 'Market', id: 'market' },
  { label: 'Strategy', id: 'strategy' },
  { label: 'Reporting', id: 'reporting' },
  { label: 'Investment', id: 'investment' },
  { label: 'Portfolio', id: 'portfolio' },
];

export default function Presentation() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowScrollTop(latest > 0.05);
  });

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-karn-yellow to-yellow-600 origin-left z-50 shadow-[0_0_15px_rgba(234,179,8,0.5)]"
        style={{ scaleX }}
      />
      
      {/* Header Navigation */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-8 py-4 hidden md:flex items-center gap-8 shadow-2xl border border-white/10">
        <div className="mr-4 hidden lg:block">
          <img src="https://raw.githubusercontent.com/jagrutipixels/Coffee-Brand-Launch/5faeae4bc9be9d970fddfab69431165052cfe4d8/KMW-White-01.png" alt="KARN Marketing Warfare" className="h-6 object-contain" />
        </div>
        {navLinks.map((link) => (
           <button 
             key={link.id} 
             onClick={() => {
               if (lenisRef.current) {
                 lenisRef.current.scrollTo(`#${link.id}`, { offset: -100 });
               } else {
                 document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
               }
             }}
             className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 hover:text-white hover:text-shadow-glow transition-all"
           >
             {link.label}
           </button>
        ))}
      </header>
      
      {/* Go to Top Button */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        onClick={() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-auto border border-white/10 shadow-lg group"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <ChevronUp size={20} className="text-white/60 group-hover:text-white transition-colors" />
      </motion.button>

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
              className="w-full flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative"
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
