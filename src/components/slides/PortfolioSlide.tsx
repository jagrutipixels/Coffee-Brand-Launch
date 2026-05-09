import React from "react";
import { motion } from "motion/react";
import { colors } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

export default function PortfolioSlide() {
  const portfolios = [
    {
      name: "Savoir Studio",
      url: "https://www.ssbykmw.com/",
      desc: "Built the full-service content production arm for Karn Marketing Warfare from scratch. Live operational infrastructure.",
      c: colors.karn.blue,
      status: "STUDIO INCEPTION • LIVE",
    },
    {
      name: "Casuall.in",
      url: "https://casuall.in/",
      desc: "Modern apparel focusing on everyday comfort without compromising on distinct style. E-commerce rollout.",
      c: colors.karn.red,
      status: "D2C APPAREL • LIVE",
    },
    {
      name: "Tech Ev",
      url: "https://candid-pegasus-1f86d2.netlify.app/#/",
      desc: "Designed the digital launch strategy and high-performance UI structure for a new EV scooter brand. Live site.",
      c: colors.karn.green,
      status: "ELECTRIC MOBILITY • LIVE",
    },
    {
      name: "DBN",
      url: "https://icretepixels.vercel.app/",
      desc: "Complete brand launch for premium Alphonso mango distribution. Covers naming, packaging, and digital.",
      c: colors.karn.yellow,
      status: "PREMIUM D2C • LIVE",
    },
  ];

  const caseStudies = [
    {
      title: "Colgate (Ignite & Leap Forward)",
      before:
        'Internal corporate events that lacked the "Scale" and "Energy" of a global leader.',
      after:
        "Immersive stage design, creative event communication, and high-energy branding.",
      result:
        "Unified thousands of employees under a single vision; increased internal brand pride.",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1475721025505-44fd433140bf?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      title: "Girnar Tea",
      before:
        "A household name with an aging visual identity that needed to attract the modern consumer.",
      after:
        "A complete Brand Refresh and Re-Packaging of their flagship products.",
      result:
        'Modernized the brand for the "New India" consumer while maintaining trust of old loyalists.',
      images: [
        "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      title: "Dr. Sheesha (Dubai)",
      before:
        "An Indian-born brand entering the hyper-competitive, ultra-luxury Dubai market.",
      after:
        "International-standard luxury branding, site design, and product mockups.",
      result:
        "Successfully positioned as a premium lounge in the UAE; featured in high-end lifestyle content.",
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      title: "Pepperfry",
      before:
        "Inconsistent personal branding for employees and a need to launch a new wood sub-brand.",
      after:
        'Engineered Employee Identity tools and the "Valuewood" sub-branding.',
      result:
        "Standardized the corporate look for thousands of employees; successfully launched Valuewood as a reliable category.",
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-[80vh] relative z-10 py-12">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[2px] bg-gray-900/20"></div>
          <p className="font-heading text-gray-900 text-xs tracking-[0.3em] uppercase">
            KARN Portfolio
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-light leading-tight tracking-tight mb-4"
        >
          Brands We've <br />
          <span className="font-medium text-gray-900">Successfully Built</span>
        </motion.h2>
      </div>

      <div className="w-full pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {portfolios.map((item, i) => (
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full rounded-[2.5rem] bg-black-matte border border-gray-900/5 group hover:border-gray-900/20 transition-all block relative overflow-hidden shadow-2xl"
            >
              <div className="h-[280px] w-full relative overflow-hidden border-b border-gray-900/10 bg-gray-900/5">
                {/* Live Preview via Iframe Scale hack. Fallback to image if iframe fails */}
                <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <iframe
                    src={item.url}
                    className="w-full h-full border-none bg-gray-900"
                    loading="lazy"
                    title={item.name}
                  />
                </div>

                {/* Overlay Gradient to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-transparent opacity-90 pointer-events-none"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black-matte/80 backdrop-blur-md border border-gray-900/10 px-5 py-2.5 rounded-full z-20">
                  <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-gray-900/90">
                    {item.status}
                  </span>
                </div>

                {/* Hover Reveal Explore */}
                <div className="absolute inset-0 bg-black-matte/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-gray-900 text-black-matte flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <ExternalLink size={24} />
                  </div>
                  <span className="text-gray-900 font-heading tracking-[0.2em] text-xs uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Explore Launch Site
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-gray-900 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="w-full mt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-[2px] bg-gray-900/20"></div>
          <p className="font-heading text-gray-900 text-xs tracking-[0.3em] uppercase">
            Transformation Case Studies
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black-matte border border-gray-900/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
            >
              <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-8">
                <h3 className="text-3xl md:text-4xl font-heading font-medium text-[#c0973b]">
                  {study.title}
                </h3>

                <div className="flex flex-col gap-5 text-[15px] md:text-base leading-relaxed">
                  <p className="text-gray-900">
                    <strong className="font-semibold text-gray-900/90 text-[17px] mr-1 block sm:inline">
                      Before:
                    </strong>
                    <span className="opacity-90">{study.before}</span>
                  </p>
                  <p className="text-gray-900">
                    <strong className="font-semibold text-gray-900/90 text-[17px] mr-1 block sm:inline">
                      After:
                    </strong>
                    <span className="opacity-90">{study.after}</span>
                  </p>
                  <p className="text-gray-900">
                    <strong className="font-semibold text-gray-900/90 text-[17px] mr-1 block sm:inline">
                      Result:
                    </strong>
                    <span className="opacity-90">{study.result}</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-auto md:h-[350px]">
                <div className="col-span-2 md:col-span-1 row-span-2 rounded-[1.5rem] overflow-hidden relative border border-gray-900/10">
                  <img src={study.images[0]}
                    alt={study.title}
                    className="w-full h-full object-cover rounded-[1.5rem]" referrerPolicy="no-referrer" />
                </div>
                <div className="col-span-1 rounded-[1.5rem] overflow-hidden relative border border-gray-900/10 hidden md:block">
                  <img src={study.images[1]}
                    alt={study.title}
                    className="w-full h-full object-cover rounded-[1.5rem]" referrerPolicy="no-referrer" />
                </div>
                <div className="col-span-1 rounded-[1.5rem] overflow-hidden relative border border-gray-900/10 hidden md:block">
                  <img src={study.images[2]}
                    alt={study.title}
                    className="w-full h-full object-cover rounded-[1.5rem]" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
