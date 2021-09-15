import React from "react"
import * as FaIcons from "react-icons/fa"
import * as FcIcons from "react-icons/fc"

import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SideBarData =[
  {
    title: 'Análise',
    path: '/',
    icon: <FcIcons.FcBiotech/>,
    cName: 'nav-text'
  },
  {
    title: 'Produtos',
    path: '/products',
    icon: <FcIcons.FcLock/>,
    cName: 'nav-text'
  },
  
  {
    title: 'Time',
    path: '/team',
    icon: <FcIcons.FcCollaboration/>,
    cName: 'nav-text'
  },
  {
    title: 'Sobre',
    path: '/about',
    icon: <FcIcons.FcBusinessman/>,
    cName: 'nav-text'
  },
  
]

