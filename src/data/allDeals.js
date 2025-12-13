// src/data/allDeals.js

// 🔥 MAIN OFFERS
export const mainOffers = [
  {
    id: "ikaria",
    title: "Ikaria Lean Belly Juice",
    desc: "Exotic nutrients that target stubborn belly fat.",
    network: "ClickBank",
    payout: "$133+ per sale",
    url: "https://7479dis3w94lek25hi7hh-6pef.hop.clickbank.net",
  },
  {
    id: "smoothie",
    title: "The Smoothie Diet",
    desc: "21-day fat-burning smoothie system.",
    network: "ClickBank",
    payout: "$25–$40 per sale",
    url: "https://8f2fc614y6cncx5hrj3pr0pb31.hop.clickbank.net",
  },
];

// 🔥 TRENDING OFFERS
export const trendingOffers = [...mainOffers];

// 🔥 SIDE HUSTLES
export const hustleIdeas = [
  {
    id: "tiktok",
    title: "TikTok Faceless Videos",
    desc: "Create viral clips without showing your face.",
    url: "/go/smoothie",
  },
];

// 🔥 AUTO DEALS
export const autoDeals = [
  {
    id: "dashcam",
    title: "Car Dash Cam",
    desc: "High-demand safety gadget.",
    url: "/go/ikaria",
  },
];

// 🔥 COMBINED (used by Go.jsx)
export const allMixedDeals = [
  ...mainOffers,
  ...trendingOffers,
  ...hustleIdeas,
  ...autoDeals,
];
