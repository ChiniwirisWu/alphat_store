"use client";

import Header from "@/components/header";
import Hero from "./component/hero";
import Content from "./component/content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-500/5">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  )
}




