// src/pages/Deals.jsx
import { Link } from "react-router-dom";
import { allMixedDeals } from "../data/allDeals";

export default function Deals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        🔥 Money Maker Deals
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Curated affiliate, CPA, Fiverr, Amazon, Etsy & AliExpress offers ready
        to promote.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allMixedDeals.map((deal, index) => {
          const hasSlug = !!deal.slug;
          const cloakedPath = hasSlug ? `/go/${deal.slug}` : null;

          return (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition rounded-lg p-6 border hover:border-indigo-500 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {deal.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {deal.desc}
                </p>
              </div>

              <div className="mt-6">
                {hasSlug ? (
                  <Link
                    to={cloakedPath}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md text-sm"
                  >
                    👉 View Deal
                  </Link>
                ) : (
                  <a
                    href={deal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md text-sm"
                  >
                    👉 View Deal
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
