import React from 'react'
import "./navbar.css"
import { FaSearch } from "react-icons/fa";
import { MdFullscreenExit } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { IoListOutline } from "react-icons/io5";
import adminAvatar from "../../../assets/Tolak_Gratifikasi-removebg-preview.png"

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
            <MdFullscreenExit className='icon'/>
          </div>
          <div className="item">
            <IoIosNotificationsOutline className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <CiChat1 className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <IoListOutline className='icon'/>
          </div>
          <div className="item">
            <img src={adminAvatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar