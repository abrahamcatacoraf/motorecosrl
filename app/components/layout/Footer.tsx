"use client";

import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-2)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text)" }}>{siteConfig.shortName}</span>
            <span style={{ fontSize: "0.6rem", fontWeight: 500, color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>S.R.L.</span>
          </div>
          <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", letterSpacing: "0.1em", fontFamily: "var(--font-display)" }}>
            {siteConfig.legalName}
          </span>
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", maxWidth: "400px", lineHeight: 1.7 }}>
          {siteConfig.description}
        </p>

        <div style={{ width: "100%", height: "1px", background: "var(--color-border)", margin: "0.5rem 0" }} />

        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.05em" }}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
