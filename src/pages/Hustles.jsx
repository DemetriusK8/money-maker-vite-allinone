import React from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';
import { allMixedDeals } from '../data/allDeals';

export default function Hustles() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="1010101010" />
      </div>

      {/* MIXED HUSTLES & OFFERS */}
      <OfferGrid title="Side Hustles & Affiliate Opportunities" items={allMixedDeals} />

      {/* MID AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="1212121212" />
      </div>

      <p className="text-gray-600 mt-6 mb-6">
        This section combines profitable side hustles and affiliate offers. Add your referral, CPA,
        or affiliate links to <code>src/data/allDeals.js</code> to start generating income.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="1313131313" />
      </div>

    </div>
  );
}
