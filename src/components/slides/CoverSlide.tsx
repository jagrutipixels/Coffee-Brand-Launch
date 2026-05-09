import React from "react";
import { images, colors } from "@/lib/constants";

export default function CoverSlide() {
  return (
    <div className="relative w-full min-h-[85vh] md:h-[95vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/30 border border-gray-100 mx-auto bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>

        {/* Abstract Roasting glow */}
        <div className="absolute bottom-1/4 -right-1/4 w-[120vh] h-[120vh] bg-karn-yellow/10 rounded-full blur-[120px] pointer-events-none z-10" />

        <img
          src={
            "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=2874&auto=format&fit=crop"
          }
          alt="Coffee Manufacturing Roaster"
          className="w-full h-full object-cover opacity-40 sepia-[.2] contrast-[1.1] grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
        {/* Adds a second grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay z-10"></div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center p-6 md:p-24 min-h-[85vh] md:min-h-0">
        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent via-karn-yellow to-transparent mb-6 md:mb-8" />

        <div className="flex flex-col items-center gap-1 mb-6 md:mb-8">
          <p className="text-karn-yellow font-heading tracking-[0.4em] text-[10px] md:text-sm uppercase mb-3 md:mb-4 font-semibold">
            Phase 1: Inception
          </p>

          <div className="flex gap-1.5 md:gap-2 mb-4 md:mb-6">
            {[
              colors.karn.blue,
              colors.karn.red,
              colors.karn.purple,
              colors.karn.yellow,
              colors.karn.green,
            ].map((c, i) => (
              <div
                key={i}
                className="w-6 md:w-8 h-0.5 shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: c, color: c }}
              />
            ))}
          </div>

          <h1 className="flex flex-col items-center gap-2 overflow-hidden py-2 px-4">
            <span className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-heading font-light tracking-tighter leading-[0.9] text-gray-900">
              Mastering the{" "}
              <span className="font-serif italic text-gray-900">Roast</span>
            </span>
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-karn-yellow via-yellow-400 to-karn-yellow">
              Global Expansion.
            </span>
          </h1>
        </div>

        <p className="text-gray-600 text-base md:text-xl font-light tracking-wide max-w-2xl leading-relaxed mt-2 md:mt-4 px-4 sm:px-0">
          A highly-calibrated, full-spectrum marketing infrastructure designed
          to position your operations at the apex of the global coffee supply
          chain.
        </p>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 z-30">
        <div className="w-[1px] h-12 md:h-16 relative overflow-hidden bg-gray-900/10">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-karn-yellow to-transparent animate-[scrollLine_2s_linear_infinite]" />
        </div>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-gray-400 font-mono">
          Ignite Experience
        </span>
      </div>
    </div>
  );
}
