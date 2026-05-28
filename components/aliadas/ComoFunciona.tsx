"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inscreva-se",
    desc: "Faça seu cadastro gratuitamente. Sem burocracia, sem custo — apenas seu nome e e-mail.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Assista às aulas",
    desc: "Acesse as videoaulas no seu ritmo, quando e onde quiser. O conteúdo fica disponível a qualquer hora.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Complete os módulos",
    desc: "São 6 módulos cobrindo todos os tipos de violência e como agir com segurança em cada situação.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Torne-se Aliada",
    desc: "Receba seu certificado e comece a multiplicar. A partir daí, você é oficialmente uma Aliada.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-xs font-sans font-semibold tracking-[0.22em] uppercase" style={{ color: "#888888" }}>
            Simples assim
          </span>
          <h2
            className="font-display font-bold mt-3"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#111111" }}
          >
            Como funciona?
          </h2>
          <p className="font-sans mt-4 max-w-md mx-auto text-base leading-relaxed" style={{ color: "#555555" }}>
            Em poucos passos, você vai da inscrição ao certificado de Aliada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">

          <div className="absolute top-14 left-[14%] right-[14%] h-px hidden lg:block overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
              className="w-full h-full origin-left"
              style={{ background: "linear-gradient(to right, #C9A227 0%, #E8C84A 100%)" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13, duration: 0.65, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className="absolute -top-5 font-display font-black leading-none select-none pointer-events-none"
                aria-hidden="true"
                style={{ fontSize: "5.5rem", color: "#F0F0F0", zIndex: 0, left: "50%", transform: "translateX(-50%)" }}
              >
                {step.number}
              </div>

              <div
                className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)",
                  color: "#111111",
                  boxShadow: "0 8px 36px rgba(201,162,39,0.3)",
                }}
              >
                {step.icon}
              </div>

              <h3 className="font-display font-bold text-xl mb-3 relative z-10" style={{ color: "#111111" }}>
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed max-w-[220px]" style={{ color: "#555555" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
