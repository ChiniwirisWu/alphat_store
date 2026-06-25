import React from "react"

interface TextButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string
};

export default function TextButton({ title, ...props }: TextButtonProps) {
  return (
    <button className={`${props.className} bg-[#081a5c] p-3 rounded w-full shadow text-white font-medium text-md
      shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50`}>
      {title}
    </button>
  )
}
