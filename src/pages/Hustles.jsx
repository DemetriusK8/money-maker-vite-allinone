// src/pages/Hustles.jsx
import React from "react";
import { mainOffers } from "../data/allDeals";

export default function Hustles() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          💼 Side Hustle Offers
        </h1>
        <p className="text-gray-600">
          Proven affiliate offers you can promote immediately.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mainOffers.map((offer) => (
          <a
            key={offer.id}
            href={offer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border"
          >
            <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{offer.desc}</p>

            <div className="text-sm">
              <p>
                <strong>Network:</strong> {offer.network}
              </p>
              <p>
                <strong>Payout:</strong> {offer.payout}
              </p>
            </div>

            <span className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Offer →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
