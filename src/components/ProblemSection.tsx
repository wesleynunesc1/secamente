"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProblemSection() {
  useScrollReveal();

  return (
    <section
      id="como-funciona-intro"
      style={{
        background: "#F5F2EA",
        padding: "70px 0 65px",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Mais que nutrição"
    >
      {/* Decorative leaf contour lines on background */}
      <div
        style={{
          position: "absolute",
          left: -40,
          top: "10%",
          pointerEvents: "none",
          opacity: 0.12,
        }}
      >
        <svg width="220" height="340" viewBox="0 0 220 340" fill="none">
          <path
            d="M110 10C110 10 20 70 20 170C20 230 60 290 110 330C160 290 200 230 200 170C200 70 110 10 110 10Z"
            stroke="#639B95"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M110 50C110 50 65 110 65 180C65 220 85 260 110 280"
            stroke="#639B95"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          right: -30,
          bottom: 20,
          pointerEvents: "none",
          opacity: 0.14,
        }}
      >
        <svg width="180" height="260" viewBox="0 0 180 260" fill="none">
          <path
            d="M90 10C90 10 20 60 20 130C20 180 50 220 90 250C130 220 160 180 160 130C160 60 90 10 90 10Z"
            stroke="#639B95"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M90 40V220" stroke="#639B95" strokeWidth="1.2" fill="none" />
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
          className="problem-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "38% 38% 24%",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* Left Column: Heading & Text */}
          <div className="reveal-left">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#639B95",
                marginBottom: 16,
              }}
            >
              MAIS QUE NUTRIÇÃO
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 50px)",
                fontWeight: 400,
                color: "#102722",
                lineHeight: 1.08,
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              E quem cuida
              <br />
              de{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#102722",
                }}
              >
                você?
              </em>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "#102722",
                opacity: 0.78,
                maxWidth: 380,
              }}
            >
              Uma rotina corrida, muitas responsabilidades e várias comparações. Se cuidar nem sempre
              parece possível, mas o seu bem-estar também importa. Você não precisa fazer esse
              processo sozinha.
            </p>
          </div>

          {/* Center Column: Reserved Photo Area */}
          <div className="reveal">
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                height: 350,
                width: "100%",
                background: "linear-gradient(135deg, #ECE7DB 0%, #E2DDD0 100%)",
                border: "1px solid rgba(16, 39, 34, 0.08)",
                boxShadow: "0 8px 24px rgba(16, 39, 34, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center", opacity: 0.25 }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#102722" strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Quote */}
          <div className="reveal-right" style={{ paddingLeft: 10 }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 22,
                fontStyle: "italic",
                color: "#102722",
                lineHeight: 1.45,
                marginBottom: 16,
              }}
            >
              Cuidar da sua alimentação também pode ser um ato de equilíbrio.
            </p>
            <svg width="36" height="46" viewBox="0 0 32 42" fill="none" style={{ opacity: 0.35 }}>
              <path
                d="M16 2C16 2 4 10 4 22C4 29 9 36 16 40C23 36 28 29 28 22C28 10 16 2 16 2Z"
                stroke="#639B95"
                strokeWidth="1.4"
              />
              <path d="M16 8V34" stroke="#639B95" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .problem-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
