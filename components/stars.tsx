import { Star } from "lucide-react"

export default function Stars() {
  return (
    <div id="stars-container" className="flex items-center gap-1">
      <ul className="flex">
        <li><Star size={15} /></li>
        <li><Star size={15} /></li>
        <li><Star size={15} /></li>
        <li><Star size={15} /></li>
      </ul>

      <p className="text-sm font-bold">4.9</p>
      <p className="text-sm">(1,260)</p>
    </div>
  );
};
