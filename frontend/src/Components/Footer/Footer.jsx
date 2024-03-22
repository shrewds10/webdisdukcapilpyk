import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="" className="logo">
             <img src={require('../../Assets/Logo Kota Payakumbuh.png')} alt="" />              
            </a>
          </div>
          <div className="socials flex">
            <FaFacebookF className='icon'/>
            <FaInstagramSquare className='icon'/>
            <IoLogoWhatsapp className='icon'/>
            <FaYoutube className='icon'/>
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Informasi
          </span>
          <ul>
            <li className="navItem">
                <a href="" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="" className="navLink">Profil</a>
              </li>
              <li className="navItem">
                <a href="" className="navLink">Informasi</a>
              </li>
              <li className="navItem">
                <a href="" className="navLink">Layanan Dukcapil</a>
              </li>
              <li className="navItem">
                <a href="" className="navLink">Pengumuman</a>
             </li>
          </ul>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Contact
          </span>
          <span className="phone">+62 102 0304 0506</span>
            <span className="email">disukcapilpyk@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer