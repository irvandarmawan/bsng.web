# 02 — Arsitektur

## Stack, dan kenapa

| Pilihan | Alasan | Alternatif yang ditolak |
| :--- | :--- | :--- |
| **Astro 7**, output statis | Halaman ini 95% teks dan gambar. Astro mengirim HTML jadi, nol JS default. Build → `dist/` bisa diunggah ke hosting apa pun. | Next.js (butuh runtime/konfigurasi lebih berat untuk satu halaman), WordPress (permukaan serang + plugin) |
| **CSS tulisan tangan** + custom properties | Desainnya brutalist: 4 warna, 2 font, sudut 0. Utility framework justru menambah noise dan membuat token brand mudah dilanggar. | Tailwind (kelas menggantikan token, sulit menegakkan "merah maksimal 5%") |
| **Tanpa framework UI** | Tidak ada state. Tidak ada yang perlu di-hydrate. | React/Vue/Svelte |
| **Font self-host** | Satu request lebih sedikit, tanpa pihak ketiga, tanpa FOUT dari CDN. | Google Fonts CDN |

Keputusan ini dikunci. Kalau ada yang mau mengganti stack, itu keputusan pemilik brand, bukan keputusan agen.

## Base path — bagian paling mudah salah

Dua wilayah di satu build:

- **Root `/`** → situs brand (`src/pages/index.astro`, `manifesto.astro`), aset di `public/` (root). Halaman produk di `/chapter01/`.
- **Sub-path `/dashboard/`** → dashboard internal (`src/pages/dashboard/index.astro`). Tidak diindeks.

Konsekuensi:
- `astro.config.mjs`: **tanpa** `base` (sengaja kosong) + `trailingSlash: 'always'`.
- Prefiks brand ada di `src/config/base.ts`: `export const base = '/';` (bisa dikosongkan kalau nanti pindah sub-path lagi).
- **Semua** `href` internal dan `src` aset situs brand memakai `base`. Jangan pakai `import.meta.env.BASE_URL`.

```astro
---
import { base } from '../config/base'; // '/'
---
<a href={`${base}chapter01/`}>Produk</a>
<img src={`${base}logo/bsng-logo-primary.svg`} alt="BSNG." width="420" height="179" />
```

Build menghasilkan `dist/`:

```text
dist/
├─ index.html                 ← halaman utama brand (root)
├─ chapter01/index.html       ← halaman produk
├─ manifesto/index.html
├─ 404.html                   ← 404 domain
├─ dashboard/index.html       ← dashboard internal
├─ logo/…
├─ fonts/…
├─ images/…
├─ og.jpg
├─ robots.txt
├─ sitemap.xml
└─ _astro/…                   (CSS ter-hash)
```

## Routing

| URL produksi | File | Isi |
| :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | Chapter 01: hero, objek, cara kerja, CTA |
| `/chapter01/` | `src/pages/chapter01/index.astro` | Halaman produk: foto, spesifikasi, tabel ukuran, perawatan, FAQ |
| `/manifesto/` | `src/pages/manifesto.astro` | Pernyataan merek panjang |
| `/dashboard/` | `src/pages/dashboard/index.astro` | Dashboard internal brand: identitas, palet, tipografi, logo, produk aktif, dokumen. `noindex, nofollow` |
| `/404` | `src/pages/404.astro` | Halaman tidak ditemukan (domain root) |

Situs brand di root; dashboard internal di `/dashboard/`. Prefiks untuk link dan aset brand ada di `src/config/base.ts`, **bukan** `base` di `astro.config.mjs` (sengaja kosong).

Fase 2 (belum dibangun): `/jurnal/` dan `/jurnal/[slug]/` dari content collection Markdown.

## Data bisnis

Satu file: **`src/config/site.ts`**. Semua angka dan URL di sini. Komponen mengimpor, tidak menulis ulang.

```ts
export const SITE = {
  name: 'BSNG.',
  tagline: 'MAXIMUM NOISE.',
  price: 159000,
  priceLabel: 'Rp159.000',
  chapter: '01',
  shopeeProductUrl: '',   // TODO: isi dari Shopee Seller Centre
  shopeeShopUrl: '',
  whatsapp: '',           // TODO: format 62xxxxxxxxxx
  social: {
    instagram: 'https://instagram.com/bsng.co',
    tiktok: 'https://tiktok.com/@bsng.co',
    x: 'https://x.com/bsng.co',
  },
} as const;
```

Kalau `shopeeProductUrl` kosong, tombol beli **tidak dirender** — diganti teks "Segera dibuka." Jangan pernah merender tombol yang mengarah ke string kosong.

## Komponen

| Komponen | Tanggung jawab | Props |
| :--- | :--- | :--- |
| `Wordmark.astro` | Logo SVG + titik. Satu-satunya cara menampilkan logo. | `variant` (`primary`/`inverse`/`mono-black`/`mono-white`), `height` |
| `Nav.astro` | Header: logo kecil, 3 link, tombol Shopee | — |
| `Footer.astro` | Sosial, hak cipta, tautan kecil | — |
| `Button.astro` | Satu gaya tombol. Merah hanya untuk varian `primary`. | `href`, `variant`, `external` |
| `SpecList.astro` | Daftar spesifikasi dua kolom (label mono / nilai) | `items` |
| `PhotoSlot.astro` | Slot foto bertanda jelas saat foto belum ada | `ratio`, `caption` |
| `SizeTable.astro` | Tabel ukuran S–XXL, bisa digulir horizontal di layar sempit | `caption` |
| `Section.astro` | Pembungkus section: padding, garis atas, label nomor | `index`, `label` |

Aturan: komponen tidak menyimpan copy. Copy dioper dari halaman atau `docs/03-konten.md`.

## CSS

Dua file, urutan impor penting:

1. `src/styles/tokens.css` — `:root` variabel: warna, font, skala tipe, spasi, lebar konten.
2. `src/styles/global.css` — reset, `@font-face`, elemen dasar (`body`, `h1..h3`, `a`, `p`), utilitas minimal.

Tidak ada CSS-in-JS. Tidak ada `<style>` global di komponen kecuali untuk hal yang benar-benar lokal (≤ 20 baris).

## JavaScript klien

Default: **nol**. Yang diizinkan tanpa diskusi:
- atribut `loading="lazy"` (bukan JS)
- `rel="noopener"` pada link eksternal

Yang butuh persetujuan dulu: menu mobile berbasis JS (alternatif: CSS-only `:target` atau `<details>`), analitik, pelacakan klik keluar.

## Aksesibilitas

- Kontras minimum AA (sudah dipetakan di `docs/01-brand.md`).
- Semua gambar punya `alt` bermakna; gambar dekoratif `alt=""`.
- Fokus keyboard terlihat: `outline: 2px solid var(--red); outline-offset: 3px`.
- Tidak ada teks di dalam gambar (kecuali logo).
- `lang="id"` di `<html>`.
