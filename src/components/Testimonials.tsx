"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "O Secamente me ajudou a organizar melhor a minha rotina e melhorou muito a minha relação com a comida. É prático e real.",
    name: "Mariana S.",
    avatar: "/images/avatar-mariana.jpg",
  },
  {
    quote:
      "Adorei os materiais e o suporte da Sabrina. Me sinto mais confiante e consigo manter uma rotina que funciona para mim.",
    name: "Camila R.",
    avatar: "/images/avatar-camila.jpg",
  },
  {
    quote:
      "O acompanhamento me deu mais clareza e equilíbrio. Finalmente me sinto bem com minhas escolhas, sem culpa.",
    name: "Juliana M.",
    avatar: "/images/avatar-juliana.jpg",
  },
];

export default function Testimonials() {
  useScrollReveal();
  const [scrollIndex, setScrollIndex] = useState(0);

  const prev = () => setScrollIndex((i) => (i > 0 ? i - 1 : testimonials.length - 1));
  const next = () => setScrollIndex((i) => (i < testimonials.length - 1 ? i + 1 : 0));

  return (
    <section
      id="depoimentos"
      style={{
        background: "#F5F2EA",
        padding: "70px 0 65px",
        position: "relative",
      }}
      aria-labelledby="testimonials-heading"
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="testimonials-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "30% 70%",
            gap: 36,
            alignItems: "start",
          }}
        >
          {/* Left Column: Title & Navigation */}
          <div className="reveal-left">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#639B95",
                marginBottom: 14,
              }}
            >
              HISTÓRIAS REAIS
            </p>

            <h2
              id="testimonials-heading"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(34px, 3.8vw, 48px)",
                fontWeight: 400,
                color: "#102722",
                lineHeight: 1.08,
                marginBottom: 14,
                letterSpacing: "-0.01em",
              }}
            >
              O que elas dizem
              <br />
              sobre o{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#102722",
                }}
              >
                Secamente
              </em>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#102722",
                opacity: 0.72,
                maxWidth: 260,
                marginBottom: 24,
              }}
            >
              Mais leveza, organização e confiança na rotina alimentar.
            </p>

            {/* Nav Arrow Buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={prev}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid rgba(16, 39, 34, 0.2)",
                  background: "#FFFFFF",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#073F39";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#073F39";
                  (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(16, 39, 34, 0.2)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#102722";
                }}
                aria-label="Depoimento anterior"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 12L6 8l4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid rgba(16, 39, 34, 0.2)",
                  background: "#FFFFFF",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s ease",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#073F39";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#073F39";
                  (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(16, 39, 34, 0.2)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#102722";
                }}
                aria-label="Próximo depoimento"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Real Quote Cards Side by Side */}
          <div
            className="testimonials-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className="reveal"
                style={{
                  background: "#FFFFFF",
                  borderRadius: 18,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 18px rgba(16, 39, 34, 0.05)",
                  border: "1px solid rgba(16, 39, 34, 0.06)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div>
                  {/* Quote Mark */}
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 34,
                      lineHeight: 1,
                      color: "#639B95",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    &ldquo;&ldquo;
                  </span>

                  {/* Quote Text */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: "#102722",
                      opacity: 0.82,
                      marginBottom: 20,
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ECE7DB 0%, #DFD9CE 100%)",
                      border: "1px solid rgba(16, 39, 34, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#102722" strokeWidth="1.3" opacity="0.45">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#102722",
                        marginBottom: 3,
                      }}
                    >
                      {item.name}
                    </p>
                    {/* 5 Stars */}
                    <div style={{ display: "flex", gap: 2 }}>
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} width="11" height="11" viewBox="0 0 12 12" fill="#E5A83B">
                          <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5L6 1z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .testimonials-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .testimonials-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
