export default function PasswordInput() {
  return (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium">Contraseña</label>
        <a className="text-xs font-medium text-[#081a5c]">¿Olvidaste tu contraseña?</a>
      </div>

      <input
        className="bg-[#f4f5f8] rounded px-5 py-3 outline-none"
        type="password"
        name="password"
        id="password"
        placeholder="*******"
      />
    </div>
  )
}
