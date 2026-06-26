"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Star, Filter } from "lucide-react";
import PromoMarquee from "@/components/promoMarquee";
import { useRouter } from "next/navigation";

// 1. Tipado e Información base unificada
interface CatalogItem {
  id: string;
  name: string;
  developer: string;
  desc: string;
  rating: number;
  reviews: string;
  price: string;
  tag: string;
  featured: boolean;
  img?: string;
}

const PRODUCTS_DATA: CatalogItem[] = [
  { id: "1", name: "DELFOS", developer: "ZenStudios", desc: "Gestión Inteligente de Inventario a tiempo real basada en datos.", rating: 4.9, reviews: "1,240", price: "$4.99", tag: "Gestión de inventario", featured: true },
  { id: "2", name: "HERMES", developer: "IndieCode", desc: "Comunicación automatizada por WhatsApp, Telegram, correo e Instagram.", rating: 4.7, reviews: "856", price: "$8.99", tag: "Comunicación automatizada", featured: false },
  { id: "3", name: "MERCURIO", developer: "RetroArts", desc: "Tienda virtual con marketing integrado.", rating: 4.8, reviews: "2,100", price: "$5.99", tag: "Tienda virtual", featured: true },
  { id: "4", name: "CHRONOS", developer: "DevFlow", desc: "Planificador de sprints y analítica de rendimiento para equipos remotos.", rating: 4.6, reviews: "320", price: "$2.99", tag: "Gestión de inventario", featured: false },
];

const CATEGORIES = ["Todas las categorías", "Gestión de inventario", "Comunicación automatizada", "Tienda virtual"];

// --- VISTA HOME MAIN ---
export default function Home() {

  setTimeout(() => console.log("hi"), 1000)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 font-sans antialiased text-slate-900 selection:bg-indigo-100">
      <Header />
      <PromoMarquee />
      <main className="flex-grow">
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

// --- COMPONENTE HERO ---
function Hero() {
  const router = useRouter();

  return (
    <div className="py-24 max-w-4xl mx-auto px-6 text-center animate-fade-in">

      <h1 className="font-black text-5xl md:text-6xl tracking-tight text-slate-900 mb-4 leading-tight">
        Licencias de Software, <br />
        <span className="text-[#081a5c]">en un solo lugar.</span>
      </h1>
      <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
        Descubre, compra y gestiona suscripciones a las mejores herramientas creadas por expertos de la industria.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <Button
          onClick={() => router.push("/catalog")}
          title="Explora catálogo"
          className="w-full bg-[#081a5b] hover:bg-[#061343] text-white py-4 text-base font-bold transition-all rounded-xl shadow-lg shadow-indigo-950/10"
        />
        <Button
          onClick={() => router.push("/")}
          title="Ver planes"
          className="w-full bg-slate-200/60 hover:bg-slate-200 text-slate-800 py-4 text-base font-bold transition-all rounded-xl"
        />
      </div>
    </div>
  );
}

// --- COMPONENTE CONTENT (MANEJADOR DE FILTROS) ---
function Content() {
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");

  const filteredProducts = (selectedCategory === "Todas las categorías")
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(prod => prod.tag === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 border-t border-slate-100">
      {/* Barra de Filtros */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-4">
        <div className="flex items-center gap-3 shrink-0">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Catálogo de software</h2>
          <div className="hidden sm:flex items-center gap-1 text-slate-400 text-sm font-semibold ml-4">
            <Filter size={16} />
            <span>Filtrar:</span>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${cat === selectedCategory
                ? "bg-slate-900 text-white shadow-md scale-105"
                : "bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Contenedor Grid Inteligente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// --- COMPONENTE CARD (DINÁMICO CON HOVER AZUL Y REDIRECCIÓN) ---
function Card({ product }: { product: CatalogItem }) {
  return (
    <a
      href={`/detail/${product.id}`}
      className="w-full max-w-sm bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Parte Superior / Thumbnail Placeholder */}
        <div className="bg-slate-900 h-48 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-90 transition-transform duration-500 group-hover:scale-105" />

          {/* Inicial o icono decorativo al no haber imagen real */}
          <span className="relative text-white/10 font-black text-7xl select-none">{product.name[0]}</span>

          {product.featured && (
            <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#c08616] text-[10px] font-black px-3 py-1.5 rounded-full border border-[#f5e3b9] shadow-sm tracking-wide uppercase">
              ⭐ Destacado
            </span>
          )}

          {/* Overlay Comercial */}
          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="bg-white text-slate-900 font-bold text-xs py-2.5 px-5 rounded-xl shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
              Ver detalles ➔
            </span>
          </div>
        </div>

        {/* Cuerpo informativo */}
        <div className="p-6">
          <div className="flex justify-between items-start gap-3 mb-3">
            <div>
              {/* Efecto de transición de Texto Negro a Azul al hacer Hover general en la Card */}
              <h3 className="text-xl font-black text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Por {product.developer}</p>
            </div>
            <span className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wide">
              {product.tag}
            </span>
          </div>

          <p className="text-gray-500 text-sm font-normal leading-relaxed line-clamp-2 mt-2">
            {product.desc}
          </p>
        </div>
      </div>

      {/* Separador Limpio en CSS */}
      <div className="mx-6 border-t border-slate-100"></div>

      {/* Pie de Tarjeta / Números */}
      <div className="px-6 pb-6 pt-4 flex items-center justify-between bg-slate-50/30">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center text-amber-400">
            {/* Renderizado único de estrellas limpias */}
            <Star size={14} fill="currentColor" stroke="none" />
          </div>
          <p className="text-sm font-extrabold text-slate-900">{product.rating}</p>
          <p className="text-xs text-slate-400 font-medium">({product.reviews})</p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-0.5">desde</p>
          <p className="text-lg font-black text-[#081a5c] leading-none">
            {product.price}
            <span className="text-xs font-medium text-slate-400">/mes</span>
          </p>
        </div>
      </div>
    </a>
  );
}








