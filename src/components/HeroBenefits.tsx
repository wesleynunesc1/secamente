import React from 'react';

export interface BenefitItem {
  id: string;
  icon: 'leaf' | 'calendar' | 'users';
  title: string;
  descriptionDesktop: [string, string];
  descriptionMobile: string;
}

export const benefitsData: BenefitItem[] = [
  {
    id: 'acolhimento',
    icon: 'leaf',
    title: 'Acolhimento',
    descriptionDesktop: ['Você no seu tempo,', 'sem julgamentos.'],
    descriptionMobile: 'Você no seu tempo, sem julgamentos.',
  },
  {
    id: 'praticidade',
    icon: 'calendar',
    title: 'Praticidade',
    descriptionDesktop: ['Estratégias reais', 'para a sua rotina.'],
    descriptionMobile: 'Estratégias reais para a sua rotina.',
  },
  {
    id: 'suporte',
    icon: 'users',
    title: 'Suporte',
    descriptionDesktop: ['Acompanhamento', 'em todas as etapas.'],
    descriptionMobile: 'Acompanhamento em todas as etapas.',
  },
];

const RenderIcon = ({ type, color = 'currentColor', className = 'w-6 h-6' }: { type: string; color?: string; className?: string }) => {
  if (type === 'leaf') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    );
  }
  if (type === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="8" cy="14" r="0.8" fill={color} />
        <circle cx="12" cy="14" r="0.8" fill={color} />
        <circle cx="16" cy="14" r="0.8" fill={color} />
        <circle cx="8" cy="18" r="0.8" fill={color} />
        <circle cx="12" cy="18" r="0.8" fill={color} />
        <circle cx="16" cy="18" r="0.8" fill={color} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

export const DesktopBenefitsCards: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2.5 lg:space-y-3 w-[275px] xl:w-[295px]">
      {benefitsData.map((item) => (
        <div
          key={item.id}
          style={{
            background: 'rgba(30, 47, 30, 0.45)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
          className="group relative flex items-center gap-4 px-4 py-3 rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-white/40"
        >
          {/* Linear White Outline Icon */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white/95">
            <RenderIcon type={item.icon} color="#FFFFFF" className="w-7 h-7" />
          </div>

          {/* Typography */}
          <div className="flex flex-col">
            <h4
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-white text-xl xl:text-[22px] font-normal tracking-wide leading-tight"
            >
              {item.title}
            </h4>
            <p className="text-white/80 text-[11px] xl:text-[11.5px] leading-[1.35] mt-0.5 tracking-normal">
              {item.descriptionDesktop[0]}
              <br />
              {item.descriptionDesktop[1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const MobileBenefitsCards: React.FC = () => {
  return (
    <div className="w-full max-w-[420px] mx-auto px-1 sm:px-2">
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
        {benefitsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl bg-[#EDE6D9]/75 backdrop-blur-sm border border-[#DFD7C7] shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-w-0"
          >
            {/* Green Icon */}
            <div className="w-7 h-7 mb-1 flex items-center justify-center text-[#123F32]">
              <RenderIcon type={item.icon} color="#123F32" className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </div>

            {/* Serif Title */}
            <h4
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-[#123F32] text-[15px] sm:text-base font-normal tracking-tight leading-tight line-clamp-1"
            >
              {item.title}
            </h4>

            {/* Sans Description */}
            <p className="text-[#3A5046] text-[9.5px] sm:text-[10.5px] leading-snug mt-1 line-clamp-2">
              {item.descriptionMobile}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
