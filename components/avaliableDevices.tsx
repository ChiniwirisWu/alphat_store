import { Computer } from "lucide-react"

export default function AvaliableDevices() {
  return (
    <div className="flex gap-2 items-center text-gray-700">
      <span><Computer size={15} /></span>
      <p>macOS, Windows, Linux</p>
    </div>
  );
};
