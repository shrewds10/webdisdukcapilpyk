import React from 'react'
import './popular.css'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h3 className="secTitle">
              Bidang
            </h3>
          </div>
          <div className="mainContent grid">
            <div className="singleDestination">
              <div className="destIcon">
                <IoIosPeople className='icon'/>
                <h3>Pelayanan Administrasi Kependudukan</h3>
                <p>
                  Meningkatkan pelayanan administasi kependudukan
                </p>
              </div>
            </div>
          </div>
          <div className="mainContent grid">
            <div className="singleDestination">
              <div className="destIcon">
                <FaPeopleLine className='icon'/>
                <h3>Pengelolaan Informasi Administrasi Kependudukan dan Pemanfaatan Data</h3>
                <p>
                  Meningkatkan pelayanan administasi kependudukan
                </p>
              </div>
            </div>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeft className='icon leftIcon'/>
            <BsArrowRight className='icon rightIcon'/>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Popular