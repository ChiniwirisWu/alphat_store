import DetailsCard from "./details";
import PricingCard from "./princing";

export default function Content({ id }: { id: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Grid adaptativo: 1 columna en móvil, 3 columnas en pantallas grandes (Lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* Sección de detalles (Toma 2 columnas de espacio) */}
        <div className="lg:col-span-2">
          <DetailsCard id={id} />
        </div>

        {/* Sección lateral de compra (Se mantiene fija al hacer scroll) */}
        <div className="lg:col-span-1 lg:sticky lg:top-8">
          <PricingCard />
        </div>

      </div>
    </div>
  );
}
