import Link from "next/link";
import LogoIcon from "./logoIcon"
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className="flex bg-white items-center gap-20 mb-4 px-10 py-3 border-b border-gray-500/10">
      <Logo />
      <Searchbar />
      <Links />
    </div>

  )
}

function Logo() {
  return (
    <div className="flex gap-1 flex-shrink">
      <LogoIcon />
      <h1 className="text-lg font-bold">ALPHAT</h1>
    </div>
  );
};

function Searchbar() {
  return (
    <input
      className="flex-grow bg-[#f4f5f8] rounded rounded-full px-5 py-3 outline-none"
      type="text"
      placeholder="¿Qué software buscas?"
    />
  )
}

function Links() {
  return (
    <ul className="flex flex-shrink items-center gap-3 text-sm font-medium">
      <li><Link href="">Catálogo</Link></li>
      <li><Link href="">Métricas</Link></li>
      <li><Link href="">Categorías</Link></li>
      <UserLink />
    </ul>
  )
}


function UserLink() {
  return (
    <li>
      <Link href="">
        <div className="flex items-center gap-3 pl-3">
          <div className="border-l border-gray-500/20 h-5"> </div>
          <p>Acceder</p>
          <span className="rounded rounded-full bg-gray-500/10 p-2">
            <User size={20} />
          </span>
        </div>
      </Link>
    </li>
  )
}
