import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    if (window.ml) {
      window.ml("account", "1993251");
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.async = true;
      script.onload = () => {
        window.ml("account", "1993251");
      };
      document.body.appendChild(script);
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
