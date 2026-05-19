"use client";
import { motion } from "framer-motion";
import { Shield, Clock, Users, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Años de experiencia" },
  { icon: Users, value: "10K+", label: "Clientes atendidos" },
  { icon: Shield, value: "100%", label: "Combustible garantizado" },
  { icon: ThumbsUp, value: "4", label: "Servicios especializados" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" style={{ padding: "7rem 1.5rem", background: "var(--color-dark-2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", marginBottom: "1.5rem" }}>
              Nosotros
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1rem" }}>
              MOTORECO S.R.L. es una estación de servicio boliviana fundada hace más de 20 años en la ciudad de La Paz. Desde nuestros inicios nos hemos dedicado a la venta de combustibles, lubricantes y servicios automotrices, construyendo una sólida reputación basada en la calidad y la confianza.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1rem" }}>
              Contamos con combustible de alto octanaje garantizado, lubricantes de las marcas más reconocidas del mercado y un equipo de personas comprometidas con brindar una atención cálida y eficiente a cada cliente que nos visita.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1rem", lineHeight: 1.9 }}>
              Nuestra prioridad es tu seguridad y la de tu vehículo. Trabajamos día a día para superar tus expectativas y ser tu estación de servicio de confianza en La Paz.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ aspectRatio: "4/3", borderRadius: "8px", background: "var(--color-dark-3)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--color-text-muted)" }}>FOTO / VIDEO</p>
          </motion.div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ background: "var(--color-dark)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "2rem 1.5rem", textAlign: "center" }}
            >
              <stat.icon size={24} style={{ color: "var(--color-primary-light)", marginBottom: "0.75rem" }} />
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--color-text)", lineHeight: 1, marginBottom: "0.35rem" }}>{stat.value}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
