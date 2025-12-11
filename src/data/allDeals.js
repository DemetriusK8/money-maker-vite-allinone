// src/data/allDeals.js

// 🔥 MAIN CLICKBANK OFFERS
export const mainOffers = [
  {
    id: 'ikaria',
    title: 'Ikaria Lean Belly Juice',
    desc: 'Powerful exotic nutrients that target stubborn belly fat and support healthy weight loss.',
    network: 'ClickBank',
    badge: '#1 Fat Loss Pick',
    payout: '$133+ avg/sale',
    url: 'https://7479dis3w94lek25hi7hh-6pef.hop.clickbank.net',
  },
  {
    id: 'smoothie',
    title: 'The Smoothie Diet – 21-Day Rapid Weight Loss Program',
    desc: 'Done-for-you fat-burning smoothie plans that help users lose weight fast.',
    network: 'ClickBank',
    badge: 'Evergreen',
    payout: '$25–$40 per sale',
    url: 'https://YOUR_SMOOTHIE_DIET_HOPLINK_HERE',
  },
  {
    id: 'leanbiome',
    title: 'LeanBiome – Gut Health Weight Loss',
    desc: 'Unique “lean bacteria” blend that targets stubborn fat through gut health.',
    network: 'ClickBank',
    badge: 'High Gravity',
    payout: '$100+ per sale',
    url: 'https://YOUR_LEANBIOME_HOPLINK_HERE',
  },
];

// ⚡ EASY CPA OFFERS (placeholders – swap URLs for your network links)
export const cpaOffers = [
  {
    id: 'iphone',
    title: 'Win a Free iPhone 15',
    desc: 'Simple email submit sweepstake – perfect for cold traffic or social clicks.',
    network: 'CPA Network',
    badge: 'Easy Convert',
    payout: '$2–$4 CPA',
    url: 'https://YOUR_IPHONE_CPA_LINK_HERE',
  },
  {
    id: 'walmart',
    title: '$1000 Walmart Gift Card',
    desc: 'High-converting gift card offer. Great for US traffic.',
    network: 'CPA Network',
    badge: 'Mass Appeal',
    payout: '$1–$3 CPA',
    url: 'https://YOUR_WALMART_CPA_LINK_HERE',
  },
];

// 🎨 FIVERR AFFILIATE DEALS
export const hustleIdeas = [
  {
    id: 'logo',
    title: 'Start a Logo Design Side Hustle',
    desc: 'Send people to Fiverr logo designers while you earn commissions on every order.',
    network: 'Fiverr',
    badge: 'Beginner-Friendly',
    payout: 'Up to $150 CPA',
    url: 'https://YOUR_FIVERR_LOGO_AFFILIATE_LINK_HERE',
  },
  {
    id: 'webdev',
    title: 'Done-For-You Website Builds',
    desc: 'Recommend web developers on Fiverr to people who need sites built.',
    network: 'Fiverr',
    badge: 'High Ticket',
    payout: 'Tiered payouts',
    url: 'https://YOUR_FIVERR_WEBDEV_AFFILIATE_LINK_HERE',
  },
];

// 🚗 AUTO & COMMERCE DEALS (Amazon etc.)
export const autoDeals = [
  {
    id: 'dashcam',
    title: 'Best-Selling Dash Cam on Amazon',
    desc: 'Turn regular drivers into smart drivers with a top-rated dash cam.',
    network: 'Amazon',
    badge: 'Trending Gadget',
    payout: 'Amazon commission',
    url: 'https://YOUR_AMAZON_DASHCAM_AFFILIATE_LINK_HERE',
  },
  {
    id: 'vacuum',
    title: 'Viral Car Vacuum Cleaner',
    desc: 'Cheap, viral, and loved by TikTok – a perfect impulse buy.',
    network: 'Amazon',
    badge: 'Impulse Buy',
    payout: 'Amazon commission',
    url: 'https://YOUR_AMAZON_VACUUM_AFFILIATE_LINK_HERE',
  },
];

// ⭐ What each page will use
export const trendingDeals = [
  mainOffers[0], // Ikaria
  mainOffers[1], // Smoothie Diet
  cpaOffers[0],  // iPhone
];

export const allOffers = [
  ...mainOffers,
  ...cpaOffers,
  ...hustleIdeas,
  ...autoDeals,
];
