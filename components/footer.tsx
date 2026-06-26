import LogoIcon from "@/components/logoIcon"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 px-6 sm:px-10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* SECCIÓN SUPERIOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Columna de Marca (Ocupa 2 columnas en pantallas grandes para mejor balance) */}
          <div className="sm:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <LogoIcon />
              <span className="font-bold text-slate-900 tracking-tight text-base">ALPHAT</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed tracking-tight">
              El marketplace definitivo para licencias de software. Herramientas creadas con pasión, para creadores apasionados.
            </p>
          </div>

          {/* Columna: Soporte */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Soporte</span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-slate-500">
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors duration-150">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="/issues" className="hover:text-slate-950 transition-colors duration-150">
                  Gestión de incidencias
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors duration-150">
                  Contacto comercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna: Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legal</span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-slate-500">
              <li>
                <Link href="/terms-and-policies" className="hover:text-slate-950 transition-colors duration-150">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link href="/terms-and-policies" className="hover:text-slate-950 transition-colors duration-150">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms-and-policies" className="hover:text-slate-950 transition-colors duration-150">
                  Política de reembolsos
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* SECCIÓN INFERIOR */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <div>
            <p className="tracking-tight">© 2026 ALPHAT LLC. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100/80 text-slate-500">
            <span className="flex items-center gap-1">
              <span className="text-slate-400 font-normal">Moneda:</span> USD ($)
            </span>
            <div className="h-3 w-[1px] bg-slate-200" />
            <span className="flex items-center gap-1">
              <span className="text-slate-400 font-normal">Idioma:</span> Español
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
