import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdArrowDropup } from "react-icons/io";
import { PiArrowFatUp } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";



const SidebarTop = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger imageSrc='./logo-1.png' alt='logo' icon={<IoMdArrowDropup />}>
                    RaM's Teamdiv
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>RaM's Teamdiv</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LuUsers />
                        Join or Create Team
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CiSettings />
                        Setting
                        <DropdownMenuShortcut><PiArrowFatUp className='mr-1' />Alt S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MdOutlineLogout />
                        Logout</DropdownMenuItem>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default SidebarTop
