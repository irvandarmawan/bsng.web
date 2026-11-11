# AGENTS.md — BSNG. Website

Instruksi proyek untuk agen coding. Baca ini dulu, setiap sesi.

## Apa ini

Situs statis satu halaman untuk **BSNG.**, brand streetwear Indonesia ("Minimalis Rebel").
Produk tunggal: **The Core Anthem**, Rp159.000, made to order, transaksi di Shopee.

Situs **bukan toko**. Tidak ada cart, tidak ada checkout, tidak ada akun.
Tugasnya: membangun keyakinan → mengantar ke Shopee.

Stack: **Astro 7** (static output), CSS tulisan tangan, nol framework UI, nol JS klien kecuali benar-benar perlu.

## Perintah

```bash
npm install
npm run dev      # http://localhost:4321/ (situs brand) dan /dashboard/ (dashboard)
npm run build    # WAJIB lulus sebelum tugas dianggap selesai
npm run preview  # port 4322, URL sama seperti dev
```

## Aturan yang tidak boleh dilanggar

**Copy**
- Seluruh teks yang dilihat pengunjung berasal dari `docs/03-konten.md`. Jangan mengarang copy baru, jangan mengubah nada, jangan menambah slogan.
- Kalau butuh teks yang belum ada di sana, tulis `TODO(copy): ...` di kode dan laporkan. Jangan diisi sendiri.
- Bahasa Indonesia. Formal-dingin, bukan gaul. Tanpa emoji, tanpa tanda seru ganda.

**Visual**
- Palet hanya 4 warna dari `docs/01-brand.md`. Jangan menambah warna, gradient, atau opacity baru di luar token.
- **Rebel Red `#E60000` maksimal 5% area layar.** Hanya untuk titik logo, garis aksen, dan satu CTA utama. Jangan untuk body text (kontras 4.1:1, tidak lolos WCAG AA untuk teks kecil).
- Sudut **selalu 0px**. Tidak ada `border-radius` di mana pun, termasuk tombol dan input.
- Tidak ada drop shadow, blur, atau glassmorphism. Pemisah = garis 1px.
- Display: **Anton**. Detail/label: **JetBrains Mono**. Jangan pakai font lain, jangan pakai Google Fonts CDN — font sudah self-host di `public/fonts/`.
- Logo selalu dari `public/logo/*.svg`. Jangan mengetik "BSNG." sebagai teks lalu menganggapnya logo; pakai komponen `<Wordmark />`.

**Teknis**
- Situs brand hidup di root `/` (`src/pages/index.astro`, `chapter01/index.astro`, `manifesto.astro`), dan semua asetnya di `public/` (root). Dashboard internal di `/dashboard/`.
- Link internal & aset situs brand **wajib** memakai prefiks `base` dari `src/config/base.ts` (`const base = '/'`). Jangan pakai `import.meta.env.BASE_URL` — `base` di `astro.config.mjs` sengaja kosong. Link yang lupa prefiks akan 404 di produksi.
- Halaman baru untuk situs brand masuk ke `src/pages/` (root). Dashboard internal di `src/pages/dashboard/`.
- Jangan menambah dependency tanpa bertanya. Yang sudah ada hanya `astro`.
- Deploy: Cloudflare Pages, output `dist`, Node 22 (`.nvmrc`). `public/_headers` dan `public/_redirects` dibaca Cloudflare sebagai konfigurasi — jangan dihapus atau diganti nama. `wrangler.toml` menunjuk `pages_build_output_dir = "dist"`.
- Jangan pakai `<img>` tanpa `width`, `height`, dan `alt`.
- Satu `<h1>` per halaman. Heading berurutan, jangan lompat level.
- Jangan membuat halaman yang belum ada di `docs/02-arsitektur.md`.

## Peta file

```text
src/config/site.ts        ← satu-satunya tempat URL & data bisnis (Shopee, kontak, sosial)
src/config/base.ts        ← prefiks situs brand ('/')
src/styles/tokens.css     ← variabel warna, tipe, spasi. Sumber kebenaran desain
src/styles/global.css     ← reset + elemen dasar
src/layouts/Base.astro    ← <head>, SEO meta, font preload, slot
src/components/           ← Wordmark, Nav, Footer, PhotoSlot, SpecList, Button
src/pages/index.astro              ← halaman utama brand (root, hero Chapter 01)
src/pages/chapter01/index.astro    ← halaman produk: spesifikasi, ukuran, perawatan, FAQ
src/pages/manifesto.astro          ← pernyataan merek
src/pages/dashboard/index.astro    ← dashboard internal (/dashboard/, noindex)
src/pages/404.astro            ← 404 domain (root)
```

## Dokumen

| Butuh | Baca |
| :--- | :--- |
| Tujuan & batasan | `docs/00-brief.md` |
| Warna, font, nada bicara | `docs/01-brand.md` (dimuat otomatis) |
| Routing, base path, struktur | `docs/02-arsitektur.md` |
| Teks final | `docs/03-konten.md` (dimuat otomatis) |
| Grid, skala, komponen | `docs/04-desain.md` |
| SEO, performa, a11y | `docs/05-teknis.md` |
| Urutan tugas | `docs/06-rencana-kerja.md` |
| Rilis | `docs/07-deploy.md` |
| Foto & aset hilang | `docs/08-aset.md` |

Kerjakan **satu tugas** dari `docs/06-rencana-kerja.md` per sesi. Jangan lompat fase.

## Definisi selesai

Sebuah tugas selesai kalau:

1. `npm run build` lulus tanpa error dan tanpa warning baru.
2. Halaman bisa dibuka di `npm run dev` pada `/...` tanpa 404 aset.
3. Tidak ada `TODO(copy)` yang tertinggal tanpa dilaporkan.
4. Tidak ada warna, font, atau radius di luar token.
5. Copy sesuai `docs/03-konten.md`, dicek baris per baris.
6. Laporan akhir menyebut: file yang diubah, hasil build, dan yang belum beres.

## Jebakan yang sudah diketahui

- **`compressHTML: false`** di `astro.config.mjs` itu disengaja. Astro 7 memakai aturan JSX untuk whitespace dan bisa menempelkan kata-kata inline. Jangan diubah jadi `true`.
- **Compiler Rust Astro 7 ketat**: semua tag non-void wajib ditutup. `<p>` tanpa `</p>` langsung gagal build.
- **`BASE_URL` berakhiran slash** karena `trailingSlash: 'always'`. Jangan menambah slash manual lagi.
- Jangan menyimpan angka bisnis (harga, SLA, ukuran) di dalam komponen. Semua di `src/config/site.ts` atau `docs/03-konten.md`.
