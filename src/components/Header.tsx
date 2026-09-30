"use client";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O programa", href: "#programa" },
  { label: "Sabrina", href: "#sabrina" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function SecamenteLogo({ light = false }: { light?: boolean }) {
  const strokeColor = light ? "#FFFFFF" : "#073F39";
  const leafColor = light ? "#FFFFFF" : "#073F39";
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      {/* Authentic Secamente Tulip / Leaf Contour Mark */}
      <svg width="28" height="32" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer petal curves forming the tulip flower silhouette */}
        <path
          d="M50 106C32 96 18 80 18 58C18 43 23 30 31 20C33 30 38 38 43 44C47 34 50 22 50 10C50 22 53 34 57 44C62 38 67 30 69 20C77 30 82 43 82 58C82 80 68 96 50 106Z"
          stroke={leafColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner fluid 'S' ribbon looped through center */}
        <path
          d="M38 48C34 54 32 62 34 70C36 78 43 86 50 92C57 86 64 78 66 70C68 62 66 54 62 48"
          stroke={leafColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M50 24V74"
          stroke={leafColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 25,
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: strokeColor,
          lineHeight: 1,
        }}
      >
        Secamente
      </span>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "24px 0",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
          aria-label="Ir para o início"
        >
          <SecamenteLogo light />
        </button>

        {/* Center: Capsule Pill Nav (Desktop) */}
        <nav
          className="header-nav-desktop"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: 999,
            padding: "4px 6px",
            display: "flex",
            alignItems: "center",
            gap: 2,
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              style={{
                background: "none",
                border: "none",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 500,
                color: "#182E29",
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#073F39";
                el.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "none";
                el.style.color = "#182E29";
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: CTA Button (Desktop) */}
        <button
          onClick={() => scrollTo("#cta-final")}
          className="header-cta-desktop"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#073F39",
            color: "#FFFFFF",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            padding: "9px 20px",
            borderRadius: 999,
            fontSize: 12.5,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.16)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#0c544d";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(7, 63, 57, 0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#073F39";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.16)";
          }}
        >
          Quero começar
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="header-hamburger"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#FFFFFF",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform:
                  i === 0 && menuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 && menuOpen
                    ? "scale(0)"
                    : i === 2 && menuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? 380 : 0,
          transition: "max-height 0.35s ease",
          background: "rgba(7, 63, 57, 0.98)",
          borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "12px 28px 24px" }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "14px 0",
                textAlign: "left",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#cta-final")}
            style={{
              marginTop: 16,
              background: "#639B95",
              color: "#FFFFFF",
              border: "none",
              padding: "13px 24px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Quero começar →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .header-nav-desktop { display: none !important; }
          .header-cta-desktop { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
