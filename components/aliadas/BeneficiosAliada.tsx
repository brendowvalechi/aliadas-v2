"use client";

import { motion } from "framer-motion";

const perks = [
  {
    tag: "Materiais",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Kit de materiais exclusivos",
    desc: "Artes prontas, textos e conteúdos pensados para você divulgar a causa nas suas redes sociais, grupos e comunidades — sem precisar criar nada do zero.",
    highlight: "Pronto para compartilhar",
  },
  {
    tag: "Palestra",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Convide a Dra. Lia para palestrar",
    desc: "Como Aliada, você tem a possibilidade de chamar a Delegada Lia Valechi para uma palestra presencial — em escolas, empresas, associações e eventos da sua comunidade.",
    highlight: "Presença garantida",
  },
  {
    tag: "Live",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Faça uma live com a Dra. Lia",
    desc: "Quer ampliar ainda mais o alcance? Aliadas têm a oportunidade de realizar lives ao vivo ao lado da Delegada Lia Valechi — levando informação e acolhimento em tempo real.",
    highlight: "Ao vivo com a Delegada",
  },
];

export default function BeneficiosAliada() {
  return (
    <section className="py-28 overflow-hidden relative" style={{ background: "#0D0D0D" }}>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] uppercase" style={{ color: "#C9A227" }}>
            Exclusivo para Aliadas
          </span>
          <h2
            className="font-display font-bold text-white mt-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Você vai muito além{" "}
            <br className="hidden sm:block" />
            <span
              style={{
                background: "linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              do certificado
            </span>
          </h2>
          <p
            className="font-sans mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Ser Aliada é ter ferramentas reais para multiplicar a causa. Veja o que
            está disponível para você depois de concluir o programa.
          </p>
        </motion.div>

        {/* Perk cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.tag}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, duration: 0.65, ease: "easeOut" }}
              className="relative rounded-2xl p-8 flex flex-col overflow-hidden group"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{
                  background: "linear-gradient(to right, #C9A227, #E8C84A)",
                  opacity: 0.8,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at top, rgba(201,162,39,0.1) 0%, transparent 60%)",
                }}
              />

              {/* Tag badge */}
              <div className="mb-6 flex items-center justify-between relative z-10">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-wider uppercase"
                  style={{
                    background: "rgba(201,162,39,0.15)",
                    color: "#C9A227",
                    border: "1px solid rgba(201,162,39,0.25)",
                  }}
                >
                  {perk.tag}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A227, #E8C84A)", color: "#111111" }}
                >
                  {perk.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">
                  {perk.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {perk.desc}
                </p>

                {/* Highlight pill */}
                <div className="mt-6 flex items-center gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#C9A227" }}
                  />
                  <span className="font-sans text-xs font-medium" style={{ color: "rgba(201,162,39,0.85)" }}>
                    {perk.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#inscricao"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)",
              color: "#111111",
              boxShadow: "0 0 48px rgba(201,162,39,0.35), 0 4px 20px rgba(201,162,39,0.2)",
            }}
          >
            Quero esses benefícios
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
