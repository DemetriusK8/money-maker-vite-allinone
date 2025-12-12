// src/pages/Go.jsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mainOffers } from "../.. /data/allDeals";

// Build slug → url lookup
const slugToUrl = {};
mainOffers.forEach((deal) => {
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
      window.location.href = target;
    } else {
      navigate("/deals");
    }
  }, [slug, navigate]);

  return (
    <div className="p-10 text-center text-xl">
      Redirecting…
    </div>
  );
}
