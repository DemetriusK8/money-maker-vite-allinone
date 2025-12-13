import React from "react";
import { mainOffers } from "../data/allDeals";

export default function Deals() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🔥 Deals</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mainOffers.map((offer) => (
          <a
            key={offer.id}
            href={offer.url}
            target="_blank"
            className="block p-4 bg-white rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p className="text-gray-600">{offer.desc}</p>
            <p className="mt-2 text-sm font-bold">{offer.payout}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
