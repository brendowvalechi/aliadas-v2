import HeroAliadas from "@/components/aliadas/HeroAliadas";
import SobrePrograma from "@/components/aliadas/SobrePrograma";
import ComoFunciona from "@/components/aliadas/ComoFunciona";
import ModulosCurso from "@/components/aliadas/ModulosCurso";
import Certificacao from "@/components/aliadas/Certificacao";
import BeneficiosAliada from "@/components/aliadas/BeneficiosAliada";
import RedeDeApoio from "@/components/aliadas/RedeDeApoio";
import CTAInscricao from "@/components/aliadas/CTAInscricao";

export default function Home() {
  return (
    <>
      <HeroAliadas />
      <SobrePrograma />
      <ComoFunciona />
      <ModulosCurso />
      <Certificacao />
      <BeneficiosAliada />
      <RedeDeApoio />
      <CTAInscricao />
    </>
  );
}
