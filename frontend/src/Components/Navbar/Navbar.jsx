import React, { useState } from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const closeNav = () => {
    setActive('navBar')
  }

  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
             <img src={require('../../Assets/Logo Kota Payakumbuh.png')} alt="" />   
          </a>
          <h3>Disdukcapil <br/>Kota Payakumbuh</h3>           
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <div className='dropdown-item'>
                Profil <i className='dropdown-arrow'><IoIosArrowDown/></i>
              </div>
              {/* <ul className='dropdown-menu'>
                <li>
                  <a href="" className="dropdown-link">Visi dan Misi</a>
                </li>
                <li>
                  <a href="" className="dropdown-link">Moto</a>
                </li>
                <li>
                  <a href="" className="dropdown-link">Maklumat Pleyanan</a>
                </li>
              </ul> */}
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
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar