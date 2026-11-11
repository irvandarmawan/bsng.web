// Konfigurasi situs BSNG.
// Situs brand di root (/), halaman produk di /chapter01/, dashboard internal di /dashboard/.
// Prefiks ada di src/config/base.ts (bukan BASE_URL Astro).
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bsng.pediaversal.my.id',
  trailingSlash: 'always',

  // Astro 7 mengecilkan whitespace antar elemen inline (aturan JSX).
  // Situs ini bertumpu pada tipografi rapat, jadi kompresi dimatikan.
  compressHTML: false,

  build: { format: 'directory' },
});
