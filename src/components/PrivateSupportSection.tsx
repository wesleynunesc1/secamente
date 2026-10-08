import React from 'react';
import { ArrowRight, MessageCircle, Mic, CheckCheck } from 'lucide-react';
import sabrinaOfficialPhoto from '../assets/sabrina-hero.jpg';

interface PrivateSupportSectionProps {
  onCtaClick?: () => void;
}

export const PrivateSupportSection: React.FC<PrivateSupportSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full bg-[#FAF7F0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden border-b border-[#E5DDD0]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Mockup + Photography */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px]">
              
              {/* Backing Photo of Sabrina */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#EDE5D6] shadow-[0_20px_50px_rgba(18,63,50,0.08)] border border-[#DDD3C2]">
                <img
                  src={sabrinaOfficialPhoto}
                  alt="Sabrina — Nutricionista no Acompanhamento Privado"
                  className="w-full h-full object-cover object-[52%_32%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10251F]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Elegant & Discreet WhatsApp Interaction Card (Floating Overlay) */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-3 right-3 sm:left-6 sm:right-6 bg-[#FFFFFF]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#123F32]/12 shadow-[0_16px_36px_rgba(18,63,50,0.12)]">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0EBE1]">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-[#123F32]/20">
                        <img
                          src={sabrinaOfficialPhoto}
                          alt="Sabrina Nutricionista"
                          className="w-full h-full object-cover object-[50%_25%]"
                        />
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#34A853] rounded-full ring-2 ring-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-[13px] font-semibold text-[#10251F] flex items-center gap-1">
                        Sabrina • Nutricionista
                      </p>
                      <p className="text-[10px] text-[#2F675C] font-medium">Acompanhamento Ativo</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EBF5EE] text-[#123F32] text-[11px] font-semibold">
                    <MessageCircle className="w-3 h-3 text-[#2F675C]" />
                    WhatsApp
                  </span>
                </div>

                {/* Simulated clean chat snippet */}
                <div className="space-y-2 text-xs">
                  <div className="bg-[#F6F3EC] p-2.5 rounded-xl rounded-tl-sm text-[#3E554B] max-w-[85%] self-start">
                    <p className="text-[11.5px] leading-snug">
                      "Sabrina, hoje meu dia foi corrido e não consegui almoçar como planejado. O que posso fazer no lanche?"
                    </p>
                  </div>

                  <div className="bg-[#123F32] text-white p-2.5 rounded-xl rounded-tr-sm ml-auto max-w-[88%] shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <Mic className="w-3.5 h-3.5 text-[#CAEAB5]" />
                      <span className="text-[10px] text-[#CAEAB5] font-medium">Áudio da Sabrina (0:38)</span>
                    </div>
                    <p className="text-[11.5px] leading-snug text-white/95">
                      "Fique tranquila! Adapte com as opções rápidas da lista de apoio. O importante é manter a consistência sem culpa."
                    </p>
                    <div className="flex justify-end mt-1">
                      <CheckCheck className="w-3.5 h-3.5 text-[#CAEAB5]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Argumentation & Direct CTA */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D3] text-[#123F32] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2F675C]" />
              <span>DIFERENCIAL EXCLUSIVO</span>
            </div>

            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.06] tracking-[-0.015em] font-normal mb-6"
            >
              Aqui você não recebe um acesso e{' '}
              <span className="italic text-[#2F675C]">fica sozinho.</span>
            </h2>

            <p className="text-[#32493F] text-base sm:text-lg lg:text-[19px] leading-[1.65] font-normal mb-8 max-w-[540px]">
              Durante sua participação no Secamente, você poderá contar com acompanhamento privado pelo WhatsApp com a Sabrina para dúvidas e direcionamentos relacionados ao processo.
            </p>

            {/* Benefit highlights */}
            <div className="space-y-3.5 mb-8 w-full max-w-[500px]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#123F32] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-sm sm:text-base text-[#3E554B]">
                  <strong className="text-[#10251F]">Dúvidas reais no dia a dia:</strong> auxílio rápido para ajustar sua alimentação nos momentos em que a rotina apertar.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#123F32] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-sm sm:text-base text-[#3E554B]">
                  <strong className="text-[#10251F]">Sem robôs:</strong> contato humanizado e profissional direto com a nutricionista responsável.
                </p>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onCtaClick}
              className="group inline-flex items-center justify-center gap-3 bg-[#123F32] hover:bg-[#1A4E3F] text-white text-[15px] sm:text-[16px] font-semibold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(18,63,50,0.18)] hover:shadow-[0_6px_24px_rgba(18,63,50,0.26)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <span>QUERO TER ESSE ACOMPANHAMENTO</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
