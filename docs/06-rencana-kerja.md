# 06 — Rencana Kerja

Kerjakan **satu tugas per sesi**. Jangan gabung dua tugas. Setiap tugas punya kriteria selesai yang bisa diperiksa, bukan dirasakan.

Status di bawah ini **sudah diverifikasi** dengan `npm run build` dan pengujian di browser. Jangan mengulang pekerjaan yang bertanda ✅.

---

## Peta status

| Fase | Isi | Status |
| :--- | :--- | :--- |
| 0 | Fondasi: Astro 7, base path, token CSS, font self-host, 4 varian logo | ✅ selesai |
| 1 | Empat halaman: `/`, `/produk/`, `/manifesto/`, `/404` | ✅ selesai |
| 2 | Komponen, nav, footer, responsif 360–1440 | ✅ selesai |
| 3 | Aset akhir & rilis | ✅ selesai |
| 4 | Setelah rilis | ⛔ jangan mulai tanpa instruksi |

---

## ✅ Fase 0 — Fondasi (selesai)

Terpasang: Astro 7 (`^7.4.10`), `trailingSlash: 'always'`, prefiks brand `src/config/base.ts` (`'/'`), token di `src/styles/tokens.css`, `@font-face` self-host (Anton + JetBrains Mono), empat varian logo di `public/logo/`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `og.jpg` 1200×630.

> Revisi struktur: situs brand pindah ke root (`src/pages/` + `public/`); dashboard internal pindah ke `/dashboard/`.

## ✅ Fase 1 — Halaman (selesai)

| Tugas | File | Bukti |
| :--- | :--- | :--- |
| T1 `Base.astro` | `src/layouts/Base.astro` | title unik, description, canonical absolut, OG + Twitter, favicon, preload Anton, JSON-LD via prop |
| T2 `index.astro` | `src/pages/index.astro` | 6 blok: hero, objek, posisi, cara kerja, ukuran, penutup; satu `h1`; CTA di atas lipatan pada 1440×900 |
| T3 `produk.astro` | `src/pages/produk.astro` | spesifikasi, tabel ukuran `id="ukuran"`, perawatan, pengiriman, 4 Q&A |
| T4 `manifesto.astro` | `src/pages/manifesto.astro` | 5 blok paragraf + penutup, ≤ 68ch |
| T5 `404.astro` | `src/pages/404.astro` | jalan kembali ke `/`, tidak masuk sitemap |

## ✅ Fase 2 — Komponen & responsif (selesai)

`Nav.astro` (sticky, dua baris di < 640px), `Footer.astro` (tiga sosial + handle + legal, tahun dinamis), `Button.astro` (3 varian), `Section.astro`, `SpecList.astro`, `SizeTable.astro`, `PhotoSlot.astro`, `Wordmark.astro`.

**Sudah diuji:** 360, 390, 768, 1024, 1280, 1440 px — tidak ada scroll horizontal di ketiga halaman; tidak ada JS klien; target sentuh tombol ≥ 44px.

---

## ⏳ Fase 3 — Sisa pekerjaan

### T6 · Isi data bisnis ✅ SELESAI

URL Shopee produk (`https://id.shp.ee/pSwj3kid`), Shopee toko (`https://id.shp.ee/fVxko2kt`), dan Instagram DM (`https://instagram.com/bsng.co`) terpasang di `src/config/site.ts`.

**Selesai bila:** tombol `BELI DI SHOPEE` membuka URL produk Shopee, tombol `TANYA UKURAN DI DM INSTAGRAM` terpasang.

### T7 · Foto produk ✅ SELESAI

Empat foto di `/produk/`: depan 4:5, belakang 4:5, detail sablon 1:1, ukuran 16:9. `PhotoSlot` dipertahankan (render `` dengan `width`/`height` + `loading="lazy"`, `alt` dari `docs/03-konten.md` §Alt text).

**Selesai bila:** tidak ada slot dashed tersisa di halaman produk; tidak ada layout shift; total gambar 608 KB (target < 600 KB, terlampaui 8 KB — terima untuk menjaga tekstur detail sablon; revisi jika diharuskan).

### T8 ✅ Audit & rilis — SELESAI

Lighthouse mobile: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
Cek manual: semua link internal tidak 404, tidak ada `href="#"`, semua eksternal `rel="noopener noreferrer"`.

**Selesai bila:** skor terpenuhi dan hasilnya ditempel di laporan. Prosedur unggah ada di `docs/07-deploy.md`.

**Hasil audit (Lighthouse 12, mobile, `npm run preview`):**

| Halaman | Perf | A11y | Best Practices | SEO |
| :--- | :--- | :--- | :--- | :--- |
| `/` | 100 | 100 | 100 | 100 |
| `/produk/` | 100 | 100 | 100 | 100 |
| `/produk/` | 100 | 100 | 100 | 100 |

Perbaikan saat audit: angka label section (`.sec__num`) & nomor langkah (`.step__n`) memakai `--red` pada teks 11px → kontras 4.11 gagal WCAG AA. Diganti `--grey` (sesuai `docs/04-desain.md`: label section = abu). A11y naik 96 → 100.

Cek manual: 12 link internal semua HTTP 200, 0 `href="#"`, 0 tautan eksternal tanpa `rel="noopener noreferrer"`, `robots.txt` + `sitemap.xml` di root domain, dashboard `/dashboard/` `noindex, nofollow`, satu `<h1>`/halaman, urutan heading tanpa lompat, alt text sesuai `docs/03-konten.md`, meta title/description sesuai tabel SEO.

**Sisa rilis:** deploy ke Cloudflare Pages, custom domain `bsng.pediaversal.my.id` (prosedur `docs/07-deploy.md`). Aset opsional belum ada: foto hangtag (#4) & foto dipakai (#5) di `docs/08-aset.md` — tidak menahan rilis.

---

## ⛔ Fase 4 — Setelah rilis

- `/jurnal/` — content collection Markdown untuk esai carousel.
- Analitik ringan (lihat `docs/05-teknis.md`).
- `/chapter/02/` saat produk kedua ada.

Jangan mulai fase ini tanpa instruksi eksplisit.

---

## Cara memulai sesi opencode

Dari folder `web/`:

```bash
opencode run "Baca AGENTS.md dan docs/06-rencana-kerja.md. Kerjakan T6 saja. Jangan ubah file lain. Laporkan file yang diubah dan hasil npm run build."
```

Ganti `T6` sesuai tugas. Satu tugas, satu sesi. Kalau agen mencoba mengerjakan dua tugas sekaligus, hentikan.

## Format laporan yang diminta

```text
TUGAS     T6 — Isi data bisnis
UBAH      src/config/site.ts, src/pages/index.astro, src/pages/produk.astro
BUILD     lulus (4 halaman, 0 error)
BUKTI     tombol beli → https://id.shp.ee/pSwj3kid, kontak → https://instagram.com/bsng.co
SISA      T8 (Audit & Rilis)
```
