"use client";
import { motion } from "framer-motion";
import { Fuel, Flame, Wind } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  fuel: Fuel,
  flame: Flame,
  wind: Wind,
};

export default function Servicios() {
  return (
    <section id="servicios" style={{ padding: "7rem 1.5rem", background: "var(--color-dark)" }}>
      <motion.div
        initial={{ y: 25 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}
      >
        <span style={{ display: "inline-block", padding: "0.25rem 0.85rem", borderRadius: "999px", background: "rgba(46,91,101,0.1)", color: "var(--color-primary)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Nuestros servicios
        </span>
        <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
          Servicios
        </h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 4rem", lineHeight: 1.8 }}>
          En la E.S. MOTORECO S.R.L. ofrecemos los combustibles que tu vehículo necesita: gasolina especial, gasolina premium y gas natural vehicular (GNV). Calidad garantizada y el mejor servicio en La Paz.
        </p>
      </motion.div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] || Fuel;
          return (
            <motion.div
              key={s.id}
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              style={{
                background: "var(--color-dark-2)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "2.5rem 1.75rem",
                textAlign: "center",
                transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "var(--color-primary)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--gradient-teal)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <Icon size={28} style={{ color: "var(--color-primary)" }} />
              </div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>{s.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>{s.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
