import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const linkClass =
    "flex-1 text-center py-3 text-sm font-semibold text-gray-600";

  const activeClass =
    "text-indigo-600 border-t-2 border-indigo-600 bg-indigo-50";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/deals"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Deals
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Trending
      </NavLink>

      <NavLink
        to="/hustles"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
      >
        Hustles
      </NavLink>
    </nav>
  );
}
