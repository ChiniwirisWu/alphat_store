import React from "react"
import { LucideIcon } from "lucide-react"

interface TextWithIconProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string
  Icon: LucideIcon,
};

export default function TextWithIcon({ title, Icon, ...props }: TextWithIconProps) {
  return (
    <div className={`${props.className} flex gap-2 items-center`}>
      <span className="bg-indigo-200 rounded-full size-7 flex justify-center items-center"><Icon size={15} /></span>
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  )
}
