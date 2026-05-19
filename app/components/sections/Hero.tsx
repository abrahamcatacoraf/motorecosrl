"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
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
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#1a1a1a", padding: "0 1.5rem" }}>
      <Image
        src="/images/hero-1.jpg"
        alt=""
        fill
        sizes="100vw"
        unoptimized
        className="object-cover"
        style={{ position: "absolute", inset: 0 }}
      />

      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", pointerEvents: "none" }} />

      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem", maxWidth: "800px" }}
      >
        <div>
          <span style={{ display: "inline-block", padding: "0.3rem 1rem", borderRadius: "999px", background: "rgba(46,91,101,0.2)", color: "var(--color-primary-light)", fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Estación de Servicio
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 7vw, 5rem)", fontWeight: 700, letterSpacing: "0.06em", color: "#ffffff", lineHeight: 1, whiteSpace: "nowrap" }}>
            MOTORECO{" "}<span style={{ fontSize: "0.35em", fontWeight: 300, letterSpacing: "0.15em", opacity: 0.6 }}>S.R.L.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 3vw, 1.6rem)", fontWeight: 300, letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>
            {siteConfig.legalName}
          </p>
        </div>

        <div ref={lineRef} style={{ height: "2px", width: "0px", background: "var(--color-primary)", transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)", borderRadius: "2px" }} />

        <motion.p
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "rgba(255,255,255,0.7)", maxWidth: "500px", lineHeight: 1.8, fontWeight: 300 }}
        >
          {siteConfig.description.split(/(calidad|confianza)/).map((part, i) =>
            part === "calidad" || part === "confianza"
              ? <strong key={i} style={{ color: "#ffffff" }}>{part}</strong>
              : part
          )}
        </motion.p>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}
        >
          <Button asChild variant="default" className="rounded px-10 py-4 font-display text-sm uppercase tracking-widest h-auto">
            <a href="#servicios">Nuestros servicios</a>
          </Button>
          <Button asChild variant="outline" className="rounded px-10 py-4 font-display text-sm uppercase tracking-widest h-auto text-white border-white bg-transparent hover:bg-white/10">
            <a href="#ubicacion">Como llegar</a>
          </Button>
        </motion.div>

        <div style={{ position: "absolute", bottom: "-160px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.4 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "rgba(255,255,255,0.5)", animation: "scrollLine 1.8s ease-in-out infinite" }} />
        </div>
      </motion.div>
    </section>
  );
}
