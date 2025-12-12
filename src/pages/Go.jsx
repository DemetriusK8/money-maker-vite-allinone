// src/pages/Go.jsx

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mainOffers } from "../../data/allDeals";

// Build quick lookup table: id → url
const idToUrl = {};
mainOffers.forEach((deal) => {
  if (deal.id) {
    idToUrl[deal.id] = deal.url;
  }
});

export default function Go() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const targetUrl = idToUrl[id];

    if (targetUrl) {
      // Redirect to the affiliate link
      window.location.href = targetUrl;
    } else {
      // If no match → send user back to Deals page
      navigate("/deals");
    }
  }, [id, navigate]);

  return (
    <div className="p-10 text-center text-xl">
      Redirecting…
    </div>
  );
}
