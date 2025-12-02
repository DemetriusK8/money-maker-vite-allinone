import React from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';

const items = [
  { 
    title: 'Fiverr Referrals', 
    desc: 'Refer clients & freelancers', 
    url: 'https://fiverr.com' 
  },
  { 
    title: 'UserTesting', 
    desc: 'Get paid for testing websites/apps', 
    url: 'https://usertesting.com' 
  }
];

export default function Hustles() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="1010101010" />
      </div>

      {/* MAIN CONTENT GRID */}
      <OfferGrid title="Side Hustles" items={items} />

      {/* MID CONTENT AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="1212121212" />
      </div>

      {/* SEO TEXT FOR APPROVAL + VALUE */}
      <p className="text-gray-600 mt-6 mb-6">
        These are high-earning, proven side hustles that work for beginners and experienced
        freelancers alike. Add your own referral links, affiliate offers, or custom landing
        pages to start generating passive income from trusted platforms like Fiverr and 
        UserTesting.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="1313131313" />
      </div>

    </div>
  );
}
