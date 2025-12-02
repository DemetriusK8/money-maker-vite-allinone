import React from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';
import { allMixedDeals } from '../data/allDeals';

export default function Trending() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="6666666666" />
      </div>

      {/* MIXED AFFILIATE DEALS */}
      <OfferGrid title="Trending Offers Across All Networks" items={allMixedDeals} />

      {/* MID AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="7777777777" />
      </div>

      <p className="text-gray-600 mt-6 mb-6">
        These trending offers include viral, popular, and high-earning affiliate opportunities
        from multiple networks. Update your affiliate links inside 
        <code>src/data/allDeals.js</code>.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="8888888888" />
      </div>

    </div>
  );
}

