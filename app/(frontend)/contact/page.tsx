import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";

export default function SendEmailForm() {
  return (
    // 1. Contenedor principal ocupa el 100% de la altura de la pantalla y usa Flexbox vertical
    <div className="flex flex-col min-h-screen bg-slate-50/40">

      <Header />
      <Breadcrumbs />

      {/* 2. El flex-1 obliga a esta sección a expandirse y empujar al footer hacia abajo */}
      <div className="flex-1 px-6 py-10 max-w-2xl w-full mx-auto flex items-center justify-center">
        <div className="w-full bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">

          {/* Cabecera del formulario */}
          <div className="mb-6 flex items-center space-x-3">
            <div className="bg-indigo-50 text-[#11119b] p-2.5 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#081a5c]">Redactar Mensaje</h2>
              <p className="text-xs text-gray-400 mt-0.5">Ponte en contacto directo con el equipo administrativo de ALPHAT LLC.</p>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Para</label>
              <input type="text" value="contacto@alphatllc.com" disabled className="w-full px-4 py-3 bg-gray-100/70 rounded-xl border border-transparent text-sm text-gray-500 font-medium cursor-not-allowed" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Asunto del correo</label>
              <input type="text" placeholder="¿En qué podemos ayudarte?" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all text-slate-800 font-medium" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Cuerpo del mensaje</label>
              <textarea rows={6} placeholder="Escribe tu mensaje detalladamente aquí..." className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all resize-none leading-relaxed" />
            </div>

            <div className="flex justify-end pt-2">
              <button type="submit" className="bg-[#11119b] hover:bg-[#0c0c7a] text-white font-semibold py-3 px-6 rounded-xl text-sm shadow-md transition-all flex items-center space-x-2 cursor-pointer">
                <span>Enviar mensaje</span>
                <span className="text-xs">➔</span>
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* 3. Footer perfectamente anclado abajo */}
      <footer className="bg-white border-t border-slate-100 px-6 py-4 text-center text-xs text-slate-400 mt-auto">
        © 2026 ALPHAT LLC. Todos los derechos reservados.
      </footer>

    </div>
  );
}
