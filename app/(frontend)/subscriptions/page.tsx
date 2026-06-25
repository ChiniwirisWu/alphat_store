export default function Subscriptions() {
  return (
    <div className="w-full bg-white p-6 rounded-3xl border border-gray-100 shadow-sm max-w-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="bg-blue-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-md">Plan Anual</span>
          <h2 className="text-2xl font-extrabold text-[#081a5c] mt-2">Suscripción a DELFOS</h2>
        </div>
        <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Activa</span>
      </div>

      <div className="bg-gray-50 rounded-2xl p-4 space-y-3 text-sm mb-6 font-medium text-slate-700">
        <div className="flex justify-between">
          <span className="text-gray-400 font-normal">Precio actual:</span>
          <span>$49.90 / anual</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-normal">Próxima renovación:</span>
          <span>15 Jun 2027</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 font-normal">Método de pago:</span>
          <span>Tarjeta terminada en •••• 4242</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button className="flex-1 bg-white border border-gray-200 text-slate-700 font-semibold py-3 px-4 rounded-xl text-sm hover:bg-gray-50 transition-all text-center">
          Cambiar plan / método de pago
        </button>
        <button className="flex-1 bg-red-50 text-red-600 font-semibold py-3 px-4 rounded-xl text-sm hover:bg-red-100 transition-all text-center">
          Cancelar suscripción
        </button>
      </div>
    </div>
  );
}
