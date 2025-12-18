import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";

export default function App() {
  return (
    <div>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/deals">Deals</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </div>
  );
}
