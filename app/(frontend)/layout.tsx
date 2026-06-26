import React from "react";
import "@/constants/global.css";
import { jakarta_sans } from "@/constants/fonts";
import { Metadata } from "next";

// Configuración de Metadatos y SEO de la Plataforma
export const metadata: Metadata = {
  title: {
    default: "ALPHAT | Marketplace de Licencias de Software",
    template: "%s | ALPHAT"
  },
  description: "El marketplace definitivo para la gestión y distribución de licencias de software comerciales. Herramientas de alto rendimiento optimizadas para creadores.",
  keywords: ["software", "licencias", "marketplace", "suscripciones", "ALPHAT", "gestión de licencias"],
  authors: [{ name: "ALPHAT LLC" }],
  creator: "ALPHAT LLC",
  publisher: "ALPHAT LLC",
  robots: {
    index: true,
    follow: true,
  },
  // Configuración para previsualizaciones en redes sociales (Open Graph)
  openGraph: {
    title: "ALPHAT | Software License Marketplace",
    description: "Distribución y administración profesional de licencias digitales de software.",
    url: "https://alphat.com", // Cambia por tu dominio real cuando lo despliegues
    siteName: "ALPHAT",
    locale: "es_VE",
    type: "website",
  },
  // Configuración para Twitter/X Cards
  twitter: {
    card: "summary_large_image",
    title: "ALPHAT | Software License Marketplace",
    description: "Distribución y administración profesional de licencias digitales de software.",
  },
  icons: {
    icon: "/images/logo.png", // Asegúrate de tener tu favicon en la carpeta /public
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'overflow-y-scroll' obliga al navegador a reservar el espacio del riel vertical siempre
    <html lang="es" className={`${jakarta_sans.className} overflow-y-scroll`}>
      <head>
        {/* Inyección directa de estilos para los selectores de la barra de desplazamiento */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Soporte estándar (principalmente Firefox) */
          html {
            scrollbar-width: thin;
            scrollbar-color: #081a5b transparent;
          }

          /* Motores Webkit (Chrome, Safari, Brave, Edge, Opera) */
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #3b82f6;
            border-radius: 20px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #1d4ed8;
          }
        `}} />
      </head>
      <body className="antialiased bg-[#f4f3f8]/50 text-slate-900 min-h-screen flex flex-col">
        <main className="w-full flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
