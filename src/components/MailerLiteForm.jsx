import { useEffect, useState } from "react";

export default function MailerLiteForm() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.getElementById("mailerlite-universal")) {
      setReady(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "mailerlite-universal";
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;

    script.onload = () => {
      setReady(true);
    };

    document.head.appendChild(script);
  }, []);

  if (!ready) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="ml-embedded" data-form="NtFURj"></div>
    </div>
  );
}
