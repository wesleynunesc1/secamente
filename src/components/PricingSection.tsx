import React from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onCtaClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  const deliverables = [
    'Acesso ao Secamente',
    'Conteúdos e aulas',
    'Materiais exclusivos',
    'Atualizações do método',
    'Acompanhamento privado',
    'Acesso à futura comunidade',
  ];

  return (
    <section
      id="oferta"
      className="relative w-full bg-[#FAF7F0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E5DDD0] overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto">
        
        {/* ========================================================
            SECTION 15 — OFERTA PRINCIPAL
            ======================================================== */}
        <div className="max-w-[760px] mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F675C] block mb-3">
            ASSINATURA SECAMENTE
          </span>
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[#10251F] text-[40px] sm:text-[52px] lg:text-[62px] leading-[1.04] tracking-[-0.015em] font-normal"
          >
            Continue evoluindo{' '}
            <span className="italic text-[#2F675C]">todos os meses.</span>
          </h2>
          <p className="mt-4 text-[#3E554B] text-base sm:text-lg max-w-[580px] mx-auto leading-relaxed">
            Tenha em mãos orientação constante, método consolidado e suporte próximo para transformar sua rotina alimentar.
          </p>
        </div>

        {/* Premium Pricing Card */}
        <div className="max-w-[880px] mx-auto bg-[#F4EFE5] rounded-3xl sm:rounded-[36px] border border-[#DDD0BC] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(18,63,50,0.06)] relative overflow-hidden">
          
          {/* Subtle Decorative Botanical Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#5F9C91]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Col: Features Included (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFCF] text-[#123F32] text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2F675C]" />
                <span>O que está incluso</span>
              </div>

              <div className="space-y-4">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#123F32] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5 text-[#CAEAB5]" />
                    </div>
                    <span className="text-base sm:text-[17px] font-medium text-[#10251F]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Price Box & CTA (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF7F0] rounded-2xl sm:rounded-3xl border border-[#DDD3C2] p-7 sm:p-8 flex flex-col items-center text-center shadow-xs">
              
              <span className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#526B5E] mb-2">
                Acompanhamento Contínuo
              </span>

              {/* Price display */}
              <div className="my-2">
                <span className="text-xs font-semibold text-[#3C5549] uppercase tracking-wider block">
                  Por apenas
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#10251F] tracking-tight">
                    R$ 79,90
                  </span>
                  <span className="text-sm font-semibold text-[#486055]">/mês</span>
                </div>
                <span className="text-xs text-[#5D7569] font-normal block mt-1.5">
                  Assinatura recorrente mensal
                </span>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full mt-6 py-4 px-6 rounded-full bg-[#123F32] hover:bg-[#1A4E3F] text-white text-sm sm:text-[15px] font-semibold flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(18,63,50,0.2)] hover:shadow-[0_6px_22px_rgba(18,63,50,0.28)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>QUERO FAZER PARTE DO SECAMENTE</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <p className="text-[11px] text-[#556D60] mt-4 leading-snug">
                Acesso imediato às orientações e canal privado com a Sabrina.
              </p>
            </div>

          </div>

        </div>

        {/* ========================================================
            SECTION 16 — JUSTIFICATIVA DA ASSINATURA
            ======================================================== */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#F0E9DC] border border-[#DDD2BF] max-w-[880px] mx-auto text-center relative overflow-hidden">
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F675C] block mb-3">
            POR QUE RECORRÊNCIA MENSAL?
          </span>

          <h3
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[#10251F] text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.08] tracking-[-0.015em] font-normal mb-5"
          >
            Porque mudança não acontece em{' '}
            <span className="italic text-[#2F675C]">7 dias.</span>
          </h3>

          <div className="space-y-4 max-w-[680px] mx-auto text-base sm:text-lg text-[#32493F] leading-[1.7]">
            <p>
              O Secamente funciona através de uma assinatura porque a proposta não é entregar mais uma dieta rápida e descartável.
            </p>
            <p className="font-medium text-[#123F32]">
              É permitir que você tenha um ambiente de aprendizado, acompanhamento e evolução disponível durante todo o seu processo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
