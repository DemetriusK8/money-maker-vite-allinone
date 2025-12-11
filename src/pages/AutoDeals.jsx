// src/pages/AutoDeals.jsx
import React from 'react';
import { autoDeals } from '../data/allDeals';

export default function AutoDeals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pb-24">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🚗 Auto & Gadget Deals
        </h1>
        <p className="text-gray-600">
          Car gadgets, viral tools, and accessories that are easy to promote on
          TikTok, Reels, or YouTube Shorts.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {autoDeals.map((deal) => (
          <AutoCard key={deal.id} deal={deal} />
        ))}
      </div>
    </main>
  );
}

function AutoCard({ deal }) {
  return (
    <a
      href={deal.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-indigo-200 transition"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-1">{deal.title}</h2>
      <p className="text-sm text-gray-600 mb-3">{deal.desc}</p>
      <p className="text-xs text-gray-500 mb-2">
        Network: {deal.network} • Payout: {deal.payout}
      </p>
      <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
        View Product &rarr;
      </span>
    </a>
  );
}
