import { X } from "lucide-react"; // Optional: Install lucide-react for a nice close icon, or use an "X" text.

type EditModalProps = {
  isOpen: boolean,
  onClose: () => void
}

export default function EditModal({ isOpen, onClose }: EditModalProps) {
  // If the modal isn't open, render nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Backdrop / Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content Container */}
      <div className="relative w-full max-w-2xl bg-white p-6 rounded-3xl border border-gray-100 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-50 transition-all"
          aria-label="Cerrar"
        >
          <X className="size-5" />
        </button>

        <h2 className="text-xl font-bold text-[#081a5c] mb-6">Editar Perfil</h2>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); /* Handle submit */ }}>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Nombre completo</label>
            <input type="text" defaultValue="Juan Desarrollador" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all text-slate-800" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Correo electrónico</label>
            <input type="email" defaultValue="juan.dev@example.com" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:border-gray-200 focus:bg-white outline-none text-sm transition-all text-gray-400 cursor-not-allowed" disabled />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="text-slate-600 font-semibold py-3 px-6 rounded-xl text-sm hover:bg-gray-50 transition-all"
            >
              Cancelar
            </button>
            <button type="submit" className="bg-[#11119b] hover:bg-[#0c0c7a] text-white font-semibold py-3 px-6 rounded-xl text-sm shadow-md transition-all">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
