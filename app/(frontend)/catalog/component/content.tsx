import { Star, Filter } from "lucide-react"
import Button from "@/components/button"

export default function Content() {
  return (
    <div className="px-10 py-10">
      <ContentFilter />
      <CardsContainer />
    </div>
  )
}

function CardsContainer() {

  return (
    <div>
      <ul className="flex flex-wrap gap-3 overflow-hidden py-10 justify-center">
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  )
}

function Card() {
  return (
    <li id="card">
      <div className="w-80 shadow shadow-md rounded-xl h-90">
        <div id="card-top" className="bg-slate-500 min-h-40 relative">
          <span className="absolute top-2 left-2 px-3 border border-slate-700 rounded rounded-full bg-slate-100/30 text-slate-700 font-medium text-sm">Destacado</span>
        </div>

        <div id="card-bot" className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-semibold">DELFOS</h1>
            <span className="text-sm px-2 py-1 bg-gray-500/10 rounded-full">Gestión de inventario</span>
          </div>

          <p className="text-sm text-gray-500 mb-3">Gestión inteligente de inventario a tiempo real basada en datos.</p>

          <div className="w-70 border-t border-gray-500/20 mb-3"></div>

          <div id="card-numbers" className="flex justify-between">
            <div id="stars-container" className="flex items-center gap-1">
              <ul className="flex">
                <li><Star size={10} /></li>
                <li><Star size={10} /></li>
                <li><Star size={10} /></li>
                <li><Star size={10} /></li>
              </ul>

              <p className="text-xs font-medium">4.9</p>
              <p className="text-xs">(1,260)</p>
            </div>

            <div id="price-container" className="text-gray-700">
              <p className="text-xs">desde</p>
              <p><span className="text-[#081a5c] font-bold">$4.99</span><span className="text-xs">/mes</span></p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}


function ContentFilter() {
  return (
    <div className="mb-5">

      <div id="filter-container" className="flex items-center">
        <h1 className="text-xl font-semibold mr-10">Catálogo de software</h1>

        <span className="flex gap-2 items-center mr-5 text-sm text-gray-500">
          <Filter size={20} />
          <p>Filtrar:</p>
        </span>

        <ul className="flex flex-wrap items-center gap-2 grow-1">
          <li><Button title="Todas las categorías" className="bg-black text-white font-medium" /></li>
          <li><Button title="Gestión de inventario" className="bg-gray-500/10 text-black font-medium" /></li>
          <li><Button title="Comunicación automatizada" className="bg-gray-500/10 text-black font-medium" /></li>
          <li><Button title="Tienda virtual" className="bg-gray-500/10 text-black font-medium" /></li>
        </ul>
      </div>

    </div>
  )

}
