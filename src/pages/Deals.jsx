import React from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';
import { allMixedDeals } from '../data/allDeals';

export default function Deals() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="3333333333" />
      </div>

      {/* ALL DEALS FROM ALL NETWORKS */}
      <OfferGrid title="Affiliate Deals from All Networks" items={allMixedDeals} />

      {/* MID CONTENT AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="4444444444" />
      </div>

      <p className="text-gray-600 mt-6 mb-6">
        This page displays mixed affiliate offers, combining Amazon, ClickBank, Fiverr, CPA networks,
        Etsy, AliExpress, and more. Replace the URLs in <code>src/data/allDeals.js</code> with your own
        affiliate tracking links to start earning commissions.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="5555555555" />
      </div>

    </div>
  );
}
