export default function PaymentReceiptForm() {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-[#081a5c] mb-6">Reportar Pago por Transferencia</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Datos del Vendedor (Izquierda) */}
        <div className="bg-gray-50/60 rounded-2xl p-5 border border-gray-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Datos del Vendedor</h3>
          <div className="space-y-3 text-sm font-medium text-slate-700">
            <div>
              <p className="text-xs text-gray-400 font-normal">Banco:</p>
              <p>AlphaBank Internacional</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-normal">Número de Cuenta:</p>
              <p className="font-mono">9876-5432-10-123456789</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-normal">Titular / Empresa:</p>
              <p>ALPHAT SOFTWARE S.A.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-normal">Monto exacto a pagar:</p>
              <p className="text-base font-bold text-[#081a5c]">$49.90 USD</p>
            </div>
          </div>
        </div>

        {/* Datos del Pago (Derecha) */}
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Número de Referencia</label>
            <input type="text" placeholder="Ej. 12345678" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Monto Transferido ($)</label>
            <input type="number" step="0.01" defaultValue="49.90" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Adjuntar Comprobante (Imagen/PDF)</label>
            <div className="border-2 border-dashed border-gray-200 hover:border-gray-300 rounded-xl p-4 text-center cursor-pointer bg-gray-50/30 transition-all">
              <span className="text-xs font-semibold text-[#11119b]">Seleccionar archivo</span>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#11119b] hover:bg-[#0c0c7a] text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md transition-all mt-2">
            Enviar comprobante
          </button>
        </form>
      </div>
    </div>
  );
}
