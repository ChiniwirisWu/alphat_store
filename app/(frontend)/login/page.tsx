"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setCredentials({
              ...credentials,
              email: e.target.value
            });
          }}
          type="email"
          name="email"
          placeholder="email"
        />

        <input
          onChange={(e) => {
            setCredentials({
              ...credentials,
              password: e.target.value
            });
          }}
          type="password"
          name="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  )
}
