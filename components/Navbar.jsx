"use client"
import { div, li } from 'motion/react-client'
import React, { useState } from 'react'
import './NavbarCSS.css';
import { AlignRight, ChartNoAxesColumn, ChartNoAxesGantt, X } from 'lucide-react';
const menu=[
    {
        name:"Home",
        href:"#home"
    },
    {
        name:"About",
        href:"#home"
    },
    {
        name:"Timeline",
        href:"#home"
    },{
        name:"Sponsors",
        href:"#home"
    },{
        name:"Prizes",
        href:"#home"
    },{
        name:"Contact",
        href:"#home"
    }
]
const Navbar = () => {
    const [pop,setPop]=useState();
  return (
    <div className='navbar shift'>
        <span className='logo'><span className='logoe'>E</span><span className='text-pink-400'>T</span></span>
        <div className='nav hidden md:block'>
            <ul>
                {
                    menu.map((item,index)=>(
                        <li key={index} className='cursor-pointer  '><a href={item.href}>{item.name}</a></li>
                    ))
                }
            </ul>
        </div>
        <div className='md:hidden'>
            {pop?<X size={32} onClick={()=>setPop(val=>!val)}/>:<AlignRight size={32} onClick={()=>setPop(val=>!val)}/>}
        </div>
        {pop && <div className='absolute right-8 top-24 z-10 navpop md:hidden'>
            <ul className='flex flex-col items-center gap-1'>
                {
                    menu.map((item,index)=>(
                        <li key={index} className='cursor-pointer  '><a href={item.href}>{item.name}</a></li>
                    ))
                }
            </ul>
        </div>}
    </div>
  )
}

export default Navbar