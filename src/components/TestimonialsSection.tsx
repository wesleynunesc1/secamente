import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana S.',
      tag: 'Aluna Secamente',
      highlight: 'Perdi 6kg sem cortar o que gosto',
      text: 'O que mais me surpreendeu foi não precisar viver de frango com batata doce. A Sabrina me ensinou a organizar minha marmita, a comer fora no fim de semana sem desespero e a rotina finalmente ficou leve.',
      result: 'Rotina sustentável há 4 meses',
    },
    {
      name: 'Camila R.',
      tag: 'Aluna Secamente',
      highlight: 'A paz de não recomeçar toda segunda',
      text: 'Eu vivia no efeito sanfona há anos. Sempre começava com força total na segunda e desistia na quarta. Ter o direcionamento da Sabrina no WhatsApp foi o divisor de águas que me deu constância.',
      result: 'Menos 8kg e disposição recuperada',
    },
    {
      name: 'Juliana P.',
      tag: 'Aluna Secamente',
      highlight: 'Aprendizado real para a vida inteira',
      text: 'O Secamente não entrega uma folha de dieta engessada. Você aprende a montar seu prato, a lidar com a ansiedade no fim da tarde e a ter clareza. Vale cada centavo da assinatura.',
      result: 'Melhora de exames e menos inchaço',
    },
    {
      name: 'Fernanda M.',
      tag: 'Aluna Secamente',
      highlight: 'Acolhimento sem nenhum julgamento',
      text: 'Eu tinha medo de nutricionista porque sempre me sentia culpada por não ser perfeita. A Sabrina tem uma abordagem humana, prática e acolhedora. Meu corpo e minha mente agradecem.',
      result: 'Autonomia alimentar conquistada',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="relative w-full bg-[#F3EDE0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E2D8C7] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-18 gap-6">
          <div>
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#2F675C] block mb-3">
              HISTÓRIAS REAIS
            </span>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#10251F] text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-0.015em] font-normal"
            >
              Mudanças que vão{' '}
              <span className="italic text-[#2F675C]">além da balança.</span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full bg-[#FAF7F0] border border-[#DDD3C2] hover:bg-[#123F32] hover:text-white hover:border-[#123F32] transition-colors flex items-center justify-center text-[#123F32] cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full bg-[#FAF7F0] border border-[#DDD3C2] hover:bg-[#123F32] hover:text-white hover:border-[#123F32] transition-colors flex items-center justify-center text-[#123F32] cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid: Responsive display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => {
            // In mobile only show currentIndex, on tablet show 2, on desktop show 3
            return (
              <div
                key={item.name}
                className={`bg-[#FAF7F0] rounded-3xl border border-[#DDD3C2] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-[#123F32]/35 ${
                  index === currentIndex ? 'block' : 'hidden md:block'
                } ${index > 1 ? 'hidden lg:block' : ''}`}
              >
                <div>
                  {/* Top Quote Mark & Stars */}
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="w-8 h-8 text-[#2F675C]/40 rotate-180" />
                    <div className="flex gap-1 text-[#2F675C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#2F675C]" />
                      ))}
                    </div>
                  </div>

                  <h3
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-xl sm:text-2xl font-normal text-[#10251F] mb-3 leading-snug"
                  >
                    "{item.highlight}"
                  </h3>

                  <p className="text-[#3E554B] text-sm leading-relaxed mb-6">
                    {item.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE2D4] flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#10251F]">{item.name}</p>
                    <p className="text-[11px] text-[#556D60]">{item.tag}</p>
                  </div>
                  <span className="text-[11px] font-medium text-[#2F675C] bg-[#EAE2D3] px-2.5 py-1 rounded-full">
                    {item.result}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-6 bg-[#123F32]' : 'w-2 bg-[#DDD1BE]'
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
