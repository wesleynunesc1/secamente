"use client";
import { SecamenteLogo } from "./Header";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O programa", href: "#programa" },
  { label: "Sabrina", href: "#sabrina" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="duvidas"
      style={{
        background: "#F5F2EA",
        padding: "48px 0 32px",
        borderTop: "1px solid rgba(16, 39, 34, 0.08)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        {/* Main Row: Logo, Nav Links, Social, and Brand Tagline */}
        <div
          className="footer-main-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(16, 39, 34, 0.08)",
          }}
        >
          {/* Left: Brand Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            aria-label="Ir para o início"
          >
            <SecamenteLogo light={false} />
          </button>

          {/* Center: Inline Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#102722",
                  opacity: 0.8,
                  fontFamily: "'Inter', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  (e.currentTarget as HTMLButtonElement).style.color = "#073F39";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
                  (e.currentTarget as HTMLButtonElement).style.color = "#102722";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Area: Social Icons + Vertical Divider + Brand Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* Social Icons: Instagram & YouTube */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(16, 39, 34, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#102722",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#073F39";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "none";
                  (e.currentTarget as HTMLElement).style.color = "#102722";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(16, 39, 34, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#102722",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#073F39";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "none";
                  (e.currentTarget as HTMLElement).style.color = "#102722";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>

            {/* Hairline Divider */}
            <div
              style={{
                width: 1,
                height: 36,
                background: "rgba(16, 39, 34, 0.15)",
              }}
            />

            {/* Tagline */}
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 16,
                  color: "#102722",
                  lineHeight: 1.25,
                }}
              >
                Nutrição que cabe
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  na sua vida.
                </em>
              </p>
            </div>
          </div>
        </div>

        {/* Lower Row: Legal, License, and Copyright */}
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#102722",
              opacity: 0.6,
            }}
          >
            Sabrina Ketolly &nbsp;—&nbsp; Nutricionista &nbsp;—&nbsp; CRN 13076 &nbsp;|&nbsp; ©{" "}
            2026 Secamente. Todos os direitos reservados.
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            {["Política de Privacidade", "Termos de Uso"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "#102722",
                  opacity: 0.6,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.6";
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
