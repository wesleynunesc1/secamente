import React from 'react';

interface SecamenteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const SecamenteLogo: React.FC<SecamenteLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-[#123F32]' : 'text-white';
  const iconColor = isDark ? '#123F32' : '#FFFFFF';

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl lg:text-[27px]',
    lg: 'text-3xl',
  };

  return (
    <a
      href="#inicio"
      className={`inline-flex items-center gap-2.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123F32] rounded-lg transition-transform hover:opacity-95 ${className}`}
      aria-label="Secamente Início"
    >
      {/* 3-petal botanical leaf mark matching the approved reference */}
      <svg
        viewBox="0 0 40 40"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left leaf */}
        <path
          d="M19 28C14 26 8 20 10 13C15 13 20 18 19 28Z"
          stroke={iconColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center leaf */}
        <path
          d="M20 28C17 21 16 11 22 7C26 12 24 22 20 28Z"
          stroke={iconColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right leaf */}
        <path
          d="M21 28C26 26 32 20 30 13C25 13 20 18 21 28Z"
          stroke={iconColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Delicate stem base */}
        <path
          d="M19.5 28V32"
          stroke={iconColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <span
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        className={`${textSizes[size]} ${textColor} font-medium tracking-[0.01em] leading-none select-none`}
      >
        Secamente
      </span>
    </a>
  );
};
