# 03 — Konten

Copy final. **Jangan dikarang ulang.** Kalau ada yang kurang, tulis `TODO(copy): ...` di kode dan laporkan.

Penanda `[[...]]` = nilai yang diambil dari `src/config/site.ts`, bukan ditulis manual.

---

## Global

**Nama merek:** `BSNG.` — selalu dengan titik. Jangan "BSNG" tanpa titik, jangan "Bsng".

**Navigasi (kiri → kanan):**

| Label | Tujuan |
| :--- | :--- |
| `PRODUK` | `/produk/` |
| `MANIFESTO` | `/manifesto/` |
| `BELI DI SHOPEE` | `[[shopeeProductUrl]]` (tombol, merah) |

**Footer:**

```text
BSNG. — MAXIMUM NOISE.
Chapter 01 · The Core Anthem

INSTAGRAM   @bsng.co
TIKTOK      @bsng.co
X           @bsng.co

Made to order. Dicetak di Indonesia.
© 2026 BSNG. · Powered by www.pediaversal.my.id
```

**Tombol:**

| Konteks | Label |
| :--- | :--- |
| Beli | `BELI DI SHOPEE` |
| Tanya | `TANYA UKURAN` |
| Lihat detail | `SPESIFIKASI LENGKAP` |
| Baca | `BACA MANIFESTO` |
| Kembali | `KEMBALI KE CHAPTER 01` |

**Microcopy saat link Shopee belum diisi:** `Segera dibuka.` (bukan tombol mati, bukan link kosong)

---

## Halaman 1 — `/` (Chapter 01)

### 1. Hero

```text
EYEBROW     CHAPTER 01 — THE CORE ANTHEM
H1          [logo BSNG. sebagai gambar, alt="BSNG."]
BARIS 1     MAXIMUM NOISE.
BARIS 2     Seragam pergerakan untuk yang bicara tanpa berteriak.
META        Combed 24s–30s · Regular fit · Jet Black · Rp159.000
```

Catatan tata letak: `MAXIMUM NOISE.` ditulis dengan JetBrains Mono, kapital, `letter-spacing: .42em`, ukuran 12–14px, warna `--grey`. Logo adalah elemen terbesar di layar.

### 2. Section 01 — OBJEK

```text
LABEL       01 / OBJEK
H2          Kaos berat. Potongan lurus. Satu warna.
P1          The Core Anthem dibuat dari katun combed 24s–30s. Cukup tebal untuk jatuh dengan benar, cukup dingin untuk dipakai seharian di iklim ini.
P2          Logo dicetak besar di dada dengan tekstur noise, supaya sablon DTF tidak jadi bidang kaku yang menempel di kulit. Di punggung, satu baris kecil: MAXIMUM NOISE.
LINK        SPESIFIKASI LENGKAP → /produk/
```

**Daftar spesifikasi (ringkas, untuk halaman utama):**

| Label | Nilai |
| :--- | :--- |
| `BAHAN` | `100% Cotton Combed 24s–30s` |
| `POTONGAN` | `Regular fit` |
| `WARNA` | `Jet Black` |
| `SABLON` | `DTF premium, finishing doff` |
| `DETAIL` | `Inside neck print, hangtag doff` |
| `HARGA` | `Rp159.000` |

### 3. Section 02 — POSISI

```text
LABEL       02 / POSISI
H2          Bising bukan soal volume.
P1          Semua orang bicara. Sedikit yang mengatakan sesuatu.
P2          BSNG. dibuat untuk yang terakhir itu: yang memilih berpikir sebelum bicara, dan tetap bicara setelahnya.
LINK        BACA MANIFESTO → /manifesto/
```

### 4. Section 03 — CARA KERJA

```text
LABEL       03 / CARA KERJA
H2          Dicetak setelah kamu pesan.
P1          Tidak ada stok yang menunggu di gudang. Tidak ada sisa yang dibuang.
```

Tiga langkah:

```text
01  PESAN
    Pilih ukuran di Shopee. Bayar. Pesanan masuk ke antrean cetak.

02  CETAK
    Kaos dicetak satu per satu. 1–2 hari kerja.

03  KIRIM
    Dikemas, dikirim. Nomor resi muncul di Shopee.
```

### 5. Section 04 — UKURAN

```text
LABEL       04 / UKURAN
H2          Diukur dari kaos jadi.
P1          Lebar dada × panjang badan. Toleransi jahit 1–2 cm.
LINK        TABEL UKURAN LENGKAP → /produk/#ukuran
```

### 6. Penutup

```text
H2          Chapter 01 tersedia.
P1          Satu produk. Satu warna. Satu pesan.
TOMBOl 1    BELI DI SHOPEE
TOMBOl 2    TANYA UKURAN (WhatsApp, hanya jika nomor terisi)
```

---

## Halaman 2 — `/produk/`

### Header

```text
EYEBROW     CHAPTER 01
H1          The Core Anthem
LEAD        Kaos katun combed 24s–30s, regular fit, Jet Black. Logo BSNG. di dada, MAXIMUM NOISE. di punggung. Rp159.000.
```

### Spesifikasi lengkap

