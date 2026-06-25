"use client"

import { Key, LucideIcon, Logs, LogOut } from "lucide-react"
import IconButton from "@/components/iconButton"
import LogOutButton from "@/components/logoutButton"

import Licences from "./licenses"

export default function Manager() {
  return (
    <div className="bg-gray-500/8 flex w-full py-10 px-40 gap-10">
      <SideNav />
      <Licences />
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


