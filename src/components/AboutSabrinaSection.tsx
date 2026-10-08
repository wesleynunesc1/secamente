import React from 'react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';
import sabrinaOfficialPhoto from '../assets/sabrina-hero.jpg';

export const AboutSabrinaSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative w-full bg-[#FAF7F0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E5DDD0] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Editorial Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px]">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-[32px] border border-[#123F32]/10 pointer-events-none hidden sm:block" />

              <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-[#EDE4D5] shadow-[0_20px_45px_rgba(18,63,50,0.09)] border border-[#DDD3C2]">
                <img
                  src={sabrinaOfficialPhoto}
                  alt="Sabrina — Nutricionista Fundadora do Secamente"
                  className="w-full h-full object-cover object-[50%_30%] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Verified Professional Badge Overlay */}
              <div className="absolute -bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-[#FAF7F0] border border-[#DDD3C2] rounded-2xl p-3.5 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#123F32] text-white flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-[#CAEAB5]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#10251F]">Sabrina</p>
                    <p className="text-[10px] text-[#2F675C] font-medium">Nutricionista • CRN 13076</p>
                  </div>
                </div>
                <span className="text-[10.5px] uppercase font-bold tracking-wider text-[#61776C] bg-[#EFE9DC] px-2.5 py-1 rounded-full">
                  Verificada
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio and Story */}
          <div className="lg:col-span-7 flex flex-col items-start pt-6 lg:pt-0">
            
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F675C] mb-3">
              POR TRÁS DO SECAMENTE
            </span>

            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[42px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-[-0.015em] font-normal mb-2"
            >
              Sabrina
            </h2>

            <p className="text-sm sm:text-base font-medium text-[#486055] tracking-wide mb-8">
              Nutricionista Clínica • Saúde da Mulher • CRN 13076
            </p>

            {/* Main Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#32493F] leading-[1.7] mb-8 max-w-[620px]">
              <p>
                Ao longo da minha experiência como nutricionista, percebi que muitas pessoas até sabem o que deveriam fazer, mas encontram dificuldade em transformar isso em uma rotina possível.
              </p>
              <p className="text-xl sm:text-2xl font-serif text-[#10251F] italic border-l-2 border-[#2F675C] pl-4 my-2">
                "O Secamente nasceu para aproximar orientação e realidade."
              </p>
              <p>
                Acredito em um emagrecimento que respeita a sua vida, a sua família e o seu tempo. Sem regras impraticáveis e sem a constante sensação de fracasso ao primeiro desvio de rota.
              </p>
            </div>

            {/* Official Areas of Focus from Project */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-[560px] pt-4 border-t border-[#E5DDD0]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F0] border border-[#DDD3C2]/70">
                <CheckCircle2 className="w-4 h-4 text-[#2F675C] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#10251F]">Nutrição Clínica Personalizada</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F0] border border-[#DDD3C2]/70">
                <CheckCircle2 className="w-4 h-4 text-[#2F675C] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#10251F]">Saúde da Mulher & Ciclos</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F0] border border-[#DDD3C2]/70">
                <CheckCircle2 className="w-4 h-4 text-[#2F675C] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#10251F]">Construção de Hábitos Duradouros</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F0] border border-[#DDD3C2]/70">
                <CheckCircle2 className="w-4 h-4 text-[#2F675C] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#10251F]">Acompanhamento Direto e Humano</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
