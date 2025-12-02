import React, { useEffect } from 'react';

// NOTE: Replace CLIENT_ID and SLOT with your real AdSense values
export default function AdSensePanel({ slot='0000000000', style={} }){
  useEffect(()=>{
    if(window && !window.adsbygoogleLoaded){
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-ADSENSE-CLIENT-ID';
      s.crossOrigin = 'anonymous';
      document.head.appendChild(s);
      window.adsbygoogleLoaded = true;
    }
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
  },[])

  return (
    <div className="my-6 flex justify-center">
      <ins className="adsbygoogle" style={{display:'block', width:'100%', maxWidth:728, height:90, ...style}} data-ad-client="YOUR-ADSENSE-CLIENT-ID" data-ad-slot={slot}></ins>
    </div>
  )
}
