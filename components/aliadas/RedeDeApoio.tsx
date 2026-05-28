"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6", unit: "módulos", desc: "de conteúdo especializado" },
  { value: "100%", unit: "gratuito", desc: "sem nenhuma taxa" },
  { value: "24h", unit: "online", desc: "acesso liberado sempre" },
  { value: "MG+BR", unit: "alcance", desc: "Minas e todo o Brasil" },
];

const supports = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Apoio Jurídico",
    desc: "Orientação especializada para dúvidas relacionadas à Lei Maria da Penha e violência doméstica.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Comunidade Aliadas",
    desc: "Acesso a uma rede ativa de mulheres que compartilham os mesmos valores e objetivos.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Contato Direto",
    desc: "Canal aberto com a equipe da Dra. Lia para suporte contínuo e dúvidas a qualquer momento.",
  },
];

export default function RedeDeApoio() {
  return (
    <section
      className="py-28 overflow-hidden relative"
      style={{ background: "#111111" }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            top: "-20%",
            right: "-15%",
            background: "radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            bottom: "-20%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] uppercase" style={{ color: "#C9A227" }}>
            Rede de suporte
          </span>
          <h2
            className="font-display font-bold text-white mt-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Você não estará sozinha
          </h2>
          <p
            className="font-sans mt-4 max-w-md mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Além da capacitação, o programa oferece suporte contínuo para todas as Aliadas.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.unit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="font-display font-black leading-none mb-1"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  background: "linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-white font-sans font-semibold text-base leading-tight">
                {s.unit}
              </div>
              <div className="font-sans text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {supports.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227" }}
              >
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
