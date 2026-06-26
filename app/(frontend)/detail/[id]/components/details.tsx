import { Check } from "lucide-react";
import Stars from "@/components/stars";
import AvaliableDevices from "@/components/avaliableDevices";
import TextWithIcon from "@/components/textWithIcon";
import ChangelogTimeline from "./changelog";

export default function DetailsCard({ id }: { id: string }) {
  // Datos tipificados y limpios sin duplicados accidentales
  const benefits = [
    "Soporte prioritario las 24 horas, los 7 días de la semana.",
    "Actualizaciones automáticas y parches de seguridad mensuales.",
    "Copias de seguridad en la nube cifradas de extremo a extremo.",
    "Acceso completo a la API para desarrolladores e integraciones."
  ];

  return (
    <div className="space-y-8">
      {/* Categorías y Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs font-bold border border-amber-200 bg-amber-50 text-amber-700 rounded-full shadow-sm">
          ⭐ Destacado
        </span>
        <span className="px-3 py-1 text-xs font-bold border border-slate-200 bg-slate-50 text-slate-600 rounded-full shadow-sm">
          Gestión de inventario
        </span>
      </div>

      {/* Título Principal y Subtexto */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          DELFOS
        </h1>
        <h2 className="text-xl font-medium text-slate-600 leading-relaxed max-w-2xl">
          Gestión inteligente de inventario a tiempo real basada en datos.
        </h2>
      </div>

      {/* Estadísticas Reutilizables */}
      <div className="flex flex-wrap items-center gap-6 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm w-fit">
        <Stars />
        <div className="w-px h-5 bg-slate-200 hidden sm:block"></div>
        <AvaliableDevices />
      </div>

      {/* Descripción Comercial */}
      <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
        Descubre el poder de una gestión de inventario inteligente y basada en datos.
        Olvídate de contar manualmente: nuestro sistema automatiza el registro de tus existencias al segundo.
        Optimiza tu cadena de suministro, elimina las pérdidas por falta de stock y lleva la eficiencia de tu empresa al siguiente nivel.
        Rápido. Preciso. Inteligente.
      </p>

      {/* Sección Incluye Beneficios */}
      <div className="space-y-4">
        <h3 className="font-black text-xl text-slate-900 tracking-tight">
          ¿Qué incluye la licencia?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-1.5 transition-all hover:translate-x-0.5">
              <TextWithIcon title={benefit} Icon={Check} className="text-slate-700 font-medium text-sm" />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <h3 className="font-black text-xl text-slate-900 tracking-tight mb-6">
          Versiones recientes
        </h3>
        <ChangelogTimeline />
      </div>
    </div>
  );
}
