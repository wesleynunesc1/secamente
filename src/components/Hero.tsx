"use client";
import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperienceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="3.8" stroke="#FFFFFF" strokeWidth="1.25" />
      <path
        d="M4.5 20.5c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5"
        stroke="#FFFFFF"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.8" stroke="#FFFFFF" strokeWidth="1.25" />
      <path d="M10 5.5h4" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.5C12 2.5 5.5 7.2 5.5 13.8C5.5 17.4 8.4 20.5 12 20.5C15.6 20.5 18.5 17.4 18.5 13.8C18.5 7.2 12 2.5 12 2.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.25"
      />
      <path d="M12 7.5v9" stroke="#FFFFFF" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M12 11.2c-1.8 1.8-2.6 3.6-2.6 5.3" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" />
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
    line1: "Acesso 24h",
    line2: "no seu celular",
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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#06221E",
        padding: "105px 0 55px",
      }}
      aria-label="Apresentação Secamente"
    >
      {/* 1. Cinematic Full-bleed Photograph */}
      <img
        src="/images/hero-editorial.jpg"
        alt="Sabrina Ketolly – Nutrição que cabe na sua vida"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "58% 46%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 2. Delicate Editorial Reading Gradient (Only on the left, fades completely before woman's face) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(6, 24, 21, 0.82) 0%, rgba(6, 24, 21, 0.65) 24%, rgba(6, 24, 21, 0.32) 42%, rgba(6, 24, 21, 0.06) 55%, transparent 68%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* 3. Subtle Ambient Vignette (Top for header contrast, bottom for smooth transition) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5, 20, 18, 0.48) 0%, transparent 18%, transparent 80%, rgba(5, 20, 18, 0.65) 100%)",
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
          padding: "0 32px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "72vh",
        }}
        className="hero-main-flex"
      >
        {/* Left Column: Headlines & CTA */}
        <div style={{ maxWidth: 480 }} className="hero-text-col">
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 14,
                height: 1.5,
                background: "rgba(255, 255, 255, 0.65)",
                borderRadius: 1,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              NUTRIÇÃO QUE
            </span>
          </div>

          {/* Editorial Big Heading */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(42px, 4.5vw, 60px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.07,
              marginBottom: 20,
              letterSpacing: "-0.015em",
              textShadow: "0 2px 18px rgba(0, 0, 0, 0.28)",
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
              maxWidth: 395,
              marginBottom: 32,
              textShadow: "0 1px 8px rgba(0, 0, 0, 0.22)",
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
                background: "#4A827B",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                padding: "13px 28px",
                borderRadius: 999,
                fontSize: 13.5,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                boxShadow: "0 6px 22px rgba(0, 0, 0, 0.25)",
                transition: "all 0.28s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#57968E";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 26px rgba(74, 130, 123, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#4A827B";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 6px 22px rgba(0, 0, 0, 0.25)";
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
              letterSpacing: "0.08em",
              color: "rgba(255, 255, 255, 0.65)",
              marginTop: 26,
            }}
          >
            Nutrição clínica &nbsp;•&nbsp; Saúde da mulher &nbsp;•&nbsp; CRN 13076
          </p>
        </div>

        {/* Right Column: 3 Discreet Refined Glass Cards Stacked on the Right Edge (Desktop) */}
        <div
          className="hero-glass-desktop"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 182,
            zIndex: 5,
          }}
        >
          {glassCards.map((card) => (
            <div
              key={card.line1 + card.line2}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: 14,
                padding: "11px 15px",
                display: "flex",
                alignItems: "center",
                gap: 11,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
                transition: "all 0.28s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255, 255, 255, 0.14)";
                el.style.borderColor = "rgba(255, 255, 255, 0.32)";
                el.style.transform = "translateX(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255, 255, 255, 0.08)";
                el.style.borderColor = "rgba(255, 255, 255, 0.16)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.12)",
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
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.line1}
                </span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
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

      {/* Mobile Glass Cards Horizontal Scroll below content */}
      <div
        className="hero-glass-mobile"
        style={{
          display: "none",
          position: "relative",
          zIndex: 10,
          padding: "20px 20px 24px",
          gap: 10,
          overflowX: "auto",
          width: "100%",
        }}
      >
        {glassCards.map((card) => (
          <div
            key={card.line1 + card.line2}
            style={{
              background: "rgba(6, 28, 24, 0.72)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: 13,
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              minWidth: 165,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.12)",
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
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {card.line1}
              </span>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10.5,
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
            padding-top: 20px !important;
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
