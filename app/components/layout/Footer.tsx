"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text)" }}>{siteConfig.shortName}</span>
          <span style={{ fontSize: "0.6rem", fontWeight: 500, color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>S.R.L.</span>
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", maxWidth: "400px", lineHeight: 1.7 }}>
          {siteConfig.description}
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-light)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-light)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-accent)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>
            <MessageCircle size={18} />
          </a>
        </div>

        <div style={{ width: "100%", height: "1px", background: "var(--color-border)", margin: "0.5rem 0" }} />

        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.05em" }}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
