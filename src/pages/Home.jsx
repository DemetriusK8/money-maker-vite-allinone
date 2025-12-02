
import React from 'react';
import AdSensePanel from '../components/AdSensePanel';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">

      {/* Top Section */}
      <h1 className="text-3xl font-bold mb-4">Start Earning Today</h1>
      <p className="text-gray-600 mb-6">
        Use affiliate links, referrals, and AdSense to monetize traffic. 
        This Vite + Tailwind starter is optimized for fast builds and deployment.
      </p>

      {/* TOP INLINE AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="7777777777" />
      </div>

      {/* CONTENT AREA */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Explore the best money-making opportunities carefully curated to help you earn fast.
        Whether you're launching a side hustle or optimizing affiliate income, this platform
        gives you the tools you need to succeed.
      </p>

      {/* MID CONTENT AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="8888888888" />
      </div>

      {/* BOTTOM TEXT / CTA */}
      <p className="text-gray-700 mb-6">
        Start browsing deals, trending offers, and proven hustles. 
        Your next income stream might be one click away.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="9999999999" />
      </div>

    </div>
  );
}
