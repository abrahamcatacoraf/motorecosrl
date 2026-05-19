"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => { el.style.width = "80px"; }, 300);
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "var(--color-dark)", padding: "0 1.5rem" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.4, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,122,58,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem", maxWidth: "800px" }}
      >
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 10vw, 7rem)", fontWeight: 700, letterSpacing: "0.06em", color: "var(--color-text)", lineHeight: 1, marginBottom: "0.25rem" }}>
            {siteConfig.shortName}
          </h1>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", fontWeight: 500, letterSpacing: "0.35em", color: "var(--color-primary-light)", textTransform: "uppercase" }}>
            S.R.L. &nbsp;&#8212;&nbsp; Estacion de Servicio
          </p>
        </div>

        <div ref={lineRef} style={{ height: "2px", width: "0px", background: "var(--color-primary)", transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)", borderRadius: "2px" }} />

        <motion.p
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--color-text-muted)", maxWidth: "500px", lineHeight: 1.8, fontWeight: 300 }}
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}
        >
          <Button asChild variant="default" className="rounded px-8 py-3 font-display text-xs uppercase tracking-widest h-auto">
            <a href="#servicios">Nuestros servicios</a>
          </Button>
          <Button asChild variant="outline" className="rounded px-8 py-3 font-display text-xs uppercase tracking-widest h-auto">
            <a href="#ubicacion">Como llegar</a>
          </Button>
        </motion.div>

        <div style={{ position: "absolute", bottom: "-160px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.4 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "var(--color-text-muted)", animation: "scrollLine 1.8s ease-in-out infinite" }} />
        </div>
      </motion.div>
    </section>
  );
}
