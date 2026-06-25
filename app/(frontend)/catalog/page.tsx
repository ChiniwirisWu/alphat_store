export default function Catalog() {
  const categories = ["Todas las categorías", "Productividad", "Desarrollo", "Diseño", "Utilidades"];
  const currentCategory = "Todas las categorías";

  const products = [
    { name: "DELFOS", developer: "ZenStudios", desc: "Gestión Inteligente de Inventario a tiempo real basada en datos.", rating: "4.9", reviews: "1,240", price: "$4.99", tag: "Productividad", featured: true, img: "/delfos.jpg" },
    { name: "HERMES", developer: "IndieCode", desc: "Comunicación automatizada por WhatsApp, Telegram, correo e Instagram.", rating: "4.7", reviews: "856", price: "$8.99", tag: "Desarrollo", featured: false, img: "/hermes.jpg" },
    { name: "MERCURIO", developer: "RetroArts", desc: "Tienda virtual con marketing integrado.", rating: "4.8", reviews: "2,100", price: "$5.99", tag: "Diseño", featured: true, img: "/mercurio.jpg" },
  ];

  return (
    <div className="w-full min-h-screen bg-white px-8 py-6 font-sans">
      {/* 1. Cabecera y Buscador */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-black text-slate-900">Catálogo de software</h1>
        <div className="w-full md:w-96">
          <input
            type="text"
            placeholder="¿Qué software buscas?"
            className="w-full px-5 py-3 bg-[#f1f3f5] rounded-full border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm font-medium transition-all text-slate-800"
          />
        </div>
      </div>

      {/* 2. Filtros Horizontales */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 select-none scrollbar-none">
        <span className="text-sm font-bold text-gray-400 mr-2 flex items-center gap-1">
          <span className="scale-90">⏳</span> Filtrar:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${cat === currentCategory
                ? "bg-slate-950 text-white"
                : "bg-gray-100 text-slate-700 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Grilla de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((prod) => (
          <div key={prod.name} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              {/* Imagen con Badge de Destacado */}
              <div className="relative h-48 w-full bg-slate-900">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
                {prod.featured && (
                  <span className="absolute top-4 left-4 bg-[#fdf6e2] text-[#c08616] text-[10px] font-bold px-3 py-1 rounded-full border border-[#f5e3b9]">
                    Destacado
                  </span>
                )}
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">{prod.name}</h3>
                    <p className="text-xs text-gray-400 font-medium">por {prod.developer}</p>
                  </div>
                  <span className="bg-gray-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full">
                    {prod.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-relaxed mt-3">
                  {prod.desc}
                </p>
              </div>
            </div>

            {/* Pie de Tarjeta con Alineación Bottom */}
            <div className="px-5 pb-5 pt-2 border-t border-gray-50 flex items-end justify-between">
              <div className="flex items-center text-[#f1c40f] text-xs font-bold space-x-1">
                <span>★</span>
                <span className="text-slate-900">{prod.rating}</span>
                <span className="text-gray-400 font-normal">({prod.reviews})</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 font-medium">desde</p>
                <p className="text-base font-black text-indigo-950">{prod.price}<span className="text-xs font-normal text-gray-400">/mes</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
