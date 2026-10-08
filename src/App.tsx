import React, { useState } from 'react';
import { HeroHeader } from './components/HeroHeader.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { PositioningSection } from './components/PositioningSection.tsx';
import { PainNarrativeSection } from './components/PainNarrativeSection.tsx';
import { MethodSection } from './components/MethodSection.tsx';
import { PillarsSection } from './components/PillarsSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { PrivateSupportSection } from './components/PrivateSupportSection.tsx';
import { DeliverablesSection } from './components/DeliverablesSection.tsx';
import { CommunitySection } from './components/CommunitySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { AboutSabrinaSection } from './components/AboutSabrinaSection.tsx';
import { AudienceSection } from './components/AudienceSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#152822] selection:bg-[#123F32]/12 selection:text-[#123F32] flex flex-col font-sans">
      {/* 01 — HEADER (Fixed, blur on scroll, mobile drawer) */}
      <HeroHeader onStartClick={openModal} />

      {/* Main Page Flow (Sections 02 to 18) */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 02 — HERO */}
        <HeroSection onCtaClick={openModal} />

        {/* 03 — FRASE DE POSICIONAMENTO */}
        <PositioningSection />

        {/* 04 — IDENTIFICAÇÃO / DOR */}
        <PainNarrativeSection />

        {/* 05 — APRESENTAÇÃO DO MÉTODO */}
        <MethodSection onCtaClick={openModal} />

        {/* 06 — PILARES */}
        <PillarsSection />

        {/* 07 — COMO FUNCIONA */}
        <HowItWorksSection />

        {/* 08 — ACOMPANHAMENTO PRIVADO */}
        <PrivateSupportSection onCtaClick={openModal} />

        {/* 09 — O QUE VOCÊ RECEBE */}
        <DeliverablesSection />

        {/* 10 — COMUNIDADE */}
        <CommunitySection />

        {/* 11 — DEPOIMENTOS */}
        <TestimonialsSection />

        {/* 12 — SOBRE A SABRINA */}
        <AboutSabrinaSection />

        {/* 13 & 14 — PARA QUEM É / PARA QUEM NÃO É */}
        <AudienceSection />

        {/* 15 & 16 — OFERTA + JUSTIFICATIVA DA ASSINATURA */}
        <PricingSection onCtaClick={openModal} />

        {/* 17 — FAQ */}
        <FaqSection />

        {/* 18 — CTA FINAL */}
        <FinalCtaSection onCtaClick={openModal} />
      </main>

      {/* 19 — FOOTER */}
      <Footer />

      {/* Checkout / Subscription Modal */}
      <CheckoutModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
