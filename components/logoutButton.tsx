"use client"
import { LogOut } from "lucide-react"

import React from "react";

interface LogOutButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  handleOnClick: () => void
}

export default function LogOutButton({ handleOnClick }: LogOutButtonProps) {
  return (
    <button
      onClick={() => handleOnClick()}
    >
      <div className="text-red-600 gap-2 rounded rounded-xl px-6 py-2 w-65 rounded-sm flex items-center">
        <LogOut className="flex flex-shrink" size={20} />
        <p className="flex grow-1 font-medium">Cerrar Sesión</p>
      </div>
    </button>
  )
};
