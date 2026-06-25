export default function CatalogItemEditor() {
  return (
    <div className="w-full bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm max-w-4xl">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-[#081a5c]">Editar Producto del Catálogo</h2>
          <p className="text-xs text-gray-400 mt-1">Modifica la información comercial del software expuesto.</p>
        </div>
        <button className="text-xs font-semibold text-gray-400 hover:text-slate-700 transition-colors">
          ← Volver al catálogo
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Columna Izquierda: Miniatura multimedia */}
        <div className="md:col-span-1 space-y-4">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Imagen de Portada</label>
          <div className="relative aspect-video w-full rounded-2xl bg-slate-900 overflow-hidden group border border-gray-200">
            <img src="/delfos.jpg" alt="Preview" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-white text-xs font-bold bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm">Reemplazar</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Producto Destacado</span>
              <input type="checkbox" defaultChecked className="accent-[#11119b] h-4 w-4 rounded cursor-pointer" />
            </div>
            <p className="text-[11px] text-gray-400 leading-normal">Los productos destacados aparecen primero en el catálogo principal con una etiqueta especial.</p>
          </div>
        </div>

        {/* Columnas Central y Derecha: Campos de Texto de Configuración */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Nombre del Software</label>
              <input type="text" defaultValue="DELFOS" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Desarrollador</label>
              <input type="text" defaultValue="ZenStudios" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Categoría Principal</label>
              <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all text-slate-700 cursor-pointer">
                <option>Productividad</option>
                <option>Desarrollo</option>
                <option>Diseño</option>
                <option>Utilidades</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Precio Inicial (Base / Mes)</label>
              <input type="text" defaultValue="$4.99" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Descripción Comercial Breve</label>
            <textarea rows={3} defaultValue="Gestión Inteligente de Inventario a tiempo real basada en datos." className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all resize-none leading-relaxed" />
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button type="button" className="px-5 py-3 border border-gray-200 text-slate-600 font-semibold rounded-xl text-sm hover:bg-gray-50 transition-all">
              Descartar
            </button>
            <button type="submit" className="px-6 py-3 bg-[#11119b] hover:bg-[#0c0c7a] text-white font-semibold rounded-xl text-sm shadow-md transition-all">
              Actualizar Producto
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
