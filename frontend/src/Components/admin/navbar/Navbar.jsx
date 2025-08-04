import React from 'react'
import "./navbar.css"
import { FaSearch } from "react-icons/fa";
import { MdFullscreenExit } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { IoListOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='adminNavbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Pencarian...'/>
          <FaSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdFullscreenExit/>
          </div>
          <div className="item">
            <IoIosNotificationsOutline/>
          </div>
          <div className="item">
            <CiChat1/>
          </div>
          <div className="item">
            <IoListOutline/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar