import OfferGrid from "../components/OfferGrid";
import { trendingOffers } from "../data/allDeals";

export default function Trending() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <OfferGrid
        title="🔥 Trending Offers"
        items={trendingOffers}
      />
    </main>
  );
}
