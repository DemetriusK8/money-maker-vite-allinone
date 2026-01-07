import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.ml) {
        window.ml("account", "1993251"); // ← your account ID
      }
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="ml-embedded" data-form="NtFURj"></div>
    </div>
  );
}
