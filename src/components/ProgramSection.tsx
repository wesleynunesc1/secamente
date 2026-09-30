"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProgramSection() {
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="programa"
      style={{
        background: "#073F39",
        padding: "75px 0 70px",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="program-heading"
    >
      {/* Subtle organic watermark Secamente tulip mark in background */}
      <div
        style={{
          position: "absolute",
          right: -60,
          top: "10%",
          pointerEvents: "none",
          opacity: 0.07,
        }}
      >
        <svg width="500" height="570" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 106C32 96 18 80 18 58C18 43 23 30 31 20C33 30 38 38 43 44C47 34 50 22 50 10C50 22 53 34 57 44C62 38 67 30 69 20C77 30 82 43 82 58C82 80 68 96 50 106Z"
            stroke="#8DBDB5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 48C34 54 32 62 34 70C36 78 43 86 50 92C57 86 64 78 66 70C68 62 66 54 62 48"
            stroke="#8DBDB5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M50 24V74"
            stroke="#8DBDB5"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 10 }}>
        <div
          className="program-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "38% 62%",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* Left: Presentation Text */}
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
              CONHEÇA O PROGRAMA
            </p>

            <h2
              id="program-heading"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(42px, 4.5vw, 62px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              Secamente
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.78)",
                maxWidth: 360,
                marginBottom: 28,
              }}
            >
              Um programa nutricional feito para mulheres que querem cuidar da saúde e da alimentação
              sem rotinas impossíveis.
            </p>

            <button
              onClick={() => scrollTo("#cta-final")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#639B95",
                color: "#FFFFFF",
                border: "none",
                padding: "13px 26px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.22)",
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
              Conheça o programa
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

          {/* Right: Dual iPhone Mockups */}
          <div
            className="reveal-right program-mockups-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              position: "relative",
            }}
          >
            {/* Phone 1: App Menu Dashboard */}
            <div
              style={{
                width: 220,
                height: 440,
                background: "#0D1413",
                borderRadius: 38,
                padding: 8,
                boxShadow: "0 22px 50px rgba(0, 0, 0, 0.4)",
                border: "3.5px solid #D6D2C8",
                position: "relative",
                overflow: "hidden",
                transform: "rotate(-3deg) translateY(8px)",
                flexShrink: 0,
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 22,
                  background: "#000000",
                  borderRadius: 12,
                  zIndex: 20,
                }}
              />

              {/* Screen Content */}
              <div
                style={{
                  background: "#F5F2EA",
                  width: "100%",
                  height: "100%",
                  borderRadius: 34,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header in App */}
                <div
                  style={{
                    background: "#073F39",
                    padding: "48px 16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="18" height="20" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M50 106C32 96 18 80 18 58C18 43 23 30 31 20C33 30 38 38 43 44C47 34 50 22 50 10C50 22 53 34 57 44C62 38 67 30 69 20C77 30 82 43 82 58C82 80 68 96 50 106Z"
                        stroke="#8DBDB5"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38 48C34 54 32 62 34 70C36 78 43 86 50 92C57 86 64 78 66 70C68 62 66 54 62 48"
                        stroke="#8DBDB5"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M50 24V74"
                        stroke="#8DBDB5"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 18,
                        color: "#FFFFFF",
                        fontWeight: 600,
                      }}
                    >
                      Secamente
                    </span>
                  </div>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#FFFFFF" }}>🔔</span>
                  </div>
                </div>

                {/* Menu Card Inside Phone */}
                <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 9 }}>
                  {[
                    { label: "Meu plano", icon: "📋" },
                    { label: "Minha rotina", icon: "🗓" },
                    { label: "Materiais", icon: "📖" },
                    { label: "Suporte", icon: "💬" },
                    { label: "Meu perfil", icon: "👤" },
                    { label: "Configurações", icon: "⚙" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 14,
                        padding: "10px 14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: "rgba(99, 155, 149, 0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                          }}
                        >
                          {item.icon}
                        </div>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#102722",
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <span style={{ fontSize: 12, color: "#639B95" }}>›</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone 2: Meals / Recipes Showcase */}
            <div
              style={{
                width: 220,
                height: 440,
                background: "#0D1413",
                borderRadius: 38,
                padding: 8,
                boxShadow: "0 22px 50px rgba(0, 0, 0, 0.4)",
                border: "3.5px solid #E8E5DF",
                position: "relative",
                overflow: "hidden",
                transform: "rotate(2deg) translateY(-6px)",
                flexShrink: 0,
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 70,
                  height: 18,
                  background: "#000000",
                  borderRadius: 10,
                  zIndex: 20,
                }}
              />

              {/* Screen Content */}
              <div
                style={{
                  background: "#F5F2EA",
                  width: "100%",
                  height: "100%",
                  borderRadius: 30,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: "40px 12px 14px",
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#102722",
                    marginBottom: 10,
                  }}
                >
                  Minhas refeições
                </h3>

                {/* Tabs */}
                <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
                  <span
                    style={{
                      background: "#073F39",
                      color: "#FFFFFF",
                      padding: "3px 10px",
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Hoje
                  </span>
                  <span
                    style={{
                      background: "rgba(16, 39, 34, 0.08)",
                      color: "#102722",
                      padding: "3px 10px",
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Semana
                  </span>
                  <span
                    style={{
                      background: "rgba(16, 39, 34, 0.08)",
                      color: "#102722",
                      padding: "3px 10px",
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Favoritas
                  </span>
                </div>

                {/* Meal Card with Reserved Dish Area */}
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      height: 105,
                      width: "100%",
                      background: "linear-gradient(135deg, #EAE5DB 0%, #DFD9CE 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ textAlign: "center", opacity: 0.3 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#102722" strokeWidth="1.2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v10M7 12h10" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ padding: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#102722",
                          lineHeight: 1.25,
                        }}
                      >
                        Salada de quinoa com frango grelhado
                      </p>
                      <span style={{ color: "#E05A47", fontSize: 12 }}>♥</span>
                    </div>

                    <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
                      <span
                        style={{
                          background: "rgba(99, 155, 149, 0.15)",
                          color: "#073F39",
                          fontSize: 9,
                          padding: "2px 6px",
                          borderRadius: 4,
                          fontWeight: 600,
                        }}
                      >
                        Almoço
                      </span>
                      <span
                        style={{
                          background: "rgba(16, 39, 34, 0.06)",
                          color: "#102722",
                          fontSize: 9,
                          padding: "2px 6px",
                          borderRadius: 4,
                        }}
                      >
                        20 min
                      </span>
                      <span
                        style={{
                          background: "rgba(16, 39, 34, 0.06)",
                          color: "#102722",
                          fontSize: 9,
                          padding: "2px 6px",
                          borderRadius: 4,
                        }}
                      >
                        Fácil
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Caption */}
            <div
              className="program-side-caption"
              style={{
                maxWidth: 130,
                paddingLeft: 8,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.45,
                }}
              >
                Seu acompanhamento sempre com você.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .program-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .program-mockups-container {
            flex-direction: column !important;
          }
          .program-side-caption {
            max-width: 100% !important;
            text-align: center !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
