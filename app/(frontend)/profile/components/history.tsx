export default function History() {
  const purchases = [
    { id: "FAC-0042", date: "15 Jun 2026", item: "DELFOS - Plan Anual", amount: "$49.90", status: "Completado" },
    { id: "FAC-0039", date: "20 May 2026", item: "HERMES - Plan Mensual", amount: "$8.99", status: "Completado" },
    { id: "FAC-0031", date: "20 Abr 2026", item: "HERMES - Plan Mensual", amount: "$8.99", status: "Reembolsado" },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-[#081a5c] mb-6">Historial de Compras</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-sm font-medium text-gray-400">
              <th className="pb-4">Factura</th>
              <th className="pb-4">Fecha</th>
              <th className="pb-4">Producto</th>
              <th className="pb-4">Total</th>
              <th className="pb-4 text-right">Estado</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium text-slate-700">
            {purchases.map((fac) => (
              <tr key={fac.id} className="border-b border-gray-50/50 hover:bg-gray-50/30 transition-colors">
                <td className="py-4 text-[#081a5c]">{fac.id}</td>
                <td className="py-4 font-normal text-gray-500">{fac.date}</td>
                <td className="py-4">{fac.item}</td>
                <td className="py-4 font-bold">{fac.amount}</td>
                <td className="py-4 text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${fac.status === 'Completado' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                    {fac.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
