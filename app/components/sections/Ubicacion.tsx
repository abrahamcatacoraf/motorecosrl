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
        <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", marginBottom: "0.75rem", textAlign: "center" }}>
          Ubicación
        </h2>
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
              {contactItems.map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(45,122,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={18} style={{ color: "var(--color-primary-light)" }} />
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
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.saturday}</p>
                  <p>{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", transition: "color 0.2s, border-color 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-primary-light)"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; e.currentTarget.style.borderColor = "var(--color-border)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", transition: "color 0.2s, border-color 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-primary-light)"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; e.currentTarget.style.borderColor = "var(--color-border)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", transition: "color 0.2s, border-color 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.borderColor = "var(--color-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; e.currentTarget.style.borderColor = "var(--color-border)"; }}>
                <MessageCircle size={20} />
              </a>
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
