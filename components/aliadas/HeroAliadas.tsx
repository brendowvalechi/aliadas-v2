"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const features = [
  { label: "6 Módulos" },
  { label: "100% Gratuito" },
  { label: "Certificado Incluso" },
  { label: "100% Online" },
];

export default function HeroAliadas() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#120729" }}
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            top: "-5%",
            right: "-15%",
            background: "radial-gradient(circle, rgba(109,40,217,0.5) 0%, transparent 65%)",
            filter: "blur(56px)",
          }}
        />
        <div
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            bottom: "-5%",
            left: "-8%",
            background: "radial-gradient(circle, rgba(219,39,119,0.32) 0%, transparent 65%)",
            filter: "blur(56px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            top: "55%",
            left: "45%",
            background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 65%)",
            filter: "blur(64px)",
          }}
        />
      </div>

      {/* Large watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-white"
          style={{
            fontSize: "clamp(8rem, 30vw, 30rem)",
            opacity: 0.032,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          ALIADAS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36 w-full">
        <div className="max-w-3xl">
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2.5 border border-white/10 rounded-full px-5 py-2 bg-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-300 text-xs font-sans font-medium tracking-[0.18em] uppercase">
                  Programa da Dra. Lia Valechi
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="font-display font-bold text-white leading-[1.04] mb-8"
              style={{ fontSize: "clamp(3.5rem, 8.5vw, 7.5rem)" }}
            >
              Seja Uma{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C4B5FD 0%, #F472B6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Aliada.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-white/60 font-sans leading-relaxed mb-10 max-w-2xl"
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
            >
              Um programa gratuito de capacitação criado pela Delegada Lia Valechi.
              Aprenda a reconhecer a violência doméstica e se torne uma multiplicadora
              dessa causa por Minas Gerais e por todo o Brasil.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
              <Link
                href="#inscricao"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-sans font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)",
                  boxShadow: "0 0 52px rgba(124,58,237,0.48), 0 4px 20px rgba(219,39,119,0.28)",
                }}
              >
                Inscreva-se Gratuitamente
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#sobre"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans font-medium text-white/75 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.06] transition-all duration-200 text-base"
              >
                Saiba mais
              </Link>
            </motion.div>

            {/* Feature bar */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-8"
            >
              {features.map((f, i) => (
                <div key={f.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="w-px h-3.5 bg-white/15 hidden sm:block" aria-hidden="true" />
                  )}
                  <span className="text-white/50 text-sm font-sans">{f.label}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(18,7,41,0.7))" }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/20"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
