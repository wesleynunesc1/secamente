import React from 'react';
import { Check, X, ArrowUpRight } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const forWho = [
    'Quer emagrecer com saúde e sem extremismos',
    'Está cansada de começar e parar na mesma semana',
    'Quer melhorar a alimentação sem abrir mão do que gosta',
    'Precisa organizar sua rotina alimentar de forma prática',
    'Quer aprender a comer e não apenas receber uma dieta engessada',
    'Sente que precisa de acompanhamento próximo e direcionamento',
    'Busca mudanças sustentáveis para levar para a vida toda',
  ];

  const notForWho = [
    'Quem procura resultado instantâneo sem mudança real de hábitos',
    'Quem busca uma dieta extremamente restritiva e punitiva',
    'Quem espera uma fórmula mágica que funcione sem nenhuma aplicação',
  ];

  return (
    <section className="relative w-full bg-[#F3EDE0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E2D8C7] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* ========================================================
            PART 1: SECTION 13 — PARA QUEM É
            ======================================================== */}
        <div className="mb-20 lg:mb-28">
          <div className="max-w-[820px] mb-12">
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F675C] block mb-3">
              ALINHAMENTO & OBJETIVOS
            </span>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.06] tracking-[-0.015em] font-normal"
            >
              Talvez o Secamente seja exatamente o que você{' '}
              <span className="italic text-[#2F675C]">estava procurando.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {forWho.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F0] rounded-2xl border border-[#DDD3C2] p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:border-[#123F32]/40 hover:shadow-xs group"
              >
                <div className="w-7 h-7 rounded-full bg-[#E5F0EB] text-[#123F32] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#123F32] group-hover:text-white transition-colors">
                  <Check className="w-4 h-4 text-[#2F675C] group-hover:text-[#CAEAB5]" />
                </div>
                <p className="text-sm sm:text-[15px] font-medium text-[#1B3229] leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: SECTION 14 — PARA QUEM NÃO É
            ======================================================== */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#FAF7F0] border border-[#DDD3C2] relative overflow-hidden shadow-xs">
          <div className="max-w-[840px]">
            
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#964B3B] block mb-3">
              TRANSPARÊNCIA TOTAL
            </span>

            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.08] tracking-[-0.015em] font-normal mb-5"
            >
              O Secamente não é uma solução milagrosa.
            </h3>

            <p className="text-sm sm:text-base text-[#475E52] mb-8 font-medium">
              Não é indicado para quem procura:
            </p>

            {/* Negative items */}
            <div className="space-y-3 mb-10">
              {notForWho.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F6F0E4] border border-[#E5DBCC]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E7D6D0] text-[#964B3B] flex items-center justify-center font-bold text-xs shrink-0">
                    ✕
                  </span>
                  <span className="text-sm sm:text-base text-[#3A4E44]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Fechamento forte */}
            <div className="pt-6 border-t border-[#E5DDCF]">
              <p
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-2xl sm:text-3xl text-[#10251F] font-normal leading-snug"
              >
                "É para quem entende que mudanças são construídas através de{' '}
                <span className="italic text-[#2F675C]">decisões repetidas</span>{' '}
                ao longo do tempo."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
