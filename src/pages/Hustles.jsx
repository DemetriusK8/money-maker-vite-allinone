import React from "react";
import { hustleIdeas } from "../data/allDeals";

export default function Hustles() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">💼 Hustles</h1>

      {hustleIdeas.map((idea) => (
        <a
          key={idea.id}
          href={idea.url}
          className="block p-4 mb-4 bg-white rounded shadow"
        >
          <h2 className="font-semibold">{idea.title}</h2>
          <p>{idea.desc}</p>
        </a>
      ))}
    </main>
  );
}
