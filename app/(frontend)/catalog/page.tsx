"use client";

import Header from "@/components/header";
import Hero from "./component/hero";
import Content from "./component/content";
import Footer from "@/components/footer";

export default function Catalog() {
  return (
    <div className="bg-gray-500/5">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  )
}




