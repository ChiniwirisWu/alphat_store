"use client"

import React from "react";
import { LucideIcon } from "lucide-react"

interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  Icon: LucideIcon,
  title: string,
  item: string,
  selected: string,
  handleOnClick: (selected: string) => void
}

export default function IconButton({ Icon, title, item, selected, handleOnClick, ...props }: IconButtonProps) {
  return (
    <button
      onClick={() => handleOnClick(item)}
    >
      <div className={`${item == selected ? "text-[#081a5c] bg-white shadow  shadow-lg" : null} gap-2 px-5 py-3 rounded rounded-xl w-65 rounded-sm flex items-center`}>
        <Icon className="flex flex-shrink" size={20} />
        <p className="flex grow-1 font-medium">{title}</p>
      </div>
    </button>
  )
};
