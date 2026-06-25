import { Check } from "lucide-react"
import Stars from "@/components/stars"
import AvaliableDevices from "@/components/avaliableDevices"
import TextWithIcon from "@/components/textWithIcon"
import ChangelogTimeline from "./changelog"

export default function DetailsCard() {

  const benefits = [
    "Soporte las 24 horas los 7 días de la semana.",
    "Soporte las 24 horas los 7 días de la semana.",
    "Soporte las 24 horas los 7 días de la semana.",
    "Soporte las 24 horas los 7 días de la semana.",
  ];

  return (
    <div className="grow-1">

      <Tags />

      <h1 className="text-5xl font-bold mb-5">DELFOS</h1>
      <h2 className="text-gray-700 text-lg mb-5 font-medium">Gestión inteligente de inventario a tiempo real basada en datos.</h2>
      <Stats />
      <p className="text-gray-700 mb-5">Descubre el poder de una gestión de inventario inteligente y basada en datos. Olvídate de contar manualmente: nuestro sistema automatiza el registro de tus existencias al segundo. Optimiza tu cadena de suministro, elimina las pérdidas por falta de stock y lleva la eficiencia de tu empresa al siguiente nivel. Rápido. Preciso. Inteligente.</p>
      <h1 className="font-semibold text-xl mb-5">¿Qué incluye la licencia?</h1>

      <div id="benefits" className="flex flex-wrap gap-5 mb-5">
        {benefits.map((el, index) => (
          <div key={index} className="w-[40%]">
            <TextWithIcon title={el} Icon={Check} />
          </div>
        ))}
      </div>

      <h1 className="font-semibold text-xl">Versiones recientes</h1>
      <ChangelogTimeline />

    </div>
  )
}

function Tags() {
  return (
    <div id="tags" className="mb-5">
      <ul className="flex gap-2 items-center">
        <li><span className="px-3 py-1 border border-amber-500 bg-amber-200 text-amber-800 rounded-full">Destacado</span></li>
        <li><span className="px-3 py-1 border border-slate-500 bg-slate-200 text-slate-800 rounded-full">Destacado</span></li>
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <div className="flex gap-5 items-center mb-5">
      <Stars />
      <AvaliableDevices />
    </div>
  );
};
