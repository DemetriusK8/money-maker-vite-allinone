import React from "react";
import { allDeals } from "../data/allDeals";

const Deals = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🔥 Hot Deals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {allDeals.map((deal, index) => (
          <a
            key={index}
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg shadow p-4 hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{deal.title}</h2>
            <p className="text-gray-700 mb-4">{deal.description}</p>
            <span className="text-blue-600 font-bold">Get Deal →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Deals;
