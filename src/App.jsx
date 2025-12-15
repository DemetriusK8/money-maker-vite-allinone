import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Deals from "./Deals";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/deals" style={{ marginRight: 12 }}>Deals</Link>
        <Link to="/trending" style={{ marginRight: 12 }}>Trending</Link>
        <Link to="/hustles" style={{ marginRight: 12 }}>Hustles</Link>
        <Link to="/auto-deals">Auto Deals</Link>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/trending" element={<h1>🔥 Trending Page</h1>} />
          <Route path="/hustles" element={<h1>🚀 Hustles Page</h1>} />
          <Route path="/auto-deals" element={<h1>🚗 Auto Deals Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
