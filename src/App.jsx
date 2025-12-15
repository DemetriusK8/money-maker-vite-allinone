import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function Deals() {
  return <h1>💰 Deals Page</h1>;
}

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/deals">Deals</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </div>
  );
}
