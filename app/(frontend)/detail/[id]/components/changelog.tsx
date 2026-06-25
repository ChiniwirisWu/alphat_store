import React from 'react';

interface VersionUpdate {
  version: string;
  date: string;
  changes: string[];
}

export default function ChangelogTimeline() {
  // Estructura de datos basada en tu imagen
  const updates: VersionUpdate[] = [
    {
      version: 'v2.1.0',
      date: 'Hace 2 semanas',
      changes: [
        'Nuevo motor de búsqueda global',
        'Mejora en el rendimiento de sincronización',
      ],
    },
    {
      version: 'v2.0.0',
      date: 'Hace 2 meses',
      changes: [
        'Rediseño completo de la interfaz',
        'Soporte para plugins comunitarios',
      ],
    },
  ];

  return (
    <div className="max-w-xl p-6 bg-white">
      {/* Contenedor principal de la línea de tiempo */}
      <div className="relative border-l border-gray-100 ml-3 space-y-8 pb-2">
        {updates.map((update, index) => (
          <div key={index} className="relative pl-8">

            {/* Círculo indicador de la línea de tiempo */}
            <div className="absolute -left-[9px] top-1.5 size-4 rounded-full border-4 border-white bg-indigo-900 outline outline-2 outline-indigo-900" />

            {/* Cabecera del bloque: Versión y Fecha */}
            <div className="flex items-baseline space-x-3 mb-3">
              <span className="text-xl font-bold text-slate-900">
                {update.version}
              </span>
              <span className="text-sm font-normal text-gray-400">
                {update.date}
              </span>
            </div>

            {/* Lista de cambios */}
            <ul className="space-y-3 text-slate-600 font-normal">
              {update.changes.map((change, changeIndex) => (
                <li key={changeIndex} className="flex items-start">
                  {/* Pequeño punto azul para cada viñeta */}
                  <span className="inline-block size-1.5 bg-indigo-950 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-[15px] leading-relaxed">{change}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}
