# 08 — Aset

## Sudah ada

| Aset | Lokasi | Catatan |
| :--- | :--- | :--- |
| Logo 4 varian | `public/chapter01/logo/*.svg` | Path murni, tanpa dependensi font |
| Anton 400 | `public/chapter01/fonts/Anton-400.woff2` | OFL, subset latin |
| JetBrains Mono var | `public/chapter01/fonts/JetBrainsMono-var.woff2` | OFL, subset latin, bobot 100–800 |
| Brand board | `../bsng_brand_board.html` | Referensi visual, bukan bagian situs |

## Belum ada — dibutuhkan

### 1. Foto produk (paling penting)

Situs tidak boleh memakai foto stok. Selama foto asli belum ada, pakai `<PhotoSlot />` — slot bertanda, bukan gambar pengganti.

**Daftar bidikan minimum (5):**

| # | Bidikan | Rasio | Pakai di |
| :--- | :--- | :--- | :--- |
| 1 | Kaos depan, digantung/datar, latar Jet Black | 4:5 | Hero, kartu produk |
| 2 | Kaos belakang, tulisan MAXIMUM NOISE. terbaca | 4:5 | Halaman produk |
| 3 | Detail sablon dada, jarak dekat, tekstur noise terlihat | 1:1 | Halaman produk |
| 4 | Inside neck print + hangtag | 1:1 | Halaman produk |
| 5 | Kaos dipakai, potongan badan, tanpa wajah (crop leher–pinggang) | 4:5 | Section posisi |

**Arahan:**

- Latar: hitam pekat atau dinding beton abu. Tanpa properti dekoratif.
- Cahaya: satu sumber keras dari samping, bayangan tegas. Boleh ada bayangan jatuh.
- Tanpa model tersenyum, tanpa filter warna, tanpa vignette.
- Warna kaos harus tetap hitam di foto — jangan sampai jadi abu kecokelatan.
- Ekspor: WebP kualitas 80 + fallback JPG, sisi terpanjang maksimum 1600px, < 200 KB per file.
- Penamaan: `produk-depan.webp`, `produk-belakang.webp`, `detail-sablon.webp`, `detail-tag.webp`, `dipakai.webp`.

Selama belum ada, **jangan** mengisi dengan Unsplash, gradient, atau ilustrasi kaos.

### 2. `og.jpg` — 1200×630

Kartu tautan saat link dibagikan. Komposisi: latar `#0A0A0A`, logo BSNG. besar di tengah, `MAXIMUM NOISE.` mono kecil di bawah, titik merah tetap merah. Tanpa teks lain.

### 3. `favicon.svg`

64×64, latar `#0A0A0A`, kotak merah `#E60000` di tengah (sisi 60% dari lebar). Turunan langsung dari titik logo.

### 4. Nomor WhatsApp

Format `62…`, tanpa `+`, tanpa spasi. Dipakai tombol `TANYA UKURAN`.

### 5. Link Shopee

- Produk: dari Shopee Seller Centre → Bagikan → Salin Tautan. Bentuknya `https://shopee.co.id/<slug>-i.<shopId>.<itemId>`.
- Toko: `https://shopee.co.id/shop/<shopId>`.

Kalau kosong, tombol beli diganti teks `Segera dibuka.`

## Aturan aset

- Format raster: WebP (utama) + JPG (fallback). Tidak ada PNG untuk foto.
- Semua `<img>` wajib `width`, `height`, `alt`, `loading` (`lazy` kecuali hero).
- Nama file: huruf kecil, tanda hubung, tanpa spasi, tanpa tanggal.
- Jangan commit file > 1 MB. Kalau ada, kompres dulu.
