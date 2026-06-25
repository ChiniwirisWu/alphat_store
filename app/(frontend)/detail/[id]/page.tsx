import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import Content from "./components/content";

type DetailProps = {
  params: Promise<{ id: string }>
};

export default async function Detail({ params }: DetailProps) {
  const { id } = await params;

  return (
    <div>
      <Header />
      <Breadcrumbs />
      <Content />
    </div>
  )
}


