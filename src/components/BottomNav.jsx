// src/components/BottomNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const linkBase =
  'flex flex-col items-center justify-center text-xs font-medium';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-gray-200 shadow-sm sm:hidden">
      <div className="max-w-3xl mx-auto flex justify-between px-4 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? 'text-indigo-600' : 'text-gray-500'}`
          }
        >
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/deals"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? 'text-indigo-600' : 'text-gray-500'}`
          }
        >
          <span>Deals</span>
        </NavLink>

        <NavLink
          to="/trending"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? 'text-indigo-600' : 'text-gray-500'}`
          }
        >
          <span>Trending</span>
        </NavLink>

        <NavLink
          to="/hustles"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? 'text-indigo-600' : 'text-gray-500'}`
          }
        >
          <span>Hustles</span>
        </NavLink>

        <NavLink
          to="/auto"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? 'text-indigo-600' : 'text-gray-500'}`
          }
        >
          <span>Auto-Deals</span>
        </NavLink>
      </div>
    </nav>
  );
}
