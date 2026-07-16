# Yusuf Hasan — Portfolio

Minimalist portfolio built with **Next.js 14, Tailwind CSS, and Framer Motion**.
Black-and-white gallery aesthetic, oversized editorial type (Cormorant Garamond + Archivo), and
the HYLO Rev 1 localization board — real hardware — as the hero image.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

Pushes to `main` build a static export and publish it to GitHub Pages via
`.github/workflows/deploy.yml` (Pages source must be set to **GitHub Actions**
in the repository settings). The workflow sets `NEXT_PUBLIC_BASE_PATH=/portfolio`
so assets resolve under `yusufzeaulhasan.github.io/portfolio`.

## Content

Project and experience copy is sourced from the resume. The downloadable PDF
lives at `public/assets/Yusuf_Hasan_Resume.pdf`.
