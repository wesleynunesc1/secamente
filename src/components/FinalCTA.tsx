"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function CalendarPerkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="#FFFFFF" strokeWidth="1.3" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MobilePerkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="#FFFFFF" strokeWidth="1.3" />
      <path d="M10 5h4" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill="#FFFFFF" />
    </svg>
  );
}

function HeartPerkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
        stroke="#FFFFFF"
        strokeWidth="1.3"
      />
    </svg>
  );
}

const perks = [
  {
    Icon: CalendarPerkIcon,
    label: "Acesso imediato",
  },
  {
    Icon: MobilePerkIcon,
    label: "No seu celular",
  },
  {
    Icon: HeartPerkIcon,
    label: "Com o meu acompanhamento",
  },
];

export default function FinalCTA() {
  useScrollReveal();

  return (
    <section
      id="cta-final"
      style={{
        background: "#073F39",
        padding: "70px 0 65px",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background organic curved line geometry */}
      <div
        style={{
          position: "absolute",
          left: -100,
          top: "10%",
          pointerEvents: "none",
          opacity: 0.08,
        }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#8DBDB5" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="200" stroke="#8DBDB5" strokeWidth="1" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="cta-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "62% 38%",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left Column: Headline & Action */}
          <div className="reveal-left">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8DBDB5",
                marginBottom: 16,
              }}
            >
              NUTRIÇÃO PARA A SUA VIDA REAL
            </p>

            <h2
              id="cta-heading"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(38px, 4.2vw, 54px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.05,
                marginBottom: 18,
                letterSpacing: "-0.01em",
              }}
            >
              Comece no{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                seu ritmo.
              </em>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: 420,
                marginBottom: 28,
              }}
            >
              Dê o primeiro passo para uma rotina mais leve, com mais saúde, equilíbrio e bem-estar. O Secamente é para você.
            </p>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#639B95",
                color: "#FFFFFF",
                border: "none",
                padding: "13px 28px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.22)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#78aca7";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#639B95";
                el.style.transform = "translateY(0)";
              }}
            >
              Quero começar agora
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

          {/* Right Column: 3 Clean List Items */}
          <div
            className="reveal-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {perks.map((perk) => (
              <div
                key={perk.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ flexShrink: 0, opacity: 0.9 }}>
                  <perk.Icon />
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {perk.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .cta-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
