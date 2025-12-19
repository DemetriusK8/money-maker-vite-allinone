import OfferGrid from "../components/OfferGrid";
import { hustleIdeas } from "../data/allDeals";

export default function Hustles() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        💼 Side Hustle Ideas
      </h1>

      <p className="text-gray-600 mb-8">
        Practical, beginner-friendly ways to start earning online.
      </p>

      <OfferGrid
        title="🚀 Hustles You Can Start Today"
        items={hustleIdeas}
      />
    </main>
  );
}
