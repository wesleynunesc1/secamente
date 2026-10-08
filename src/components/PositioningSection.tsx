import React from 'react';

export const PositioningSection: React.FC = () => {
  return (
    <section
      id="posicionamento"
      className="relative w-full bg-[#F3EDE0] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-y border-[#E2D8C7] overflow-hidden"
    >
      {/* Editorial Decorative Subtle Watermark Background */}
      <div className="max-w-[980px] mx-auto text-center relative z-10">
        
        {/* Subtle Pre-title */}
        <p className="text-sm sm:text-base font-medium tracking-[0.06em] text-[#4F685D] uppercase mb-4 sm:mb-6">
          Não é sobre seguir uma dieta por algumas semanas.
        </p>

        {/* Highlight Main Typography */}
        <h2
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-[#10251F] text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.12] tracking-[-0.015em] font-normal mb-6 sm:mb-8 max-w-[880px] mx-auto"
        >
          É sobre aprender a{' '}
          <span className="italic text-[#2F675C]">construir uma rotina</span>{' '}
          que faça sentido para você.
        </h2>

        {/* Delicate divider ornament */}
        <div className="flex items-center justify-center gap-3 my-7">
          <div className="w-12 h-[1px] bg-[#2F675C]/30" />
          <div className="w-2 h-2 rounded-full bg-[#2F675C]/50" />
          <div className="w-12 h-[1px] bg-[#2F675C]/30" />
        </div>

        {/* Complementary Text */}
        <p className="text-[#364D43] text-base sm:text-lg lg:text-[19px] leading-[1.7] max-w-[700px] mx-auto font-normal">
          O Secamente acompanha você durante esse processo, ajudando a transformar alimentação, hábitos e rotina de maneira mais consciente e possível.
        </p>
      </div>
    </section>
  );
};
