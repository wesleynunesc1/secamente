"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Entre",
    description: "Faça sua inscrição e tenha acesso imediato ao programa no seu celular.",
    image: "/images/step-01.jpg",
    alt: "Acesso imediato ao Secamente pelo celular",
  },
  {
    number: "02",
    title: "Aplique",
    description: "Siga as orientações, materiais e sugestões no seu ritmo, de forma prática.",
    image: "/images/step-02.jpg",
    alt: "Alimentação saudável no seu ritmo",
  },
  {
    number: "03",
    title: "Tenha suporte",
    description: "Conte com acompanhamento próximo sempre que precisar.",
    image: "/images/sabrina-tablet-real.png",
    alt: "Acompanhamento e suporte nutricional com Sabrina Ketolly",
  },
];

export default function HowItWorks() {
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="como-funciona"
      style={{
        background: "#F5F2EA",
        padding: "70px 0 65px",
        position: "relative",
      }}
      aria-labelledby="how-it-works-heading"
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="how-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "32% 68%",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Left Column: Title & CTA */}
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
              PASSO A PASSO
            </p>

            <h2
              id="how-it-works-heading"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 50px)",
                fontWeight: 400,
                color: "#102722",
                lineHeight: 1.08,
                marginBottom: 18,
                letterSpacing: "-0.01em",
              }}
            >
              Como
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#102722",
                }}
              >
                funciona?
              </em>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: "#102722",
                opacity: 0.75,
                maxWidth: 280,
                marginBottom: 28,
              }}
            >
              Um caminho simples e prático para trazer mais equilíbrio para a sua rotina.
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
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#073F39";
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

          {/* Right Column: 3 Step Cards Side by Side */}
          <div
            className="how-steps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                {/* Photo container (Reserved photo area) */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    height: 160,
                    width: "100%",
                    background: "linear-gradient(135deg, #ECE7DB 0%, #E2DDD0 100%)",
                    border: "1px solid rgba(16, 39, 34, 0.08)",
                    boxShadow: "0 6px 18px rgba(16, 39, 34, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ textAlign: "center", opacity: 0.25 }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#102722" strokeWidth="1.2">
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>

                {/* Step Number */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 40,
                    fontWeight: 300,
                    color: "#102722",
                    lineHeight: 1,
                    marginTop: 14,
                    display: "block",
                  }}
                >
                  {step.number}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 21,
                    fontWeight: 500,
                    color: "#102722",
                    marginTop: 4,
                    marginBottom: 6,
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#102722",
                    opacity: 0.75,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .how-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .how-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
