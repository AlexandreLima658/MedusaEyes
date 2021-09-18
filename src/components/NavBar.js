import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as FcIcons from 'react-icons/fc'
import * as BsIcons from "react-icons/bs";
import {SideBarData} from "./SideBarData"
import './NavBar.css'
import { IconContext } from 'react-icons'


function NavBar() {
  const [sidebar, setSidebar] =  useState(false)
  
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    
    <IconContext.Provider value={{color:'fff'}}>
      <div className="navbar">
      
        <Link to="#" className="menu-bars">
          <FcIcons.FcMenu onClick={showSidebar}/>
        </Link>
        <div className="textlogo">
          <h1>Medusa Eyes</h1>
        </div>
      </div>
     
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar} >
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <BsIcons.BsX />
            </Link>
          </li>
          {SideBarData.map((item, index) =>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
