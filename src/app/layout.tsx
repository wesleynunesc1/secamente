import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secamente | Nutrição que cabe na sua vida",
  description: "Acompanhamento nutricional prático, próximo e pensado para a rotina real da mulher. Com Sabrina Ketolly, nutricionista CRN 13076.",
  keywords: ["nutrição", "nutricionista", "saúde da mulher", "alimentação saudável", "Sabrina Ketolly", "Secamente"],
  authors: [{ name: "Sabrina Ketolly" }],
  openGraph: {
    title: "Secamente | Nutrição que cabe na sua vida",
    description: "Acompanhamento nutricional prático, próximo e pensado para a rotina real da mulher.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
