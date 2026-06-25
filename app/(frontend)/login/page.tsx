"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"

import LogoIcon from "@/components/logoIcon";
import TextInput from "@/components/textInput";

import TabsToggle from "./components/tabsToggle";
import PasswordInput from "./components/passwordInput";
import TextButton from "@/components/textButton";
import Divider from "@/components/divider";

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
    <div className="flex flex-col items-center justify-center pt-20">

      <div className="flex items-center gap-2 mb-4">
        <LogoIcon />
        <h1 className="text-3xl font-bold">ALPHAT</h1>
      </div>

      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenido de nuevo</h1>
        <p className="text-sm text-gray-500">Accede para gestionar tus licencias</p>
      </div>

      <div className="min-w-[450] bg-white shadow-xl rounded-lg px-10 py-5">
        <TabsToggle className="mb-5" />
        <TextInput name="email" placeholder="tu@correo.com" />
        <PasswordInput />
        <TextButton className="mt-3" title="Acceder a mi cuenta" />
        <Divider title="O continúa con" />
        <button>Google</button>
      </div>
    </div>
  )
}
