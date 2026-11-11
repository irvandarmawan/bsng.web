# 07 — Deploy (Cloudflare Pages)

Hosting statis di **Cloudflare Pages**, tanpa Node di server. Satu build berisi dua wilayah:
situs brand di `/` (halaman produk di `/chapter01/`), dashboard internal di `/dashboard/`.

Domain: `bsng.pediaversal.my.id`.

## Pengaturan project

Saat membuat project Pages (**Workers & Pages → Create → Pages → Connect to Git**):

| Isian | Nilai |
| :--- | :--- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo = isi folder `bsng.web`; kalau repo memuat folder induk, isi `bsng.web`) |
| Node version | `22` — set env `NODE_VERSION=22`, atau ikut `.nvmrc` |

Kalau repo belum ada di GitHub, pakai upload langsung tanpa Git:

```bash
npm run build
npx wrangler pages deploy dist --project-name bsng
```

`wrangler.toml` sudah menunjuk `pages_build_output_dir = "dist"`, jadi `npx wrangler pages deploy` tanpa argumen juga jalan.

## Berkas khusus Cloudflare

Dua berkas ini ada di `public/`, ikut ter-copy ke `dist/`, dan **tidak disajikan** sebagai aset —
dibaca Cloudflare sebagai konfigurasi:

- `public/_headers` — header keamanan, cache aset, dan `X-Robots-Tag: noindex` untuk `/dashboard/*`.
- `public/_redirects` — rute lama (`/produk/`, `/chapter01/produk/`) dialihkan 301 ke `/chapter01/`.

Aturan `_headers` yang cocok semuanya digabung, jadi `/*` (keamanan) tetap berlaku di `/fonts/*` (cache).

## Hasil build

```text
dist/
├─ index.html                 ← halaman utama brand (root)
├─ 404.html                   ← 404 domain, dipakai otomatis oleh Pages
├─ chapter01/index.html       ← halaman produk
├─ manifesto/index.html
├─ dashboard/index.html       ← dashboard internal (noindex)
├─ logo/
├─ fonts/
├─ images/
├─ og.jpg
├─ favicon.svg
├─ robots.txt
├─ sitemap.xml
├─ _headers
├─ _redirects
└─ _astro/
```

`trailingSlash: 'always'` + `build.format: 'directory'` cocok dengan Pages: `/chapter01/` dilayani
dari `chapter01/index.html`, dan `/chapter01` diarahkan Pages ke versi ber-slash.

## Custom domain

1. Domain `pediaversal.my.id` sudah di Cloudflare → **Pages → project → Custom domains → Set up a domain** → `bsng.pediaversal.my.id`.
2. CNAME dibuat otomatis kalau zone-nya di akun yang sama. Kalau tidak: `CNAME bsng → <project>.pages.dev`, proxy **ON**.
3. HTTPS terbit otomatis setelah DNS valid. Tunggu status **Active**.

## Verifikasi setelah deploy

| URL | Harus |
| :--- | :--- |
| `https://bsng.pediaversal.my.id/` | halaman utama brand, hero MAXIMUM NOISE, font Anton termuat |
| `https://bsng.pediaversal.my.id/chapter01/` | halaman produk: foto, spesifikasi, tabel ukuran |
| `https://bsng.pediaversal.my.id/manifesto/` | lima paragraf manifesto |
| `https://bsng.pediaversal.my.id/dashboard/` | dashboard brand, meta `noindex` |
| `…/produk/` | 301 ke `/chapter01/` |
| `…/fonts/Anton-400.woff2` | 200, `content-type: font/woff2`, `cache-control: public, max-age=31536000, immutable` |
| `…/_astro/*.css` | 200, `cache-control: … immutable` |
| `…/halaman-ngawur` | 404 kustom dari `404.html` |

Cek header dari terminal:

```bash
curl -sI https://bsng.pediaversal.my.id/fonts/Anton-400.woff2 | grep -i 'cache-control\|content-type'
curl -sI https://bsng.pediaversal.my.id/dashboard/ | grep -i 'x-robots-tag'
curl -sI https://bsng.pediaversal.my.id/produk/ | head -3
```

Cek juga di DevTools → Network: **tidak ada** request 404, dan tidak ada request ke `fonts.googleapis.com`.

## Kalau aset 404

Penyebab paling sering, berurutan:

1. **Prefiks `base` salah.** `src/config/base.ts` = `'/'`. Cari path yang masih membawa `/chapter01/` di depan aset: `grep -rn '/chapter01/' src/`. Jangan pakai `import.meta.env.BASE_URL`.
2. **Build output directory salah** (diisi `dist/` atau `web/dist`). Harus `dist` dengan root directory yang benar.
3. **`base` di `astro.config.mjs` diisi lagi.** Sengaja kosong; mengisinya menggeser rute brand dan memutus prefiks di `base.ts`.
4. **Aset diimpor dari luar `public/`** — hanya `public/` yang disalin apa adanya.

## Cache

| Path | Header | Alasan |
| :--- | :--- | :--- |
| `/_astro/*` | `public, max-age=31536000, immutable` | nama file ber-hash |
| `/fonts/*` | `public, max-age=31536000, immutable` | nama stabil, isi jarang berubah |
| `/logo/*`, `/images/*`, `/og.jpg` | `public, max-age=604800` | nama stabil, isi bisa diganti |
| `*.html` | default Cloudflare: `public, max-age=0, must-revalidate` | konten berubah tiap deploy |

Kalau mengganti isi file di `/images/` atau `/logo/` dengan nama sama, cache 7 hari berarti pengunjung
lama masih melihat versi lama sampai seminggu. Untuk perubahan mendesak: ganti nama file.

## Rollback

Pages menyimpan setiap deployment.

- Dashboard: **Deployments → pilih deployment lama → Rollback**.
- CLI: `npx wrangler pages deployment list --project-name bsng`, lalu
  `npx wrangler pages deployment rollback <deployment-id> --project-name bsng`.

Tidak ada proses build di server produksi — rollback = menunjuk deployment lama.

## Preview deployment

Setiap push ke branch non-produksi menghasilkan URL preview `https://<hash>.bsng.pages.dev`.
Preview juga mendapat `_headers`, tapi dashboard di sana tetap `noindex`. Jangan taruh data rahasia
di halaman mana pun: semua HTML statis bisa dibaca siapa pun yang punya URL.
