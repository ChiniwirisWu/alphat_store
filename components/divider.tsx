type DividerProps = {
  title: string
};

export default function Divider({ title }: DividerProps) {
  return (
    <div className="flex items-center my-4 w-full">
      {/* Línea izquierda */}
      <div className="flex-grow border-t border-gray-200"></div>

      {/* Texto central */}
      <span className="flex-shrink mx-4 text-gray-500 font-normal text-sm">
        {title}
      </span>

      {/* Línea derecha */}
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  )
}
