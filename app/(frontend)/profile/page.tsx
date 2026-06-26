"use client";

import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import React, { useState } from "react";

import {
  Key,
  Logs,
  LogOut,
  X,
  Copy,
  Download,
  CheckCircle2,
  ArrowLeft,
  RefreshCw,
  CreditCard,
  AlertTriangle,
  Lock
} from "lucide-react";

// ==========================================
// TYPES & INTERFACES
// ==========================================
type TabType = "licenses" | "history" | "manage";

interface LicenceItem {
  id: string;
  name: string;
  plan: string;
  renewDate: string;
  key: string;
  price: string;
  developer: string;
  tag: string;
}

// ==========================================
// MAIN PROFILE PAGE COMPONENT
// ==========================================
export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFreqModalOpen, setIsFreqModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("licenses");
  const [selectedLicence, setSelectedLicence] = useState<LicenceItem | null>(null);

  const handleManageClick = (licence: LicenceItem) => {
    setSelectedLicence(licence);
    setActiveTab("manage");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 font-sans antialiased">
      {/* Puedes reemplazar por tu <Header /> importado */}
      <Header />

      {/* Banner de Información de Usuario */}
      <EditBanner onOpenModal={() => setIsEditModalOpen(true)} />

      {/* Panel Principal Orquestador */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

          {/* Navegación Lateral */}
          <div className="lg:col-span-1 bg-white border border-slate-100 rounded-3xl p-4 shadow-sm">
            <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Contenido de Pestañas Dinámicas */}
          <div className="lg:col-span-3 min-h-[400px]">
            {activeTab === "licenses" && (
              <LicencesTab onManageLicence={handleManageClick} />
            )}
            {activeTab === "history" && <HistoryTab />}
            {activeTab === "manage" && (
              <ManageSubscriptionTab
                licence={selectedLicence || { id: "1", name: "DELFOS", plan: "Plan Anual", renewDate: "15 de Junio 2027", key: "MKF-89X3-PK3B-VBS3", price: "$49.90", developer: "ZenStudios", tag: "Gestión de inventario" }}
                onBack={() => setActiveTab("licenses")}
                onOpenFreqModal={() => setIsFreqModalOpen(true)}
              />
            )}
          </div>

        </div>
      </main>

      {/* MODALES GLOBALES */}
      <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      <FrequencyModal
        isOpen={isFreqModalOpen}
        onClose={() => setIsFreqModalOpen(false)}
        licenceName={selectedLicence?.name || "DELFOS"}
        currentPlan={selectedLicence?.plan || "Plan Anual"}
      />

      {/* Puedes reemplazar por tu <Footer /> importado */}
      <footer className="bg-white border-t border-slate-100 px-6 py-4 text-center text-xs text-slate-400">© 2026 ALPHAT LLC. Todos los derechos reservados.</footer>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTE: BANNER DE USUARIO
// ==========================================
function EditBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-5 items-center text-center sm:text-left">
          <div className="flex bg-[#081a5c] size-20 rounded-[1.5rem] items-center justify-center shadow-md shadow-indigo-950/20 shrink-0">
            <p className="text-white font-black text-2xl tracking-wide">JD</p>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">Juan Desarrollador</h1>
            <p className="text-sm font-medium text-slate-400 mt-1">
              juan.dev@example.com <span className="mx-1.5 text-slate-200">•</span> Miembro desde Enero 2024
            </p>
          </div>
        </div>
        <button
          onClick={onOpenModal}
          className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 shadow-sm hover:shadow transition-all"
        >
          Editar Perfil y Seguridad
        </button>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTE: NAVEGACIÓN LATERAL
// ==========================================
function SideNav({ activeTab, setActiveTab }: { activeTab: TabType; setActiveTab: (tab: TabType) => void }) {
  return (
    <div className="space-y-4">
      <ul className="space-y-1.5 font-semibold text-sm">
        <li>
          <button
            onClick={() => setActiveTab("licenses")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === "licenses" || activeTab === "manage"
              ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
          >
            <Key size={18} />
            <span>Mis licencias</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("history")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === "history"
              ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
          >
            <Logs size={18} />
            <span>Historial de compras</span>
          </button>
        </li>
      </ul>
      <div className="border-t border-slate-100 my-2"></div>
      <button
        onClick={() => console.log("Cerrar sesión")}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 font-bold text-sm hover:bg-red-50/60 transition-all"
      >
        <LogOut size={18} />
        <span>Cerrar sesión</span>
      </button>
    </div>
  );
}

// ==========================================
// PESTAÑA: MIS LICENCIAS
// ==========================================
function LicencesTab({ onManageLicence }: { onManageLicence: (licence: LicenceItem) => void }) {
  const activeLicences: LicenceItem[] = [
    { id: "1", name: "DELFOS", plan: "Plan Anual", renewDate: "15 de Junio 2027", key: "MKF-89X3-PK3B-VBS3", price: "$49.90", developer: "ZenStudios", tag: "Gestión de inventario" },
    { id: "2", name: "HERMES", plan: "Plan Mensual", renewDate: "20 de Julio 2026", key: "HRM-12Z9-LK8A-QW92", price: "$8.99", developer: "IndieCode", tag: "Comunicación" }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <h2 className="text-xl font-black tracking-tight text-slate-950">Mis Licencias Activas</h2>
      <div className="space-y-4">
        {activeLicences.map((licence) => (
          <LicenceCard key={licence.id} licence={licence} onManage={() => onManageLicence(licence)} />
        ))}
      </div>
    </div>
  );
}

function LicenceCard({ licence, onManage }: { licence: LicenceItem; onManage: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licence.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex-1 space-y-3">
        <div className="flex gap-3 items-center">
          <h3 className="font-black text-xl text-slate-900">{licence.name}</h3>
          <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-0.5 font-bold text-xs flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Activa
          </span>
        </div>
        <p className="text-slate-400 text-xs font-semibold">{licence.plan} — Renueva el {licence.renewDate}</p>

        <div className="flex items-center justify-between bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2.5 max-w-sm">
          <code className="text-xs font-mono font-bold text-slate-700 tracking-wider">{licence.key}</code>
          <button onClick={copyToClipboard} className="text-slate-400 hover:text-indigo-600 p-1 transition-all">
            {copied ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <div className="flex sm:flex-row md:flex-col gap-2 shrink-0 w-full sm:w-auto md:w-44">
        <button onClick={onManage} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 text-xs rounded-xl transition-all">
          Administrar
        </button>
        <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3.5 text-xs rounded-xl transition-all flex items-center justify-center gap-2">
          <Download size={14} /> Descargar app
        </button>
      </div>
    </div>
  );
}

// ==========================================
// PESTAÑA: HISTORIAL DE COMPRAS
// ==========================================
function HistoryTab() {
  const purchases = [
    { id: "FAC-0042", date: "15 Jun 2026", item: "DELFOS - Plan Anual", amount: "$49.90", status: "Completado" },
    { id: "FAC-0039", date: "20 May 2026", item: "HERMES - Plan Mensual", amount: "$8.99", status: "Completado" },
    { id: "FAC-0031", date: "20 Abr 2026", item: "HERMES - Plan Mensual", amount: "$8.99", status: "Reembolsado" },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-200">
      <h2 className="text-xl font-black text-slate-950 mb-6 tracking-tight">Historial de Compras</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <th className="pb-4 font-bold">Factura</th>
              <th className="pb-4 font-bold">Fecha</th>
              <th className="pb-4 font-bold">Producto</th>
              <th className="pb-4 font-bold">Total</th>
              <th className="pb-4 text-right font-bold">Estado</th>
            </tr>
          </thead>
          <tbody className="text-sm font-semibold text-slate-700 divide-y divide-slate-50">
            {purchases.map((fac) => (
              <tr key={fac.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 text-[#081a5c] font-bold">{fac.id}</td>
                <td className="py-4 font-medium text-slate-400">{fac.date}</td>
                <td className="py-4 text-slate-800">{fac.item}</td>
                <td className="py-4 font-black text-slate-950">{fac.amount}</td>
                <td className="py-4 text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${fac.status === 'Completado' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
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

// ==========================================
// PESTAÑA: ADMINISTRAR SUSCRIPCIÓN
// ==========================================
function ManageSubscriptionTab({ licence, onBack, onOpenFreqModal }: { licence: LicenceItem; onBack: () => void; onOpenFreqModal: () => void }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors">
        <ArrowLeft size={14} /> Volver a mis licencias
      </button>

      <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md tracking-wider uppercase">Suscripción</span>
          <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-2">Gestionar {licence.name}</h2>
          <p className="text-xs text-slate-400 mt-1">Controla los ciclos de cobro y parámetros de tu producto.</p>
        </div>
        <div className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl text-right">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Costo recurrente</p>
          <p className="text-xl font-black text-[#081a5c] mt-0.5">{licence.price}<span className="text-xs font-normal text-slate-400"> /período</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-slate-900">
            <RefreshCw size={20} className="text-indigo-600" />
            <h3 className="font-black text-sm uppercase tracking-wider text-slate-700">Ciclo de Facturación</h3>
          </div>
          <div className="text-sm font-medium space-y-2 pt-2">
            <div className="flex justify-between"><span className="text-slate-400">Plan actual:</span><span className="text-slate-900 font-bold">{licence.plan}</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Próximo cobro:</span><span className="text-slate-900 font-bold">{licence.renewDate}</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Método:</span><span className="text-slate-900 font-bold">Transferencia Bancaria</span></div>
          </div>
          <button onClick={onOpenFreqModal} className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-all">
            Cambiar Frecuencia de Plan
          </button>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-slate-900">
            <CreditCard size={20} className="text-indigo-600" />
            <h3 className="font-black text-sm uppercase tracking-wider text-slate-700">Comprobantes</h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Si realizaste el pago manual de tu renovación mediante transferencia, puedes reportarlo directamente para actualizar la licencia.
          </p>
          <div className="pt-4">
            {/* Vinculación directa con la ruta /payment */}
            <button
              onClick={() => window.location.href = "/payment"}
              className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-3 rounded-xl text-xs transition-all"
            >
              Reportar Pago de Renovación
            </button>
          </div>
        </div>
      </div>

      <div className="bg-red-50/40 border border-red-100 rounded-3xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-4 items-start">
          <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-bold text-sm text-red-950">Cancelar Suscripción</h4>
            <p className="text-xs text-red-700/80 mt-1">
              Perderás acceso a los servidores en tiempo real al finalizar tu ciclo actual ({licence.renewDate}).
            </p>
          </div>
        </div>
        <button className="bg-white hover:bg-red-50 text-red-600 border border-red-200 font-bold px-4 py-2.5 rounded-xl text-xs transition-all">
          Dar de baja
        </button>
      </div>
    </div>
  );
}

// ==========================================
// MODAL: EDITAR PERFIL & CAMBIAR CONTRASEÑA
// ==========================================
function EditModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl z-10 overflow-y-auto max-h-[90vh] transform animate-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-all">
          <X size={18} />
        </button>

        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md tracking-wider uppercase">Seguridad y Cuenta</span>
        <h2 className="text-2xl font-black text-[#081a5c] tracking-tight mt-2 mb-6">Información del Perfil</h2>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          {/* Bloque 1: Datos Personales */}
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Nombre completo</label>
              <input type="text" defaultValue="Juan Desarrollador" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Correo electrónico</label>
              <input type="email" defaultValue="juan.dev@example.com" className="w-full px-4 py-3 bg-slate-100 rounded-xl border border-transparent outline-none text-sm text-slate-400 cursor-not-allowed" disabled />
            </div>
          </div>

          <div className="border-t border-slate-100 my-4"></div>

          {/* Bloque 2: Opción integrada de Cambiar Contraseña */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Lock size={16} className="text-indigo-600" />
              <h3>Cambiar Contraseña</h3>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Contraseña Actual</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Nueva Contraseña</label>
                <input type="password" placeholder="Mínimo 8 carac." className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Confirmar Nueva Contraseña</label>
                <input type="password" placeholder="Repite contraseña" className="w-full px-4 py-3 bg-slate-50 focus:bg-white rounded-xl border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-5 py-3 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-50 transition-all">Cancelar</button>
            <button type="submit" className="px-6 py-3 bg-[#081a5b] hover:bg-[#061343] text-white font-bold rounded-xl text-xs shadow-md transition-all">Guardar cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// MODAL: CAMBIAR FRECUENCIA DE PLAN
// ==========================================
function FrequencyModal({ isOpen, onClose, licenceName, currentPlan }: { isOpen: boolean; onClose: () => void; licenceName: string; currentPlan: string }) {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan === "Plan Anual" ? "annual" : "monthly");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0 cursor-pointer" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl z-10 transform animate-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-all">
          <X size={18} />
        </button>

        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md tracking-wider uppercase">Ciclo de Facturación</span>
        <h2 className="text-xl font-black text-[#081a5c] tracking-tight mt-2 mb-2">Frecuencia de {licenceName}</h2>
        <p className="text-xs text-slate-400 mb-6">Elige cómo deseas que se procesen los cobros de tu renovación.</p>

        <div className="space-y-3">
          {/* Opción Mensual */}
          <label
            onClick={() => setSelectedPlan("monthly")}
            className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${selectedPlan === "monthly"
              ? "border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-100"
              : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"
              }`}
          >
            <div className="flex items-center gap-3">
              <input type="radio" checked={selectedPlan === "monthly"} readOnly className="text-indigo-600 focus:ring-indigo-500" />
              <div>
                <p className="text-sm font-bold text-slate-900">Facturación Mensual</p>
                <p className="text-xs text-slate-400">Paga mes a mes sin compromisos a largo plazo.</p>
              </div>
            </div>
            <p className="text-sm font-black text-slate-900">$5.99<span className="text-[10px] text-slate-400 font-normal">/mes</span></p>
          </label>

          {/* Opción Anual */}
          <label
            onClick={() => setSelectedPlan("annual")}
            className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${selectedPlan === "annual"
              ? "border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-100"
              : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"
              }`}
          >
            <div className="flex items-center gap-3">
              <input type="radio" checked={selectedPlan === "annual"} readOnly className="text-indigo-600 focus:ring-indigo-500" />
              <div>
                <p className="text-sm font-bold text-slate-900">Facturación Anual</p>
                <p className="text-xs text-slate-400">Un solo pago al año con descuento preferencial.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-slate-900">$49.90<span className="text-[10px] text-slate-400 font-normal">/año</span></p>
              <span className="inline-block text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded uppercase tracking-wider mt-0.5">Ahorra %</span>
            </div>
          </label>
        </div>

        <div className="pt-6 flex items-center justify-end space-x-2 mt-4">
          <button type="button" onClick={onClose} className="px-5 py-3 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-50 transition-all">Cancelar</button>
          <button onClick={() => { console.log("Cambiado a:", selectedPlan); onClose(); }} className="px-6 py-3 bg-[#081a5b] hover:bg-[#061343] text-white font-bold rounded-xl text-xs shadow-md transition-all">
            Confirmar cambio
          </button>
        </div>
      </div>
    </div>
  );
}
