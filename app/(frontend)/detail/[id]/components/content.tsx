import PricingCard from "./princing"
import DetailsCard from "./details"

export default function Content() {
  return (
    <div id="container" className="flex px-10 py-10">
      <DetailsCard />
      <PricingCard />
    </div>
  )
}
