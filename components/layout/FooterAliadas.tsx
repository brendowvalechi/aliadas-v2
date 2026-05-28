export default function FooterAliadas() {
  return (
    <footer style={{ background: "#0A0318" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span
                className="font-display font-black text-lg tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #C4B5FD, #F472B6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ALIADAS
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Uma iniciativa da Delegada Lia Valechi para capacitar mulheres no combate
              à violência doméstica por Minas Gerais e por todo o Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-white mb-4 tracking-wide">
              Programa
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#sobre", label: "Sobre o Aliadas" },
                { href: "#modulos", label: "Módulos do curso" },
                { href: "#certificado", label: "Certificação" },
                { href: "#inscricao", label: "Inscreva-se" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(196,181,253,1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-white mb-4 tracking-wide">
              Ação
            </h4>
            <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              Pronta para fazer a diferença? A inscrição é gratuita e leva menos de um minuto.
            </p>
            <a
              href="#inscricao"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)" }}
            >
              Quero ser Aliada
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} Aliadas · Programa da Dra. Lia Valechi · Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
            Programa gratuito · Sem fins lucrativos
          </p>
        </div>
      </div>
    </footer>
  );
}
