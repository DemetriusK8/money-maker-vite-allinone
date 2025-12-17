import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deals" element={<Deals />} />
    </Routes>
  );
}

