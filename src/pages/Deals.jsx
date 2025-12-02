import React from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';

const items = [
  { 
    title: 'Amazon Daily Deals', 
    desc: 'Add your affiliate links for Amazon products', 
    url: 'https://amazon.com' 
  },
  { 
    title: 'Best Buy Deals', 
    desc: 'Electronics referral offers', 
    url: 'https://bestbuy.com' 
  }
];

export default function Deals() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="3333333333" />
      </div>

      {/* MAIN CONTENT */}
      <OfferGrid title="Affiliate Deals" items={items} />

      {/* MID CONTENT AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="4444444444" />
      </div>

      {/* EXTRA CONTENT / SEO TEXT */}
      <p className="text-gray-600 mt-6 mb-6">
        These are sample affiliate deal entries. Replace them with real money-making offers, 
        referral links, and promotions from Amazon, BestBuy, and other platforms you manage.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="5555555555" />
      </div>

    </div>
  );
}
