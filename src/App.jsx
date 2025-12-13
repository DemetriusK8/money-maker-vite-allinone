import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1 style={{ padding: 40 }}>Home is working</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
