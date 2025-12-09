// src/data/allDeals.js

// ==========================
// CLICKBANK HIGH-TICKET DEALS
// ==========================
export const clickbankDeals = [
  {
    title: 'ProVen Weight Loss Offer',
    desc: 'Top trending ClickBank fitness offer with high payout.',
    url: 'https://hop.clickbank.net/?affiliate=YOURID&vendor=proven&pid=frontpage'
  },
  {
    title: '12 Minute Affiliate System',
    desc: 'High converting make-money-online system for beginners.',
    url: 'https://hop.clickbank.net/?affiliate=YOURID&vendor=12min&pid=funnelfront'
  }
];


// ==========================
// CPAGRIP — EASY CONVERSION DEALS
// ==========================
export const cpaOffers = [
  {
    title: 'Win a $1000 Walmart Gift Card',
    desc: 'Simple email submit CPA offer — very high conversions.',
    url: 'https://www.cpagrip.com/show.php?offer=12345'
  },
  {
    title: 'Get a Free iPhone 15 Trial',
    desc: 'Top performing sweepstakes CPA offer.',
    url: 'https://www.cpagrip.com/show.php?offer=67890'
  }
];


// ==========================
// FIVERR AFFILIATE DEALS
// ==========================
export const fiverrDeals = [
  {
    title: 'Hire a Logo Designer',
    desc: 'Perfect for new brands — Fiverr freelance logo designers.',
    url: 'https://go.fiverr.com/visit/?bta=00000&brand=fiverrcpa'
  },
  {
    title: 'Hire a Website Developer',
    desc: 'Popular Fiverr gig for entrepreneurs and small businesses.',
    url: 'https://go.fiverr.com/visit/?bta=00000&brand=fiverrcpa'
  }
];


// ==========================
// AMAZON STARTER DEALS
// ==========================
export const amazonDeals = [
  {
    title: 'Top Amazon Tech Gadgets',
    desc: 'Trending gadgets and accessories on Amazon.',
    url: 'https://www.amazon.com/s?k=tech+gadgets'
  },
  {
    title: 'Amazon Home Essentials',
    desc: 'Popular home products with strong sales.',
    url: 'https://www.amazon.com/s?k=home+essentials'
  }
];


// ==========================
// ETSY TRENDING DEALS
// ==========================
export const etsyDeals = [
  {
    title: 'Trending Handmade Gifts',
    desc: 'Popular Etsy handmade products and TikTok trending items.',
    url: 'https://www.etsy.com/market/trending_items'
  }
];


// ==========================
// ALIEXPRESS HOT PRODUCTS
// ==========================
export const aliDeals = [
  {
    title: 'AliExpress Hot & Viral Items',
    desc: 'Low-cost viral products perfect for side hustles.',
    url: 'https://www.aliexpress.us/w/wholesale-trending-products.html'
  }
];


// ==========================
// MASTER MIX — EVERYTHING TOGETHER
// ==========================
export const allMixedDeals = [
  ...clickbankDeals,
  ...cpaOffers,
  ...fiverrDeals,
  ...amazonDeals,
  ...etsyDeals,
  ...aliDeals
];

