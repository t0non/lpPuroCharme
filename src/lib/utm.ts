// src/lib/utm.ts
// CAPTURA E ARMAZENAMENTO DE PARÂMETROS UTM
// Captura utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, fbclid

"use client";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}

const UTM_STORAGE_KEY = "purocharme_utm";
const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export function captureUTMs(): UTMParams {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const params: UTMParams = {};

  for (const param of UTM_PARAMS) {
    const value = searchParams.get(param);
    if (value) {
      params[param] = value;
    }
  }

  // Armazenar no sessionStorage se houver parâmetros
  if (Object.keys(params).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
    } catch {
      // ignore storage errors
    }
  }

  return params;
}

export function getStoredUTMs(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function getUTMSourceLabel(): string {
  const utms = getStoredUTMs();
  if (utms.gclid) return "Google Ads";
  if (utms.fbclid) return "Meta Ads";
  if (utms.utm_source) {
    const source = utms.utm_source.toLowerCase();
    if (source === "google") return "Google";
    if (source === "facebook" || source === "instagram") return "Instagram/Facebook";
    return utms.utm_source;
  }
  return "";
}

export function buildWhatsAppMessage(baseMessage: string): string {
  const sourceLabel = getUTMSourceLabel();
  if (sourceLabel) {
    return `${baseMessage} (Origem: ${sourceLabel})`;
  }
  return baseMessage;
}
