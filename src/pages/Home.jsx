import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-[#C8A951] text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Make Money Online. Smarter. Faster. 🚀
      </h1>

      <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90 mb-10">
        Discover legit, hand-picked offers, side hustles, and viral products 
        that turn your clicks into real income — even if you’re just getting started.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/deals"
          className="bg-[#FFD700] text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#C8A951] transition"
        >
          Browse Money-Maker Deals →
        </Link>

        <Link
          to="/hustles"
          className="border border-white/60 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition"
        >
          Explore Side Hustles
        </Link>
      </div>
    </main>
  );
}
