// src/components/BottomNav.jsx
import { NavLink } from "react-router-dom";
import { Home, Flame, Briefcase, Settings, BadgeDollarSign } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white shadow-2xl border-t border-gray-700 z-50 flex justify-around py-3 md:hidden">
      
      <NavLink to="/" className="flex flex-col items-center hover:text-[#FFD700]">
        <Home size={22} />
        <span className="text-xs mt-1">Home</span>
      </NavLink>

      <NavLink to="/deals" className="flex flex-col items-center hover:text-[#FFD700]">
        <BadgeDollarSign size={22} />
        <span className="text-xs mt-1">Deals</span>
      </NavLink>

      <NavLink to="/trending" className="flex flex-col items-center hover:text-[#FFD700]">
        <Flame size={22} />
        <span className="text-xs mt-1">Trending</span>
      </NavLink>

      <NavLink to="/hustles" className="flex flex-col items-center hover:text-[#FFD700]">
        <Briefcase size={22} />
        <span className="text-xs mt-1">Hustles</span>
      </NavLink>

      <NavLink to="/auto" className="flex flex-col items-center hover:text-[#FFD700]">
        <Settings size={22} />
        <span className="text-xs mt-1">Auto</span>
      </NavLink>

    </nav>
  );
}
