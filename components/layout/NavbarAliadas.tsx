"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#modulos", label: "Módulos" },
  { href: "#certificado", label: "Certificado" },
];

export default function NavbarAliadas() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #C9A227, #E8C84A)" }}
            >
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span
                className="block font-display font-black text-base tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #C9A227, #E8C84A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ALIADAS
              </span>
              <span className="block text-white/45 text-[10px] font-sans tracking-wider">
                Dra. Lia Valechi
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-sans text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#inscricao"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #C9A227, #E8C84A)",
                color: "#111111",
                boxShadow: "0 0 24px rgba(201,162,39,0.35)",
              }}
            >
              Inscreva-se
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-white/10 py-4 flex flex-col gap-1"
            style={{ background: "rgba(10,10,10,0.98)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-sans text-white/75 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setMenuOpen(false)}
              className="mt-3 mx-4 text-center py-3 rounded-lg font-sans font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #C9A227, #E8C84A)", color: "#111111" }}
            >
              Inscreva-se Gratuitamente
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
