"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

const contactItems = [
  { icon: MapPin, label: "Dirección", value: siteConfig.address },
  { icon: Phone, label: "Teléfono", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp },
];

export default function Ubicacion() {
  return (
    <section id="ubicacion" style={{ padding: "7rem 1.5rem", background: "var(--color-dark-2)" }}>
      <motion.div
        initial={{ y: 25 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ display: "inline-block", padding: "0.25rem 0.85rem", borderRadius: "999px", background: "rgba(46,91,101,0.1)", color: "var(--color-primary)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Contacto y horarios
          </span>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Ubicación
          </h2>
        </div>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 4rem", textAlign: "center", lineHeight: 1.8 }}>
          Visitanos en nuestra estación de servicio. Estamos ubicados en La Paz, Bolivia.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <motion.div
            initial={{ x: -25 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {contactItems.map((item, i) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: i < contactItems.length - 1 ? "1.25rem" : "0", marginBottom: i < contactItems.length - 1 ? "1.25rem" : "0", borderBottom: i < contactItems.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--gradient-teal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "0.15rem" }}>{item.label}</p>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text)" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>Horarios</p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <Clock size={18} style={{ color: "var(--color-primary-light)", marginTop: "2px" }} />
                <div style={{ fontSize: "0.9rem", color: "var(--color-text)", lineHeight: 1.9 }}>
                  {[siteConfig.hours.weekdays, siteConfig.hours.saturday, siteConfig.hours.sunday].filter(Boolean).map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ x: 25 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-dark-3)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
          >
            {siteConfig.mapEmbedUrl.startsWith("http") ? (
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación MOTORECO S.R.L."
              />
            ) : (
              <div style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
                <MapPin size={48} style={{ margin: "0 auto 1rem", opacity: 0.5 }} />
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", letterSpacing: "0.1em" }}>MAPA</p>
                <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>Reemplazar URL en lib/data.ts</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
