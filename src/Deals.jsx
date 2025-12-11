import React from "react";
import { allMixedDeals } from "../data/allDeals";

export default function Deals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
        🔥 Money Maker Deals Hub
      </h1>

      {/* Deals Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allMixedDeals.map((deal, index) => (
          <a
            key={index}
            href={deal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition p-6 border border-gray-200 hover:border-indigo-500"
          >
            {/* Deal Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {deal.title}
            </h2>

            {/* Deal Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {deal.desc}
            </p>

            {/* Button */}
            <span className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md">
              View Deal →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
