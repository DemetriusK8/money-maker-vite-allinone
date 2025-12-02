
import React, { useEffect } from 'react';

export default function AdSensePanel({ slot = '1234567890', style = {} }) {

  useEffect(() => {

    // Load the Google AdSense script ONCE
    if (!window.adsbygoogleLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4643050830953659';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
      window.adsbygoogleLoaded = true;
    }

    // Try to push a new ad slot
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense push error:", e);
    }

  }, []);

  return (
    <div className="my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: 728,
          height: 90,
          ...style
        }}
        data-ad-client="ca-pub-4643050830953659"
        data-ad-slot={slot}
      ></ins>
    </div>
  );
}
