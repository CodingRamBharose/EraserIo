import React from 'react'
import SidebarTop from './SidebarTop'

const Sidebar = () => {
  return (
    <div className='bg-zinc-800 h-screen text-white border-r-10 border-gray-600 p-8 fixed w-72'>
      <SidebarTop/>
    </div>
  )
}

export default Sidebar
