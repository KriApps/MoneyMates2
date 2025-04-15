import React from 'react'
import { BsHouseDoor, BsPeopleFill, BsList } from 'react-icons/bs';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsList className='icon_header'/> MONEYMATES
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsHouseDoor className='icon'/> HOME
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> GROUPS
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar