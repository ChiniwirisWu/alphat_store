export default function ReportIssueForm() {
  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#081a5c]">Soporte Técnico e Incidencias</h2>
        <p className="text-xs text-gray-400 mt-1">¿Algo no funciona como debería? Reporta el problema para solucionarlo de inmediato.</p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">¿En qué software ocurre el error?</label>
          <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all text-slate-700 cursor-pointer">
            <option>DELFOS - Gestión de Inventario</option>
            <option>HERMES - Automatización de Mensajería</option>
            <option>MERCURIO - Tienda Virtual</option>
            <option>Otro problema de la plataforma</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Prioridad / Severidad</label>
          <div className="grid grid-cols-3 gap-3">
            <label className="border border-gray-100 bg-gray-50/50 hover:bg-gray-50 p-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs font-bold text-slate-700 transition-all has-[:checked]:border-amber-200 has-[:checked]:bg-amber-50/50 has-[:checked]:text-amber-700">
              <input type="radio" name="severity" defaultChecked className="accent-amber-600" /> Minoritario
            </label>
            <label className="border border-gray-100 bg-gray-50/50 hover:bg-gray-50 p-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs font-bold text-slate-700 transition-all has-[:checked]:border-orange-200 has-[:checked]:bg-orange-50/50 has-[:checked]:text-orange-700">
              <input type="radio" name="severity" className="accent-orange-600" /> Moderado
            </label>
            <label className="border border-gray-100 bg-gray-50/50 hover:bg-gray-50 p-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs font-bold text-slate-700 transition-all has-[:checked]:border-red-200 has-[:checked]:bg-red-50/50 has-[:checked]:text-red-700">
              <input type="radio" name="severity" className="accent-red-600" /> Crítico
            </label>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Asunto breve</label>
          <input type="text" placeholder="Ej. Error 500 al exportar reportes en PDF" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Descripción detallada del fallo</label>
          <textarea rows={4} placeholder="Por favor, describe los pasos exactos para reproducir el error..." className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all resize-none leading-relaxed" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Captura de pantalla o Logs (Opcional)</label>
          <div className="border-2 border-dashed border-gray-200 hover:border-gray-300 rounded-xl p-6 text-center cursor-pointer bg-gray-50/30 transition-all flex flex-col items-center justify-center">
            <span className="text-xs font-semibold text-[#11119b]">Arrastra tus imágenes aquí o examina tus archivos</span>
            <span className="text-[10px] text-gray-400 mt-1">PNG, JPG de hasta 5MB</span>
          </div>
        </div>

        <div className="pt-2">
          <button type="submit" className="w-full bg-[#11119b] hover:bg-[#0c0c7a] text-white font-semibold py-3.5 px-4 rounded-xl text-sm shadow-md transition-all">
            Enviar reporte a soporte
          </button>
        </div>
      </form>
    </div>
  );
}
