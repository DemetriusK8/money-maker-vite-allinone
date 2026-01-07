// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LeadMagnet from '../components/LeadMagnet';
import { mainOffers } from "../data/allDeals";
import MailerLiteForm from "../components/MailerLiteForm";
export default function Home() {
  const topOffer = mainOffers[0]; // Ikaria

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 pb-24">
      {/* HERO */}
      <section className="text-center mb-16">
        <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">
          Money Maker Hub
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Start Earning Online <span className="text-indigo-600">Today</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I test affiliate offers, side hustles, and tools for you — then list
          the best ones in one place. Browse the deals, pick a hustle, and start
          building your next income stream.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/deals"
            className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Browse Today&apos;s Top Deals
          </Link>

          <a
            href={topOffer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold hover:border-indigo-500 hover:text-indigo-600 transition"
          >
            🔥 Try My #1 Fat-Loss Offer
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Some links are affiliate links. I may earn a commission at no extra
          cost to you.
        </p>
      </section>

      {/* QUICK NAV CARDS */}
      <section className="grid gap-6 md:grid-cols-4 mb-10">
        <HomeCard
          to="/deals"
          title="Money Maker Deals"
          desc="High-paying affiliate & CPA offers ready to promote."
        />
        <HomeCard
          to="/trending"
          title="Trending Offers"
          desc="What&apos;s hot right now across networks."
        />
        <HomeCard
          to="/hustles"
          title="Side Hustle Ideas"
          desc="Practical, low-cost ways to start earning."
        />
        <HomeCard
          to="/auto"
          title="Auto & Gadget Deals"
          desc="Car gadgets and products with viral demand."
        />
      </section>

      {/* FEATURED OFFER STRIP */}
      <section className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-left">
          <p className="text-xs font-semibold text-emerald-600 uppercase mb-1">
            Featured Offer
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {topOffer.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">{topOffer.desc}</p>
          <p className="text-xs text-gray-500">
            Network: {topOffer.network} • Payout: {topOffer.payout}
          </p>
        </div>
        <a
          href={topOffer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
        >
          View Offer &rarr;
        </a>
      </section>

      {/* LEAD MAGNET */}
      <LeadMagnet />
    </main>
  );
}
<MailerLiteForm />
function HomeCard({ to, title, desc }) {
  return (
    <Link
      to={to}
      className="block bg-white border border-gray-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md hover:border-indigo-200 transition"
    >
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
    </Link>
  );
}
