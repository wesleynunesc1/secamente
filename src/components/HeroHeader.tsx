import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { SecamenteLogo } from './SecamenteLogo.tsx';

interface HeroHeaderProps {
  onStartClick?: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ onStartClick }) => {
  const [activeItem, setActiveItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: 'O Método', href: '#metodo' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Sobre Sabrina', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  // Handle scroll effect for sticky header blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveItem(label);
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    if (onStartClick) {
      onStartClick();
    } else {
      const oferta = document.querySelector('#oferta');
      if (oferta) {
        oferta.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#F8F5EE]/85 backdrop-blur-md border-b border-[#123F32]/8 shadow-[0_4px_20px_rgba(18,63,50,0.04)]'
          : 'py-5 lg:py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Zone: Secamente Brand Logo */}
        <div className="flex items-center">
          <SecamenteLogo size="md" />
        </div>

        {/* Center Zone: Clean Editorial Nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center rounded-full px-4 py-1.5 bg-[#FAF7F0]/80 backdrop-blur-sm border border-[#123F32]/8 shadow-[0_2px_12px_rgba(20,40,35,0.03)]"
        >
          <ul className="flex items-center space-x-1 lg:space-x-3">
            {menuItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.label, item.href)}
                    className={`inline-block px-3.5 py-1.5 rounded-full text-[13px] lg:text-[14px] font-medium tracking-normal transition-all duration-200 select-none ${
                      isActive
                        ? 'bg-[#E7DECf] text-[#123F32] font-semibold'
                        : 'text-[#3E534B] hover:text-[#123F32] hover:bg-black/[0.03]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Zone: Primary CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="group inline-flex items-center gap-2 bg-[#123F32] hover:bg-[#1A4E3F] text-white text-[13px] lg:text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_2px_8px_rgba(18,63,50,0.14)] hover:shadow-[0_4px_14px_rgba(18,63,50,0.22)] active:scale-[0.98] cursor-pointer"
          >
            <span>QUERO FAZER PARTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
            className="w-11 h-11 rounded-full bg-[#EFE9DC]/90 border border-[#DCD3C3] flex flex-col items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 shadow-xs"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#123F32]" />
            ) : (
              <>
                <span className="w-4.5 h-[1.8px] bg-[#123F32] rounded-full transition-all" />
                <span className="w-4.5 h-[1.8px] bg-[#123F32] rounded-full transition-all" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="absolute top-0 right-0 w-[84%] max-w-[320px] h-full bg-[#FAF7F0] p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E3DBD0]">
                <SecamenteLogo size="sm" />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-[#EDE6D8] flex items-center justify-center text-[#123F32]"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8">
                <ul className="flex flex-col space-y-2">
                  {menuItems.map((item) => {
                    const isActive = activeItem === item.label;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.label, item.href)}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-[#E3D9C9] text-[#123F32] font-semibold'
                              : 'text-[#3E5149] hover:bg-black/5'
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E3DBD0] flex flex-col gap-3">
              <div className="text-center">
                <span className="text-xs uppercase tracking-wider text-[#556960] font-medium">Assinatura mensal</span>
                <p className="text-base font-semibold text-[#123F32]">R$ 79,90/mês</p>
              </div>
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full h-12 rounded-full bg-[#123F32] text-white font-medium flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <span>QUERO FAZER PARTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
