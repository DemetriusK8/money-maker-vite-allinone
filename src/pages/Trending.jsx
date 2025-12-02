import React from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';

const items = [
  { 
    title: 'TikTok Viral Products', 
    desc: 'Promote viral finds with affiliate links', 
    url: 'https://amazon.com' 
  },
  { 
    title: 'Etsy Trending', 
    desc: 'Handmade & unique product referrals', 
    url: 'https://etsy.com' 
  }
];

export default function Trending() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="6666666666" />
      </div>

      {/* MAIN CONTENT GRID */}
      <OfferGrid title="Trending Now" items={items} />

      {/* MID CONTENT AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="7777777777" />
      </div>

      {/* SEO TEXT FOR ADSENSE APPROVAL */}
      <p className="text-gray-600 mt-6 mb-6">
        These trending items are curated from platforms like TikTok and Etsy.
        Add your own affiliate URLs to earn commissions from viral products,
        trending crafts, and fast-moving online niches.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="8888888888" />
      </div>

    </div>
  );
}
