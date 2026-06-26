import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-slate-50/50 px-6 sm:px-10 py-8 space-y-8 animate-pulse">

      {/* 1. SKELETON DEL ENCABEZADO DE LA VISTA (Debajo del Header principal) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
        <div className="space-y-2">
          {/* Título de la sección */}
          <div className="h-5 w-48 bg-slate-200 rounded-md" />
          {/* Subtítulo o descripción */}
          <div className="h-3.5 w-72 bg-slate-100 rounded-md" />
        </div>

        {/* Selector de filtros / Botón de acción simulado */}
        <div className="h-9 w-32 bg-slate-200/80 rounded-xl self-start sm:self-center" />
      </div>

      {/* 2. SKELETON DE TARJETAS DE MÉTRICAS (Grid de 4 columnas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32"
          >
            <div className="flex items-center justify-between w-full">
              {/* Icono contenedor */}
              <div className="size-9 bg-slate-100 rounded-xl" />
              {/* Badge de porcentaje */}
              <div className="h-5 w-14 bg-slate-100 rounded-full" />
            </div>
            <div className="space-y-2 mt-4">
              {/* Etiqueta pequeña */}
              <div className="h-3 w-24 bg-slate-100 rounded" />
              {/* Valor principal */}
              <div className="h-6 w-16 bg-slate-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. SKELETON DE CONTENIDO PRINCIPAL (Simulación de Tabla o Lista de Elementos) */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
        {/* Cabecera de la tabla simulada */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="h-4 w-36 bg-slate-200 rounded" />
          <div className="h-4 w-20 bg-slate-100 rounded" />
        </div>

        {/* Filas de la tabla o lista */}
        {[1, 2, 3, 5].map((row) => (
          <div key={row} className="flex items-center justify-between py-3 shared-row">
            <div className="flex items-center gap-3 w-full">
              {/* Mini miniatura o avatar */}
              <div className="size-8 bg-slate-100 rounded-lg shrink-0" />
              <div className="space-y-1.5 w-full max-w-md">
                {/* Texto primario */}
                <div className="h-3.5 bg-slate-200 rounded w-3/4" />
                {/* Texto secundario */}
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
            </div>
            {/* Estado o Badge al final de la fila */}
            <div className="h-4 w-16 bg-slate-100 rounded-md shrink-0" />
          </div>
        ))}
      </div>

    </div>
  );
}
