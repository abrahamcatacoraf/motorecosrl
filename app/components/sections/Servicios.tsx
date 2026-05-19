"use client";
import { motion } from "framer-motion";
import { Fuel, Droplets, SprayCan, Wind } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  fuel: Fuel,
  oil: Droplets,
  wash: SprayCan,
  air: Wind,
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
        <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
          Servicios
        </h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 4rem", lineHeight: 1.8 }}>
          En MOTORECO ponemos a tu disposición combustibles de alto octanaje, lubricantes de primer nivel, lavado profesional y servicios de aire y agua. Todo en un solo lugar, con la calidad que nos respalda.
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
                transition: "transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--color-border)"; }}
            >
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(45,122,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <Icon size={28} style={{ color: "var(--color-primary-light)" }} />
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
