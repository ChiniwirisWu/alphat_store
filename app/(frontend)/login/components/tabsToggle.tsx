"use client"

import { useState } from "react"

enum Tabs {
  login,
  signup
}

export default function TabsToggle() {

  const [selected, setSelected] = useState(Tabs.signup)

  const styles = {
    selected: "flex-1 bg-white text-[#051461] outline-none font-medium text-sm py-2.5 px-6 rounded-xl shadow-sm transition-all duration-200 text-center",
    unselected: "flex-1 text-[#5c6479] hover:text-[#051461] outline-none font-medium text-sm py-2.5 px-6 rounded-xl transition-all duration-200 text-center"
  };

  return (
    <div className="w-full max-w-md bg-[#f4f5f8] p-1.5 rounded-xl flex items-center">
      {/* Botón Activo (Iniciar sesión) */}
      <button
        onClick={() => setSelected(Tabs.login)}
        className={`${selected == Tabs.login ? styles.selected : styles.unselected}`}>
        Iniciar sesión
      </button>

      {/* Botón Inactivo (Registro) */}
      <button
        onClick={() => setSelected(Tabs.signup)}
        className={`${selected == Tabs.signup ? styles.selected : styles.unselected}`}>
        Registro
      </button>
    </div>
  )
}
