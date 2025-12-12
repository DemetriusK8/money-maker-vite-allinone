import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3">
      <Link to="/deals">Deals</Link>
      <Link to="/trending">Trending</Link>
      <Link to="/hustles">Hustles</Link>
      <Link to="/auto-deals">Auto-Deals</Link>
    </nav>
  );
}
