import React from 'react';
import { Users2, ShieldCheck, HeartHandshake, Info } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF7F0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E5DDD0] overflow-hidden">
      <div className="max-w-[1080px] mx-auto text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE6D7] text-[#123F32] text-xs font-semibold tracking-wider uppercase mb-5">
          <Users2 className="w-3.5 h-3.5 text-[#2F675C]" />
          <span>CONEXÃO & PERTENCIMENTO</span>
        </div>

        {/* Headline */}
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-[#10251F] text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.08] tracking-[-0.015em] font-normal mb-6"
        >
          Você não precisa viver esse{' '}
          <span className="italic text-[#2F675C]">processo sozinho.</span>
        </h2>

        {/* Main Text */}
        <p className="text-[#32493F] text-base sm:text-lg lg:text-[19px] leading-[1.7] max-w-[720px] mx-auto font-normal mb-10">
          Os participantes do Secamente também poderão fazer parte da comunidade de alunos, criada para compartilhar experiências, rotina, evolução e resultados.
        </p>

        {/* Highlight Card */}
        <div className="bg-[#EDE6D8] border border-[#DCD0BE] rounded-3xl p-8 sm:p-10 max-w-[820px] mx-auto mb-8 shadow-xs">
          <p
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#123F32] leading-tight mb-3"
          >
            "Um ambiente de incentivo entre pessoas caminhando na mesma direção."
          </p>
          <p className="text-xs sm:text-sm text-[#4E665A]">
            Troca real, sem comparações tóxicas, com foco no progresso individual e apoio mútuo.
          </p>
        </div>

        {/* Transparent Notice */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-[12.5px] text-[#556D60] bg-[#FAF7F0] px-4 py-2 rounded-full border border-[#DDD3C2]">
          <Info className="w-3.5 h-3.5 text-[#2F675C] shrink-0" />
          <span>
            A comunidade será disponibilizada posteriormente aos participantes do programa.
          </span>
        </div>

      </div>
    </section>
  );
};
