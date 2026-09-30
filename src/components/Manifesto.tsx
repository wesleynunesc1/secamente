"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Manifesto() {
  useScrollReveal();

  return (
    <section
      id="manifesto"
      style={{
        position: "relative",
        padding: "70px 0 65px",
        overflow: "hidden",
        backgroundColor: "#073F39",
      }}
      aria-label="Manifesto Secamente"
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <div
          className="manifesto-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "35% 35% 30%",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* Left Column: Big Editorial Headline */}
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
              MAIS DO QUE RESULTADOS
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 50px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              É sobre
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                conseguir
                <br />
                continuar.
              </em>
            </h2>
          </div>

          {/* Center Column: Reserved Photo Area */}
          <div className="reveal">
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                height: 280,
                width: "100%",
                background: "linear-gradient(145deg, rgba(20, 91, 82, 0.4) 0%, rgba(7, 63, 57, 0.5) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center", opacity: 0.25 }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Leaf Emblem */}
          <div
            className="reveal-right"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.75,
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: 280,
              }}
            >
              Acolhimento, positividade e estratégias reais para que você possa cuidar de você de forma leve, real e sustentável.
            </p>

            <div style={{ flexShrink: 0, opacity: 0.55 }}>
              <svg width="34" height="42" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50 106C32 96 18 80 18 58C18 43 23 30 31 20C33 30 38 38 43 44C47 34 50 22 50 10C50 22 53 34 57 44C62 38 67 30 69 20C77 30 82 43 82 58C82 80 68 96 50 106Z"
                  stroke="#8DBDB5"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 48C34 54 32 62 34 70C36 78 43 86 50 92C57 86 64 78 66 70C68 62 66 54 62 48"
                  stroke="#8DBDB5"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M50 24V74"
                  stroke="#8DBDB5"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .manifesto-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
