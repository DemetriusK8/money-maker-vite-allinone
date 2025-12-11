// src/pages/Deals.jsx
import React from 'react';
import { allOffers } from '../data/allDeals';

export default function Deals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pb-24">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🔥 Money Maker Deals
        </h1>
        <p className="text-gray-600">
          These are curated affiliate & CPA offers you can promote to start
          earning commissions. Always read the offer page and network rules
          before sending traffic.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allOffers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </main>
  );
}

function OfferCard({ offer }) {
  return (
    <a
      href={offer.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-indigo-200 transition"
    >
      <p className="text-xs font-semibold text-indigo-600 mb-1">
        {offer.badge}
      </p>
      <h2 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h2>
      <p className="text-sm text-gray-600 mb-3">{offer.desc}</p>
      <p className="text-xs text-gray-500 mb-2">
        Network: {offer.network} • Payout: {offer.payout}
      </p>
      <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
        View Offer &rarr;
      </span>
    </a>
  );
}
