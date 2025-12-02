import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Deals from './pages/Deals';
import Trending from './pages/Trending';
import Hustles from './pages/Hustles';
import AutoDeals from './pages/AutoDeals';

import AdSensePanel from './components/AdSensePanel';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVIGATION */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Money-Maker Hub</Link>
          <div className="space-x-4">
            <Link to="/deals" className="hover:underline">Deals</Link>
            <Link to="/trending" className="hover:underline">Trending</Link>
            <Link to="/hustles" className="hover:underline">Hustles</Link>
            <Link to="/auto" className="hover:underline">Auto-Deals</Link>
          </div>
        </div>
      </nav>

      {/* HEADER AD */}
      <div className="mt-4 flex justify-center">
        <AdSensePanel slot="1111111111" />
      </div>

      {/* MAIN CONTENT WITH SIDEBAR LAYOUT */}
      <div className="flex-grow container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">

        {/* MAIN ROUTES */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/hustles" element={<Hustles />} />
            <Route path="/auto" element={<AutoDeals />} />
          </Routes>
        </div>

        {/* SIDEBAR AD — desktop only */}
        <aside className="hidden lg:block">
          <AdSensePanel slot="4444444444" style={{ maxWidth: 300, height: 600 }} />
        </aside>

      </div>

      {/* FOOTER AD */}
      <div className="flex justify-center mb-4">
        <AdSensePanel slot="2222222222" />
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t py-4 text-center text-sm">
        © {new Date().getFullYear()} Money-Maker Hub — Powered by AdSense & Affiliate Deals
      </footer>

      {/* MOBILE STICKY AD */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 shadow-lg md:hidden z-50">
        <AdSensePanel slot="5555555555" style={{ maxWidth: 320, height: 50 }} />
      </div>

    </div>
  );
}
