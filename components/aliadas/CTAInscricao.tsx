"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function CTAInscricao() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), source: "aliadas" }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) {
        setName("");
        setEmail("");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="inscricao"
      className="py-28 relative overflow-hidden"
      style={{ background: "#120729" }}
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            top: "-10%",
            left: "20%",
            background: "radial-gradient(circle, rgba(124,58,237,0.32) 0%, transparent 70%)",
            filter: "blur(64px)",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full"
          style={{
            bottom: "-10%",
            right: "20%",
            background: "radial-gradient(circle, rgba(219,39,119,0.28) 0%, transparent 70%)",
            filter: "blur(64px)",
          }}
        />
      </div>

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-white"
          style={{
            fontSize: "clamp(8rem, 30vw, 30rem)",
            opacity: 0.022,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          ALIADAS
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-violet-400 text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            Comece agora
          </span>
          <h2
            className="font-display font-bold text-white mt-3 mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}
          >
            Quero ser uma{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C4B5FD 0%, #F472B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aliada
            </span>
          </h2>
          <p
            className="font-sans text-base leading-relaxed mb-12"
            style={{ color: "rgba(255,255,255,0.52)" }}
          >
            Inscreva-se gratuitamente e dê o primeiro passo para se tornar uma multiplicadora
            no combate à violência contra a mulher.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {status === "success" ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)" }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-2">
                Bem-vinda, Aliada!
              </h3>
              <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
                Em breve você receberá o acesso ao programa no seu e-mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-xl px-5 py-4 font-sans text-sm text-white outline-none transition-colors duration-200 disabled:opacity-50"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    caretColor: "#C4B5FD",
                  }}
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-xl px-5 py-4 font-sans text-sm text-white outline-none transition-colors duration-200 disabled:opacity-50"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    caretColor: "#C4B5FD",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-sans font-semibold text-white text-base transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)",
                  boxShadow: "0 0 48px rgba(124,58,237,0.42), 0 4px 20px rgba(219,39,119,0.22)",
                }}
              >
                {status === "loading" ? "Enviando..." : "Quero ser uma Aliada →"}
              </button>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-sans text-sm text-center"
                  style={{ color: "#F472B6" }}
                >
                  Ops! Algo deu errado. Por favor, tente novamente.
                </motion.p>
              )}
            </form>
          )}

          <p
            className="font-sans text-xs mt-6"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Inscrição 100% gratuita. Seus dados estão protegidos e não serão compartilhados.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
