"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import { Edit3, Plus, Trash2, CheckSquare, Square, X } from "lucide-react";

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
  downloadUrl: string;
}

export default function UnifiedCatalog() {
  const categories = ["Todas las categorías", "Productividad", "Desarrollo", "Diseño", "Utilidades"];

  const [currentCategory, setCurrentCategory] = useState<string>("Todas las categorías");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [products, setProducts] = useState<CatalogItem[]>([
    { id: "1", name: "DELFOS", developer: "ZenStudios", desc: "Gestión Inteligente de Inventario a tiempo real basada en datos.", rating: "4.9", reviews: "1,240", price: "$4.99", tag: "Productividad", featured: true, img: "/delfos.jpg", downloadUrl: "https://download.alphat.llc/delfos" },
    { id: "2", name: "HERMES", developer: "IndieCode", desc: "Comunicación automatizada por WhatsApp, Telegram, correo e Instagram.", rating: "4.7", reviews: "856", price: "$8.99", tag: "Desarrollo", featured: false, img: "/hermes.jpg", downloadUrl: "https://download.alphat.llc/hermes" },
    { id: "3", name: "MERCURIO", developer: "RetroArts", desc: "Tienda virtual con marketing integrado.", rating: "4.8", reviews: "2,100", price: "$5.99", tag: "Diseño", featured: true, img: "/mercurio.jpg", downloadUrl: "https://download.alphat.llc/mercurio" },
    { id: "4", name: "CHRONOS", developer: "DevFlow", desc: "Planificador de sprints y analítica de rendimiento para equipos remotos.", rating: "4.6", reviews: "320", price: "$2.99", tag: "Utilidades", featured: false, img: "/delfos.jpg", downloadUrl: "https://download.alphat.llc/chronos" },
  ]);

  const [editingProduct, setEditingProduct] = useState<CatalogItem | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);

  const [newProduct, setNewProduct] = useState<Omit<CatalogItem, "id" | "rating" | "reviews">>({
    name: "",
    developer: "",
    desc: "",
    price: "$0.00",
    tag: "Productividad",
    featured: false,
    img: "/delfos.jpg",
    downloadUrl: ""
  });

  const [isBulkMode, setIsBulkMode] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = currentCategory === "Todas las categorías" || prod.tag === currentCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingProduct) return;
    const { name, value, type } = e.target;
    if (type === 'checkbox' && 'checked' in e.target) {
      setEditingProduct({ ...editingProduct, [name]: e.target.checked });
    } else {
      setEditingProduct({ ...editingProduct, [name]: value });
    }
  };

  const handleCreateInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && 'checked' in e.target) {
      setNewProduct({ ...newProduct, [name]: e.target.checked });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    setProducts(prev => prev.map(p => p.id === editingProduct.id ? editingProduct : p));
    setEditingProduct(null);
  };

  const handleCreateProduct = (e: FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.downloadUrl) return;

    const itemToAdd: CatalogItem = {
      ...newProduct,
      id: crypto.randomUUID(),
      rating: "5.0",
      reviews: "1"
    };

    setProducts(prev => [...prev, itemToAdd]);
    setIsCreateOpen(false);
    setNewProduct({
      name: "", developer: "", desc: "", price: "$0.00", tag: "Productividad", featured: false, img: "/delfos.jpg", downloadUrl: ""
    });
  };

  const handleDeleteIndividual = (product: CatalogItem) => {
    const confirmDelete = window.confirm(`⚠️ ¿Deseas eliminar "${product.name}"?`);
    if (confirmDelete) {
      setProducts(prev => prev.filter(p => p.id !== product.id));
      setEditingProduct(null);
      setSelectedIds(prev => prev.filter(id => id !== product.id));
    }
  };

  const toggleSelectProduct = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    const confirmBulk = window.confirm(`🚨 ¿Deseas eliminar masivamente los ${selectedIds.length} productos seleccionados?`);
    if (confirmBulk) {
      setProducts(prev => prev.filter(p => !selectedIds.includes(p.id)));
      setSelectedIds([]);
      setIsBulkMode(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 font-sans antialiased text-slate-900 selection:bg-indigo-100">
      <Header />
      <Breadcrumbs />

      <div className="px-6 md:px-14 py-10 max-w-7xl mx-auto">

        {/* Cabecera de Control Limpia */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                Editor del Catálogo
              </h1>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-black tracking-wider uppercase bg-amber-100 text-amber-800 border border-amber-200">
                <Edit3 size={12} />
                <span>Modo Admin</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-1 font-medium">
              Gestiona licencias, añade paquetes de software y realiza mantenimiento de registros.
            </p>
          </div>

          {/* Buscador y Selección Múltiple únicamente */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="¿Qué software buscas?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-6 py-3 bg-white rounded-full border border-gray-200/80 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium transition-all text-slate-800 w-full sm:w-64"
            />

            <button
              onClick={() => {
                setIsBulkMode(!isBulkMode);
                setSelectedIds([]);
              }}
              className={`px-5 py-3 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${isBulkMode
                  ? "bg-red-50 text-red-700 border-red-200 shadow-inner"
                  : "bg-white text-slate-700 border-gray-200 hover:bg-gray-50 shadow-sm"
                }`}
            >
              {isBulkMode ? "Cancelar Selección" : "Selección Múltiple"}
            </button>

            {isBulkMode && (
              <button
                onClick={handleBulkDelete}
                disabled={selectedIds.length === 0}
                className={`px-5 py-3 rounded-full text-xs font-bold text-white transition-all flex items-center gap-2 shadow-sm whitespace-nowrap ${selectedIds.length > 0 ? "bg-red-600 hover:bg-red-700" : "bg-red-400 opacity-60 cursor-not-allowed"
                  }`}
              >
                <Trash2 size={14} />
                Eliminar ({selectedIds.length})
              </button>
            )}
          </div>
        </div>

        {/* CONTENEDOR DE FILTROS + BOTÓN NUEVO UBICADO AQUÍ */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-4">
          {/* Categorías a la izquierda */}
          <div className="flex items-center space-x-2 overflow-x-auto select-none scrollbar-none py-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1.5 whitespace-nowrap">
              <span>⚡</span> Filtrar:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCurrentCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${cat === currentCategory
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 border border-gray-100 hover:bg-gray-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Botón de Añadir alineado perfectamente a la derecha */}
          <button
            onClick={() => setIsCreateOpen(true)}
            className="sm:ml-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-extrabold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Plus size={14} />
            Añadir Software
          </button>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => {
            const isSelected = selectedIds.includes(prod.id);
            return (
              <div
                key={prod.id}
                onClick={() => isBulkMode && toggleSelectProduct(prod.id)}
                className={`bg-white border rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group relative ${isBulkMode ? "cursor-pointer select-none" : ""
                  } ${isSelected ? "border-red-500 ring-2 ring-red-100" : "border-gray-100/80"}`}
              >
                {isBulkMode && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur p-2 rounded-full shadow border border-gray-100 text-slate-900">
                    {isSelected ? <CheckSquare size={18} className="text-red-600" /> : <Square size={18} className="text-gray-400" />}
                  </div>
                )}

                <div>
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    {prod.featured && !isBulkMode && (
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#c08616] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#f5e3b9] shadow-sm tracking-wide uppercase">
                        ⭐ Destacado
                      </span>
                    )}

                    {!isBulkMode && (
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingProduct(prod);
                          }}
                          className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs py-2.5 px-5 rounded-xl shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 border border-gray-100 cursor-pointer"
                        >
                          <span>✏️</span> Editar Información
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-black text-slate-950 tracking-tight transition-colors duration-300">
                          {prod.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5 font-medium">Por {prod.developer}</p>
                      </div>
                      <span className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                        {prod.tag}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-normal leading-relaxed line-clamp-2 mt-2">
                      {prod.desc}
                    </p>
                    <p className="text-[10px] text-indigo-600 font-semibold truncate bg-indigo-50/50 rounded-lg p-2 border border-indigo-50 mt-3">
                      🔗 {prod.downloadUrl || "Sin link de descarga asignado"}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-end justify-between bg-slate-50/30">
                  <div className="flex items-center text-[#f1c40f] text-xs font-bold space-x-1.5">
                    <span className="text-base leading-none">★</span>
                    <span className="text-slate-900 font-extrabold">{prod.rating}</span>
                    <span className="text-gray-400 font-medium">({prod.reviews})</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Desde</p>
                    <p className="text-lg font-black text-slate-900">{prod.price}<span className="text-xs font-normal text-gray-400"> /mes</span></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-dashed border-gray-200 rounded-[2rem] mt-4">
            <p className="text-sm text-gray-400 font-medium">No se encontraron productos que coincidan con los filtros establecidos.</p>
          </div>
        )}
      </div>

      {/* [Modales de edición y creación se mantienen idénticos abajo para conservar lógica] */}
      {/* MODAL DE EDICIÓN FLOTANTE */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transform animate-in zoom-in-95 duration-200">
            <div className="px-8 pt-8 pb-4 flex justify-between items-start border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md tracking-wider uppercase">Panel de Edición</span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">Configurar {editingProduct.name}</h2>
              </div>
              <button onClick={() => setEditingProduct(null)} className="bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-full cursor-pointer"><X size={16} /></button>
            </div>
            <form onSubmit={handleSaveEdit} className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Imagen de Portada</label>
                    <div className="relative aspect-video w-full rounded-2xl bg-slate-900 overflow-hidden border border-gray-200"><img src={editingProduct.img} alt="Preview" className="w-full h-full object-cover opacity-75" /></div>
                  </div>
                  <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 tracking-tight">Posición Destacada</span>
                      <input type="checkbox" name="featured" checked={editingProduct.featured} onChange={handleEditInputChange} className="accent-indigo-600 h-4 w-4 rounded cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nombre comercial</label>
                      <input type="text" name="name" value={editingProduct.name} onChange={handleEditInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Desarrollador / Empresa</label>
                      <input type="text" name="developer" value={editingProduct.developer} onChange={handleEditInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Categoría de Filtro</label>
                      <select name="tag" value={editingProduct.tag} onChange={handleEditInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-slate-800 font-medium cursor-pointer">
                        <option value="Productividad">Productividad</option>
                        <option value="Desarrollo">Desarrollo</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Utilidades">Utilidades</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Precio por Mes</label>
                      <input type="text" name="price" value={editingProduct.price} onChange={handleEditInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">URL de descarga del Software</label>
                    <input type="url" name="downloadUrl" value={editingProduct.downloadUrl || ""} onChange={handleEditInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" required />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Descripción comercial</label>
                    <textarea rows={3} name="desc" value={editingProduct.desc} onChange={handleEditInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm resize-none leading-relaxed font-medium text-slate-800" />
                  </div>
                </div>
              </div>
            </form>
            <div className="px-8 py-5 bg-slate-50 border-t border-gray-100 flex items-center justify-between">
              <button type="button" onClick={() => handleDeleteIndividual(editingProduct)} className="px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 border border-red-100 cursor-pointer"><Trash2 size={14} />Eliminar Software</button>
              <div className="flex space-x-3">
                <button type="button" onClick={() => setEditingProduct(null)} className="px-5 py-2.5 bg-white border border-gray-200 text-slate-600 font-bold rounded-xl text-xs hover:bg-gray-50 transition-all shadow-sm cursor-pointer">Cancelar</button>
                <button type="button" onClick={handleSaveEdit} className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md shadow-slate-950/10 transition-all cursor-pointer">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CREACIÓN */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transform animate-in zoom-in-95 duration-200">
            <div className="px-8 pt-8 pb-4 flex justify-between items-start border-b border-gray-100">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md tracking-wider uppercase">Nuevo Registro</span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">Añadir Software al Catálogo</h2>
              </div>
              <button onClick={() => setIsCreateOpen(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-full cursor-pointer"><X size={16} /></button>
            </div>
            <form onSubmit={handleCreateProduct} className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Imagen de Portada (Default)</label>
                    <div className="relative aspect-video w-full rounded-2xl bg-slate-900 overflow-hidden border border-gray-200"><img src={newProduct.img} alt="Preview" className="w-full h-full object-cover opacity-75" /></div>
                  </div>
                  <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 space-y-3">
                    <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-800 tracking-tight">Marcar Destacado</span><input type="checkbox" name="featured" checked={newProduct.featured} onChange={handleCreateInputChange} className="accent-indigo-600 h-4 w-4 rounded cursor-pointer" /></div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nombre comercial *</label>
                      <input type="text" name="name" value={newProduct.name} onChange={handleCreateInputChange} placeholder="Ej: ZEUS" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Desarrollador / Empresa</label>
                      <input type="text" name="developer" value={newProduct.developer} onChange={handleCreateInputChange} placeholder="Ej: TechCorp" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Categoría de Filtro</label>
                      <select name="tag" value={newProduct.tag} onChange={handleCreateInputChange} className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-slate-800 font-medium cursor-pointer">
                        <option value="Productividad">Productividad</option>
                        <option value="Desarrollo">Desarrollo</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Utilidades">Utilidades</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Precio por Mes</label>
                      <input type="text" name="price" value={newProduct.price} onChange={handleCreateInputChange} placeholder="$0.00" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">URL de descarga del Software *</label>
                    <input type="url" name="downloadUrl" value={newProduct.downloadUrl} onChange={handleCreateInputChange} placeholder="https://download.alphat.llc/tu-software" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium text-slate-800" required />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Descripción comercial</label>
                    <textarea rows={3} name="desc" value={newProduct.desc} onChange={handleCreateInputChange} placeholder="Describe las funciones clave del software..." className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm resize-none leading-relaxed font-medium text-slate-800" />
                  </div>
                </div>
              </div>
            </form>
            <div className="px-8 py-5 bg-slate-50 border-t border-gray-100 flex justify-end space-x-3">
              <button type="button" onClick={() => setIsCreateOpen(false)} className="px-5 py-2.5 bg-white border border-gray-200 text-slate-600 font-bold rounded-xl text-xs hover:bg-gray-50 transition-all shadow-sm cursor-pointer">Cancelar</button>
              <button type="button" onClick={handleCreateProduct} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs shadow-md shadow-indigo-600/10 transition-all cursor-pointer">Crear Registro</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
