import { HashRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <p>Welcome to Money Maker 💰</p>
    </div>
  );
}

function Deals() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Deals Page</h1>
      <p>Affiliate deals will live here.</p>
    </div>
  );
}

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
