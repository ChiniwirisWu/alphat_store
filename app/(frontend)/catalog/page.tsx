"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";

interface CatalogItem {
  id: string;
  name: string;
  developer: string;
  desc: string;
  rating: string;
  reviews: string;
  price: string;
  tag: string;
  featured: boolean;
  img: string;
}

export default function Catalog() {
  const categories = ["Todas las categorías", "Productividad", "Desarrollo", "Diseño", "Utilidades"];

  // ==========================================
  // ESTADOS PARA FILTRADO Y BÚSQUEDA
  // ==========================================
  const [currentCategory, setCurrentCategory] = useState<string>("Todas las categorías");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [products] = useState<CatalogItem[]>([
    { id: "1", name: "DELFOS", developer: "ZenStudios", desc: "Gestión Inteligente de Inventario a tiempo real basada en datos.", rating: "4.9", reviews: "1,240", price: "$4.99", tag: "Productividad", featured: true, img: "/delfos.jpg" },
    { id: "2", name: "HERMES", developer: "IndieCode", desc: "Comunicación automatizada por WhatsApp, Telegram, correo e Instagram.", rating: "4.7", reviews: "856", price: "$8.99", tag: "Desarrollo", featured: false, img: "/hermes.jpg" },
    { id: "3", name: "MERCURIO", developer: "RetroArts", desc: "Tienda virtual con marketing integrado.", rating: "4.8", reviews: "2,100", price: "$5.99", tag: "Diseño", featured: true, img: "/mercurio.jpg" },
    { id: "4", name: "CHRONOS", developer: "DevFlow", desc: "Planificador de sprints y analítica de rendimiento para equipos remotos.", rating: "4.6", reviews: "320", price: "$2.99", tag: "Utilidades", featured: false, img: "/delfos.jpg" },
  ]);

  // ==========================================
  // LÓGICA DE FILTRADO COMBINADO
  // ==========================================
  const filteredProducts = products.filter((prod) => {
    // Verificar si coincide con la categoría seleccionada
    const matchesCategory =
      currentCategory === "Todas las categorías" ||
      prod.tag.toLowerCase() === currentCategory.toLowerCase();

    // Verificar si coincide con la búsqueda (compara en nombre, desarrollador y descripción)
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50/50 font-sans antialiased text-slate-900 selection:bg-indigo-100">
      <Header />
      <Breadcrumbs />

      <div className="px-6 md:px-14 py-10 max-w-7xl mx-auto">

        {/* Cabecera del Catálogo */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Catálogo de software</h1>
            <p className="text-sm text-gray-400 mt-1">Explora y encuentra las mejores soluciones tecnológicas para tu negocio.</p>
          </div>
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="¿Qué software buscas?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3.5 bg-white rounded-full border border-gray-200/80 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium transition-all text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-slate-950 transition-colors"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Filtros Horizontales */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 select-none scrollbar-none">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
            <span>⚡</span> Filtrar por:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCurrentCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${cat === currentCategory
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                : "bg-white text-slate-600 border border-gray-100 hover:bg-gray-50 hover:text-slate-900 shadow-sm"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Tarjetas Filtradas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <a
              key={prod.id}
              href={`/detail/${prod.id}`}
              className="bg-white border border-gray-100/80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
            >
              <div>
                {/* Imagen del Producto */}
                <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {prod.featured && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#c08616] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#f5e3b9] shadow-sm tracking-wide uppercase">
                      ⭐ Destacado
                    </span>
                  )}

                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 font-bold text-xs py-2.5 px-5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1">
                      Ver detalles ➔
                    </span>
                  </div>
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-black text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5 font-medium">Por {prod.developer}</p>
                    </div>
                    <span className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                      {prod.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs font-normal leading-relaxed line-clamp-3 mt-2">
                    {prod.desc}
                  </p>
                </div>
              </div>

              {/* Pie de Tarjeta */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-end justify-between bg-slate-50/30">
                <div className="flex items-center text-[#f1c40f] text-xs font-bold space-x-1.5">
                  <span className="text-base leading-none">★</span>
                  <span className="text-slate-900 font-extrabold">{prod.rating}</span>
                  <span className="text-gray-400 font-medium">({prod.reviews})</span>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Desde</p>
                  <p className="text-lg font-black text-slate-900">
                    {prod.price}
                    <span className="text-xs font-normal text-gray-400"> /mes</span>
                  </p>
                </div>
              </div>

            </a>
          ))}
        </div>

        {/* Fallback en caso de que no haya resultados */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-[2rem] shadow-sm max-w-md mx-auto mt-8">
            <span className="text-3xl">🔍</span>
            <h3 className="text-lg font-black text-slate-900 mt-4 tracking-tight">Sin resultados</h3>
            <p className="text-sm text-gray-400 mt-1 px-6">
              No encontramos software que coincida con "{searchQuery}" en la categoría "{currentCategory}".
            </p>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
