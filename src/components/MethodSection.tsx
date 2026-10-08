import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { SecamenteLogo } from './SecamenteLogo.tsx';

interface MethodSectionProps {
  onCtaClick?: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onCtaClick }) => {
  return (
    <section
      id="metodo"
      className="relative w-full bg-[#F5EFE3] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E3D9C9] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Brand Emblem & Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-center justify-center">
            <div className="relative p-10 sm:p-14 rounded-3xl bg-[#FAF7F0] border border-[#DDD3C2] shadow-[0_8px_30px_rgba(18,63,50,0.04)] w-full max-w-[420px] mx-auto text-center flex flex-col items-center">
              
              {/* Botanical Leaf Emblem in Large Format */}
              <div className="w-20 h-20 rounded-2xl bg-[#EDE5D6] flex items-center justify-center text-[#123F32] mb-6 shadow-inner">
                <svg
                  viewBox="0 0 40 40"
                  className="w-12 h-12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M19 28C14 26 8 20 10 13C15 13 20 18 19 28Z"
                    stroke="#123F32"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 28C17 21 16 11 22 7C26 12 24 22 20 28Z"
                    stroke="#123F32"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 28C26 26 32 20 30 13C25 13 20 18 21 28Z"
                    stroke="#123F32"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 28V32"
                    stroke="#123F32"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Brand Wordmark */}
              <span
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-4xl sm:text-5xl font-medium tracking-[0.02em] text-[#123F32] leading-none mb-3"
              >
                Secamente
              </span>

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2F675C]">
                Método & Acompanhamento
              </span>

              <div className="w-16 h-[1.5px] bg-[#2F675C]/25 my-5" />

              <p className="text-xs sm:text-[13px] text-[#4F685D] leading-relaxed">
                Desenvolvido por nutricionista clínica para aproximar a ciência alimentar da realidade da sua vida.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Method Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F675C] mb-3">
              CONHEÇA O
            </span>

            {/* Giant Title */}
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[48px] sm:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.02em] font-normal mb-6"
            >
              SECAMENTE
            </h2>

            {/* Main Subtitle Description */}
            <p className="text-[#2F443B] text-base sm:text-lg lg:text-[20px] leading-[1.65] font-normal mb-8 max-w-[620px]">
              Um acompanhamento pensado para ajudar você a emagrecer enquanto desenvolve uma relação mais equilibrada com alimentação, rotina e seus próprios hábitos.
            </p>

            {/* Contrast Points */}
            <div className="space-y-3.5 mb-8 w-full max-w-[560px]">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DDD3C2]/70 text-[#476054] text-sm sm:text-base">
                <span className="w-5 h-5 rounded-full bg-[#E5DDD0] text-[#7A6E5D] flex items-center justify-center font-bold text-xs shrink-0">
                  ✕
                </span>
                <span>Não é apenas assistir algumas aulas gravadas.</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DDD3C2]/70 text-[#476054] text-sm sm:text-base">
                <span className="w-5 h-5 rounded-full bg-[#E5DDD0] text-[#7A6E5D] flex items-center justify-center font-bold text-xs shrink-0">
                  ✕
                </span>
                <span>Não é receber uma dieta pronta e ficar sozinho.</span>
              </div>
            </div>

            {/* Climax Highlight */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#123F32] text-white w-full max-w-[560px] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#CAEAB5] font-semibold block mb-1">
                  O diferencial do método
                </span>
                <p
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-2xl sm:text-3xl font-normal leading-tight text-white"
                >
                  É um processo de evolução contínua.
                </p>
              </div>

              <button
                type="button"
                onClick={onCtaClick}
                className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F0] text-[#123F32] hover:bg-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs"
              >
                <span>Fazer parte</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
