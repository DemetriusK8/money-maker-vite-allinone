import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Trending from "./pages/Trending";
import Hustles from "./pages/Hustles";

export default function App() {
  return (
    <HashRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/hustles" element={<Hustles />} />
      </Routes>
    </HashRouter>
  );
}
