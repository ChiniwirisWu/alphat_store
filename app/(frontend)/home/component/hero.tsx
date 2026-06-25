import Button from "@/components/button"

export default function Hero() {

  return (
    <div className="py-20">
      <div>
        <h1 className="font-bold text-5xl text-center mb-10">Licencias de Software,</h1>
        <h1 className="font-bold text-5xl text-[#081a5c] text-center mb-10">en un solo lugar.</h1>
        <p className="text-gray-500 text-center mb-10">Descubre, compra y gestiona suscripciones a las mejores herramientas creadas por expertos.</p>
      </div>

      <div className="w-100 flex gap-5 m-auto">
        <Button title="Explora catálogo" className="bg-[#081a5b] text-white py-4 [&>p]:text-lg" />
        <Button title="Ver planes" className="bg-gray-500/10 text-black py-4 [&>p]:text-lg" />
      </div>
    </div>
  )
}
