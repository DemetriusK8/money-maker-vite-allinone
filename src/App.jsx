import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";

function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
        background: "#111",
        color: "#fff",
      }}
    >
      <Link style={{ color: "#fff" }} to="/">Home</Link>
      <Link style={{ color: "#fff" }} to="/deals">Deals</Link>
    </nav>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div style={{ paddingBottom: 70 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </div>
      <BottomNav />
    </HashRouter>
  );
}
