"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LogoIcon from "./logoIcon";
import { User, Search } from "lucide-react"; // Añadí Search para el icono si lo necesitas

// 1. Lista hardcodeada de los 7 softwares de ALPHAT
const SOFTWARES_MOCK = [
  { id: "mercurio", name: "Mercurio", category: "Gestión de Licencias" },
  { id: "hermes", name: "Hermes", category: "Mensajería Corporativa" },
  { id: "delfos", name: "Delfos", category: "Productividad y Análisis" },
  { id: "atenea", name: "Atenea", category: "Seguridad y Cifrado" },
  { id: "cronos", name: "Cronos", category: "Control de Tiempo" },
  { id: "apolo", name: "Apolo", category: "Automatización de Datos" },
  { id: "ares", name: "Ares", category: "Optimización de Servidores" },
];

export default function Header() {
  return (
    <div className="flex bg-white items-center gap-20 px-10 py-3 border-b border-gray-500/10 relative z-50">
      <Logo />
      <Searchbar />
      <Links />
    </div>
  );
}

function Logo() {
  return (
    <Link href="/home">
      <div className="flex gap-1 flex-shrink-0 cursor-pointer">
        <LogoIcon />
        <h1 className="text-lg font-bold">ALPHAT</h1>
      </div>
    </Link>
  );
}

function Searchbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filtrar la lista según lo que escribe el usuario
  const filteredSoftwares = SOFTWARES_MOCK.filter((software) =>
    software.name.toLowerCase().includes(query.toLowerCase())
  );

  // Cerrar la lista si el usuario hace clic fuera del buscador
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Manejo de la navegación por teclado (Flechas arriba/abajo, Enter y Escape)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredSoftwares.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredSoftwares.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredSoftwares.length - 1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < filteredSoftwares.length) {
        e.preventDefault();
        const selected = filteredSoftwares[activeIndex];
        setQuery(selected.name);
        setIsOpen(false);
        // Aquí puedes ejecutar la redirección si lo deseas, ej: router.push(`/software/${selected.id}`)
        console.log(`Navegando a: ${selected.name}`);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="flex-grow relative">
      <div className="relative flex items-center">
        <input
          className="w-full bg-[#f4f5f8] rounded-full pl-5 pr-12 py-3 outline-none border border-transparent focus:border-gray-300 focus:bg-white transition-all text-sm"
          type="text"
          placeholder="¿Qué software buscas?"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setActiveIndex(-1); // Resetea la selección al escribir de nuevo
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        <Search className="absolute right-4 text-gray-400 w-5 h-5 pointer-events-none" />
      </div>

      {/* Lista desplegable flotante estilo YouTube */}
      {isOpen && query.trim() !== "" && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto">
          {filteredSoftwares.length > 0 ? (
            <ul className="py-2">
              {filteredSoftwares.map((software, index) => (
                <li
                  key={software.id}
                  className={`px-5 py-2.5 text-sm cursor-pointer flex justify-between items-center transition-colors ${index === activeIndex
                    ? "bg-gray-100 text-[#081a5c] font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                    }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    setQuery(software.name);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{software.name}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-normal">
                    {software.category}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-4 text-sm text-gray-500 italic text-center">
              No se encontraron softwares disponibles
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Links() {
  return (
    <ul className="flex flex-shrink-0 items-center gap-6 text-sm font-medium text-slate-500">
      {/* 1. Exploración pública */}
      <li>
        <Link
          href="/catalog"
          className="hover:text-slate-950 transition-colors duration-200 tracking-tight"
        >
          Explorar Catálogo
        </Link>
      </li>

      {/* 2. Contacto / Soporte Técnico */}
      <li>
        <Link
          href="/contact"
          className="hover:text-slate-950 transition-colors duration-200 tracking-tight"
        >
          Soporte y Contacto
        </Link>
      </li>

      {/* Separador sutil antes de las herramientas de administración */}
      <div className="h-4 w-[1px] bg-slate-200/80 self-center" />

      {/* 3. Portales de Administración Interna */}
      <li>
        <Link
          href="/dashboard"
          className="hover:text-slate-950 transition-colors duration-200 tracking-tight bg-slate-50 hover:bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-100 font-semibold text-slate-700 text-xs"
        >
          Panel de Control
        </Link>
      </li>
      <li>
        <Link
          href="/catalog-editor"
          className="hover:text-slate-950 transition-colors duration-200 tracking-tight text-xs"
        >
          Editor
        </Link>
      </li>

      {/* Perfil de Usuario */}
      <UserLink />
    </ul>
  );
}

function UserLink() {
  return (
    <li className="pl-2">
      <Link href="/profile">
        <div className="flex items-center gap-3 cursor-pointer group border-l border-slate-200 pl-4">
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-[11px] text-slate-400 font-medium leading-none">Cuenta</span>
            <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-950 transition-colors mt-0.5">
              Acceder
            </span>
          </div>
          <span className="rounded-full bg-slate-100 p-2 text-slate-600 group-hover:bg-slate-950 group-hover:text-white transition-all duration-200 shadow-sm border border-slate-200/50 group-hover:border-transparent">
            <User size={16} />
          </span>
        </div>
      </Link>
    </li>
  );
}
