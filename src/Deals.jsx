import React from "react";
import { mainOffers } from "../data/allDeals";

export default function Deals() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔥 Top Partner Deals</h1>

      <div className="grid gap-4">
        {mainOffers.map((offer) => (
          <div key={offer.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p>{offer.desc}</p>
            <p className="text-sm mt-2">Payout: {offer.payout}</p>

            <a
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Offer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
