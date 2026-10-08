import React, { useState } from 'react';
import { Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { SecamenteLogo } from './SecamenteLogo.tsx';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#EDE6D8] border-t border-[#DCD0BE] text-[#1E362C] py-14 sm:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#DCD0BE]">
          
          {/* Brand & Professional Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <SecamenteLogo size="md" />
            </div>

            <p className="text-sm text-[#455D51] max-w-[360px] leading-relaxed mb-4">
              Programa e acompanhamento contínuo de emagrecimento, alimentação consciente e construção de rotina saudável.
            </p>

            <div className="text-xs text-[#526B5E] space-y-1">
              <p className="font-semibold text-[#123F32]">Sabrina — Nutricionista</p>
              <p>Nutrição Clínica • Saúde da Mulher • CRN 13076</p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#123F32] mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm text-[#455D51]">
              <li>
                <a href="#inicio" className="hover:text-[#123F32] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#123F32] transition-colors">
                  O Método Secamente
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#123F32] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#123F32] transition-colors">
                  Sobre Sabrina
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-[#123F32] transition-colors">
                  Assinatura
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#123F32] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between">
            <div className="flex flex-col items-start lg:items-end">
              <p className="text-xs font-bold uppercase tracking-wider text-[#123F32] mb-4">
                Canais Oficiais
              </p>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Sabrina"
                  className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#DDD3C2] flex items-center justify-center text-[#123F32] hover:bg-[#123F32] hover:text-white hover:border-[#123F32] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Secamente"
                  className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#DDD3C2] flex items-center justify-center text-[#123F32] hover:bg-[#123F32] hover:text-white hover:border-[#123F32] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-[#526B5E] lg:text-right">
                Atendimento e suporte aos participantes do Secamente.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#486255] hover:text-[#123F32] transition-colors p-2 rounded-lg cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#627A6D] gap-4">
          <p>© {new Date().getFullYear()} Secamente. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#123F32] transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="w-1 h-1 rounded-full bg-[#B6C2BA]" />
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#123F32] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* Modal Legal (Privacidade / Termos) */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#FAF7F0] border border-[#DDD3C2] rounded-3xl max-w-[540px] w-full p-6 sm:p-8 shadow-2xl text-[#123F32]">
            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-2xl sm:text-3xl font-normal text-[#10251F] mb-4"
            >
              {legalModal === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h3>
            <div className="text-xs sm:text-sm text-[#43594F] space-y-3 leading-relaxed max-h-[300px] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    O Secamente respeita sua privacidade e protege seus dados pessoais de acordo com a LGPD (Lei Geral de Proteção de Dados).
                  </p>
                  <p>
                    As informações fornecidas durante o cadastro e as conversas de acompanhamento nutricional são tratadas com sigilo ético e profissional.
                  </p>
                  <p>
                    Nenhum dado é compartilhado com terceiros sem seu consentimento prévio.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A assinatura do Secamente concede acesso aos materiais e ao canal de acompanhamento com a nutricionista enquanto a recorrência mensal estiver ativa.
                  </p>
                  <p>
                    O programa não substitui consultas médicas diagnósticas específicas. Resultados individuais podem variar de acordo com o ritmo, constância e particularidades de cada organismo.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#E3D9C9] flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-6 py-2.5 rounded-full bg-[#123F32] text-white text-xs font-semibold hover:bg-[#1A4E3F] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
