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
  <Link to="/deals" style={{ marginRight: 10 }}>Deals</Link>
  <Link to="/trending" style={{ marginRight: 10 }}>Trending</Link>
  <Link to="/hustles" style={{ marginRight: 10 }}>Hustles</Link>
  <Link to="/auto-deals">Auto Deals</Link>
</nav>


   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/deals" element={<Deals />} />
  <Route path="/trending" element={<h1>🔥 Trending Page</h1>} />
  <Route path="/hustles" element={<h1>🚀 Hustles Page</h1>} />
  <Route path="/auto-deals" element={<h1>🚗 Auto Deals Page</h1>} />
</Routes>

