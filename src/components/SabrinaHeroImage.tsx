import React from 'react';
import sabrinaOfficialPhoto from '../assets/sabrina-hero.jpg';

interface SabrinaHeroImageProps {
  className?: string;
  isMobile?: boolean;
}

export const SabrinaHeroImage: React.FC<SabrinaHeroImageProps> = ({
  className = '',
  isMobile = false,
}) => {
  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* Official Photographic Backdrop (100% opacity, pure natural lighting) */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={sabrinaOfficialPhoto}
          alt="Sabrina — Nutricionista Clínica e Fundadora do Secamente"
          className={`w-full h-full object-cover transition-all duration-500 ${
            isMobile
              ? 'object-[52%_24%]'
              : 'object-[43%_48%] lg:object-[42%_48%] xl:object-[41%_48%]'
          }`}
          style={
            !isMobile
              ? {
                  // Refinement: 6% visual reduction (within 5%-8%) & slight shift to the right
                  transform: 'scale(0.94) translateX(2%)',
                  transformOrigin: 'center right',
                }
              : undefined
          }
        />
      </div>
    </div>
  );
};
