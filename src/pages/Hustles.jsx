import OfferGrid from "../components/OfferGrid";
import { hustleIdeas } from "../data/allDeals";

export default function Hustles() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <OfferGrid
        title="💡 Side Hustle Ideas"
        items={hustleIdeas}
      />
    </main>
  );
}
