import { li } from 'motion/react-client'
import React from 'react'
import './NavbarCSS.css';
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
        name:"Core",
        href:"#home"
    },{
        name:"FAQs",
        href:"#home"
    },{
        name:"Contact",
        href:"#home"
    }
]
const Navbar = () => {
  return (
    <div className='navbar shift'>
        <ul>
            {
                menu.map((item,index)=>(
                    <li key={index} className='cursor-pointer  '><a href={item.href}>{item.name}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar