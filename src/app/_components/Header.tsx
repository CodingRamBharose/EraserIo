import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-black">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src="/logo-1.png" alt='logo' height={60} width={60}/>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-white transition hover:text-blue-400" href="#"> Use cases </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-400" href="#"> Resources </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-400" href="#"> About </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-400" href="#"> DiagramGPT </a>
          </li>

          <li>
            <a className="text-white transition hover:text-blue-400" href="#"> Pricing </a>
          </li>

        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
            <LoginLink postLoginRedirectURL="/dashboard" className="block  px-5 py-2 text-sm font-medium text-white transition hover:text-gray-400">Log in</LoginLink>
            <RegisterLink className="hidden rounded-md bg-gray-100 px-5 py-2 text-sm font-bold text-black transition hover:bg-gray-300 sm:flex items-center">Try Eraser</RegisterLink> <FaArrowRightLong className='ml-2'/>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
