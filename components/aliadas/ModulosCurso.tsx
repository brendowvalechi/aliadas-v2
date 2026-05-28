"use client";

import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    accentColor: "#7C3AED",
    title: "Violência Doméstica: Uma Visão Geral",
    topics: [
      "O que caracteriza violência doméstica",
      "O ciclo da violência",
      "Dados e estatísticas no Brasil",
    ],
  },
  {
    number: "02",
    accentColor: "#6D28D9",
    title: "Violência Física e Sexual",
    topics: [
      "Como identificar os sinais",
      "Consequências e sequelas",
      "Onde e como buscar ajuda",
    ],
  },
  {
    number: "03",
    accentColor: "#9333EA",
    title: "Violência Psicológica",
    topics: [
      "O abuso invisível",
      "Manipulação, isolamento e controle",
      "Como se proteger e se fortalecer",
    ],
  },
  {
    number: "04",
    accentColor: "#A21CAF",
    title: "Violência Moral e Vicária",
    topics: [
      "Calúnia, difamação e injúria",
      "Quando os filhos são usados como armas",
      "Alienação parental",
    ],
  },
  {
    number: "05",
    accentColor: "#BE185D",
    title: "O Que Fazer em Situação de Risco",
    topics: [
      "Passo a passo para denunciar",
      "Medida protetiva de urgência",
      "Rede de apoio e recursos disponíveis",
    ],
  },
  {
    number: "06",
    accentColor: "#DB2777",
    title: "Tornando-se uma Aliada",
    topics: [
      "Como ajudar outra mulher com segurança",
      "Abordagem eficaz e empática",
      "Multiplicando o impacto",
    ],
  },
];

export default function ModulosCurso() {
  return (
    <section id="modulos" className="py-28 overflow-hidden" style={{ background: "#0F0421" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            Conteúdo do curso
          </span>
          <h2
            className="font-display font-bold text-white mt-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            O que você vai{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C4B5FD 0%, #F472B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              aprender
            </span>
          </h2>
          <p
            className="font-sans mt-4 max-w-lg mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Seis módulos desenvolvidos com base na experiência prática da Delegada Lia Valechi
            no combate à violência doméstica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(to right, ${mod.accentColor}, transparent)`,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, ${mod.accentColor}22 0%, transparent 55%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-display font-black leading-none"
                    style={{ fontSize: "3.5rem", color: mod.accentColor, opacity: 0.65 }}
                  >
                    {mod.number}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                    style={{ background: mod.accentColor }}
                  />
                </div>

                <h3 className="font-display font-bold text-white text-base leading-snug mb-4">
                  {mod.title}
                </h3>

                <ul className="space-y-2.5">
                  {mod.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full mt-[0.45rem] flex-shrink-0"
                        style={{ background: mod.accentColor }}
                      />
                      <span className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
