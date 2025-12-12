// src/pages/Deals.jsx
import React from "react";
import { mainOffers } from "../data/allDeals.js";
const Deals = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔥 Top Partner Deals</h1>

      <div className="grid grid-cols-1 gap-4">
        {mainOffers.map((offer) => (
          <div key={offer.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p className="text-gray-600">{offer.desc}</p>

            <p className="text-sm mt-2">
              <strong>Network:</strong> {offer.network}
            </p>
            <p className="text-sm">
              <strong>Payout:</strong> {offer.payout}
            </p>

            <a
             href={`/go/${offer.id}`}
              target="_blank"
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              View Offer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
