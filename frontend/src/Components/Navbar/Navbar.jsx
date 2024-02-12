import React, { useState } from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const closeNav = () => {
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
             <img src={require('../../Assets/Logo Kota Payakumbuh.png')} alt="" />              
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Menu 1</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Menu 2</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Menu 3</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Menu 4</a>
            </li>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toogleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar