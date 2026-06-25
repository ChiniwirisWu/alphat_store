import React from "react";
import "@constants/global.css";
import { jakarta_sans } from "@/constants/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className={`${jakarta_sans} bg-[F4F3F8]/50 w-full h-screen placeholder-black`}>
          {children}
        </div>
      </body>
    </html>
  )
};
