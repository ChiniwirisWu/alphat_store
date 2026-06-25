"use client"

import { Key, LucideIcon, Logs, LogOut } from "lucide-react"
import IconButton from "@/components/iconButton"
import LogOutButton from "@/components/logoutButton"
import EditModal from "./editModal"
import { useState } from "react"

import Licences from "./licenses"
import History from "./history"

export default function Manager() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="bg-gray-500/8 flex h-full w-full py-10 px-40 gap-10">
      <SideNav />
      <History />
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

function SideNav() {
  return (
    <div>
      <ul className="flex flex-col gap-2 py-5">
        <li><IconButton Icon={Key} title="Mis licencias" item="item-1" selected="item-1" handleOnClick={console.log} /></li>
        <li><IconButton Icon={Logs} title="Historial de compras" item="item-2" selected="item-1" handleOnClick={console.log} /></li>
      </ul>
      <div className="w-full border-t border-t-gray-500/20"></div>
      <ul className="flex flex-col py-5">
        <li><LogOutButton handleOnClick={console.log} /></li>
      </ul>
    </div>
  )
}


