// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Deals from './pages/Deals';
import Trending from './pages/Trending';
import Hustles from './pages/Hustles';
import AutoDeals from './pages/AutoDeals';
import AdSensePanel from './components/AdSensePanel';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* TOP NAV */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Money Maker Hub
          </Link>

          <div className="hidden sm:flex space-x-6 text-sm font-medium">
            <Link to="/deals" className="hover:text-indigo-600">
              Deals
            </Link>
            <Link to="/trending" className="hover:text-indigo-600">
              Trending
            </Link>
            <Link to="/hustles" className="hover:text-indigo-600">
              Hustles
            </Link>
            <Link to="/auto" className="hover:text-indigo-600">
              Auto-Deals
            </Link>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/hustles" element={<Hustles />} />
          <Route path="/auto" element={<AutoDeals />} />
        </Routes>
      </div>

      {/* AD PANEL + MOBILE NAV */}
      <AdSensePanel />
      <BottomNav />
    </div>
  );
}
