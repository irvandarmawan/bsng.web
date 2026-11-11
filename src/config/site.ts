// Satu-satunya tempat data bisnis. Komponen mengimpor dari sini.
// Kontak via Instagram DM (@bsng.co); WhatsApp sengaja tidak dipakai.

export const SITE = {
  name: 'BSNG.',
  tagline: 'MAXIMUM NOISE.',
  chapter: '01',
  product: 'The Core Anthem',
  price: 159000,
  priceLabel: 'Rp159.000',

  // Shopee links
  shopeeProductUrl: 'https://id.shp.ee/pSwj3kid',
  shopeeShopUrl: 'https://id.shp.ee/fVxko2kt',
  // WhatsApp: tidak ada (kontak via Instagram DM @bsng.co)
  whatsapp: '',

  social: {
    instagram: 'https://instagram.com/bsng.co',
    tiktok: 'https://tiktok.com/@bsng.co',
    x: 'https://x.com/bsng.co',
  },
} as const;

export const hasShopee = SITE.shopeeProductUrl.length > 0;
export const hasWhatsApp = SITE.whatsapp.length > 0;
export const contactLink = SITE.social.instagram; // DM IG pengganti WA
export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const SIZES = [
  { size: 'S', chest: 45, length: 66 },
  { size: 'M', chest: 48, length: 68 },
  { size: 'L', chest: 50, length: 70 },
  { size: 'XL', chest: 52, length: 73 },
  { size: 'XXL', chest: 54, length: 75 },
] as const;
