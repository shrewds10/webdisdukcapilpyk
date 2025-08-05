import React from 'react'
import "./sidebar.css"
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

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
                <p className="title">INPUT</p>
                <li>
                  <IoNewspaperOutline className="icon"/>
                  <span>Berita</span>
                </li>
                <li>
                  <FaRegLightbulb className="icon"/>
                  <span>Inovasi</span>
                </li>
                <li>
                  <IoDocumentsOutline className="icon"/>
                  <span>Dokumen</span>
                </li>
                <p className="title">USER</p>
                <li>
                  <FaRegListAlt className="icon"/>
                  <span>Users</span>
                </li>
                <li>
                  <CgProfile className="icon"/>
                  <span>Profil</span>
                </li>
                <li>
                  <CiLogout className="icon"/>
                  <span>Log out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar