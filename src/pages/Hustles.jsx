// src/pages/Hustles.jsx
import React from "react";
import { hustleIdeas } from "../data/allDeals";

export default function Hustles() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pb-24">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          💼 Side Hustle Ideas
        </h1>
        <p className="text-gray-600">
          Pair simple hustles with affiliate offers so you can earn without
          creating your own products.
        </p>
      </header>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {hustleIdeas.map((hustle) => (
    <div
      key={hustle.id}
      className="bg-white p-5 rounded-xl shadow"
    >
      <h2 className="text-xl font-semibold mb-2">
        {hustle.title}
      </h2>
      <p className="text-gray-600">
        {hustle.desc}
      </p>
    </div>
  ))}
</div>


function HustleCard({ idea }) {
  return (
    <a
      href={idea.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-indigo-200 transition"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-1">{idea.title}</h2>
      <p className="text-sm text-gray-600 mb-3">{idea.desc}</p>
      <p className="text-xs text-gray-500 mb-2">
        Network: {idea.network} • Payout: {idea.payout}
      </p>
      <span className="inline-flex items-center text-sm font-semibold text-indigo-600">
        Learn More &rarr;
      </span>
    </a>
  );
}
