import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Calendar, Utensils, Video, MessageCircle, BookOpen, ChevronLeft } from 'lucide-react';

export const HeroPhoneMockups: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const appItems = [
    {
      icon: Calendar,
      title: 'Plano alimentar',
      subtitle: 'Orientações personalizadas',
    },
    {
      icon: Utensils,
      title: 'Receitas práticas',
      subtitle: 'Simples, saudáveis e deliciosas',
    },
    {
      icon: Video,
      title: 'Aulas e conteúdos',
      subtitle: 'Vídeos e materiais exclusivos',
    },
    {
      icon: MessageCircle,
      title: 'Acompanhamento',
      subtitle: 'Suporte contínuo',
    },
    {
      icon: BookOpen,
      title: 'Materiais exclusivos',
      subtitle: 'Guias e ferramentas práticas',
    },
  ];

  return (
    <div className="relative w-[330px] xl:w-[370px] h-[340px] xl:h-[365px] select-none pointer-events-auto">
      {/* ========================================================
          MOCKUP 01 (Behind - Welcome / Botanical Green Screen)
          ======================================================== */}
      <div className="absolute left-0 bottom-0 w-[185px] xl:w-[205px] h-[310px] xl:h-[340px] rounded-[32px] p-2 bg-[#1E2522] border-[3px] border-[#2E3A35] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-1.5 z-10">
        {/* Phone Glass Inner Screen */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#2D4539] flex flex-col justify-between p-3.5 text-white shadow-inner">
          {/* Botanical leaf photo backdrop simulation */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, #5F9C91 0%, transparent 60%), radial-gradient(circle at 20% 80%, #123F32 0%, #0F221B 100%)`,
            }}
          />

          {/* Tropical leaves SVG illustration for realistic botanical screen */}
          <svg
            className="absolute -right-6 -bottom-10 w-44 h-44 text-[#5F9C91]/35 pointer-events-none"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M40 180 C30 130 50 80 110 50 C140 35 170 30 180 20 C180 50 175 80 160 110 C130 170 80 190 40 180 Z" />
            <path d="M70 190 C60 150 90 110 130 90 C150 80 180 75 190 60 C185 90 170 130 140 155 C110 180 85 190 70 190 Z" opacity="0.6" />
          </svg>

          {/* Dynamic Island / Top Speaker */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-3 bg-black/80 rounded-full mb-2 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1b2b24] mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#15231c]" />
            </div>

            {/* Secamente Logo In-App */}
            <div className="w-full flex items-center gap-1.5 text-white/90 pt-1">
              <svg viewBox="0 0 40 40" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 28C14 26 8 20 10 13C15 13 20 18 19 28Z" />
                <path d="M20 28C17 21 16 11 22 7C26 12 24 22 20 28Z" />
                <path d="M21 28C26 26 32 20 30 13C25 13 20 18 21 28Z" />
              </svg>
              <span
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-xs font-medium tracking-[0.01em]"
              >
                Secamente
              </span>
            </div>
          </div>

          {/* Central Editorial Welcome Message */}
          <div className="relative z-10 my-auto pt-2">
            <h5
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-xl xl:text-2xl font-normal leading-[1.12] text-white tracking-tight"
            >
              Olá!
              <br />
              Seu bem-estar
              <br />
              é um projeto real.
            </h5>
          </div>

          {/* Bottom Card Inside Mockup 01 */}
          <div className="relative z-10 bg-white/95 rounded-2xl p-2.5 text-[#123F32] shadow-sm flex items-center justify-between gap-2">
            <div className="text-[10px] leading-tight font-medium text-[#1E3A30]">
              Mais saúde
              <br />
              para a sua rotina real.
            </div>
            <div className="w-6 h-6 rounded-full bg-[#123F32] text-white flex items-center justify-center shrink-0">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOCKUP 02 (Front - Overlapping Right - App Feature List)
          ======================================================== */}
      <div className="absolute right-0 bottom-[-10px] w-[195px] xl:w-[215px] h-[330px] xl:h-[355px] rounded-[34px] p-2 bg-[#1A221F] border-[3px] border-[#2C3833] shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-2 z-20">
        {/* Inner Phone Screen (Off-White App Interface) */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#FAF7F0] flex flex-col p-2.5 text-[#123F32] shadow-inner justify-between">
          {/* Dynamic Island Notch */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-16 h-3 bg-black/90 rounded-full mb-1 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a] mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]" />
            </div>

            {/* App Screen Header */}
            <div className="w-full flex items-center justify-between pt-1 pb-2 border-b border-[#EAE3D6]">
              <ChevronLeft className="w-3.5 h-3.5 text-[#4A5D54]" />
              <span
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-sm font-medium text-[#123F32] tracking-[0.01em]"
              >
                Secamente
              </span>
              <div className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 5 Vertical Feature Cards */}
          <div className="flex flex-col space-y-1.5 my-auto overflow-hidden">
            {appItems.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = activeItem === idx;
              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setActiveItem(idx)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={`flex items-center justify-between p-1.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isHovered
                      ? 'bg-white border-[#123F32]/30 shadow-xs translate-x-0.5'
                      : 'bg-white/70 border-[#E8E1D3]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-5 h-5 rounded-md bg-[#EDE6D8] text-[#123F32] flex items-center justify-center shrink-0">
                      <Icon className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-semibold text-[#123F32] leading-tight truncate">
                        {item.title}
                      </span>
                      <span className="text-[8px] text-[#556960] leading-tight truncate">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-2.5 h-2.5 text-[#73887E] shrink-0 ml-1" />
                </div>
              );
            })}
          </div>

          {/* Bottom Home Indicator */}
          <div className="w-full flex justify-center pt-1 shrink-0">
            <div className="w-16 h-1 bg-[#123F32]/25 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
