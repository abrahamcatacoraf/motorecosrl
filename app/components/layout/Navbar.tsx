"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
const navLinks = [
  { label: "Inicio",    href: "#hero" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicacion", href: "#ubicacion" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive("#" + e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const ls = (href: string) => ({
    fontFamily: "var(--font-display)",
    fontSize: "0.8rem",
    fontWeight: 500 as const,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    padding: "0.4rem 0.9rem",
    borderRadius: "4px",
    transition: "color 0.2s, background 0.2s",
    color: active === href ? "var(--color-primary-light)" : "var(--color-text-muted)",
    background: active === href ? "rgba(192,57,43,0.12)" : "transparent",
    borderBottom: active === href ? "1px solid var(--color-primary)" : "1px solid transparent",
  });
  const headerStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "background 0.3s",
    background: scrolled ? "rgba(15,15,15,0.98)" : "rgba(15,15,15,0.85)",
    borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
  };
  const innerStyle: React.CSSProperties = {
    maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem",
    height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
  };
  const btnStyle: React.CSSProperties = {
    background: "none", border: "none", cursor: "pointer",
    padding: "0.5rem", color: "var(--color-text)", display: "none",
  };
  const mobileMenuStyle: React.CSSProperties = {
    background: "rgba(15,15,15,0.98)",
    borderTop: "1px solid var(--color-border)",
    padding: "1rem 1.5rem 1.5rem",
  };
  const mobileLinkStyle = (href: string): React.CSSProperties => ({
    display: "block", fontFamily: "var(--font-display)", fontSize: "1.1rem",
    fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
    textDecoration: "none", padding: "0.75rem 0",
    borderBottom: "1px solid var(--color-border)",
    color: active === href ? "var(--color-primary-light)" : "var(--color-text)",
  });
  return (
    <>
      <header style={headerStyle}>
        <div style={innerStyle}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Logo size={104} />
          </a>
          <nav className="hidden-mobile" style={{ display: "flex", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={ls(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile" style={btnStyle} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen
                ? <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
                : <><line x1="3" y1="7" x2="21" y2="7" strokeLinecap="round" /><line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" /><line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" /></>
              }
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div style={mobileMenuStyle}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={mobileLinkStyle(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
      <style>{".hidden-mobile{} @media(max-width:768px){.hidden-mobile{display:none!important}.show-mobile{display:flex!important}}"}</style>
    </>
  );
}
