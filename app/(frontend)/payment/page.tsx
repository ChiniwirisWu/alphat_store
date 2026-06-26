"use client";

import React from "react";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";

export default function PaymentReceiptForm() {
  // Datos simulados del producto a comprar (pueden venir de props o estado de la app)
  const product = {
    name: "DELFOS",
    tag: "Gestión de inventario",
    price: "$49.90",
    period: "anual",
    developer: "ZenStudios"
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 font-sans antialiased text-slate-900 selection:bg-indigo-100">
      <Header />
      <Breadcrumbs />

      <div className="w-full mx-auto mt-8 max-w-4xl bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-slate-950/5">
        <h2 className="text-2xl font-black text-[#081a5c] tracking-tight mb-8">Reportar Pago por Transferencia</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* COLUMNA IZQUIERDA: Resumen de Compra y Datos de Transferencia */}
          <div className="space-y-6">

            {/* Tarjeta del Producto a Comprar */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden border border-slate-800 shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />
              <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md tracking-wider uppercase">
                Producto a adquirir
              </span>
              <div className="flex justify-between items-start mt-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{product.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Por {product.developer}</p>
                </div>
                <span className="bg-white/10 text-white border border-white/10 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {product.tag}
                </span>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-baseline">
                <p className="text-xs text-slate-400 font-medium">Plan seleccionado</p>
                <p className="text-xl font-black">
                  {product.price}
                  <span className="text-xs text-slate-400 font-normal"> /{product.period}</span>
                </p>
              </div>
            </div>

            {/* Datos del Vendedor */}
            <div className="bg-slate-50/80 rounded-2xl p-6 border border-gray-100/80">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Datos de Transferencia Bancaria</h3>
              <div className="space-y-4 text-sm font-medium text-slate-800">
                <div>
                  <p className="text-[11px] text-gray-400 font-normal uppercase tracking-wide">Banco:</p>
                  <p className="text-slate-900 font-semibold mt-0.5">AlphaBank Internacional</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-normal uppercase tracking-wide">Número de Cuenta:</p>
                  <p className="font-mono text-slate-900 font-semibold mt-0.5">9876-5432-10-123456789</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-normal uppercase tracking-wide">Titular / Empresa:</p>
                  <p className="text-slate-900 font-semibold mt-0.5">ALPHAT SOFTWARE S.A.</p>
                </div>
                <div className="pt-3 border-t border-gray-200/50 flex justify-between items-center">
                  <p className="text-[11px] text-gray-400 font-normal uppercase tracking-wide">Monto exacto a transferir:</p>
                  <p className="text-lg font-black text-[#081a5c]">$49.90 USD</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario de Datos del Pago */}
          <form className="space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Número de Referencia
                </label>
                <input
                  type="text"
                  placeholder="Ej. 12345678"
                  className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Monto Transferido ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  defaultValue="49.90"
                  className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Adjuntar Comprobante (Imagen/PDF)
                </label>
                <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-xl p-6 text-center cursor-pointer bg-slate-50/50 hover:bg-white transition-all group">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#11119b] group-hover:text-indigo-600 transition-colors">
                      Seleccionar archivo corporativo
                    </p>
                    <p className="text-[10px] text-gray-400 font-medium">Formatos aceptados: PNG, JPG o PDF de hasta 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#081a5b] hover:bg-[#061343] text-white font-bold py-4 px-4 rounded-xl text-sm shadow-md shadow-indigo-950/10 active:scale-[0.99] transition-all mt-4 tracking-wide"
            >
              Enviar comprobante y activar licencia
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
