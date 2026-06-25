"use client"

import React from "react"
import { LucideIcon } from "lucide-react"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string
  Icon?: LucideIcon
};

export default function Button({ title, Icon, ...props }: ButtonProps) {
  return (
    <button className={`${props.className} w-full flex justify-center items-center gap-2 border border-gray-500/10 rounded rounded-xl py-1.5 px-5`}>
      {Icon && (
        <Icon size={20} />
      )}
      <p className="font-medium text-center text-sm">{title}</p>
    </button>
  );
};
