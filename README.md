# Português PMMA e BMMA 2026

Landing page de vendas do e-book de Português do **Prof. Maurílio Alencar**, voltado
aos concursos da **Polícia Militar (PMMA)** e do **Corpo de Bombeiros Militar (BMMA)**
do Maranhão — edital 2026.

Single-page application estática, com teoria completa, questões comentadas, prévia do
material, seção do professor, depoimentos, oferta e FAQ.

## Stack

- **React 19** + **TypeScript**
- **Vite** (build/dev) — SPA estática
- **TanStack Router** (roteamento) + **TanStack Query**
- **Tailwind CSS v4** + componentes **shadcn/ui** (Radix)
- **Framer Motion** (animações)
- **lucide-react** (ícones)

## Como rodar

Pré-requisito: **Node.js 20+**.

```bash
npm install       # instala as dependências
npm run dev       # ambiente de desenvolvimento em http://localhost:8080
npm run build     # gera o site estático em dist/
npm run preview   # serve o build de produção localmente
npm run lint      # ESLint
npm run format    # Prettier
```

## Estrutura

```
index.html                 # HTML raiz (meta tags, fontes, JSON-LD)
src/
  main.tsx                 # entry — monta o RouterProvider
  router.tsx               # configuração do TanStack Router
  routes/
    __root.tsx             # layout raiz + telas 404/erro
    index.tsx              # composição da landing page
  components/
    landing/               # seções da página (Hero, Benefits, Offer, ...)
    ui/                    # componentes shadcn/ui
  lib/landing-data.ts      # textos e dados das seções
  assets/                  # imagens (importadas e otimizadas pelo Vite)
  styles.css               # tema, tokens e utilitários Tailwind
public/                    # arquivos estáticos (favicon, robots, sitemap, og-image)
```

## Deploy

O build gera um site **100% estático** em `dist/`, publicável em qualquer host.

- **Vercel:** detecta o Vite automaticamente. O `vercel.json` define o build
  (`npm run build` → `dist`) e o *fallback* de SPA (todas as rotas → `index.html`),
  evitando 404 em rotas do cliente.
- **Netlify:** configuração equivalente em `netlify.toml` + `public/_redirects`.

Com o repositório conectado à Vercel, cada `git push` na branch `main` publica
automaticamente.

## Personalização rápida

- **Link de checkout:** `KIRVANO_CHECKOUT_URL` em `src/components/landing/Offer.tsx`.
- **WhatsApp:** número nos links `wa.me/...` (Offer, FloatingCTAs).
- **Textos/preço/FAQ:** `src/lib/landing-data.ts` e os componentes em `src/components/landing/`.
