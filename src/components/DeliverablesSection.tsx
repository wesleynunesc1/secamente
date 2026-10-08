import React from 'react';
import { Video, FileText, Compass, MessageSquare, Sparkles, Users } from 'lucide-react';

export const DeliverablesSection: React.FC = () => {
  const items = [
    {
      icon: Video,
      title: 'Conteúdos exclusivos',
      description: 'Aulas e orientações desenvolvidas para facilitar sua aplicação no dia a dia.',
    },
    {
      icon: FileText,
      title: 'Materiais de apoio',
      description: 'Recursos complementares para ajudar na organização e planejamento.',
    },
    {
      icon: Compass,
      title: 'Direcionamento prático',
      description: 'Estratégias que podem ser aplicadas na alimentação e na rotina.',
    },
    {
      icon: MessageSquare,
      title: 'Suporte com a Sabrina',
      description: 'Acompanhamento privado durante sua permanência no programa.',
    },
    {
      icon: Sparkles,
      title: 'Atualizações contínuas',
      description: 'Novos conteúdos e materiais adicionados conforme a evolução do método.',
    },
    {
      icon: Users,
      title: 'Comunidade Secamente',
      description: 'Espaço destinado à troca de experiências, rotina, evolução e resultados.',
    },
  ];

  return (
    <section className="relative w-full bg-[#F5EFE3] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E2D8C7] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="max-w-[720px] mb-16 lg:mb-20">
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2F675C] block mb-3">
            O PROGRAMA COMPLETO
          </span>
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[#10251F] text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-0.015em] font-normal"
          >
            Tudo que acompanha você{' '}
            <span className="italic text-[#2F675C]">durante o processo.</span>
          </h2>
          <p className="mt-4 text-[#3C5349] text-base sm:text-lg leading-relaxed">
            Estruturado para fornecer todo o suporte prático e metodológico que você precisa em cada etapa.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FAF7F0] rounded-2xl border border-[#DDD3C2] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#123F32]/35 hover:shadow-xs group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDE4D5] text-[#123F32] flex items-center justify-center mb-6 group-hover:bg-[#123F32] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#2F675C] group-hover:text-[#CAEAB5] transition-colors" />
                  </div>

                  <h3
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-2xl font-normal text-[#10251F] mb-3 leading-snug"
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#41574C] text-sm sm:text-[14.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#EDE5D8] flex items-center justify-between text-xs text-[#5D7368]">
                  <span>Secamente</span>
                  <span className="font-mono text-[11px]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
