# 🌿 Secamente — Landing Page

Landing page premium para a nutricionista **Sabrina Ketolly**, construída com **Next.js 16 + React 19 + Tailwind CSS v4**.

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Design system, variáveis CSS, animações
│   ├── layout.tsx       # Root layout com SEO e Google Fonts
│   └── page.tsx         # Página principal
├── components/
│   ├── Header.tsx       # Cabeçalho flutuante com menu em cápsula
│   ├── Hero.tsx         # Seção hero com parallax e glass cards
│   ├── ProblemSection.tsx  # "E quem cuida de você?"
│   ├── ProgramSection.tsx  # Apresentação do Secamente + mockups
│   ├── HowItWorks.tsx   # Como funciona — 3 passos
│   ├── Benefits.tsx     # O que você encontra no Secamente
│   ├── Manifesto.tsx    # Faixa escura "É sobre conseguir continuar"
│   ├── AboutSabrina.tsx # Sobre a nutricionista
│   ├── Testimonials.tsx # Depoimentos (slider)
│   ├── FinalCTA.tsx     # CTA final
│   └── Footer.tsx       # Rodapé
└── hooks/
    └── useScrollReveal.ts  # Hook de animação no scroll
```

---

## 🖼️ Fotos — AÇÃO NECESSÁRIA

As seguintes imagens precisam ser substituídas pelas **fotos reais da Sabrina**:

| Arquivo | Seção | Orientação |
|---------|-------|------------|
| `public/images/sabrina-hero.jpg` | Hero | Foto vertical, Sabrina à direita, espaço à esquerda para texto. Crop similar à referência. |
| `public/images/sabrina-tablet.jpg` | "E quem cuida de você?" | Sabrina trabalhando no tablet, horizontal |
| `public/images/sabrina-about.jpg` | Sobre Sabrina | Foto formal/profissional, vertical |

**Instruções:**
1. Coloque as fotos reais na pasta `public/images/`
2. Use exatamente os nomes de arquivo listados acima
3. Formatos aceitos: `.jpg`, `.webp` (recomendado para performance)
4. Resolução mínima recomendada: 1200×800px

---

## 💬 Depoimentos — AÇÃO NECESSÁRIA

No arquivo [`src/components/Testimonials.tsx`](src/components/Testimonials.tsx), localize o array `testimonials` e substitua os placeholders pelos depoimentos reais quando disponíveis.

---

## 🚀 Como executar

```bash
# Instalar dependências (já instaladas)
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse: **http://localhost:3000**

---

## 🎨 Paleta de Cores

| Nome | Hex |
|------|-----|
| Verde escuro | `#073F39` |
| Verde Secamente | `#639B95` |
| Verde suave | `#8DBDB5` |
| Off-white | `#F5F2EA` |
| Texto | `#102722` |

---

## 📱 Links de Contato — AÇÃO NECESSÁRIA

No arquivo [`src/components/Footer.tsx`](src/components/Footer.tsx), atualize os links:
- Instagram: `href="https://instagram.com/SEU_PERFIL"`
- WhatsApp: `href="https://wa.me/SEUNUMERO"`

---

## 🔗 CTAs — AÇÃO NECESSÁRIA

Substitua os `href="#"` nos botões de CTA pelo link real de inscrição do programa.
