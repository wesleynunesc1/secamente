import React from 'react';
import { Apple, Brain, Calendar, MessageSquareHeart } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Alimentação',
      icon: Apple,
      description:
        'Aprenda a organizar sua alimentação de forma mais estratégica e possível dentro da sua realidade.',
      highlight: 'Sem restrições absurdas',
    },
    {
      num: '02',
      title: 'Comportamento',
      icon: Brain,
      description:
        'Entenda hábitos e decisões que podem estar dificultando sua evolução.',
      highlight: 'Consciência e autonomia',
    },
    {
      num: '03',
      title: 'Rotina',
      icon: Calendar,
      description:
        'Construa hábitos que consigam existir também nos dias corridos, finais de semana e momentos fora do planejamento.',
      highlight: 'Consistência sustentável',
    },
    {
      num: '04',
      title: 'Acompanhamento',
      icon: MessageSquareHeart,
      description:
        'Tenha direcionamento durante o processo para não precisar descobrir tudo sozinho.',
      highlight: 'Suporte próximo e real',
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF7F0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 pb-8 border-b border-[#E2D8C7] gap-6">
          <div>
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2F675C] block mb-3">
              A BASE DA METODOLOGIA
            </span>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] font-normal"
            >
              Os quatro pilares do{' '}
              <span className="italic text-[#2F675C]">Secamente.</span>
            </h2>
          </div>

          <p className="text-[#43594F] text-sm sm:text-base max-w-[420px] leading-relaxed">
            Um método completo construído para que os resultados não durem apenas poucas semanas, mas façam parte definitiva da sua vida.
          </p>
        </div>

        {/* 4 Large Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative bg-[#FAF7F0] rounded-3xl border border-[#DDD2BF] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-[#123F32]/40 hover:shadow-[0_12px_32px_rgba(18,63,50,0.05)] flex flex-col justify-between group min-h-[290px]"
              >
                {/* Top Row: Large Editorial Number & Icon */}
                <div className="flex items-start justify-between mb-8">
                  <span
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-5xl sm:text-6xl lg:text-[68px] font-normal text-[#123F32]/85 leading-none group-hover:text-[#2F675C] transition-colors"
                  >
                    {item.num}
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-[#EDE6D8] border border-[#DED3C1] text-[#123F32] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#2F675C]" />
                  </div>
                </div>

                {/* Content Block */}
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#EFE8DC] text-[11px] font-semibold text-[#3D564A] uppercase tracking-wider mb-2.5">
                    {item.highlight}
                  </div>
                  <h3
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#10251F] mb-3 leading-tight"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#3E554B] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
