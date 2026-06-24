"use client";

import { useRouter } from "next/navigation";

export default function Catalog() {
  const router = useRouter();

  const logout = async () => {
    const response = await fetch("api/auth/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      //TODO: error message
      return;
    }
    router.replace("/login");
  }

  return (
    <div>
      <h1>Catalog</h1>

      <button onClick={logout}>logout</button>
    </div>
  )
}
