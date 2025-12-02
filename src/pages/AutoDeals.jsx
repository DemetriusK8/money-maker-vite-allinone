import React, { useEffect, useState } from 'react';
import OfferGrid from '../components/OfferGrid';
import AdSensePanel from '../components/AdSensePanel';
import axios from 'axios';

export default function AutoDeals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {

    const fetchDeals = async () => {
      try {
        // Public placeholder API — replace with your real affiliate feed later
        const res = await axios.get('https://api.publicapis.org/entries');

        // Transform entries into offer cards
        const sample = (res.data.entries || [])
          .slice(0, 6)
          .map((e, i) => ({
            title: e.API || ('Offer ' + i),
            desc: e.Description,
            url: e.Link || 'https://example.com'
          }));

        setDeals(sample);

      } catch (e) {
        console.warn('fetch deals error:', e);
      }
    };

    fetchDeals();

    // Re-fetch every 15 minutes
    const id = setInterval(fetchDeals, 1000 * 60 * 15);
    return () => clearInterval(id);

  }, []);

  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INLINE AD */}
      <div className="my-6 flex justify-center">
        <AdSensePanel slot="1414141414" />
      </div>

      {/* AUTO-UPDATING DEAL GRID */}
      <OfferGrid title="Auto-Updating Affiliate Deals" items={deals} />

      {/* MID CONTENT AD */}
      <div className="my-10 flex justify-center">
        <AdSensePanel slot="1515151515" />
      </div>

      {/* SEO + APPROVAL CONTENT */}
      <p className="text-gray-600 mt-6 mb-6">
        These deals are automatically updated using a live API feed. You can replace this 
        sample data with a real affiliate feed, RSS import, or private partner API to generate 
        passive income from constantly refreshed offers. Frequent updates improve both user 
        engagement and search visibility.
      </p>

      {/* BOTTOM AD */}
      <div className="my-8 flex justify-center">
        <AdSensePanel slot="1616161616" />
      </div>

    </div>
  );
}

