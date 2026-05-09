import React from "react";
import { images, colors } from "@/lib/constants";

export default function CoverSlide() {
  return (
    <div className="relative w-full h-[95vh] rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/80 border border-[#2c1e16]/30 mx-auto bg-black-matte">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/60 to-black-matte/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-transparent to-transparent z-10"></div>

        {/* Abstract Roasting glow */}
        <div className="absolute bottom-1/4 -right-1/4 w-[120vh] h-[120vh] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-10" />

        <img
          src={
            "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=2874&auto=format&fit=crop"
          }
          alt="Coffee Manufacturing Roaster"
          className="w-full h-full object-cover opacity-60 sepia-[.4] contrast-[1.2] grayscale-[50%]"
          referrerPolicy="no-referrer"
        />
        {/* Adds a second grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-10"></div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center p-12 md:p-24">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent mb-8" />

        <div className="flex flex-col items-center gap-1 mb-8 perspective-[1000px]">
          <p className="text-[#d4af37] font-mono tracking-[0.4em] text-xs md:text-sm uppercase mb-4">
            Phase 1: Inception
          </p>

          <div className="flex gap-2 mb-6">
            {[
              colors.karn.blue,
              colors.karn.red,
              colors.karn.purple,
              colors.karn.yellow,
              colors.karn.green,
            ].map((c, i) => (
              <div
                key={i}
                className="w-8 h-0.5 shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: c, color: c }}
              />
            ))}
          </div>

          <h1 className="flex flex-col items-center gap-2 overflow-hidden py-2">
            <span className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-light tracking-tighter leading-[0.8] text-gray-900">
              Mastering the{" "}
              <span className="font-serif italic text-gray-900">Roast</span>
            </span>
            <span className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fcd34d] to-[#d4af37]">
              Global Expansion.
            </span>
          </h1>
        </div>

        <p className="text-gray-900/90 text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed mt-4">
          A highly-calibrated, full-spectrum marketing infrastructure designed
          to position your operations at the apex of the global coffee supply
          chain.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
        <div className="w-[1px] h-16 relative overflow-hidden bg-gray-900/10">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-900 font-mono">
          Ignite Experience
        </span>
      </div>
    </div>
  );
}
