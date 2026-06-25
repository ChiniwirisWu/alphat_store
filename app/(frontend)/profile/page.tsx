import Header from "@/components/header"
import Edit from "./components/edit"
import Manager from "./components/manager"

export default function Profile() {
  return (
    <div className="flex flex-col">
      <Header />
      <Edit />
      <Manager />
    </div>
  )
}
