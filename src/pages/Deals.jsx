// src/pages/Deals.jsx
import { allMixedDeals } from '../data/allDeals';

export default function Deals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        🔥 Money Maker Deals
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allMixedDeals.map((deal, index) => (
          <a
            key={index}
            href={deal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-5 border border-gray-100 hover:border-[#C8A951]"
          >
            {/* IMAGE */}
            {deal.image && (
              <img
                src={deal.image}
                alt={deal.title}
                className="rounded-lg w-full h-44 object-cover mb-4"
              />
            )}

            {/* TITLE */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {deal.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {deal.desc}
            </p>

            {/* CTA */}
            <span className="inline-block bg-[#FFD700] hover:bg-[#C8A951] text-gray-900 font-semibold px-4 py-2 rounded-md shadow-md transition">
              👉 View Deal
            </span>
          </a>
        ))}
      </div>

    </main>
  );
}
