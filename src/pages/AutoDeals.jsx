import React from "react";
import { autoDeals } from "../data/allDeals";

export default function AutoDeals() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🚗 Auto Deals</h1>

      {autoDeals.map((deal) => (
        <div key={deal.id} className="p-4 mb-4 bg-white rounded shadow">
          <h2 className="font-semibold">{deal.title}</h2>
          <p>{deal.desc}</p>
        </div>
      ))}
    </main>
  );
}
