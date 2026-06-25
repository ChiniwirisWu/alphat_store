import LogoIcon from "@/components/logoIcon"
import Link from "next/link"

export default function Footer() {
  return (
    <div id="container" className="flex flex-col px-10 py-10 grow-1 justify-end">

      <div id="footer-top" className="grid grid-cols-3 grid-rows-1">
        <div id="col-1">
          <div className="flex gap-2 mb-2">
            <LogoIcon />
            <h1 className="font-bold">ALPHAT</h1>
          </div>
          <p className="text-gray-700 text-sm">El marketplace definitivo para licencias de software. Herramientas creadas con pasión, para creadores apasionados.</p>
        </div>

        <div id="col-2">
          <span className="font-semibold">Soporte</span>
          <ul className="flex flex-col mt-2 gap-1 text-sm text-gray-700">
            <li><Link href="">Centro de ayuda</Link></li>
            <li><Link href="">Gestión de incidencias</Link></li>
            <li><Link href="">Contacto</Link></li>
          </ul>
        </div>

        <div id="col-3">
          <span className="font-semibold">Legal</span>
          <ul className="flex flex-col mt-2 gap-1 text-sm text-gray-700">
            <li><Link href="">Términos de servicio</Link></li>
            <li><Link href="">Política de privacidad</Link></li>
            <li><Link href="">Política de reembolsos</Link></li>
          </ul>
        </div>

      </div>

      <div id="footer-bot" className="flex justify-between mt-10">
        <div>
          <p className="text-sm text-gray-700">@ 2026 ALPHAT. Todos los derechos reservados</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Moneda: USD($) Idioma: Español</p>
        </div>
      </div>
    </div>
  )
}
