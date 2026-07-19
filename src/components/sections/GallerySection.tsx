"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { trackEvent } from "@/lib/analytics";

interface GallerySectionProps {
  limit?: number;
  showFilter?: boolean;
}

export function GallerySection({ limit, showFilter = false }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const handleOpen = (item: typeof galleryItems[0]) => {
    trackEvent("gallery_open", {
      label: item.id,
      category: item.category,
    });
  };

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="section"
      style={{ background: "var(--color-white)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 id="gallery-heading" className="visually-hidden" style={{ display: 'none' }}>
            Galeria
          </h2>

          {/* Filtro de categorias */}
        </div>

        {showFilter && (
          <div
            role="tablist"
            aria-label="Filtrar por categoria"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.5rem 1.125rem",
                  borderRadius: "999px",
                  border: "1.5px solid",
                  borderColor:
                    activeCategory === cat.id
                      ? "var(--color-rose-taupe)"
                      : "var(--color-border)",
                  background:
                    activeCategory === cat.id
                      ? "var(--color-rose-taupe)"
                      : "transparent",
                  color:
                    activeCategory === cat.id
                      ? "#fff"
                      : "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Grid de galeria */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
          className="gallery-grid"
        >
          {displayed.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              role="img"
              aria-label={item.alt}
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                aspectRatio: "3/4",
              }}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen(item)}
            >
              {/* Imagem real */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Link para galeria completa */}
        {limit && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/galeria" className="btn btn-secondary w-full-mobile">
              Ver galeria completa
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .gallery-grid {
          gap: 0.5rem;
        }
        @media (min-width: 768px) {
          .gallery-grid {
            gap: 1rem;
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
