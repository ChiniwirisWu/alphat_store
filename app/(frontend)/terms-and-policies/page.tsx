'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Breadcrumbs from '@/components/breadcrumbs';

type LegalSection = 'tos' | 'refunds' | 'privacy';

export default function LegalDocumentsView() {
  const [activeTab, setActiveTab] = useState<LegalSection>('tos');

  return (
    <div className="w-full min-h-screen bg-white px-8 py-6 font-sans">

      <Header />
      <Breadcrumbs />

      <div className="max-w-6xl mx-auto flex mt-20 flex-col md:flex-row gap-10">

        {/* Navegación Izquierda (Fijada) */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-6 space-y-1.5">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-4">Documentación Legal</h2>

            <button
              onClick={() => setActiveTab('tos')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'tos'
                ? "bg-blue-50 text-[#11119b]"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              Términos de Servicio
            </button>

            <button
              onClick={() => setActiveTab('refunds')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'refunds'
                ? "bg-blue-50 text-[#11119b]"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              Política de Reembolso
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'privacy'
                ? "bg-blue-50 text-[#11119b]"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              Política de Privacidad
            </button>
          </div>
        </div>

        {/* Panel de Contenido Derecho */}
        <div className="flex-1 bg-gray-50/40 rounded-[2rem] p-8 border border-gray-100 max-w-3xl">
          {activeTab === 'tos' && (
            <article className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-600">
              <h1 className="text-2xl font-black text-slate-900 mb-2">Términos de Servicio</h1>
              <p className="text-xs text-gray-400 mb-6">Última actualización: Junio 2026</p>

              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">1. Aceptación de los Términos</h3>
              <p className="mb-4">Al acceder y utilizar la plataforma y los servicios de software distribuidos por ALPHAT LLC, usted acepta cumplir y estar sujeto a las directrices establecidas en este contrato de servicio.</p>

              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">2. Uso de las Licencias</h3>
              <p className="mb-4">Nuestros productos de software (incluyendo DELFOS, HERMES y MERCURIO) se otorgan bajo licencias temporales revocables, no exclusivas y personales según el plan de suscripción seleccionado (Mensual o Anual).</p>
            </article>
          )}

          {activeTab === 'refunds' && (
            <article className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-600">
              <h1 className="text-2xl font-black text-slate-900 mb-2">Política de Reembolso</h1>
              <p className="text-xs text-gray-400 mb-6">Última actualización: Junio 2026</p>

              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">1. Garantía de Satisfacción de 14 Días</h3>
              <p className="mb-4">En ALPHAT LLC ofrecemos un período de prueba gratuito de 14 días en todas las licencias nuevas. Si procesa la compra definitiva, puede solicitar un reembolso íntegro durante los primeros 30 días posteriores al pago si el software presenta fallas técnicas no resueltas por nuestro equipo.</p>

              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">2. Excepciones de Reembolso</h3>
              <p className="mb-4">No se realizarán devoluciones retroactivas si la suscripción ha sido renovada automáticamente sin una solicitud de cancelación previa por parte del usuario mediante el panel administrativo.</p>
            </article>
          )}

          {activeTab === 'privacy' && (
            <article className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-600">
              <h1 className="text-2xl font-black text-slate-900 mb-2">Política de Privacidad</h1>
              <p className="text-xs text-gray-400 mb-6">Última actualización: Junio 2026</p>

              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">1. Recopilación de Información</h3>
              <p className="mb-4">Garantizamos la seguridad absoluta de sus bases de datos. Los registros analíticos de inventario o flujos de mensajería procesados por nuestras aplicaciones se almacenan de forma cifrada de extremo a extremo.</p>

              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">2. Uso de Datos Financieros</h3>
              <p className="mb-4">ALPHAT LLC no almacena números de tarjetas de crédito directamente en sus servidores; todas las transacciones se mitigan de forma segura a través de pasarelas de pago internacionales certificadas.</p>
            </article>
          )}
        </div>

      </div>
    </div>
  );
}
