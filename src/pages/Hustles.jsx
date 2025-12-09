import { fiverrDeals, aliDeals } from '../data/allDeals';

export default function Hustles() {
  const hustles = [...fiverrDeals, ...aliDeals];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        💼 Smart Side Hustles
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hustles.map((hustle, i) => (
          <a
            key={i}
            href={hustle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-md rounded-lg border p-6 hover:shadow-xl transition hover:border-indigo-500"
          >
            <h2 className="text-lg font-semibold text-gray-900">{hustle.title}</h2>
            <p className="text-gray-600 text-sm mt-2 mb-4">{hustle.desc}</p>
            <span className="text-indigo-600 font-medium hover:underline">
              View Hustle →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
