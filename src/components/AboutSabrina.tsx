"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperienceBadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="15" rx="3" stroke="#102722" strokeWidth="1.3" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#102722" strokeWidth="1.3" />
      <path d="M3 11h18" stroke="#102722" strokeWidth="1.3" />
    </svg>
  );
}

function ClinicBadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 20V10M12 20V4M6 20v-6" stroke="#102722" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function WomenHealthBadgeIcon() {
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

function HumanizedBadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 5 7 5 14C5 17.866 8.134 21 12 21C15.866 21 19 17.866 19 14C19 7 12 2 12 2Z"
        stroke="#102722"
        strokeWidth="1.3"
      />
      <path d="M12 7v10" stroke="#102722" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const credentials = [
  {
    Icon: ExperienceBadgeIcon,
    label: "8 anos de atuação",
  },
  {
    Icon: ClinicBadgeIcon,
    label: "Nutrição Clínica",
  },
  {
    Icon: WomenHealthBadgeIcon,
    label: "Saúde da Mulher",
  },
  {
    Icon: HumanizedBadgeIcon,
    label: "Abordagem real e prática",
  },
];

export default function AboutSabrina() {
  useScrollReveal();

  return (
    <section
      id="sabrina"
      style={{
        background: "#F5F2EA",
        padding: "70px 0 65px",
        position: "relative",
      }}
      aria-labelledby="sabrina-heading"
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="about-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "38% 62%",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left: Reserved Professional Portrait Area */}
          <div
            className="reveal-left"
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              height: 350,
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

          {/* Right: Bio & Credentials */}
          <div className="reveal-right">
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
              SOBRE A NUTRICIONISTA
            </p>

            <h2
              id="sabrina-heading"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(34px, 3.8vw, 48px)",
                fontWeight: 400,
                color: "#102722",
                lineHeight: 1.05,
                marginBottom: 6,
              }}
            >
              Sabrina Ketolly
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "#639B95",
                letterSpacing: "0.06em",
                marginBottom: 20,
              }}
            >
              Nutricionista &nbsp;|&nbsp; CRN 13076
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.75,
                color: "#102722",
                opacity: 0.76,
                maxWidth: 480,
                marginBottom: 30,
              }}
            >
              Sou nutricionista e acredito em uma nutrição que cabe na vida real. No Secamente, meu
              propósito é ajudar mulheres a construírem uma relação mais leve com a alimentação, com
              equilíbrio, praticidade e respeito à sua individualidade.
            </p>

            {/* 4 Credentials in Row with Hairline Dividers */}
            <div
              className="about-credentials-row"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                borderTop: "1px solid rgba(16, 39, 34, 0.1)",
                paddingTop: 22,
              }}
            >
              {credentials.map((cred, i) => (
                <div
                  key={cred.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    borderLeft: i !== 0 ? "1px solid rgba(16, 39, 34, 0.1)" : "none",
                    paddingLeft: i !== 0 ? 12 : 0,
                  }}
                >
                  <div style={{ flexShrink: 0, opacity: 0.85 }}>
                    <cred.Icon />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#102722",
                      lineHeight: 1.3,
                    }}
                  >
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .about-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-credentials-row {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          .about-credentials-row > div {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
