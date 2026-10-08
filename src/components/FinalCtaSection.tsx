import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import sabrinaOfficialPhoto from '../assets/sabrina-hero.jpg';

interface FinalCtaSectionProps {
  onCtaClick?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full bg-[#123F32] text-white py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2F675C]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0E2C23] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Emotional Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#CAEAB5] text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DÊ O PRIMEIRO PASSO HOJE</span>
            </div>

            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-white text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.04] tracking-[-0.015em] font-normal mb-6"
            >
              Você não precisa esperar outra segunda-feira{' '}
              <span className="italic text-[#CAEAB5]">para começar.</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg lg:text-[19px] leading-[1.65] font-normal mb-8 max-w-[560px]">
              Comece hoje a construir uma alimentação e uma rotina mais conscientes com o acompanhamento do Secamente.
            </p>

            {/* Price & CTA Action */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={onCtaClick}
                className="group inline-flex items-center justify-center gap-3 bg-[#FAF7F0] hover:bg-white text-[#123F32] text-[15px] sm:text-[16px] font-semibold px-8 py-4 rounded-full shadow-[0_6px_25px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>QUERO COMEÇAR AGORA</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#123F32]" />
              </button>

              <div className="flex flex-col pl-1 sm:pl-0 sm:border-l sm:border-white/20 sm:pl-5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    R$ 79,90
                  </span>
                  <span className="text-sm font-medium text-white/70">/mês</span>
                </div>
                <span className="text-xs text-white/60 font-normal">
                  Assinatura recorrente mensal
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-white/60">
              Acesso seguro • Acompanhamento direto • Cuidado profissional
            </p>
          </div>

          {/* Right Column: Sabrina Photo Spotlight */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#1A4E3F]">
                <img
                  src={sabrinaOfficialPhoto}
                  alt="Sabrina — Nutricionista Secamente"
                  className="w-full h-full object-cover object-[50%_30%] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FAF7F0] text-[#123F32] rounded-2xl p-3.5 shadow-lg border border-white/40 max-w-[240px]">
                <p className="text-xs font-bold leading-tight">Sabrina Nutricionista</p>
                <p className="text-[10px] text-[#4F685D] mt-0.5">Te esperando no Secamente</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
