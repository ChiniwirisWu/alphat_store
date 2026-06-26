"use client";

export default function PromoMarquee() {
  const text = "DESCUBRE EL PODER DEL SOFTWARE INTELIGENTE. HERRAMIENTAS DISEÑADAS PARA LLEVAR TU PRODUCTIVIDAD AL SIGUIENTE NIVEL. SOLUCIONES FIABLES, RÁPIDAS Y SEGURAS CON ALPHAT.";
  const marqueeText = Array(4).fill(text).join(" ");

  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-200 overflow-hidden select-none">
      {/* Inyectamos el keyframe de forma nativa para asegurar el movimiento */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          animation: customMarquee 150s linear infinite;
        }
      `}} />

      <div className="flex items-center h-16 whitespace-nowrap">
        {/* Aplicamos la clase que acabamos de crear arriba */}
        <div className="flex shrink-0 min-w-full items-center justify-around space-x-4 animate-custom-marquee">
          <span className="text-sm font-semibold tracking-wider text-[#081a5c] uppercase">
            {marqueeText}
          </span>
          <span className="text-sm font-semibold tracking-wider text-[#081a5c] uppercase">
            {marqueeText}
          </span>
        </div>
      </div>
    </div>
  );
}
