"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Videoaulas completas",
    desc: "Conteúdo disponível 24h, assista no seu ritmo",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Rede de apoio ativa",
    desc: "Contato direto com a equipe da Dra. Lia",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Apoio jurídico",
    desc: "Orientação especializada em violência doméstica",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Alcance nacional",
    desc: "Multiplique em Minas e por todo o Brasil",
  },
];

export default function SobrePrograma() {
  return (
    <section id="sobre" className="py-28 overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] uppercase" style={{ color: "#888888" }}>
            Sobre o programa
          </span>
          <h2
            className="font-display font-bold mt-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#111111" }}
          >
            O que é o{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aliadas
            </span>
            ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Decorative visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem]">
              <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(201,162,39,0.25)" }} />
              <div className="absolute inset-8 rounded-full" style={{ border: "1px solid rgba(201,162,39,0.18)" }} />
              <div className="absolute inset-16 rounded-full" style={{ border: "1px solid rgba(201,162,39,0.14)" }} />
              <div className="absolute inset-0 rounded-full" style={{ border: "1.5px dashed rgba(201,162,39,0.2)" }} />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 68%)" }}
              />
              <div
                className="absolute inset-24 rounded-full flex flex-col items-center justify-center shadow-2xl"
                style={{ background: "linear-gradient(135deg, #111111 0%, #2A2A2A 100%)", border: "2px solid #C9A227" }}
              >
                <span className="font-display font-black text-lg tracking-widest leading-tight" style={{ color: "#C9A227" }}>
                  ALIADAS
                </span>
                <span className="text-[9px] font-sans tracking-wider mt-1 uppercase" style={{ color: "rgba(201,162,39,0.6)" }}>
                  Dra. Lia Valechi
                </span>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-3.5 py-1.5 shadow-md" style={{ border: "1px solid #E8D5A0" }}>
                <span className="text-xs font-sans font-semibold" style={{ color: "#C9A227" }}>100% Gratuito</span>
              </div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white rounded-full px-3.5 py-1.5 shadow-md" style={{ border: "1px solid #E8D5A0" }}>
                <span className="text-xs font-sans font-semibold" style={{ color: "#C9A227" }}>Online</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full px-3.5 py-1.5 shadow-md" style={{ border: "1px solid #E8D5A0" }}>
                <span className="text-xs font-sans font-semibold" style={{ color: "#C9A227" }}>Certificado</span>
              </div>
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white rounded-full px-3.5 py-1.5 shadow-md" style={{ border: "1px solid #E8D5A0" }}>
                <span className="text-xs font-sans font-semibold" style={{ color: "#C9A227" }}>6 Módulos</span>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: "#333333" }}>
              O <strong style={{ color: "#111111" }}>Aliadas</strong> é uma iniciativa
              educacional criada pela Delegada Lia Valechi com o objetivo de capacitar mulheres
              para atuarem como multiplicadoras no combate à violência doméstica.
            </p>
            <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "#555555" }}>
              Funciona como um minicurso online gratuito em formato de videoaulas. Ao concluir
              os módulos, a participante recebe o certificado de{" "}
              <strong style={{ color: "#C9A227" }}>&ldquo;Aliada&rdquo;</strong> — tornando-se
              uma representante apta a levar informação e o nome do projeto por Minas Gerais
              e por todo o Brasil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white rounded-xl p-4 shadow-sm"
                  style={{ border: "1px solid #EDE9FE" }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-white" style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)" }}>
                    {f.icon}
                  </div>
                  <div className="font-sans font-semibold text-sm mb-0.5" style={{ color: "#2E1065" }}>{f.title}</div>
                  <div className="font-sans text-xs leading-relaxed" style={{ color: "rgba(109,40,217,0.65)" }}>{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
