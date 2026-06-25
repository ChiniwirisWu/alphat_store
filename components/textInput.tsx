type TextInputProps = {
  name: string,
  placeholder: string
};

export default function TextInput({ name, placeholder }: TextInputProps) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-sm font-medium mb-2">Correo electrónico</label>
      <input
        className="bg-[#f4f5f8] rounded px-5 py-3 outline-none"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  )
}
