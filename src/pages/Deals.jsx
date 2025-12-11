// src/pages/Deals.jsx
import React from "react";
import { allMixedDeals } from "../data/allDeals";

export default function Deals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        🔥 Money Maker Deals 🔥
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allMixedDeals.map((deal, index) => (
          <a
            key={index}
            href={deal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-md hover:shadow-xl transition rounded-lg p-6 border hover:border-indigo-500"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {deal.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {deal.desc}
            </p>

            <span className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md">
              View Deal →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
