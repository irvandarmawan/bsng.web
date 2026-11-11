# 04 — Desain

Semua angka di sini sudah dipetakan ke variabel di `src/styles/tokens.css`. Jangan menulis nilai baru langsung di komponen.

## Grid & lebar

| Hal | Nilai |
| :--- | :--- |
| Lebar konten maksimum | `1240px` |
| Padding horizontal | `24px` (mobile) → `48px` (≥ 960px) |
| Grid | 12 kolom, gutter `24px` |
| Kolom baca (paragraf) | maksimum `68ch` |
| Breakpoint | `640px`, `960px`, `1280px` |

Section penuh selebar layar, isi dibatasi kontainer. Garis pemisah (`--hairline`) membentang **penuh**, bukan sebatas kontainer — itu yang membuat halaman terasa seperti dokumen, bukan kartu.

## Skala tipe

| Token | Ukuran | Font | Pakai |
| :--- | :--- | :--- | :--- |
| `--t-hero` | `clamp(64px, 16vw, 240px)` | Anton | Logo di hero (gambar), bukan teks |
| `--t-h1` | `clamp(40px, 7vw, 84px)` | Anton | Judul halaman |
| `--t-h2` | `clamp(28px, 4vw, 48px)` | Anton | Judul section |
| `--t-h3` | `clamp(18px, 2vw, 22px)` | JetBrains Mono 700 | Subjudul, pertanyaan |
| `--t-lead` | `clamp(17px, 2vw, 21px)` | JetBrains Mono 400 | Paragraf pembuka |
| `--t-body` | `16px` | JetBrains Mono 400 | Paragraf |
| `--t-label` | `11px` | JetBrains Mono 700 | Label section, eyebrow, tombol |

Aturan:
- Anton: `text-transform: uppercase`, `line-height: .88`, `letter-spacing: -.02em`.
- Mono label: `letter-spacing: .18em`, uppercase, warna `--grey`.
- Paragraf: `line-height: 1.65`, `max-width: 68ch`.
- Jangan pakai tiga ukuran display dalam satu layar. Hero + satu h2 sudah cukup.

## Spasi

Skala 4px: `4 8 12 16 24 32 48 64 96 128`.

| Hal | Nilai |
| :--- | :--- |
| Padding section vertikal | `clamp(72px, 10vw, 160px)` |
| Jarak label → judul | `24px` |
| Jarak judul → paragraf | `28px` |
| Jarak antar paragraf | `18px` |
| Jarak antar section kecil | `48px` |

## Ritme section

Setiap section punya pola sama:

```text
────────────────────────────────────────  garis penuh
01 / OBJEK                                label mono, abu
                                          ↕ 24px
Kaos berat. Potongan lurus. Satu warna.   h2 Anton
                                          ↕ 28px
Paragraf…                                 body, maks 68ch
```

Nomor section (`01`, `02`, …) memakai angka asli, bukan hiasan. Kalau section ditambah, nomornya ikut berubah.

## Komponen

### Tombol

```text
tinggi      56px (mobile) / 52px (desktop)
padding     0 32px
radius      0
font        JetBrains Mono 700, 11px, letter-spacing .18em, uppercase
```

| Varian | Latar | Teks | Border | Kapan |
| :--- | :--- | :--- | :--- | :--- |
| `primary` | `--red` | `--paper` | — | Hanya satu per layar. Beli. |
| `ghost` | transparan | `--paper` | `1px --hairline` | Aksi sekunder |
| `ghost-dark` | transparan | `--ink` | `1px --hairline-dark` | Di atas latar terang |

Hover: `primary` → `#C40000` (gelap 12%). `ghost` → border jadi `--paper`. Tanpa transform, tanpa shadow.

### Navigasi

```text
tinggi      72px, sticky di atas, latar --ink, garis bawah --hairline
kiri        logo tinggi 20px
tengah      PRODUK · MANIFESTO (mono 11px, tracking .18em)
kanan       tombol BELI DI SHOPEE (primary, tinggi 40px, padding 0 20px)
mobile      logo + tombol beli saja; menu disembunyikan, bukan diganti hamburger JS
```

### Daftar spesifikasi

Dua kolom: label mono abu (lebar tetap `140px`), nilai mono putih. Baris dipisah `--hairline`. Di mobile, label di atas nilai.

### Tabel ukuran

Header mono abu, angka rata kanan, baris ganjil tanpa latar berbeda (bukan zebra). Baris yang sedang disorot: border kiri `2px --red`.

### PhotoSlot (pengganti foto)

```text
bingkai     1px dashed --hairline
rasio       4/5 (produk), 1/1 (detail), 16/9 (editorial)
isi         label mono abu di tengah: "FOTO PRODUK · 4:5"
```

Jelas terlihat sebagai slot kosong. **Jangan** diisi gambar stok, gradient, atau ilustrasi sebagai pengganti.

## Responsif

| Lebar | Perubahan |
| :--- | :--- |
| ≥ 1280 | Dua kolom: teks 7/12, visual 5/12 |
| 960–1279 | Dua kolom tetap, gutter 32px |
| 640–959 | Satu kolom, hero turun ke 12vw, tabel ukuran bisa di-scroll horizontal |
| < 640 | Padding 24px, tombol full-width, navigasi menyusut |

Uji wajib di 390px dan 1440px. Tidak boleh ada scroll horizontal.

## Gerak

Hampir tidak ada. Yang diizinkan:

- Transisi warna/border: `120ms ease-out`.
- `scroll-behavior: smooth` untuk anchor `#ukuran`.

Yang dilarang: fade-in saat scroll, parallax, marquee, cursor kustom, animasi huruf per huruf.

Hormati `prefers-reduced-motion: reduce` → matikan semua transisi.
