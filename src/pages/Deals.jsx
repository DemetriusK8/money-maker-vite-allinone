import OfferGrid from "../components/OfferGrid";
import { mainOffers } from "../data/allDeals";

export default function Deals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        💰 Money Maker Deals
      </h1>

      <p className="text-gray-600 mb-8">
        High-paying affiliate & CPA offers that actually convert.
      </p>

      <OfferGrid
        title="🔥 Top Paying Offers"
        items={mainOffers}
      />
    </main>
  );
}
