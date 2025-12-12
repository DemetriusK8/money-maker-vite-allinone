// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { mainOffers } from "../data/allDeals";
export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-br from-gray-900 via-black to-[#C8A951] text-white shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-md">
          Make Money Online. Faster. 🚀
        </h1>

        <p className="text-lg max-w-2xl mx-auto opacity-90 mb-10 font-light">
          The smartest
