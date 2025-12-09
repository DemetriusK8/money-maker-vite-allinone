import { allMixedDeals } from '../data/allDeals';

export default function Trending() {
  const trending = allMixedDeals.slice(0, 6);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
        🚀 Trending Opportunities
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trending.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow rounded-lg border hover:shadow-xl transition p-6 hover:border-indigo-500"
          >
            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
            <p className="text-gray-600 text-sm mt-2 mb-4">{item.desc}</p>
            <span className="text-indigo-600 font-medium hover:underline">
              View Deal →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
