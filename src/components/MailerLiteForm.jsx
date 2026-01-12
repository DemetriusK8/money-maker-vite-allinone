import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    // Load MailerLite script only once
    if (document.getElementById("mailerlite-universal")) return;

    const script = document.createElement("script");
    script.id = "mailerlite-universal";
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        className="ml-embedded"
        data-form="NtFURj"
      ></div>
    </div>
  );
}