| Label | Nilai |
| :--- | :--- |
| `BAHAN` | `100% Cotton Combed 24s–30s` |
| `POTONGAN` | `Regular fit` |
| `WARNA` | `Jet Black (#0A0A0A)` |
| `SABLON` | `DTF premium, finishing doff` |
| `DETAIL` | `Inside neck print, hangtag doff` |
| `PRODUKSI` | `Made to order, 1–2 hari kerja` |
| `HARGA` | `Rp159.000` |

### Tabel ukuran (`id="ukuran"`)

```text
UKURAN   LEBAR DADA   PANJANG BADAN
S        45 cm        66 cm
M        48 cm        68 cm
L        50 cm        70 cm
XL       52 cm        73 cm
XXL      54 cm        75 cm
```

Catatan di bawah tabel:

```text
Toleransi jahit 1–2 cm. Ukuran diukur dari kaos jadi, bukan dari pola.
Kalau ragu di antara dua ukuran, ambil yang lebih besar — potongan ini lurus, bukan slim.
```

### Perawatan

```text
H2          Perawatan
P1          Cuci air dingin, balik bagian dalam ke luar. Jangan pakai pemutih. Setrika dari sisi dalam, hindari menekan langsung area sablon.
P2          Sablon DTF tahan lama kalau tidak digosok panas dan tidak dikeringkan dengan mesin bersuhu tinggi.
```

### Pengiriman & penukaran

```text
H2          Pengiriman
P1          Dikirim dari Indonesia. Produksi 1–2 hari kerja, lalu pengiriman sesuai layanan yang dipilih di Shopee.
P2          Penukaran ukuran mengikuti kebijakan pengembalian Shopee. Label belum dilepas, kaos belum dicuci.
```

### Pertanyaan singkat

```text
Q   Apakah ready stock?
A   Tidak. Semua dicetak setelah pesanan masuk.

Q   Berapa lama sampai?
A   1–2 hari kerja untuk produksi, ditambah waktu kirim sesuai layanan di Shopee.

Q   Bisa tukar ukuran?
A   Bisa, selama mengikuti kebijakan pengembalian Shopee dan kondisi kaos masih baru.

Q   Apakah mengecil setelah dicuci?
A   Combed 24s–30s menyusut minimal bila dicuci air dingin dan tidak dikeringkan dengan mesin panas.
```

### Penutup

```text
LOGO        BSNG. (mono, tinggi 40px)
BARIS       Chapter 01 · The Core Anthem · Rp159.000
LINK        KEMBALI KE CHAPTER 01 → /
```

---

## Halaman 3 — `/manifesto/`

```text
EYEBROW     MANIFESTO
H1          Bising bukan soal volume.
```

Isi (satu paragraf per blok, dipisah garis tipis):

```text
Kami tumbuh di ruang yang penuh suara. Notifikasi, opini, angka, janji. Semua orang bicara. Sedikit yang mengatakan sesuatu.

BSNG. dibuat untuk yang terakhir itu.

Kami tidak menjual pakaian. Kami menyediakan seragam untuk orang yang memilih berpikir sebelum bicara, dan tetap bicara setelahnya.

Satu produk. Satu warna. Satu pesan. Sisanya kebisingan.

MAXIMUM NOISE.
```

Penutup:

```text
LINK        LIHAT CHAPTER 01 → /
```

---

## Halaman 404

```text
H1          404
P1          Halaman ini tidak ada. Mungkin sudah dihapus, mungkin tidak pernah dibuat.
LINK        KEMBALI KE CHAPTER 01
```

---

## SEO — judul & deskripsi

| Halaman | `<title>` | `<meta name="description">` |
| :--- | :--- | :--- |
| `/` | `BSNG. — MAXIMUM NOISE. | Chapter 01: The Core Anthem` | `Seragam pergerakan dari BSNG. The Core Anthem: combed 24s–30s, regular fit, sablon DTF doff. Rp159.000. Made to order, dicetak di Indonesia.` |
| `/produk/` | `The Core Anthem — Spesifikasi & Ukuran | BSNG.` | `Bahan, sablon, tabel ukuran S–XXL, dan perawatan The Core Anthem. Combed 24s–30s, regular fit, Jet Black. Rp159.000.` |
| `/manifesto/` | `Manifesto — BSNG.` | `Bising bukan soal volume. Pernyataan merek BSNG.: satu produk, satu warna, satu pesan.` |
| `/404` | `404 — BSNG.` | `Halaman tidak ditemukan.` |

## Alt text

| Gambar | alt |
| :--- | :--- |
| Logo di hero | `BSNG.` |
| Logo di navigasi | `BSNG.` |
| Foto produk depan | `Kaos The Core Anthem tampak depan, Jet Black, logo BSNG. besar di dada` |
| Foto produk belakang | `Kaos The Core Anthem tampak belakang, tulisan MAXIMUM NOISE. di bawah kerah` |
| Foto detail sablon | `Detail tekstur sablon DTF doff pada logo BSNG.` |
| Foto hangtag | `Hangtag doff dan inside neck print The Core Anthem` |
| Gambar dekoratif | `alt=""` |

---

## Kata yang dilarang

`murah`, `promo`, `diskon`, `buruan`, `gaskeun`, `cuan`, `auto`, `banget`, `premium` (sebagai sifat), `terbaik`, `nomor satu`, `revolusioner`, `kekinian`, `hype`, `viral`, `wajib punya`, `jangan sampai kehabisan`.

Kalau sebuah kalimat butuh salah satu kata itu untuk bekerja, kalimatnya belum selesai.
