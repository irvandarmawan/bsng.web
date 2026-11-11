# 01 — Brand

Sumber kebenaran visual. Kalau kode bertentangan dengan dokumen ini, dokumen ini menang.

## Token warna

| Token | Hex | Pakai untuk | Jangan untuk |
| :--- | :--- | :--- | :--- |
| `--ink` | `#0A0A0A` | Latar utama, teks di atas terang | — |
| `--paper` | `#FFFFFF` | Teks utama, latar terang | — |
| `--red` | `#E60000` | Titik logo, garis aksen, satu CTA | Body text, area > 5% layar |
| `--grey` | `#808080` | Label sekunder, garis, meta | Teks panjang |

Turunan yang diizinkan (hanya ini):
- `--hairline: rgba(255,255,255,.14)` — garis pemisah di atas gelap
- `--hairline-dark: rgba(10,10,10,.14)` — garis pemisah di atas terang

Tidak ada warna lain. Tidak ada gradient. Tidak ada opacity di luar yang di atas.

### Kontras (terukur)

- `#FFFFFF` di `#0A0A0A` → 19.3:1 ✅ (AAA)
- `#808080` di `#0A0A0A` → 5.3:1 ✅ (AA untuk teks normal)
- `#E60000` di `#0A0A0A` → 4.1:1 ⚠️ hanya untuk teks ≥ 24px bold atau elemen non-teks
- `#E60000` di `#FFFFFF` → 5.1:1 ✅ (AA)

## Tipografi

| Peran | Font | File | Bobot |
| :--- | :--- | :--- | :--- |
| Display / wordmark / heading | **Anton** | `public/chapter01/fonts/Anton-400.woff2` | 400 (hanya ada satu) |
| Detail / label / body kecil | **JetBrains Mono** | `public/chapter01/fonts/JetBrainsMono-var.woff2` | 100–800 (variabel) |

Keduanya **SIL Open Font License 1.1** — aman untuk komersial dan self-host. Jangan pakai Google Fonts CDN (privasi + satu request lebih lambat). Jangan pernah memakai Impact, Helvetica Neue, atau Courier New: berlisensi proprietary.

Aturan:
- Anton **selalu kapital**, tracking `-0.02em` untuk wordmark, `0` untuk heading panjang.
- JetBrains Mono untuk label: ukuran 11–12px, `letter-spacing: .18em`, kapital.
- Body text pakai JetBrains Mono 400, ukuran 15–17px, `line-height: 1.65`. Mono untuk paragraf panjang itu pilihan sadar — memberi rasa dokumen teknis, bukan blog.
- Maksimal **dua** ukuran display dalam satu layar.

## Logo

Empat file di `public/chapter01/logo/`:

| File | Latar | Isi |
| :--- | :--- | :--- |
| `bsng-logo-primary.svg` | gelap | putih + titik merah |
| `bsng-logo-inverse.svg` | terang | hitam + titik merah |
| `bsng-logo-mono-black.svg` | terang | satu warna hitam |
| `bsng-logo-mono-white.svg` | gelap | satu warna putih |

- Rasio 2.34:1. Jangan di-stretch, di-rotate, diberi outline, atau ditempeli efek.
- Clear space = tinggi titik (≈ 0.244 × tinggi huruf) di semua sisi.
- Ukuran minimum digital 96px lebar; cetak 28mm.
- Titik tidak boleh diganti warna selain merah / hitam / putih.
- Untuk teks yang butuh logo, pakai komponen `<Wordmark />` (memakai file SVG, bukan font).

## Tone of voice

**Dingin, objektif, tegas, berwibawa.** Seperti pengamat cerdas yang tidak perlu meninggikan suara.

Lakukan:
- Kalimat pendek. Satu ide per kalimat.
- Kata kerja konkret: *dicetak*, *dikirim*, *dihapus*.
- Angka daripada sifat: "1–2 hari kerja", bukan "cepat".
- Pernyataan, bukan ajakan. "Chapter 01 tersedia." bukan "Yuk buruan beli!"

Jangan:
- Emoji. Tanda seru bertumpuk. Huruf kapital untuk menekankan.
- Bahasa gaul: *gaskeun*, *cuan*, *murah banget*, *auto*. 
- Hiperbola: *terbaik*, *nomor satu*, *revolusioner*, *premium banget*.
- Menjelaskan lelucon. Kalau harus dijelaskan, hapus.
- Meminta maaf berlebihan atau merendah.

Contoh nada:

> Satu produk. Satu warna. Satu pesan. Sisanya kebisingan.

> Dicetak setelah kamu pesan. Tidak ada stok yang menunggu di gudang.

> Ukuran diukur dari kaos yang sudah dicuci. Toleransi jahit 1–2 cm.

## Elemen terlarang

- `border-radius` selain 0
- box-shadow, blur, glassmorphism
- gradient, noise texture berlebih (satu overlay halus boleh, opacity ≤ .04)
- ikon dekoratif, ilustrasi, stok foto orang tersenyum
- slider/carousel, accordion yang menyembunyikan info penting
- popup, cookie banner palsu, countdown timer
