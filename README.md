# BSNG. — Chapter 01

Situs statis untuk **The Core Anthem**. Astro 7, CSS tulisan tangan, nol JS klien.
Situs brand di root `https://bsng.pediaversal.my.id/`, dashboard internal di `https://bsng.pediaversal.my.id/dashboard/`.

## Mulai

```bash
npm install
npm run dev      # http://localhost:4321/ (situs brand) · /dashboard/ (dashboard)
npm run build    # hasil di dist/
npm run preview  # port 4322, URL sama seperti dev
```

## Isi folder

```text
web/
├─ AGENTS.md              instruksi untuk agen (opencode) — baca dulu
├─ docs/                  sumber kebenaran: brief, brand, konten, desain, teknis
├─ public/
│  ├─ fonts/ images/ logo/  aset situs brand: font woff2, foto, logo SVG
│  ├─ favicon.svg, og.jpg  aset situs brand
│  ├─ robots.txt          aturan crawler domain
│  └─ sitemap.xml         peta URL situs brand
├─ src/
│  ├─ config/site.ts      harga, URL Shopee, kontak, sosial — satu tempat
│  ├─ config/base.ts      prefiks situs brand ('/')
│  ├─ layouts/Base.astro  <head>, nav, footer
│  ├─ components/         Wordmark, Nav, Footer, Button, Section, SpecList, SizeTable, PhotoSlot
│  ├─ pages/index.astro   Chapter 01 (situs brand, root)
│  ├─ pages/produk.astro, manifesto.astro  halaman brand
│  ├─ pages/dashboard/    dashboard internal (/dashboard/, noindex)
│  ├─ pages/404.astro     404 domain
│  └─ styles/             tokens.css, global.css
└─ dist/                  hasil build (jangan diedit)
```

## Dokumen

| File | Isi |
| :--- | :--- |
| `docs/00-brief.md` | kenapa situs ini ada, untuk siapa, tugas yang harus selesai |
| `docs/01-brand.md` | warna, tipografi, aturan logo, tone |
| `docs/02-arsitektur.md` | stack, base path, komponen |
| `docs/03-konten.md` | **semua copy final** — satu-satunya sumber teks |
| `docs/04-desain.md` | grid, skala tipe, aturan visual |
| `docs/05-teknis.md` | performa, SEO, aksesibilitas |
| `docs/06-rencana-kerja.md` | status + sisa tugas |
| `docs/07-deploy.md` | deploy Cloudflare Pages, header, verifikasi |
| `docs/08-aset.md` | daftar aset, foto yang masih kurang |

## Status

Halaman selesai dan build lulus. Data bisnis (`src/config/site.ts`) dan empat foto
produk sudah terpasang — halaman `/produk/` tanpa slot kosong.
Sisa rilis: audit akhir & unggah, lihat `docs/06-rencana-kerja.md` §Fase 3 (T8).
