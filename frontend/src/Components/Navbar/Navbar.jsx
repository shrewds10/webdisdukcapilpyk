import React, { useState } from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { IoIosArrowDown, IoIosPeople } from "react-icons/io";
import { FaBullseye } from "react-icons/fa6";
import { RiSearchEyeLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";

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
              <a href="#" className="navLink">
                Profil <span className="iconLink"><IoIosArrowDown /></span>
              </a>
              <ul className='dropdownMenu'>
                <div className="group1">
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><IoIosPeople/></span>Profil</a></li>
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><RiSearchEyeLine/></span>Moto</a></li>
                </div>
                <div className="group2">
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><FaBullseye/></span>Visi dan Misi</a></li>
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><ImBooks/></span>Maklumat Pelayanan</a></li>
                </div>
              </ul>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Dokumen <span className="iconLink"><IoIosArrowDown /></span>
              </a>
              <ul className='dropdownMenu'>
                <div className="group1">
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><IoBookSharp/></span>Standar Pelayanan</a></li>
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><ImBooks/></span>Buku Profil</a></li>
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><ImBooks/></span>LKJiP</a></li>
                </div>
                <div className="group2">
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><ImBooks/></span>Buku Agregat Kependudukan</a></li>
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><ImBooks/></span>Rencana Strategis</a></li>
                  <li><a href="" className="dropdownLink"><span className='iconDropdownLink'><ImBooks/></span>Rencana Kerja</a></li>
                </div>
              </ul>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Persyaratan <span className="iconLink"><IoIosArrowDown /></span>
              </a>
              <ul className='dropdownMenu'>
                <div className="group1">
                  <li>
                    <a href="" className="dropdownLink">
                      <span className='iconDropdownLink'><IoBookSharp/></span>Dokumen Kependudukan
                      <span className="iconLink"><IoIosArrowDown /></span>
                    </a>
                    <ul className="subDropdownMenu">
                      <li><a href="#" className="dropdownLink">Penerbitan KTP-el</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Kartu Keluarga</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Surat Keterangan Pindah</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="" className="dropdownLink">
                      <span className='iconDropdownLink'><ImBooks/></span>Dokumen Pencatatan Sipil
                      <span className="iconLink"><IoIosArrowDown /></span>
                    </a>
                    <ul className="subDropdownMenu">
                      <li><a href="#" className="dropdownLink">Penerbitan Kutipan Akta Kelahiran</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Kutipan Akta Kematian</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Kutipan Akta Perkawinan</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Kutipan Akta Perceraian</a></li>
                      <li><a href="#" className="dropdownLink">Pencatatan Pembatalan Perkawinan</a></li>
                      <li><a href="#" className="dropdownLink">Pencatatan Pembatalan Perceraian</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Akta Pengangkatan Anak</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Kutipan Akta Pengesahan Anak</a></li>
                      <li><a href="#" className="dropdownLink">Penerbitan Kutipan Akta Pengakuan Anak</a></li>
                      <li><a href="#" className="dropdownLink">Pencatatan Perubahan Nama</a></li>
                    </ul>
                  </li>
                </div>
              </ul>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Berita</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Kontak dan Pengaduan</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">FAQ</a>
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