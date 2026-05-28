"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Certificado digital oficial",
    desc: "Documento chancelado pela Dra. Lia Valechi e reconhecido pelo programa Aliadas.",
  },
  {
    title: "Acesso à rede de apoio",
    desc: "Contato direto com a equipe e com outras Aliadas de todo o Brasil.",
  },
  {
    title: "Apoio jurídico",
    desc: "Orientação especializada para dúvidas sobre violência doméstica e a Lei Maria da Penha.",
  },
  {
    title: "Suporte contínuo",
    desc: "Estamos disponíveis para apoiar você e as mulheres que você ajuda.",
  },
  {
    title: "Representante oficial",
    desc: "Leve o nome e os valores do Aliadas por Minas Gerais e por todo o Brasil.",
  },
];

export default function Certificacao() {
  return (
    <section id="certificado" className="py-28 overflow-hidden" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-600 text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            Reconhecimento
          </span>
          <h2
            className="font-display font-bold mt-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#2E1065" }}
          >
            O certificado de{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aliada
            </span>
          </h2>
          <p
            className="font-sans mt-4 max-w-md mx-auto text-base leading-relaxed"
            style={{ color: "rgba(91,33,182,0.6)" }}
          >
            Muito mais do que um documento — uma chancela de comprometimento com a causa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Certificate mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              className="w-full max-w-sm relative"
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "44px 40px 36px",
                boxShadow: "0 28px 72px rgba(124,58,237,0.2), 0 4px 20px rgba(0,0,0,0.07)",
                border: "1px solid #EDE9FE",
              }}
            >
              {/* Inner border frame */}
              <div
                className="absolute inset-3 rounded-2xl pointer-events-none"
                style={{ border: "1px solid #DDD6FE" }}
              />

              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-10 right-10 h-1 rounded-b-full"
                style={{ background: "linear-gradient(to right, #7C3AED, #DB2777)" }}
              />

              {/* Header */}
              <div className="text-center mb-7">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)" }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div
                  className="font-sans text-[9px] font-semibold tracking-[0.35em] uppercase mb-0.5"
                  style={{ color: "#7C3AED" }}
                >
                  Programa
                </div>
                <div
                  className="font-display font-black text-2xl tracking-[0.12em]"
                  style={{ color: "#2E1065" }}
                >
                  ALIADAS
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <p className="font-sans text-[11px] text-gray-400 mb-3">Certificamos que</p>

                <div className="h-px mb-3" style={{ background: "linear-gradient(to right, transparent, #DDD6FE, transparent)" }} />

                <p className="font-display font-semibold text-xl" style={{ color: "#4C1D95" }}>
                  Seu Nome Aqui
                </p>

                <div className="h-px mt-3 mb-4" style={{ background: "linear-gradient(to right, transparent, #DDD6FE, transparent)" }} />

                <p className="font-sans text-[11px] leading-relaxed text-gray-400">
                  concluiu com êxito todos os módulos do programa Aliadas, tornando-se
                  uma multiplicadora no combate à violência contra a mulher.
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end mt-7 pt-5" style={{ borderTop: "1px solid #F3F0FF" }}>
                <div>
                  <div className="w-24 h-px bg-gray-300 mb-1.5" />
                  <p className="font-sans text-[10px] text-gray-400">Dra. Lia Valechi</p>
                  <p className="font-sans text-[9px]" style={{ color: "#C4B5FD" }}>Delegada de Polícia · MG</p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(219,39,119,0.12))", border: "1px solid #DDD6FE" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="w-16 h-px bg-gray-300 mb-1.5 ml-auto" />
                  <p className="font-sans text-[10px] text-gray-400">Data de emissão</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="font-display font-bold text-2xl mb-2"
              style={{ color: "#2E1065" }}
            >
              O que significa ser uma Aliada?
            </h3>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "rgba(91,33,182,0.68)" }}
            >
              Ao concluir todos os módulos, você recebe muito mais do que um certificado.
              Você entra para uma rede ativa de mulheres comprometidas com a mudança.
            </p>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)" }}
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="font-sans font-semibold text-sm mb-0.5"
                      style={{ color: "#2E1065" }}
                    >
                      {b.title}
                    </div>
                    <div
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(91,33,182,0.62)" }}
                    >
                      {b.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
