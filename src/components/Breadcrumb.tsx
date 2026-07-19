/**
 * src/components/Breadcrumb.tsx
 *
 * Componente visual de breadcrumb + JSON-LD BreadcrumbList.
 * Usado em páginas internas para melhorar navegação e rastreabilidade.
 */

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/config/siteConfig";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function safeJson(obj: unknown): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, "<\\/script>");
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Início", href: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${SITE_URL}${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbSchema) }}
      />

      <nav
        aria-label="Você está em"
        style={{
          background: "var(--color-cream-dark)",
          borderBottom: "1px solid var(--color-border-subtle)",
          padding: "0.875rem 0",
        }}
      >
        <div className="container">
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.375rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "0.85rem",
            }}
          >
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1;
              return (
                <li
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
                  aria-current={isLast ? "page" : undefined}
                >
                  {index > 0 && (
                    <ChevronRight
                      size={14}
                      color="var(--color-text-muted)"
                      aria-hidden="true"
                    />
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      style={{
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      style={{
                        color: isLast
                          ? "var(--color-rose-taupe)"
                          : "var(--color-text-muted)",
                        fontWeight: isLast ? 500 : 400,
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
