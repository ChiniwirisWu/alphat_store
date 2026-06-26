"use client";


import React, { useState } from "react";
import Header from "@/components/header";
import {
  LayoutDashboard,
  Box,
  BadgeDollarSign,
  Users,
  Settings,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Calendar,
  Trash2,
  Copy,
  Check
} from "lucide-react";

// ==========================================
// INTERFACES & MODELOS DE DATOS
// ==========================================
interface ClientItem {
  id: string;
  name: string;
  email: string;
  subscription: string;
  status: "Activo" | "Inactivo";
}

interface PendingPayment {
  id: string;
  client: string;
  amount: string;
  reference: string;
  date: string;
  method: string;
}

interface IncidentItem {
  id: string;
  client: string;
  title: string;
  priority: "Alta" | "Media" | "Baja";
  status: "Pendiente" | "En Proceso" | "Finalizado";
  date: string;
}

export default function AdminConsole() {
  const [currentSection, setCurrentSection] = useState<string>("metrics");
  const [timeFilter, setTimeFilter] = useState<"7d" | "30d" | "all">("30d");
  const subscriptionOptions = ["MarkFlow Anual", "Statify Anual", "Pixely Mensual", "Ninguna"];

  // ==========================================
  // ESTADOS MUTABLES (DATOS EN TIEMPO REAL)
  // ==========================================
  const [clients, setClients] = useState<ClientItem[]>([
    { id: "C1", name: "María Gómez", email: "maria.g@email.com", subscription: "MarkFlow Anual", status: "Activo" },
    { id: "C2", name: "Dev Studio Co.", email: "dev.studio@tech.co", subscription: "Statify Anual", status: "Activo" },
    { id: "C3", name: "Carlos Diseño", email: "carlos.dsgn@web.com", subscription: "Pixely Mensual", status: "Activo" },
    { id: "C4", name: "Alex Code", email: "alex.code@email.com", subscription: "Ninguna", status: "Inactivo" },
  ]);

  const [clientEdits, setClientEdits] = useState<Record<string, { subscription: string; status: "Activo" | "Inactivo" }>>({});

  const [pendingPayments, setPendingPayments] = useState<PendingPayment[]>([
    { id: "P1", client: "luis.dev@gmail.com", amount: "$49.90", reference: "REF-99210", date: "2026-06-24", method: "Transferencia" },
    { id: "P2", client: "ana.studio@design.io", amount: "$8.99", reference: "REF-88412", date: "2026-06-25", method: "Pago Móvil" },
  ]);

  const [paymentModal, setPaymentModal] = useState<{ type: "approve" | "deny"; payment: PendingPayment } | null>(null);

  // Estados de control para las incidencias
  const [incidents, setIncidents] = useState<IncidentItem[]>([
    { id: "INC-01", client: "maria.g@email.com", title: "Error de sincronización con API de WhatsApp", priority: "Alta", status: "En Proceso", date: "2026-06-23" },
    { id: "INC-02", client: "carlos.dsgn@web.com", title: "Retraso en la generación de reportes PDF", priority: "Media", status: "Pendiente", date: "2026-06-25" },
    { id: "INC-03", client: "dev.studio@tech.co", title: "Fallo menor en CSS de la interfaz oscura", priority: "Baja", status: "Finalizado", date: "2026-06-21" },
    { id: "INC-04", client: "soporte@build.com", title: "Desbordamiento de memoria en Worker secundario", priority: "Alta", status: "Pendiente", date: "2026-06-26" },
  ]);

  const [incidentEdits, setIncidentEdits] = useState<Record<string, { priority: IncidentItem["priority"]; status: IncidentItem["status"] }>>({});
  const [deleteModalIncident, setDeleteModalIncident] = useState<IncidentItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ==========================================
  // MANEJADORES DE INTERACCIONES
  // ==========================================

  const updateClientBuffer = (id: string, fields: Partial<{ subscription: string; status: "Activo" | "Inactivo" }>) => {
    const currentClient = clients.find(c => c.id === id);
    if (!currentClient) return;

    const base = clientEdits[id] || { subscription: currentClient.subscription, status: currentClient.status };
    const updated = { ...base, ...fields };

    if (fields.subscription === "Ninguna") {
      updated.status = "Inactivo";
    }

    setClientEdits(prev => ({ ...prev, [id]: updated }));
  };

  const handleSaveClientChanges = (id: string) => {
    const changes = clientEdits[id];
    if (!changes) return;

    setClients(prev => prev.map(c => c.id === id ? { ...c, ...changes } : c));
    setClientEdits(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const confirmPaymentAction = () => {
    if (!paymentModal) return;
    const { payment } = paymentModal;
    setPendingPayments(prev => prev.filter(p => p.id !== payment.id));
    setPaymentModal(null);
  };

  const updateIncidentBuffer = (id: string, fields: Partial<{ priority: IncidentItem["priority"]; status: IncidentItem["status"] }>) => {
    const currentInc = incidents.find(i => i.id === id);
    if (!currentInc) return;

    const base = incidentEdits[id] || { priority: currentInc.priority, status: currentInc.status };
    setIncidentEdits(prev => ({ ...prev, [id]: { ...base, ...fields } }));
  };

  const cyclePriorityBuffer = (id: string, currentPriority: IncidentItem["priority"]) => {
    const priorities: IncidentItem["priority"][] = ["Baja", "Media", "Alta"];
    const activePriority = incidentEdits[id]?.priority || currentPriority;
    const nextIndex = (priorities.indexOf(activePriority) + 1) % priorities.length;
    updateIncidentBuffer(id, { priority: priorities[nextIndex] });
  };

  const cycleStatusBuffer = (id: string, currentStatus: IncidentItem["status"]) => {
    const statuses: IncidentItem["status"][] = ["Pendiente", "En Proceso", "Finalizado"];
    const activeStatus = incidentEdits[id]?.status || currentStatus;
    const nextIndex = (statuses.indexOf(activeStatus) + 1) % statuses.length;
    updateIncidentBuffer(id, { status: statuses[nextIndex] });
  };

  const handleSaveIncidentChanges = (id: string) => {
    const changes = incidentEdits[id];
    if (!changes) return;

    setIncidents(prev => prev.map(inc => inc.id === id ? { ...inc, ...changes } : inc));
    setIncidentEdits(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const confirmDeleteIncident = () => {
    if (!deleteModalIncident) return;
    const id = deleteModalIncident.id;
    setIncidents(prev => prev.filter(inc => inc.id !== id));
    setIncidentEdits(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
    setDeleteModalIncident(null);
  };

  const handleCopyReference = (refText: string, id: string) => {
    navigator.clipboard.writeText(refText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ==========================================
  // FILTRADO Y ORDENAMIENTO DE INCIDENCIAS
  // ==========================================
  const priorityWeight = { Alta: 3, Media: 2, Baja: 1 };

  const activeIncidents = incidents
    .filter(inc => inc.status !== "Finalizado")
    .sort((a, b) => {
      const weightA = priorityWeight[incidentEdits[a.id]?.priority || a.priority];
      const weightB = priorityWeight[incidentEdits[b.id]?.priority || b.priority];
      return weightB - weightA;
    });

  const completedIncidents = incidents.filter(inc => inc.status === "Finalizado");

  return (
    <div className="w-full min-h-screen bg-slate-50/50 text-slate-950 font-sans antialiased flex flex-col">

      <Header />

      <div className="flex flex-1 w-full pt-[0px] relative">

        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0 sticky top-[73px] h-[calc(100vh-73px)] z-10">
          <div className="space-y-8">
            <nav className="space-y-1">
              <button
                onClick={() => setCurrentSection("metrics")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${currentSection === "metrics" ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }`}
              >
                <LayoutDashboard size={18} />
                <span>Métricas</span>
              </button>

              <button
                onClick={() => setCurrentSection("clients")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${currentSection === "clients" ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }`}
              >
                <Users size={18} />
                <span>Clientes</span>
              </button>

              <button
                onClick={() => setCurrentSection("payments")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${currentSection === "payments" ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }`}
              >
                <Clock size={18} />
                <span>Pagos Pendientes</span>
              </button>

              <button
                onClick={() => setCurrentSection("incidents")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${currentSection === "incidents" ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }`}
              >
                <AlertCircle size={18} />
                <span>Incidencias</span>
              </button>
            </nav>
          </div>

          <div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-950">
              <Settings size={18} />
              <span>Ajustes</span>
            </button>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 p-10 max-w-7xl w-full mx-auto space-y-8 overflow-x-hidden">

          {/* VISTA 1: MÉTRICAS */}
          {/* VISTA 1: MÉTRICAS */}
          {currentSection === "metrics" && (
            <div className="space-y-6">
              {/* ENCABEZADO DE LA SECCIÓN + FILTRO DE FECHA */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                <div>
                  <h3 className="font-bold text-lg text-slate-950 tracking-tight">Rendimiento Operativo</h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Monitoreo en tiempo real de licenciamiento e ingresos.</p>
                </div>

                {/* Selector de Rango de Tiempo Estilo Segmentado */}
                <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 self-start sm:self-center">
                  {(
                    [
                      { id: "7d", label: "7 días" },
                      { id: "30d", label: "30 días" },
                      { id: "all", label: "Histórico" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setTimeFilter(tab.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${timeFilter === tab.id
                          ? "bg-white text-slate-950 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CUADRÍCULA DE TARJETAS (METRICS GRID) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* CARD 1: INGRESOS TOTALES */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative group hover:border-slate-200 transition-colors">
                  <div className="flex items-center justify-between w-full">
                    <div className="size-9 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                      <BadgeDollarSign size={18} className="text-indigo-600" />
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <ArrowUpRight size={10} /> +12.5%
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Ingresos Totales</p>
                    <p className="text-2xl font-bold text-slate-950 tracking-tight mt-0.5">
                      {timeFilter === "7d" ? "$8,200" : timeFilter === "30d" ? "$36,100" : "$142,400"}
                    </p>
                  </div>
                </div>

                {/* CARD 2: LICENCIAS VENDIDAS */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative group hover:border-slate-200 transition-colors">
                  <div className="flex items-center justify-between w-full">
                    <div className="size-9 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                      <Box size={18} className="text-indigo-600" />
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <ArrowUpRight size={10} /> +8.2%
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Licencias Vendidas</p>
                    <p className="text-2xl font-bold text-slate-950 tracking-tight mt-0.5">
                      {timeFilter === "7d" ? "310" : timeFilter === "30d" ? "1,420" : "5,890"}
                    </p>
                  </div>
                </div>

                {/* CARD 3: SUSCRIPCIONES ACTIVAS */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative group hover:border-slate-200 transition-colors">
                  <div className="flex items-center justify-between w-full">
                    <div className="size-9 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                      <Activity size={18} className="text-indigo-600" />
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <ArrowUpRight size={10} /> +15.3%
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Suscripciones Activas</p>
                    <p className="text-2xl font-bold text-slate-950 tracking-tight mt-0.5">
                      {timeFilter === "7d" ? "840" : timeFilter === "30d" ? "856" : "1,120"}
                    </p>
                  </div>
                </div>

                {/* CARD 4: MRR (INGRESO MENSUAL RECURRENTE) */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative group hover:border-slate-200 transition-colors">
                  <div className="flex items-center justify-between w-full">
                    <div className="size-9 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                      <TrendingUp size={18} className="text-indigo-600" />
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <ArrowUpRight size={10} /> +5.4%
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">MRR</p>
                    <p className="text-2xl font-bold text-slate-950 tracking-tight mt-0.5">$8,450</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* VISTA 2: BASE DE CLIENTES */}
          {currentSection === "clients" && (
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
              <div>
                <h3 className="font-black text-xl text-slate-950 tracking-tight">Base de Clientes</h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Los cambios estructurales requieren confirmación a través de "Validar Cambios".</p>
              </div>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-4">ID</th>
                      <th className="pb-4">Nombre completo</th>
                      <th className="pb-4">Correo electrónico</th>
                      <th className="pb-4">Suscripción Asignada</th>
                      <th className="pb-4">Estado de cuenta</th>
                      <th className="pb-4 text-center w-[160px]">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-semibold text-slate-700 divide-y divide-slate-50">
                    {clients.map(client => {
                      const hasPendingChanges = !!clientEdits[client.id];
                      const activeSub = hasPendingChanges ? clientEdits[client.id].subscription : client.subscription;
                      const activeStatus = hasPendingChanges ? clientEdits[client.id].status : client.status;

                      return (
                        <tr key={client.id} className={`hover:bg-slate-50/50 transition-colors ${hasPendingChanges ? "bg-amber-50/20" : ""}`}>
                          <td className="py-4 text-slate-400 font-bold">{client.id}</td>
                          <td className="py-4 text-[#081a5c] font-bold">{client.name}</td>
                          <td className="py-4 text-slate-500 font-medium">{client.email}</td>
                          <td className="py-4">
                            <select
                              value={activeSub}
                              onChange={(e) => updateClientBuffer(client.id, { subscription: e.target.value })}
                              className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-xl outline-none focus:border-indigo-500 cursor-pointer min-w-[180px] transition-all"
                            >
                              {subscriptionOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </td>
                          <td className="py-4">
                            <button
                              onClick={() => updateClientBuffer(client.id, { status: activeStatus === "Activo" ? "Inactivo" : "Activo" })}
                              className={`px-4 py-1.5 rounded-xl text-xs font-black tracking-wide uppercase transition-all border ${activeStatus === "Activo"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                : "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100"
                                }`}
                            >
                              {activeStatus}
                            </button>
                          </td>
                          <td className="py-4 text-center">
                            <div className="inline-flex justify-center items-center w-[130px] h-[36px]">
                              {hasPendingChanges ? (
                                <button
                                  onClick={() => handleSaveClientChanges(client.id)}
                                  className="w-full h-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center"
                                >
                                  Validar Cambios
                                </button>
                              ) : (
                                <span className="text-xs text-slate-400 font-normal">Sin cambios</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VISTA 3: PAGOS PENDIENTES */}
          {currentSection === "payments" && (
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
              <div>
                <h3 className="font-black text-xl text-slate-950 tracking-tight">Comprobación de Pagos Manuales</h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">La conciliación de fondos requiere de una ventana de revisión interactiva.</p>
              </div>

              {pendingPayments.length === 0 ? (
                <div className="text-center py-12 text-slate-400 font-bold text-sm">No hay pagos pendientes de verificación.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {pendingPayments.map(payment => {
                    const isCopied = copiedId === payment.id;
                    return (
                      <div key={payment.id} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[10px] font-black bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase tracking-wider">Esperando Verificación</span>
                              <h4 className="font-black text-slate-950 text-base mt-1">{payment.client}</h4>
                            </div>
                            <span className="text-xl font-black text-slate-950">{payment.amount}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-200/60">
                            <p>Método: <span className="text-slate-800 font-bold">{payment.method}</span></p>

                            {/* Referencia Bancaria con Copiado Integrado */}
                            <div className="flex items-center gap-1">
                              <span>Referencia:</span>
                              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-0.5 rounded-lg max-w-max">
                                <span className="text-indigo-600 font-mono font-bold select-all">{payment.reference}</span>
                                <button
                                  onClick={() => handleCopyReference(payment.reference, payment.id)}
                                  title="Copiar referencia"
                                  className={`p-1 rounded-md transition-all ${isCopied ? "bg-emerald-50 text-emerald-600" : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                                    }`}
                                >
                                  {isCopied ? <Check size={12} /> : <Copy size={12} />}
                                </button>
                              </div>
                            </div>

                            <p className="col-span-2 flex items-center gap-1 mt-1">
                              <Calendar size={12} className="text-slate-400" /> Fecha Solicitud: <span className="text-slate-800">{payment.date}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-6 pt-2">
                          <button
                            onClick={() => setPaymentModal({ type: "deny", payment })}
                            className="flex-1 bg-white hover:bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all"
                          >
                            <XCircle size={14} /> Denegar
                          </button>
                          <button
                            onClick={() => setPaymentModal({ type: "approve", payment })}
                            className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-slate-950/10"
                          >
                            <CheckCircle2 size={14} /> Validar Pago
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* VISTA 4: MESA DE INCIDENCIAS */}
          {currentSection === "incidents" && (
            <div className="space-y-8">

              {/* TABLA 1: INCIDENCIAS ACTIVAS */}
              <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                <div>
                  <h3 className="font-black text-xl text-slate-950 tracking-tight">Mesa de Incidencias Activas</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Ordenadas de forma jerárquica (Alta → Media → Baja). Confirma modificaciones o remueve reportes falsos en su columna dedicada.</p>
                </div>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <th className="pb-4">Ticket</th>
                        <th className="pb-4">Reportado</th>
                        <th className="pb-4">Cliente</th>
                        <th className="pb-4 w-1/4">Incidencia</th>
                        <th className="pb-4">Prioridad (Rotar)</th>
                        <th className="pb-4">Estado (Rotar)</th>
                        <th className="pb-4 text-center w-[140px]">Acciones</th>
                        {/* Cabecera con título asignado para eliminación */}
                        <th className="pb-4 text-center w-[65px] text-slate-400">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-semibold text-slate-700 divide-y divide-slate-50">
                      {activeIncidents.map(inc => {
                        const hasPendingChanges = !!incidentEdits[inc.id];
                        const activePriority = hasPendingChanges ? incidentEdits[inc.id].priority : inc.priority;
                        const activeStatus = hasPendingChanges ? incidentEdits[inc.id].status : inc.status;

                        return (
                          <tr key={inc.id} className={`hover:bg-slate-50/50 transition-colors ${hasPendingChanges ? "bg-amber-50/20" : ""}`}>
                            <td className="py-4 text-slate-400 font-mono font-bold">{inc.id}</td>
                            <td className="py-4 text-xs text-slate-500 font-medium">
                              <span className="flex items-center gap-1"><Calendar size={12} className="text-slate-400" /> {inc.date}</span>
                            </td>
                            <td className="py-4 font-bold text-slate-900">{inc.client}</td>
                            <td className="py-4 text-xs font-medium text-slate-600 leading-relaxed">{inc.title}</td>

                            <td className="py-4">
                              <button
                                onClick={() => cyclePriorityBuffer(inc.id, inc.priority)}
                                className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 transition-transform active:scale-95 ${activePriority === "Alta" ? "bg-rose-100 text-rose-800 shadow-sm shadow-rose-100" : activePriority === "Media" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"
                                  }`}
                              >
                                {activePriority}
                              </button>
                            </td>

                            <td className="py-4">
                              <button
                                onClick={() => cycleStatusBuffer(inc.id, inc.status)}
                                className={`px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 transition-transform active:scale-95 ${activeStatus === "Finalizado" ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : activeStatus === "En Proceso" ? "text-indigo-700 bg-indigo-50 border border-indigo-200" : "text-amber-700 bg-amber-50 border border-amber-200"
                                  }`}
                              >
                                {activeStatus}
                              </button>
                            </td>

                            <td className="py-4 text-center">
                              <div className="inline-flex justify-center items-center w-[120px] h-[34px]">
                                {hasPendingChanges ? (
                                  <button
                                    onClick={() => handleSaveIncidentChanges(inc.id)}
                                    className="w-full h-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center"
                                  >
                                    Validar
                                  </button>
                                ) : (
                                  <span className="text-xs text-slate-400 font-normal">Sin cambios</span>
                                )}
                              </div>
                            </td>

                            {/* Columna: Eliminar Reporte Mapeado al Modal */}
                            <td className="py-4 text-center">
                              <button
                                onClick={() => setDeleteModalIncident(inc)}
                                title="Eliminar reporte fake"
                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                              >
                                <Trash2 size={15} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                      {activeIncidents.length === 0 && (
                        <tr>
                          <td colSpan={8} className="text-center py-8 text-slate-400 font-bold text-sm">No hay incidencias activas en curso.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TABLA 2: HISTORIAL DE INCIDENCIAS FINALIZADAS */}
              <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                <div>
                  <h3 className="font-black text-xl text-slate-950 tracking-tight">
                    Historial de Incidencias Finalizadas
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Tickets resueltos. Modifica su estado a "Pendiente" o "En Proceso" y presiona validar para devolverlos arriba.</p>
                </div>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <th className="pb-4">Ticket</th>
                        <th className="pb-4">Fecha Cierre</th>
                        <th className="pb-4">Cliente</th>
                        <th className="pb-4 w-1/4">Incidencia</th>
                        <th className="pb-4">Prioridad (Rotar)</th>
                        <th className="pb-4">Estado (Rotar)</th>
                        <th className="pb-4 text-center w-[140px]">Acciones</th>
                        <th className="pb-4 text-center w-[65px] text-slate-400">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-semibold text-slate-700 divide-y divide-slate-50">
                      {completedIncidents.map(inc => {
                        const hasPendingChanges = !!incidentEdits[inc.id];
                        const activePriority = hasPendingChanges ? incidentEdits[inc.id].priority : inc.priority;
                        const activeStatus = hasPendingChanges ? incidentEdits[inc.id].status : inc.status;

                        return (
                          <tr key={inc.id} className={`hover:bg-slate-50/50 transition-colors ${hasPendingChanges ? "bg-amber-50/20" : ""}`}>
                            <td className="py-4 text-slate-400 font-mono font-bold">{inc.id}</td>
                            <td className="py-4 text-xs text-slate-500 font-medium">
                              <span className="flex items-center gap-1"><Calendar size={12} className="text-slate-400" /> {inc.date}</span>
                            </td>
                            <td className="py-4 font-bold text-slate-900">{inc.client}</td>
                            <td className="py-4 text-xs font-medium text-slate-600 leading-relaxed">{inc.title}</td>

                            <td className="py-4">
                              <button
                                onClick={() => cyclePriorityBuffer(inc.id, inc.priority)}
                                className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 transition-transform active:scale-95 ${activePriority === "Alta" ? "bg-rose-100 text-rose-800" : activePriority === "Media" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"
                                  }`}
                              >
                                {activePriority}
                              </button>
                            </td>

                            <td className="py-4">
                              <button
                                onClick={() => cycleStatusBuffer(inc.id, inc.status)}
                                className={`px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 transition-transform active:scale-95 ${activeStatus === "Finalizado" ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : activeStatus === "En Proceso" ? "text-indigo-700 bg-indigo-50 border border-indigo-200" : "text-amber-700 bg-amber-50 border border-amber-200"
                                  }`}
                              >
                                {activeStatus}
                              </button>
                            </td>

                            <td className="py-4 text-center">
                              <div className="inline-flex justify-center items-center w-[120px] h-[34px]">
                                {hasPendingChanges ? (
                                  <button
                                    onClick={() => handleSaveIncidentChanges(inc.id)}
                                    className="w-full h-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center"
                                  >
                                    Validar
                                  </button>
                                ) : (
                                  <span className="text-xs text-slate-400 font-normal">Sin cambios</span>
                                )}
                              </div>
                            </td>

                            <td className="py-4 text-center">
                              <div className="w-[36px]" />
                            </td>
                          </tr>
                        );
                      })}
                      {completedIncidents.length === 0 && (
                        <tr>
                          <td colSpan={8} className="text-center py-8 text-slate-400 font-bold text-sm">Ninguna incidencia ha sido archivada todavía.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

        </main>
      </div>

      {/* PROMPT PERSONALIZADO: CONFIRMAR ELIMINACIÓN DE INCIDENCIA FAKE */}
      {deleteModalIncident && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-6">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600">
                <Trash2 size={22} />
              </div>
              <div>
                <h3 className="font-black text-lg tracking-tight">Descartar Reporte Basura</h3>
                <p className="text-xs text-slate-400">Esta acción removerá el ticket de la base de datos activa.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 my-5 border border-slate-100 text-xs space-y-2 font-medium text-slate-600">
              <p>Ticket ID: <span className="text-slate-950 font-mono font-bold">{deleteModalIncident.id}</span></p>
              <p>Cliente: <span className="text-slate-950 font-bold">{deleteModalIncident.client}</span></p>
              <div className="pt-1 text-[11px] leading-relaxed text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200/60 font-medium italic">
                "{deleteModalIncident.title}"
              </div>
              <p className="pt-2 text-rose-600 font-semibold">
                ¿Confirmas que se trata de un reporte de prueba, duplicado o fraudulento?
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteModalIncident(null)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-50 transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteIncident}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs shadow-sm transition-all"
              >
                Eliminar Reporte
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROMPT DE VALIDACIÓN DE PAGOS */}
      {paymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-6">
            <div className="flex items-center gap-3 text-slate-900">
              <div className={`p-2.5 rounded-xl ${paymentModal.type === "approve" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 className="font-black text-lg tracking-tight">Confirmar Operación de Pago</h3>
                <p className="text-xs text-slate-400">Control de transacciones de software.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 my-5 border border-slate-100 text-xs space-y-2 font-medium text-slate-600">
              <p>Cliente: <span className="text-slate-950 font-bold">{paymentModal.payment.client}</span></p>
              <p>Monto Evaluado: <span className="text-slate-950 font-bold">{paymentModal.payment.amount}</span></p>
              <p>Referencia Bancaria: <span className="text-indigo-600 font-mono font-bold">{paymentModal.payment.reference}</span></p>
              <p className="pt-2 border-t border-slate-200/60 text-slate-500">
                ¿Estás seguro de que deseas confirmar esta acción en la plataforma?
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setPaymentModal(null)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-50 transition-all"
              >
                Volver atrás
              </button>
              <button
                onClick={confirmPaymentAction}
                className={`px-5 py-2.5 text-white font-bold rounded-xl text-xs shadow-sm transition-all ${paymentModal.type === "approve" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-rose-600 hover:bg-rose-700"
                  }`}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
