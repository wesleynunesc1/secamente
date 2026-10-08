import React from 'react';
import { UserCheck, BookOpen, Sparkles, MessageCircle, TrendingUp } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Entre para o Secamente',
      description: 'Faça sua assinatura e receba acesso imediato ao programa e orientações iniciais.',
      icon: UserCheck,
      badge: 'Passo Inicial',
    },
    {
      num: '02',
      title: 'Comece pelos conteúdos',
      description: 'Acesse orientações e materiais desenvolvidos para ajudar no seu processo alimentar.',
      icon: BookOpen,
      badge: 'Clareza Prática',
    },
    {
      num: '03',
      title: 'Coloque em prática',
      description: 'Aplique as estratégias dentro da sua realidade, no seu ritmo e sem sofrimento.',
      icon: Sparkles,
      badge: 'Vida Real',
    },
    {
      num: '04',
      title: 'Conte com acompanhamento',
      description: 'Quando precisar, você terá direcionamento durante o processo pelo WhatsApp com a Sabrina.',
      icon: MessageCircle,
      badge: 'Suporte Ativo',
    },
    {
      num: '05',
      title: 'Continue evoluindo',
      description: 'Novos conteúdos, materiais e melhorias poderão ser adicionados ao Secamente durante sua permanência.',
      icon: TrendingUp,
      badge: 'Recorrência & Evolução',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative w-full bg-[#F3EDE0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E2D8C7] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-[760px] mb-16 lg:mb-20">
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2F675C] block mb-3">
            A SUA JORNADA
          </span>
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[#10251F] text-[38px] sm:text-[50px] lg:text-[60px] leading-[1.04] tracking-[-0.015em] font-normal"
          >
            Você entra. Aprende.{' '}
            <span className="italic text-[#2F675C]">Aplica. Evolui.</span>
          </h2>
          <p className="mt-4 text-[#3C5349] text-base sm:text-lg leading-relaxed">
            Uma trajetória clara e sem sobrecarga, pensada para quem tem rotina cheia e precisa de simplicidade com direção.
          </p>
        </div>

        {/* Visual Journey - Modern Timeline with Alternating / Staggered Cards */}
        <div className="relative">
          {/* Subtle connecting track line */}
          <div className="hidden lg:block absolute left-8 right-8 top-12 h-[2px] bg-[#DDD1BE] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#FAF7F0] rounded-2xl border border-[#DDD3C2] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#123F32]/35 group min-h-[260px]"
                >
                  <div>
                    {/* Top Marker: Step number + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                        className="text-2xl font-medium text-[#123F32] group-hover:text-[#2F675C] transition-colors"
                      >
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#EDE4D5] text-[#123F32] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#2F675C]" />
                      </div>
                    </div>

                    <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#637C70] mb-2">
                      {step.badge}
                    </span>

                    <h3
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                      className="text-xl font-normal text-[#10251F] mb-2.5 leading-snug"
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#445B50] leading-relaxed mt-2 pt-3 border-t border-[#EAE2D4]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
