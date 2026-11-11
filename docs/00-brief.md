# 00 — Brief

## Siapa

**BSNG.** (dibaca *Bising*). Streetwear Indonesia, posisi **Minimalis Rebel**, tagline **MAXIMUM NOISE.**
Menjual sikap, bukan sekadar kaos: perlawanan yang elegan, cerdas, tajam — tanpa berteriak.

## Apa yang dibangun

Situs chapter. Satu halaman utama + dua halaman pendukung.
Konten dibuka per "chapter" — Chapter 01 berisi satu produk: **The Core Anthem**.

## Siapa pembacanya

1. **Pembeli pertama** — 18–28 tahun, urban, aktif di IG/TikTok, pernah beli kaos Rp120–180rb. Datang dari carousel atau bio link. Waktu di halaman: < 90 detik.
2. **Pembeli ragu** — butuh bukti: bahan apa, sablon apa, berapa lama, bagaimana kalau salah ukuran.

## Tugas situs, berurutan

1. **Menyatakan posisi** dalam 3 detik pertama. Bukan "toko kaos", tapi "ini brand yang punya pendirian".
2. **Menjelaskan objeknya** — bahan, sablon, fit, ukuran, harga. Objektif, tanpa hiperbola.
3. **Menjelaskan cara kerjanya** — made to order, 1–2 hari kerja, tanpa stok.
4. **Menyerahkan transaksi ke Shopee** dengan satu klik yang tidak ambigu.

## Bukan tugas situs

- Checkout, cart, akun, wishlist, pembayaran. Semua di Shopee.
- Blog aktif. Jurnal masuk fase 2 (`docs/06-rencana-kerja.md`).
- Katalog. Produk bertambah → chapter baru, bukan grid.

## Metrik

| Metrik | Target awal | Cara ukur |
| :--- | :--- | :--- |
| Klik ke Shopee | ≥ 8% dari pengunjung | event `outbound_shopee` (fase 3) |
| Waktu baca produk | ≥ 45 detik | analitik ringan |
| LCP (mobile 4G) | < 1.5 s | Lighthouse |
| Total JS terkirim | < 15 KB | `dist/` inspection |
| Skor aksesibilitas | ≥ 95 | Lighthouse |

Angka ini target, bukan janji. Yang penting arahnya: cepat, jelas, satu jalan keluar.

## Batasan

- **Tanpa foto profesional dulu.** Situs harus tetap terlihat jadi. Solusi: tipografi sebagai hero, slot foto bertanda jelas (bukan gambar palsu).
- **Tanpa backend.** Tidak ada form yang mengirim data. Kontak lewat WhatsApp/IG.
- **Hosting statis** di sub-folder `/chapter01`. Tidak ada Node di server.
- **Satu orang** yang mengelola. Jangan bikin sistem yang butuh perawatan.

## Prinsip desain

1. **Tipografi adalah gambar.** Kalau ragu, perbesar huruf dan hapus elemen lain.
2. **Satu aksen merah.** Kalau merah muncul di mana-mana, tidak ada yang jadi aksen.
3. **Ruang kosong itu pernyataan.** Jangan isi dengan dekorasi.
4. **Diam lebih keras.** Tidak ada animasi yang tidak menjelaskan sesuatu.
5. **Objeknya harus jujur.** Spesifikasi apa adanya, termasuk kekurangan (mis. toleransi jahit 1–2 cm).

## Yang perlu diputuskan pemilik brand

- Link produk Shopee & link toko → `src/config/site.ts`
- Nomor WhatsApp
- Foto produk (brief di `docs/08-aset.md`)
- Domain final (asumsi: `https://bsng.pediaversal.my.id/chapter01/`)
