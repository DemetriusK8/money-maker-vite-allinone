import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "./pages/Deals";

function Home() {
  return <h1 style={{ padding: 40 }}>Home is working</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </BrowserRouter>
  );
}
