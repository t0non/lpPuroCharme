// src/lib/analytics.ts
// SISTEMA DE RASTREAMENTO DE EVENTOS
// Configure as variáveis de ambiente em .env.local antes de usar

"use client";

// Tipos de eventos de conversão
export type AnalyticsEvent =
  | "whatsapp_click"
  | "whatsapp_floating_click"
  | "hero_cta_click"
  | "category_view"
  | "gallery_open"
  | "map_click"
  | "phone_click"
  | "instagram_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "appointment_intent"
  | "directions_click";

interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  page?: string;
  [key: string]: string | number | boolean | undefined;
}

// Google Analytics 4
function gtag(...args: unknown[]): void {
  if (typeof window !== "undefined" && "gtag" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag(...args);
  }
}

// Meta Pixel
function fbq(action: string, event: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && "fbq" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq(action, event, params);
  }
}

// Google Tag Manager - dataLayer push
function pushDataLayer(data: Record<string, unknown>): void {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push(data);
  }
}

export function trackEvent(event: AnalyticsEvent, params?: EventParams): void {
  if (typeof window === "undefined") return;

  // GA4
  gtag("event", event, {
    event_category: params?.category || "engagement",
    event_label: params?.label,
    value: params?.value,
    page_location: window.location.href,
    ...params,
  });

  // GTM dataLayer
  pushDataLayer({
    event: event,
    eventCategory: params?.category || "engagement",
    eventLabel: params?.label,
    eventValue: params?.value,
    pagePath: window.location.pathname,
    ...params,
  });

  // Meta Pixel — eventos de conversão
  const metaEvents: Partial<Record<AnalyticsEvent, string>> = {
    whatsapp_click: "Contact",
    whatsapp_floating_click: "Contact",
    hero_cta_click: "InitiateCheckout",
    appointment_intent: "Schedule",
    contact_form_submit: "Lead",
    map_click: "FindLocation",
  };

  const metaEvent = metaEvents[event];
  if (metaEvent) {
    fbq("track", metaEvent, {
      content_name: params?.label,
      content_category: params?.category,
    });
  }

  // Console em desenvolvimento
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${event}`, params);
  }
}

// Evento de conversão do Google Ads
export function trackGoogleAdsConversion(): void {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (conversionId && conversionLabel) {
    gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
}
