import React from 'react'
import './popular.css'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";

// const bidang = [
//   {
//     icon: <IoIosPeople className='icon'/>,
//     title: "Pelayanan Administrasi Kependudukan",
//     description: "Meningkatkan pelayanan administasi kependudukan"
//   },
//   {
//     icon: <FaPeopleLine className='icon'/>,
//     title: "Pelayanan Administrasi Kependudukan",
//     description: "Meningkatkan pelayanan administasi kependudukan"
//   }
// ]

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h3 className="secTitle">
              Data Agregat
            </h3>
          </div>
          <div className="mainContent grid">
            {/* {
              bidang.map(({icon, title, description})=>{
                return(
                  <div className="singleDestination">
                    <div className="destIcon">
                      {icon}
                      <h3>{title}</h3>
                      <p>
                        {description}
                      </p>                    
                    </div>
                  </div>
                )   
              })
            } */}
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