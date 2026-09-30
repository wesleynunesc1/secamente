"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function NutritionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#102722" strokeWidth="1.3" />
      <path d="M12 6v6l4 2" stroke="#102722" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MaterialsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="#102722" strokeWidth="1.3" />
      <path d="M9 7h6M9 11h6M9 15h4" stroke="#102722" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SupportBenefitIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
        stroke="#102722"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function PracticalBenefitIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="#102722" strokeWidth="1.3" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="#102722" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1" fill="#102722" />
      <circle cx="12" cy="15" r="1" fill="#102722" />
      <circle cx="16" cy="15" r="1" fill="#102722" />
    </svg>
  );
}

function PossibleRoutineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
        stroke="#102722"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function WomenHealthIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 6 8 6 15C6 18.5 8.7 21.5 12 22C15.3 21.5 18 18.5 18 15C18 8 12 2 12 2Z"
        stroke="#102722"
        strokeWidth="1.3"
      />
      <path d="M12 7c-2 3-3 6-3 8M12 7c2 3 3 6 3 8" stroke="#102722" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const benefits = [
  {
    Icon: NutritionIcon,
    title: "Orientação nutricional",
    desc: "Estratégias baseadas em ciência e na sua realidade.",
  },
  {
    Icon: MaterialsIcon,
    title: "Materiais práticos",
    desc: "Guias, listas e sugestões que facilitam o dia a dia.",
  },
  {
    Icon: SupportBenefitIcon,
    title: "Suporte próximo",
    desc: "Acompanhamento para tirar dúvidas e te manter no caminho.",
  },
  {
    Icon: PracticalBenefitIcon,
    title: "Praticidade para sua rotina",
    desc: "Tudo no seu celular, sem complicação.",
  },
  {
    Icon: PossibleRoutineIcon,
    title: "Rotina possível",
    desc: "Estratégias que se encaixam na sua realidade.",
  },
  {
    Icon: WomenHealthIcon,
    title: "Saúde da mulher",
    desc: "Um olhar completo para as suas necessidades em cada fase da vida.",
  },
];

export default function Benefits() {
  useScrollReveal();

  return (
    <section
      id="beneficios"
      style={{
        background: "#F5F2EA",
        padding: "70px 0 65px",
        position: "relative",
      }}
      aria-labelledby="benefits-heading"
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="benefits-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "40% 60%",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left: Reserved Food Photography Area */}
          <div
            className="reveal-left"
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              height: 360,
              background: "linear-gradient(135deg, #ECE7DB 0%, #E2DDD0 100%)",
              border: "1px solid rgba(16, 39, 34, 0.08)",
              boxShadow: "0 8px 24px rgba(16, 39, 34, 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", opacity: 0.25 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#102722" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          </div>

          {/* Right: Section Title & 3x2 Grid */}
          <div className="reveal-right">
            <h2
              id="benefits-heading"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(34px, 3.8vw, 48px)",
                fontWeight: 400,
                color: "#102722",
                lineHeight: 1.08,
                marginBottom: 28,
                letterSpacing: "-0.01em",
              }}
            >
              O que você encontra
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  color: "#639B95",
                }}
              >
                no Secamente?
              </em>
            </h2>

            {/* 3x2 Items Grid with light dividers */}
            <div
              className="benefits-items-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "22px 18px",
              }}
            >
              {benefits.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    borderLeft: i % 3 !== 0 ? "1px solid rgba(16, 39, 34, 0.1)" : "none",
                    paddingLeft: i % 3 !== 0 ? 16 : 0,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(99, 155, 149, 0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#102722",
                        marginBottom: 4,
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        lineHeight: 1.5,
                        color: "#102722",
                        opacity: 0.72,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .benefits-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .benefits-items-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .benefits-items-grid > div {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 640px) {
          .benefits-items-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
