// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Trending from "./pages/Trending";
import Hustles from "./pages/Hustles";
import AutoDeals from "./pages/AutoDeals";
import Go from "./pages/Go";

import AdSensePanel from "./components/AdSensePanel";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* TOP NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight">
            Money Maker Hub
          </Link>

          <nav className="space-x-4 hidden sm:block">
            <Link to="/deals" className="hover:underline">
              Deals
            </Link>
            <Link to="/trending" className="hover:underline">
              Trending
            </Link>
            <Link to="/hustles" className="hover:underline">
              Hustles
            </Link>
            <Link to="/auto" className="hover:underline">
              Auto-Deals
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/hustles" element={<Hustles />} />
          <Route path="/auto" element={<AutoDeals />} />

          {/* NEW CLOAKED LINK ROUTE */}
          <Route path="/go/:slug" element={<Go />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Ad panel at bottom of every page */}
        <AdSensePanel />
      </main>

      {/* MOBILE BOTTOM NAV */}
      <BottomNav />
    </div>
  );
}
