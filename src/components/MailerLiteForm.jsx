import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    // Prevent duplicate script
    if (!window.ml) {
      const script = document.createElement("script");
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.async = true;

      script.onload = () => {
        window.ml("account", "1993251");
        window.ml("load"); // 👈 FORCE re-render
      };

      document.head.appendChild(script);
    } else {
      window.ml("load"); // 👈 FORCE re-render if already loaded
    }
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        className="ml-embedded"
        data-form="NtFURj"
        style={{ minHeight: "200px" }}
      ></div>
    </div>
  );
}
