import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

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
         
        </Link>
        <div className="textlogo">
          <h4>Medusa Eyes</h4>
        </div>
      </div>
     
      <nav className='nav-menu'>
        <ul className='nav-menu-items' onClick={showSidebar} >
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              
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
