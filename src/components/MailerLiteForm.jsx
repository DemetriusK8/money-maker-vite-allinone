import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.body.appendChild(script);

    window.ml = window.ml || function () {
      (window.ml.q = window.ml.q || []).push(arguments);
    };

    window.ml("account", "YOUR_ACCOUNT_ID");

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ml-embedded" data-form="NtFU9"></div>
  );
}

