import { amazonDeals } from '../data/allDeals';

export default function AutoDeals() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        🚗 Auto & Gadget Deals
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {amazonDeals.map((deal, idx) => (
          <a
            key={idx}
            href={deal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow rounded-lg border hover:shadow-xl p-6 transition hover:border-indigo-500"
          >
            <h2 className="text-lg font-semibold text-gray-900">{deal.title}</h2>
            <p className="text-gray-600 text-sm mt-2 mb-4">{deal.desc}</p>
            <span className="text-indigo-600 font-medium hover:underline">
              Shop Now →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
