import { HashRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home works</h1>;
}

function Deals() {
  return <h1>Deals works</h1>;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </HashRouter>
  );
}
