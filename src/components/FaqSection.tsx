import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqItems = [
    {
      question: 'O que é o Secamente?',
      answer:
        'O Secamente é um acompanhamento contínuo de emagrecimento desenvolvido pela nutricionista Sabrina. O objetivo é ajudar você a melhorar sua alimentação e construir uma rotina sustentável e equilibrada, sem dietas extremas ou fórmulas prontas.',
    },
    {
      question: 'Quanto custa?',
      answer:
        'A assinatura do Secamente custa R$ 79,90 por mês, com cobrança recorrente mensal.',
    },
    {
      question: 'Como funciona o acompanhamento?',
      answer:
        'Durante a sua participação no Secamente, você conta com canal privado pelo WhatsApp com a Sabrina para tirar dúvidas, receber direcionamentos práticos e ajustar sua rotina alimentar conforme os desafios do dia a dia.',
    },
    {
      question: 'Por quanto tempo tenho acesso?',
      answer:
        'O acesso permanece disponível enquanto a assinatura estiver ativa.',
    },
    {
      question: 'Os conteúdos já estão todos disponíveis?',
      answer:
        'O Secamente é um programa em constante evolução. Alguns conteúdos já estarão disponíveis no momento da entrada e novos materiais poderão ser adicionados durante sua participação.',
    },
    {
      question: 'Como funcionará a comunidade?',
      answer:
        'A comunidade será um ambiente dedicado à troca de experiências, conquistas e incentivo entre os participantes que buscam os mesmos objetivos. Ela será disponibilizada posteriormente aos participantes do programa.',
    },
    {
      question: 'Homens também podem participar?',
      answer:
        'Sim! Embora a comunicação tenha forte sintonia com o público feminino e saúde da mulher, os pilares de alimentação, comportamento e rotina do método Secamente se aplicam a qualquer pessoa que deseja emagrecer com saúde.',
    },
    {
      question: 'Preciso fazer academia?',
      answer:
        'Não é obrigatório. O método é centrado na sua relação com a alimentação e na organização dos seus hábitos. O exercício físico é recomendado para a saúde geral, mas não é um pré-requisito para começar a ter resultados com o Secamente.',
    },
    {
      question: 'Como recebo meu acesso?',
      answer:
        'Assim que a confirmação do pagamento for concluída, você receberá imediatamente as informações de acesso por e-mail e as instruções para iniciar o seu acompanhamento privado no WhatsApp.',
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full bg-[#F3EDE0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E2D8C7] overflow-hidden"
    >
      <div className="max-w-[940px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D3] text-[#123F32] text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#2F675C]" />
            <span>TIRE SUAS DÚVIDAS</span>
          </div>

          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-[#10251F] text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-0.015em] font-normal"
          >
            Perguntas{' '}
            <span className="italic text-[#2F675C]">frequentes.</span>
          </h2>
          <p className="mt-3 text-[#41584D] text-sm sm:text-base max-w-[500px] mx-auto">
            Tudo o que você precisa saber sobre o funcionamento da assinatura e do método.
          </p>
        </div>

        {/* Elegant Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F0] rounded-2xl border border-[#DDD3C2] transition-colors duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-[#10251F]">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EDE5D6] text-[#123F32] flex items-center justify-center shrink-0 transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#2F675C]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#2F675C]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#3E554B] leading-relaxed border-t border-[#F0EAE0]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
