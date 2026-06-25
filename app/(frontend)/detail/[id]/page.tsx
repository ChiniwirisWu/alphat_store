import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import Content from "./components/content";
import Footer from "@/components/footer";

type DetailProps = {
  params: Promise<{ id: string }>
};

export default async function Detail({ params }: DetailProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full">
      <Header />
      <Breadcrumbs />
      <Content />
      <Footer />
    </div>
  )
}


