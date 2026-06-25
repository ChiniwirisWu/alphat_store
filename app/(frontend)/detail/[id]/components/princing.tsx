'use client';

import { useState } from 'react';

export default function PricingCard() {
  // Estado para controlar si el plan seleccionado es anual o mensual
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-w-[380px] max-w-[380px] bg-[#f8f9fa] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 font-sans">

      {/* 1. Imagen Superior */}
      <div className="relative h-56 w-full bg-slate-900">
        <img
          src="/laptop-code.jpg" // Reemplaza por tu ruta de imagen local o remota
          alt="Coding on Laptop"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col items-center">

        {/* 2. Selector de Plan (Tabs Toggle) */}
        <div className="bg-gray-200/60 p-1 rounded-2xl flex w-full relative mb-8">
          <button
            onClick={() => setIsAnnual(false)}
            className={`flex-1 py-3 text-center text-sm font-semibold rounded-xl transition-all ${!isAnnual
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Mensual
          </button>

          <div className="flex-1 relative">
            <button
              onClick={() => setIsAnnual(true)}
              className={`w-full py-3 text-center text-sm font-semibold rounded-xl transition-all ${isAnnual
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Anual
            </button>

            {/* Etiqueta Flotante "Ahorra" */}
            <span className="absolute -top-3 -right-2 bg-[#f1c40f] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm select-none animate-pulse">
              Ahorra
            </span>
          </div>
        </div>

        {/* 3. Precio e Información */}
        <div className="text-center w-full mb-6">
          <div className="flex items-baseline justify-center text-slate-900">
            <span className="text-4xl font-extrabold">${isAnnual ? '49.9' : '5.9'}</span>
            <span className="text-gray-400 text-sm font-medium ml-1">
              / {isAnnual ? 'anual' : 'mes'}
            </span>
          </div>
          <p className="text-gray-400 text-xs mt-3 leading-relaxed max-w-[250px] mx-auto">
            Renovación automática. Cancela cuando quieras.
          </p>
        </div>

        {/* 4. Botones de Acción */}
        <div className="w-full space-y-3 mb-8">
          {/* Botón Principal con el estilo azul oscuro y sombra que vimos al inicio */}
          <button className="w-full bg-[#11119b] hover:bg-[#0c0c7a] text-white font-semibold py-3.5 px-4 rounded-2xl shadow-lg shadow-blue-700/20 active:scale-[0.98] transition-all text-sm">
            Comprar licencia
          </button>

          <button className="w-full bg-gray-200/50 hover:bg-gray-200/80 text-slate-900 font-semibold py-3.5 px-4 rounded-2xl active:scale-[0.98] transition-all text-sm">
            Probar gratis (14 días)
          </button>
        </div>

        {/* 5. Características / Garantías inferiores */}
        <div className="w-full space-y-4 text-xs font-medium text-gray-500 border-t border-gray-200/60 pt-5">
          <div className="flex items-center space-x-3">
            {/* Icono de Escudo */}
            <svg className="w-4 h-4 text-[#11119b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Acceso inmediato tras la compra</span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Icono de Retorno / Garantía */}
            <svg className="w-4 h-4 text-[#11119b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
            </svg>
            <span>Garantía de devolución de 30 días</span>
          </div>
        </div>

      </div>
    </div>
  );
}
