"use client";

import { useEffect } from "react";
import { captureUTMs } from "@/lib/utm";

// Declarações globais para scripts de analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export function AnalyticsProvider() {
  useEffect(() => {
    // Capturar UTMs na primeira visita
    captureUTMs();

    // Inicializar dataLayer para GTM
    window.dataLayer = window.dataLayer || [];

    // Injetar GTM se ID configurado
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    if (gtmId && !document.getElementById("gtm-script")) {
      const script = document.createElement("script");
      script.id = "gtm-script";
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);
    }

    // Injetar GA4 se ID configurado (fallback sem GTM)
    const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
    if (ga4Id && !gtmId && !document.getElementById("ga4-script")) {
      const script = document.createElement("script");
      script.id = "ga4-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      document.head.appendChild(script);

      window.gtag = function (...args) {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", ga4Id, { send_page_view: true });
    }

    // Injetar Meta Pixel se ID configurado
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    if (pixelId && !document.getElementById("meta-pixel")) {
      const script = document.createElement("script");
      script.id = "meta-pixel";
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
