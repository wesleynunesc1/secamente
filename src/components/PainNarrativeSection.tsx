import React from 'react';
import { RefreshCw, HelpCircle } from 'lucide-react';

export const PainNarrativeSection: React.FC = () => {
  const narrativeSteps = [
    {
      step: '01',
      phrase: 'Segunda-feira começa a dieta.',
      detail: 'Você acorda decidida, abastece a geladeira e promete que desta vez será diferente.',
    },
    {
      step: '02',
      phrase: 'Você tenta fazer tudo perfeitamente.',
      detail: 'Corta refeições que gosta, pesa cada grama e tenta encaixar uma rotina irreal no seu dia.',
    },
    {
      step: '03',
      phrase: 'A rotina aperta.',
      detail: 'O trabalho acumula, imprevistos acontecem, o cansaço bate e o estresse pede alívio.',
    },
    {
      step: '04',
      phrase: 'Você sai do planejamento.',
      detail: 'Basta um deslize ou uma refeição fora do combinado para a frustração tomar conta.',
    },
    {
      step: '05',
      phrase: 'E pensa: “Semana que vem eu começo novamente.”',
      detail: 'O ciclo se repete. Mais uma vez a sensação de que faltou disciplina ou foco.',
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF7F0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F675C] mb-3">
            <RefreshCw className="w-3.5 h-3.5 text-[#2F675C]" />
            <span>O ciclo que precisa ser rompido</span>
          </div>

          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[#10251F] text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.015em] font-normal"
          >
            Quantas vezes você já{' '}
            <span className="italic text-[#2F675C]">começou de novo?</span>
          </h2>
        </div>

        {/* Narrative Flow (Editorial Story Layout, Not Bullets) */}
        <div className="relative">
          {/* Subtle connecting vertical editorial line */}
          <div className="hidden md:block absolute left-[27px] top-6 bottom-6 w-[1.5px] bg-[#E2D8C7]" />

          <div className="space-y-6 sm:space-y-8">
            {narrativeSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-3 md:gap-0 shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#EDE6D8] border border-[#DDD2BF] text-[#123F32] flex items-center justify-center font-serif text-lg font-medium shadow-xs group-hover:bg-[#123F32] group-hover:text-white transition-colors duration-300 z-10">
                    {item.step}
                  </div>
                  {/* Mobile inline title */}
                  <span className="md:hidden text-lg font-semibold text-[#10251F]">
                    {item.phrase}
                  </span>
                </div>

                {/* Narrative content block */}
                <div className="flex-1 bg-[#FAF7F0] rounded-2xl border border-[#E9E1D2] p-5 sm:p-6 transition-all duration-300 hover:border-[#123F32]/25 hover:shadow-xs">
                  <h3 className="hidden md:block text-xl sm:text-[22px] font-medium text-[#10251F] mb-1.5">
                    {item.phrase}
                  </h3>
                  <p className="text-[#43594F] text-sm sm:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Narrative Climax / Reflexão */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#EFE8DA] border border-[#DDD2BF] relative overflow-hidden">
          <div className="max-w-[820px]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2F675C] mb-3">
              <HelpCircle className="w-4 h-4 text-[#2F675C]" />
              <span>A verdade sobre o processo</span>
            </div>

            <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-[#10251F] leading-snug mb-4">
              O problema talvez não seja falta de força de vontade.
            </p>

            <p className="text-base sm:text-lg lg:text-[19px] text-[#344C40] leading-relaxed">
              Pode ser que você esteja tentando seguir estratégias que simplesmente não cabem na sua rotina.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
