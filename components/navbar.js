import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300`}>
        {children}
    </a>
}


export default function Navbar() {


    return (
        <nav className="flex filter drop-shadow-lg bg-navbar shadow-lg  px-4 py-4 h-20 items-center z-10 ">
            </nav>
    )
}