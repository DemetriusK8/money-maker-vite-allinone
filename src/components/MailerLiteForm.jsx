import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ml) {
        window.ml("account", "1993251");
      }
    };
  }, []);

  return (
    <div style={{ marginTop: "30px", position: "relative", zIndex: 999 }}>
      <div
        className="ml-embedded"
        data-form="NtFU9"
      ></div>
    </div>
  );
}
