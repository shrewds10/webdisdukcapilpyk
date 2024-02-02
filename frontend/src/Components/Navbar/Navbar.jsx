import React from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <section className='navBarSection'>
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h3>
              <img src={require('../../Assets/Logo Kota Payakumbuh.png')} alt="" />
              Dinas Kependudukan dan Pencatatan Sipil Kota Payakumbuh
            </h3>
          </a>
        </div>

        <div className="navBar">
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
          <div className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div className="toogleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar