import BottomNav from './components/BottomNav';
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
          <Link to="/" className="text-xl font-bold">Money Maker Hub</Link>

          <div className="space-x-4">
            <Link to="/deals" className="hover:underline">Deals</Link>
            <Link to="/trending" className="hover:underline">Trending</Link>
            <Link to="/hustles" className="hover:underline">Hustles</Link>
            <Link to="/auto" className="hover:underline">Auto-Deals</Link>
          </div>
        </div>
      </nav>

      {/* PAGE ROUTES */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/hustles" element={<Hustles />} />
          <Route path="/auto" element={<AutoDeals />} />
        </Routes>
        <BottomNav />
      </div>

      {/* Ad Panel Insert */}
      <AdSensePanel />
    </div>
  );
}
