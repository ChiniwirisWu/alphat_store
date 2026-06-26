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
    <div className="flex flex-col min-h-screen bg-slate-50/30 text-slate-900 antialiased font-sans">
      <Header />
      <main className="flex-grow">
        <Content id={id} />
      </main>
      <Footer />
    </div>
  );
}
