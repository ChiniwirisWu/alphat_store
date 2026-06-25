export default function Edit() {
  return (
    <div className="flex gap-5 items-center bg-white px-40 py-10">
      <div className="flex rounded bg-[#081a5c] size-20 rounded-full items-center justify-center ">
        <p className="text-center text-white font-bold text-3xl">JD</p>
      </div>

      <div>
        <div className="mb-2">
          <h1 className="text-3xl font-bold mb-2">Juan Desarrollador</h1>
          <p className="text-sm text-gray-500/80">juan.dev@example.com - Miembro desde Enero 2024</p>
        </div>

        <button className="px-5 py-2 rounded border border-gray-500/20 shadow shadow-lg font-medium text-sm">
          Editar Perfil
        </button>
      </div>
    </div>
  )
}
