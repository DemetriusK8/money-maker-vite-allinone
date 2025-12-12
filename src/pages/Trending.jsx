// src/pages/Trending.jsx
import React from 'react';
import { trendingOffers } from "../data/allDeals.js";

export default function Trending() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pb-24">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📈 Trending Right Now
        </h1>
        <p className="text-gray-600">
          Offers with strong gravity, hype, or buzz right now. Great for social,
          content, and email traffic.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trendingDeals.map((offer) => (
          <TrendingCard key={offer.id} offer={offer} />
        ))}
      </div>
    </main>
  );
}

function TrendingCard({ offer }) {
  return (
    <a
      href={offer.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-indigo-200 transition"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h2>
      <p className="text-sm text-gray-600 mb-3">{offer.desc}</p>
      <p className="text-xs text-gray-500 mb-2">
        Network: {offer.network} • Badge: {offer.badge}
      </p>
      <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
        Promote This &rarr;
      </span>
    </a>
  );
}
