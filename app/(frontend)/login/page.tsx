"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
import Logo from "@/components/logo";
import TabsToggle from "./components/tabsToggle";

export default function Login() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("api/auth/login", {
      method: "post",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" }
    })

    if (!response.ok) {
      //TODO: error message
      return;
    }

    router.replace("/catalog")
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <Logo />
        <h1>ALPHAT</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>Bienvenido de nuevo</h1>
        <p>Accede para gestionar tus licencias</p>
      </div>

      <div className="min-w-[450] bg-white shadow-xl rounded-lg px-10 py-5">
        <TabsToggle />

        <label>Correo electrónico</label>
        <input type="text" name="email" id="email" placeholder="ejemmplo@correo.com" />

        <div>
          <div>
            <label>Contraseña</label>
            <a>¿Olvidaste tu contraseña?</a>
          </div>
          <input type="password" name="password" id="password" placeholder="*******" />
        </div>

        <button>Acceder a mi cuenta</button>
        <p>O continúa con</p>
        <button>Google</button>
      </div>
    </div>
  )
}
