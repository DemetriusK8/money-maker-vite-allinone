import React from "react";
import { trendingOffers } from "../data/allDeals";

export default function Trending() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🔥 Trending</h1>

      {trendingOffers.map((offer) => (
        <div key={offer.id} className="mb-4 p-4 bg-white rounded shadow">
          <h2 className="font-semibold">{offer.title}</h2>
          <p>{offer.desc}</p>
        </div>
      ))}
    </main>
  );
}
