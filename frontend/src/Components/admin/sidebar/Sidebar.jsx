import React from 'react'
import "./sidebar.css"
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                  <MdDashboard className="icon"/>
                  <span>Dashboard</span>
                </li>
                <li>
                  <FaUser className="icon"/>
                  <span>Berita</span>
                </li>
                <li>
                  <FaUser className="icon"/>
                  <span>Buku Profil</span>
                </li>
                <li>
                  <FaUser className="icon"/>
                  <span>Users</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar