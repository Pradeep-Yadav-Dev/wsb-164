import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='w-full grid grid-cols-[20%_auto] h-[100vh] ' >
        <div className="bg-[red]"> Faq </div>
        <div className="bg-[green]">  <Outlet/> </div>
      
    </div>
  )
}
