import { CopyIcon, Download } from "lucide-react"
import Button from "@/components/button"

export default function Licences() {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-2xl mb-10">Mis Licencias Activas</h1>

      <div id="card-container" className="flex flex-col gap-10">
        <Card />
        <Card />
      </div>
    </div>
  )
}


function Card() {
  return (
    <div id="card" className="flex gap-10 bg-white shadow rounded rounded-xl p-5">

      <div id="card-left" className="grow-1">

        <div id="card-title" className="flex gap-5 items-center mb-2">
          <h1 className="font-semibold text-xl">DELFOS</h1>
          <span className="rounded-full bg-[#081a5c]/10 px-3 border-2 border-[#081a5c] font-semibold text-[#081a5c] text-sm">Activa</span>
        </div>

        <p id="card-plan" className="text-gray-500 text-sm mb-3">Plan Anual - Renueva el 15 de Junio 2027</p>

        <div id="card-code" className="flex justify-between bg-gray-500/10 rounded px-5 py-2">
          <p className="text-sm">MKF-89X3-PK3B-VBS3</p>
          <button>
            <CopyIcon size={20} />
          </button>
        </div>

      </div>

      <div id="card-right" className="flex flex-col gap-4">
        <Button title="Administrar" className="bg-gray-500/10" />
        <Button title="Descargar app" Icon={Download} className="bg-white" />
      </div>

    </div>
  )
}
