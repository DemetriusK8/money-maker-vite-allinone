import { useEffect } from "react";

export default function MailerLiteForm() {
  useEffect(() => {
    // Prevent loading script twice
    if (document.getElementById("ml-script")) return;

    const script = document.createElement("script");
    script.id = "ml-script";
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;

    document.head.appendChild(script);
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        className="ml-embedded"
        data-form="NtfU9"
      ></div>
    </div>
  );
}
