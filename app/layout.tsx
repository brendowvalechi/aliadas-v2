import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import NavbarAliadas from "@/components/layout/NavbarAliadas";
import FooterAliadas from "@/components/layout/FooterAliadas";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aliadas — Programa da Dra. Lia Valechi",
  description:
    "Um programa gratuito de capacitação criado pela Delegada Lia Valechi para mulheres que querem reconhecer a violência doméstica e se tornar multiplicadoras dessa causa por Minas Gerais e por todo o Brasil.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Aliadas",
    title: "Aliadas — Programa da Dra. Lia Valechi",
    description:
      "Capacite-se gratuitamente e se torne uma Aliada no combate à violência contra a mulher.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarAliadas />
        <main className="flex-1">{children}</main>
        <FooterAliadas />
      </body>
    </html>
  );
}
