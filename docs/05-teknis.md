# 05 — Teknis, SEO, Performa

## Anggaran performa

| Metrik | Batas | Catatan |
| :--- | :--- | :--- |
| Total CSS | < 30 KB (sebelum gzip) | Dua file, tanpa framework |
| Total JS klien | < 15 KB | Target realistis: **0 KB** |
| Font | 2 file, < 55 KB total | Anton 18 KB + JetBrains Mono 31 KB |
| LCP (mobile 4G) | < 1.5 s | Hero berupa gambar SVG + teks, bukan foto besar |
| CLS | < 0.02 | Semua gambar punya dimensi eksplisit |

Kalau sebuah perubahan melewati anggaran ini, perubahan itu yang dibatalkan — bukan anggarannya.

## Head (`Base.astro`)

Wajib ada di setiap halaman:

```html
<html lang="id">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>…</title>
<meta name="description" content="…" />
<link rel="canonical" href="…" />
<meta name="theme-color" content="#0A0A0A" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="BSNG." />
<meta property="og:title" content="…" />
<meta property="og:description" content="…" />
<meta property="og:image" content="https://bsng.pediaversal.my.id/og.jpg" />
<meta property="og:url" content="…" />
<meta name="twitter:card" content="summary_large_image" />

<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="preload" href="/fonts/Anton-400.woff2" as="font" type="font/woff2" crossorigin />
```

Catatan: `canonical` dan `og:url` **harus** absolut (`site` + `base` + path). Path relatif mengacaukan crawler.

## Font

`@font-face` di `global.css`, bukan di `<head>`:

```css
@font-face{
  font-family:'Anton'; src:url('/fonts/Anton-400.woff2') format('woff2');
  font-weight:400; font-style:normal; font-display:swap;
}
@font-face{
  font-family:'JetBrains Mono'; src:url('/fonts/JetBrainsMono-var.woff2') format('woff2');
  font-weight:100 800; font-style:normal; font-display:swap;
}
```

Hanya Anton yang di-preload. JetBrains Mono dipakai untuk teks sekunder, tidak perlu memblokir render.

## Structured data

Satu blok JSON-LD di `/` dan `/produk/`:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Core Anthem",
  "brand": { "@type": "Brand", "name": "BSNG." },
  "description": "Kaos katun combed 24s–30s, regular fit, Jet Black. Sablon DTF premium finishing doff.",
  "material": "100% Cotton Combed 24s–30s",
  "color": "Jet Black",
  "offers": {
    "@type": "Offer",
    "price": "159000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/MadeToOrder",
    "url": "[[shopeeProductUrl]]"
  }
}
```

`availability` = `MadeToOrder` — bukan `InStock`. Ini jujur dan sesuai model bisnis.

## Sitemap & robots

- `public/robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://bsng.pediaversal.my.id/sitemap.xml
```

- `public/sitemap.xml` ditulis manual (4 URL). Jangan tambah `@astrojs/sitemap` hanya untuk 4 halaman.

## Aksesibilitas — checklist

- [ ] Semua gambar punya `alt` (dekoratif: `alt=""`)
- [ ] Kontras teks ≥ 4.5:1; merah hanya ≥ 24px bold atau non-teks
- [ ] Fokus keyboard terlihat di semua elemen interaktif
- [ ] Urutan heading benar (satu `h1`, tidak lompat)
- [ ] Tabel ukuran memakai `<th scope="col">`
- [ ] Link eksternal: `target="_blank"` + `rel="noopener noreferrer"`
- [ ] `aria-label` pada tombol yang hanya berisi ikon
- [ ] Halaman bisa dipakai tanpa JavaScript sama sekali

## Analitik

Belum dipasang. Kalau nanti dipasang, syaratnya:

1. Tanpa cookie pihak ketiga.
2. < 2 KB, `defer`.
3. Hanya tiga event: `outbound_shopee`, `outbound_whatsapp`, `view_produk`.
4. Jangan kirim data pribadi apa pun.

## Keamanan & hosting statis

- Tidak ada form, tidak ada database, tidak ada auth → permukaan serang minimal.
- Semua link eksternal `rel="noopener noreferrer"`.
- Tidak ada `innerHTML` dengan data eksternal (tidak ada data eksternal).
- Cache header di hosting: HTML `no-cache`, `_astro/*` dan `fonts/*` `max-age=31536000, immutable`.
