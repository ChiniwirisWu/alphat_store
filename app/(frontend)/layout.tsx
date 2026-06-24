import React from "react";
import "@constants/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="bg-black w-full h-screen text-white placeholder-white">
          {children}
        </div>
      </body>
    </html>
  )
};
