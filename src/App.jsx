import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Trending from "./pages/Trending";
import Hustles from "./pages/Hustles";
import AutoDeals from "./pages/AutoDeals";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/hustles" element={<Hustles />} />
        <Route path="/auto-deals" element={<AutoDeals />} />
      </Routes>

      <BottomNav />
    </>
  );
}

export default App;
