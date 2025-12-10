// src/pages/Go.jsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allMixedDeals } from "../data/allDeals";

// Build a quick lookup: slug -> url
const slugToUrl = {};
allMixedDeals.forEach((deal) => {
  if (deal.slug) {
    slugToUrl[deal.slug] = deal.url;
  }
});

export default function Go() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const target = slugToUrl[slug];

    if (target) {
      // Redirect to the real money link
      window.location.href = target;
    } else {
      // If slug is invalid, send them back to deals
      navigate("/deals", { replace: true });
    }
  }, [slug, navigate]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Redirecting to deal…
        </p>
        <p className="font-semibold text-gray-800 text-lg">
          /go/{slug}
        </p>
        <p className="text-xs text-gray-400">
          If nothing happens, you can safely close this tab.
        </p>
      </div>
    </main>
  );
}
