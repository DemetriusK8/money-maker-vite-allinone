// src/pages/Trending.jsx
import { trendingOffers } from "../data/allDeals";

export default function Trending() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🔥 Trending Offers</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {trendingOffers.map((offer) => (
          <div key={offer.id} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p className="text-gray-600">{offer.desc}</p>

            <p className="mt-2 text-sm">
              <strong>Network:</strong> {offer.network}
            </p>
            <p className="text-sm">
              <strong>Payout:</strong> {offer.payout}
            </p>

            <a
              href={offer.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              View Offer →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
