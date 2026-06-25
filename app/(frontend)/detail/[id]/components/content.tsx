import Stars from "@/components/stars"
import AvaliableDevices from "@/components/avaliableDevices"

export default function Content() {
  return (
    <div id="container">
      <div id="container-left">
        <div id="tags">
          <ul className="flex gap-2 items-center">
            <li><span className="px-3 py-1 border border-slate-500 bg-slate-200 text-slate-800 rounded-full">Destacado</span></li>
            <li><span className="px-3 py-1 border border-slate-500 bg-slate-200 text-slate-800 rounded-full">Destacado</span></li>
          </ul>
        </div>

        <h1 className="text-5xl font-bold">DELFOS</h1>

        <h2 className="text-gray-700 text-lg">Gestión inteligente de inventario a tiempo real basada en datos.</h2>

        <div className="flex gap-5 items-center">
          <Stars />
          <AvaliableDevices />
        </div>

      </div>

      <div id="container-right"></div>
    </div>
  )
}
