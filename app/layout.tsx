import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOTORECO S.R.L. | Estación de Servicio",
  description:
    "Estación de servicio MOTORECO S.R.L. en La Paz, Bolivia. Combustibles, lubricantes y servicios de calidad para tu vehículo.",
  keywords: ["estación de servicio", "combustible", "La Paz", "Bolivia", "MOTORECO", "gasolina", "lubricantes"],
  authors: [{ name: "MOTORECO S.R.L." }],
  creator: "MOTORECO S.R.L.",
  metadataBase: new URL("https://motorecosrl.vercel.app"),
  openGraph: {
    title: "MOTORECO S.R.L. | Estación de Servicio",
    description: "Combustibles, lubricantes y servicios de calidad en La Paz, Bolivia.",
    url: "https://motorecosrl.vercel.app",
    siteName: "MOTORECO S.R.L.",
    locale: "es_BO",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}