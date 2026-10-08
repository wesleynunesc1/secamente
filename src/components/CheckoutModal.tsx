import React from 'react';
import { X, Check, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      'Olá Sabrina! Gostaria de fazer minha assinatura do Secamente por R$ 79,90/mês e começar meu acompanhamento.'
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-in fade-in">
      <div className="relative bg-[#FAF7F0] border border-[#DDD3C2] rounded-3xl max-w-[480px] w-full p-6 sm:p-8 shadow-2xl text-[#123F32] animate-in zoom-in-95">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EDE5D6] hover:bg-[#E3D9C9] flex items-center justify-center text-[#123F32] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center pt-2 pb-6 border-b border-[#EAE1D3]">
          <span className="text-[11px] uppercase tracking-widest text-[#2F675C] font-bold block mb-1">
            Inscrição Oficial
          </span>
          <h3
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-3xl sm:text-[34px] font-normal leading-tight text-[#10251F]"
          >
            Assinatura Secamente
          </h3>
          <p className="text-xs sm:text-[13px] text-[#4F685D] mt-1.5">
            Acompanhamento contínuo de emagrecimento com a Sabrina
          </p>
        </div>

        {/* Pricing Badge */}
        <div className="my-5 p-4 rounded-2xl bg-[#F0E9DC] border border-[#DCD0BE] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold text-[#526D60] uppercase tracking-wide">
              Mensalidade
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-bold text-[#10251F]">R$ 79,90</span>
              <span className="text-xs text-[#526D60]">/mês</span>
            </div>
          </div>
          <span className="text-[11px] font-medium text-[#123F32] bg-[#FAF7F0] px-3 py-1.5 rounded-full border border-[#DCD0BE]">
            Recorrente mensal
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-2.5 text-xs sm:text-[13px] text-[#344C40] mb-6">
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-[#2F675C] shrink-0" />
            <span>Acesso completo ao método e orientações</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-[#2F675C] shrink-0" />
            <span>Acompanhamento privado via WhatsApp com a Sabrina</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4 h-4 text-[#2F675C] shrink-0" />
            <span>Materiais de apoio e atualizações contínuas</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="w-full py-4 rounded-full bg-[#123F32] hover:bg-[#1A4E3F] text-white text-sm font-semibold flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#CAEAB5]" />
            <span>Iniciar Assinatura via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-xs text-[#5C7468] hover:text-[#123F32] py-2 text-center"
          >
            Voltar para a página
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-[#EAE1D3] flex items-center justify-center gap-2 text-[11px] text-[#698175]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2F675C]" />
          <span>Ambiente seguro e acompanhamento profissional direto</span>
        </div>

      </div>
    </div>
  );
};
