import { useEffect, useRef } from "react";

export default function MailerLiteForm() {
  const formRef = useRef(null);

  useEffect(() => {
    const initMailerLite = () => {
      if (window.ml && formRef.current) {
        window.ml("account", "1993251");
        window.ml("form", "NtFURj", formRef.current);
      }
    };

    if (!document.getElementById("ml-universal")) {
      const script = document.createElement("script");
      script.id = "ml-universal";
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.async = true;
      script.onload = initMailerLite;
      document.body.appendChild(script);
    } else {
      initMailerLite();
    }
  }, []);

  return <div ref={formRef}></div>;
}
