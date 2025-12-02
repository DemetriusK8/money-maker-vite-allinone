import React, { useEffect, useState } from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';
import axios from 'axios';
import { allMixedDeals } from '../data/allDeals';

export default function AutoDeals() {

  const [autoDeals, setAutoDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await axios.get('https://api.publicapis.org/entries');
        const sample = (res.data.entries || [])
          .slice(0, 6)
          .map((e, i) => ({
            title: e.API || ('Offer ' + i),
            desc: e.Description,
            url: e.Link || 'https://example.com'
          }));

        setAutoDeals(sample);

      } catch (err) {
        console.warn('Auto deals API error:', err);
      }
    };

    fetchDeals();
    const id = setInterval(fetchDeals, 1000 * 60 * 15);
    return () => clearInterval(id);
  }, []);

  // Combine auto-fetch + affiliate list
  const combined = [...autoDeals, ...allMixedDeals];

  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="1414141414" />
      </div>

      {/* AUTO + AFFILIATE DEALS */}
      <OfferGrid title="Auto-Updating Deals + Affiliate Offers" items={combined} />

      {/* MID AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="1515151515" />
      </div>

      <p className="text-gray-600 mt-6 mb-6">
        This page includes automatically updated offers and mixed affiliate deals. Replace URLs
        inside <code>src/data/allDeals.js</code> with your real affiliate URLs.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="1616161616" />
      </div>

    </div>
  );
}
