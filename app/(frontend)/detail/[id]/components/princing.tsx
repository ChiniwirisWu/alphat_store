'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function PricingCard() {
  const [isAnnual, setIsAnnual] = useState(true);
  const router = useRouter();

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl border border-slate-100/80 transition-shadow duration-300">

      {/* Imagen Superior con Aspect Ratio controlado */}
      <div className="relative h-52 w-full bg-slate-950 overflow-hidden">
        <img
          src="/laptop-code.jpg"
          alt="Coding on Laptop"
          className="w-full h-full object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-8 flex flex-col items-center">

        {/* Selector de Plan (Tabs Toggle con diseño orgánico) */}
        <div className="bg-slate-100 p-1.5 rounded-2xl flex w-full relative mb-8 border border-slate-200/40">
          <button
            onClick={() => setIsAnnual(false)}
            className={`flex-1 py-3 text-center text-xs font-bold rounded-xl transition-all duration-200 ${!isAnnual
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            Mensual
          </button>

          <div className="flex-1 relative">
            <button
              onClick={() => setIsAnnual(true)}
              className={`w-full py-3 text-center text-xs font-bold rounded-xl transition-all duration-200 ${isAnnual
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              Anual
            </button>

            {/* Etiqueta Flotante "Ahorra" */}
            <span className="absolute -top-3.5 -right-2 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md tracking-wider uppercase select-none animate-bounce">
              Ahorra %
            </span>
          </div>
        </div>

        {/* Desglose de Precios */}
        <div className="text-center w-full mb-8">
          <div className="flex items-baseline justify-center text-slate-900">
            <span className="text-5xl font-black tracking-tight">
              {isAnnual ? '$49.9' : '$5.9'}
            </span>
            <span className="text-slate-400 text-sm font-semibold ml-1.5">
              / {isAnnual ? 'año' : 'mes'}
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-3 leading-relaxed max-w-[240px] mx-auto font-medium">
            Renovación automática segura. Cancela tu suscripción cuando quieras.
          </p>
        </div>

        {/* Acciones Directas */}
        <div className="w-full space-y-3 mb-8">
          <button onClick={() => router.push("/payment")} className="w-full bg-[#081a5b] hover:bg-[#061343] text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-indigo-950/10 active:scale-[0.99] transition-all text-sm tracking-wide">
            Comprar licencia ahora
          </button>

          <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/60 font-bold py-4 px-4 rounded-xl active:scale-[0.99] transition-all text-sm tracking-wide">
            Probar gratis por 14 días
          </button>
        </div>

        {/* Garantías Inferiores */}
        <div className="w-full space-y-3.5 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-6">
          <div className="flex items-center space-x-3 transition-colors hover:text-slate-800">
            <svg className="w-4 h-4 text-[#081a5b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Acceso inmediato y activación en segundos</span>
          </div>

          <div className="flex items-center space-x-3 transition-colors hover:text-slate-800">
            <svg className="w-4 h-4 text-[#081a5b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
            </svg>
            <span>Garantía de reembolso total de 30 días</span>
          </div>
        </div>

      </div>
    </div>
  );
}
