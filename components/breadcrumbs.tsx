import Link from "next/link"

interface BreadcrumbItem {
  label: string;
  href?: string; // El último elemento no necesita enlace
}

export default function Breadcrumbs() {
  // Simulamos la estructura de la imagen
  const items: BreadcrumbItem[] = [
    { label: 'Catálogo', href: '/catalogo' },
    { label: 'Productividad', href: '/catalogo/productividad' },
    { label: 'DELFOS' }, // Elemento actual (activo)
  ];

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 bg-[#f8f9fa]">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {/* Si no es el último, renderiza un enlace interactivo */}
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 font-normal transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                // Si es el último, es el texto plano en negrita
                <span className="text-[#081a5c] font-bold" aria-current="page">
                  {item.label}
                </span>
              )}

              {/* Renderiza el separador ">" solo si no es el último elemento */}
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
