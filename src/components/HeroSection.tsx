import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import sabrinaOfficialPhoto from '../assets/sabrina-hero.jpg';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const handleScrollToNext = () => {
    const el = document.querySelector('#posicionamento');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full bg-[#FAF7F0] text-[#152822] overflow-hidden pt-24 lg:pt-28 pb-12 lg:pb-16 flex flex-col justify-between"
    >
      {/* Background Subtle Warm Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E8E0D0]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Copy & Pricing CTA (7 cols on Desktop)
              ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 order-2 lg:order-1 pt-2 lg:pt-0">
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAE3D4]/80 border border-[#D9CEBC] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2F675C]" />
              <span className="text-[11.5px] lg:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#123F32]">
                Acompanhamento Contínuo • Método Próprio
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[42px] sm:text-[52px] lg:text-[62px] xl:text-[68px] leading-[1.06] tracking-[-0.02em] font-normal mb-5"
            >
              Emagreça construindo uma{' '}
              <span className="italic font-normal text-[#2F675C]">
                rotina que você
              </span>{' '}
              consegue manter.
            </h1>

            {/* Subtitle */}
            <p className="text-[#32483F] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.65] max-w-[560px] font-normal mb-8">
              O Secamente é um acompanhamento criado para quem quer emagrecer, melhorar a alimentação e desenvolver hábitos que realmente façam sentido dentro da própria rotina.
            </p>

            {/* CTA + Price Block */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
              <button
                type="button"
                onClick={onCtaClick}
                className="group inline-flex items-center justify-center gap-3 bg-[#123F32] hover:bg-[#1A4E3F] text-white text-[15px] sm:text-[16px] font-semibold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(18,63,50,0.18)] hover:shadow-[0_6px_24px_rgba(18,63,50,0.26)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>QUERO COMEÇAR AGORA</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex flex-col pl-1 sm:pl-0 border-l-2 sm:border-l sm:border-[#D5CABB] sm:pl-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold text-[#10251F] tracking-tight">
                    R$ 79,90
                  </span>
                  <span className="text-sm font-medium text-[#486055]">/mês</span>
                </div>
                <span className="text-xs text-[#5E7469] font-normal">
                  Assinatura recorrente mensal
                </span>
              </div>
            </div>

            {/* Professional Authority Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 border-t border-[#E5DDD0] text-xs sm:text-[12.5px] text-[#4A6156]">
              <span className="font-semibold text-[#123F32]">Sabrina</span>
              <span className="w-1 h-1 rounded-full bg-[#9EABA3]" />
              <span>Nutricionista Clínica</span>
              <span className="w-1 h-1 rounded-full bg-[#9EABA3]" />
              <span>Saúde da Mulher</span>
              <span className="w-1 h-1 rounded-full bg-[#9EABA3]" />
              <span>CRN 13076</span>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Photography of Sabrina (5 cols on Desktop)
              ======================================================== */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[460px]">
              
              {/* Decorative Subtle Frame Outline */}
              <div className="absolute -inset-2.5 rounded-[28px] border border-[#123F32]/10 pointer-events-none hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(20,45,35,0.08)] aspect-[4/5] bg-[#E8E2D5]">
                <img
                  src={sabrinaOfficialPhoto}
                  alt="Sabrina — Nutricionista Fundadora do Secamente"
                  className="w-full h-full object-cover object-[48%_38%] transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle natural vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Floating Pill inside photo */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-5 bg-[#FAF7F0]/92 backdrop-blur-md border border-white/60 rounded-2xl p-3 sm:p-3.5 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#123F32] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#CAEAB5]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] sm:text-[13px] font-semibold text-[#10251F] truncate">
                        Acompanhamento Próximo
                      </p>
                      <p className="text-[10.5px] sm:text-[11px] text-[#556960] truncate">
                        Direcionamento real para a sua rotina diária
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Handwritten subtle touch */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 select-none">
                <span
                  style={{ fontFamily: "'Parisienne', cursive" }}
                  className="text-2xl lg:text-[26px] text-[#2F675C] -rotate-3 block"
                >
                  Vida real & leveza
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delicate Scroll Down Arrow */}
      <div className="w-full flex justify-center pt-8 pb-1 relative z-10">
        <button
          type="button"
          onClick={handleScrollToNext}
          aria-label="Rolar para a próxima seção"
          className="text-[#4E675B] hover:text-[#123F32] transition-colors p-2 cursor-pointer flex flex-col items-center gap-1 group"
        >
          <span className="text-[11px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            Conheça
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
