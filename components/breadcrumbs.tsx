"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Dividimos la ruta actual por "/" y filtramos segmentos vacíos
  const pathSegments = pathname.split("/").filter((segment) => segment);
  console.log("segmento" + pathSegments)

  // Si estás en la raíz (/), puedes ocultarlo o dejar que retorne null
  if (pathSegments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 bg-[#f8f9fa]">
      <ol className="flex items-center space-x-2 text-sm">
        {/* Opcional: Puedes incluir un enlace estático al 'Inicio' si lo deseas, 
            o empezar directamente desde el primer segmento mapeado */}

        {pathSegments.map((segment, index) => {
          // Construimos la URL acumulativa para cada segmento de la ruta actual
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          // Detectamos si es el último elemento
          const isLast = index === pathSegments.length - 1;

          // Formateamos el texto (ej. de "productividad" a "Productividad", o "delfos" a "DELFOS")
          // Si tienes siglas específicas como DELFOS, puedes manejar una excepción, 
          // de lo contrario Capitaliza la primera letra por defecto.
          let label = segment.replace(/-/g, " ");
          if (label.toLowerCase() === "delfos") {
            label = "DELFOS";
          } else {
            label = label.replace(/\b\w/g, (char) => char.toUpperCase());
          }

          return (
            <li key={href} className="flex items-center">
              {/* Si no es el último, renderiza el enlace interactivo gris */}
              {!isLast ? (
                <Link
                  href={href}
                  className="text-gray-500 hover:text-gray-700 font-normal transition-colors"
                >
                  {label}
                </Link>
              ) : (
                // Si es el último, es el texto plano con tu azul corporativo y negrita
                <span className="text-[#081a5c] font-bold" aria-current="page">
                  {label}
                </span>
              )}

              {/* Renderiza tu separador SVG ">" solo si no es el último elemento */}
              {!isLast && (
                <svg
                  className="w-3 h-3 text-gray-400 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
