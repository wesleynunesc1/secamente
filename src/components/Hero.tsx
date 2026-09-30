"use client";
import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperienceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="4" stroke="#FFFFFF" strokeWidth="1.4" />
      <path
        d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="#FFFFFF" strokeWidth="1.4" />
      <path d="M10 5h4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill="#FFFFFF" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 5 7 5 14C5 17.866 8.134 21 12 21C15.866 21 19 17.866 19 14C19 7 12 2 12 2Z"
        stroke="#FFFFFF"
        strokeWidth="1.4"
      />
      <path d="M12 7v10" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 11c-2 2-3 4-3 6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const glassCards = [
  {
    Icon: ExperienceIcon,
    line1: "8 anos",
    line2: "de experiência",
  },
  {
    Icon: MobileIcon,
    line1: "Acesso no",
    line2: "seu celular",
  },
  {
    Icon: LeafIcon,
    line1: "Praticidade",
    line2: "para sua rotina",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#073530",
        padding: "115px 0 60px",
      }}
      aria-label="Apresentação Secamente"
    >
      {/* 1. Full-bleed Hero Photo */}
      <img
        src="/images/hero-banner.png"
        alt="Sabrina Ketolly – Nutricionista Secamente"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "62% 28%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 2. Editorial Horizontal Gradient (Solid brand green on left for text legibility, clear center, subtle vignette on right) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #073530 0%, rgba(7, 53, 48, 0.95) 28%, rgba(7, 53, 48, 0.62) 48%, rgba(7, 53, 48, 0.12) 66%, rgba(7, 53, 48, 0.42) 86%, rgba(7, 53, 48, 0.65) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* 3. Top and Bottom Ambient Vignette (ensures Header contrast and smooth transition to next section) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(7, 43, 39, 0.6) 0%, transparent 20%, transparent 76%, rgba(7, 43, 39, 0.85) 100%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Main Content Area */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "68vh",
        }}
        className="hero-main-flex"
      >
        {/* Left Column: Headlines & CTA */}
        <div style={{ maxWidth: 480 }} className="hero-text-col">
          {/* Editorial Big Heading */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(42px, 4.4vw, 58px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.08,
              marginBottom: 20,
              letterSpacing: "-0.01em",
            }}
          >
            Nutrição que
            <br />
            cabe na
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              sua vida.
            </em>
          </h1>

          {/* Description Text */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.88)",
              maxWidth: 390,
              marginBottom: 32,
            }}
          >
            Seu acompanhamento nutricional prático, próximo e pensado para a rotina real da mulher.
          </p>

          {/* Primary CTA */}
          <div>
            <button
              onClick={() => scrollTo("#programa")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#4E857D",
                color: "#FFFFFF",
                border: "none",
                padding: "13px 28px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.28)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#5E9B93";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 24px rgba(78, 133, 125, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#4E857D";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.28)";
              }}
              aria-label="Quero começar o Secamente"
            >
              Quero começar o Secamente
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Micro-credentials */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11.5,
              letterSpacing: "0.1em",
              color: "rgba(255, 255, 255, 0.62)",
              marginTop: 26,
            }}
          >
            Nutrição clínica &nbsp;•&nbsp; Saúde da mulher &nbsp;•&nbsp; CRN 13076
          </p>
        </div>

        {/* Right Column: 3 Transparent Glass Cards Stacked on the Right Edge (Desktop) */}
        <div
          className="hero-glass-desktop"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            width: 220,
            zIndex: 5,
          }}
        >
          {glassCards.map((card) => (
            <div
              key={card.line1 + card.line2}
              style={{
                background: "rgba(10, 48, 43, 0.48)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                borderRadius: 16,
                padding: "13px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.22)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(10, 48, 43, 0.65)";
                el.style.borderColor = "rgba(255, 255, 255, 0.35)";
                el.style.transform = "translateX(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(10, 48, 43, 0.48)";
                el.style.borderColor = "rgba(255, 255, 255, 0.22)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <card.Icon />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12.5,
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  {card.line1}
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 400,
                    lineHeight: 1.25,
                  }}
                >
                  {card.line2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Glass Cards Carousel below content */}
      <div
        className="hero-glass-mobile"
        style={{
          display: "none",
          position: "relative",
          zIndex: 10,
          padding: "24px 20px 30px",
          gap: 12,
          overflowX: "auto",
          width: "100%",
        }}
      >
        {glassCards.map((card) => (
          <div
            key={card.line1 + card.line2}
            style={{
              background: "rgba(10, 48, 43, 0.65)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              borderRadius: 14,
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
              minWidth: 190,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <card.Icon />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 600,
                }}
              >
                {card.line1}
              </span>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                }}
              >
                {card.line2}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-main-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            min-height: auto !important;
            padding-top: 10px !important;
          }
          .hero-text-col {
            max-width: 100% !important;
          }
          .hero-glass-desktop {
            display: none !important;
          }
          .hero-glass-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
