import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/deals" style={{ marginRight: 12 }}>Deals</Link>
      <Link to="/trending" style={{ marginRight: 12 }}>Trending</Link>
      <Link to="/hustles">Hustles</Link>
    </nav>
  );
}
