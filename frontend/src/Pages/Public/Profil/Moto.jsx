import React from 'react';
import "./profil.css"
import Navbar from '../../../components/public/navbar/Navbar'
import imgMoto from "../../../assets/cantik logo.png"

const Moto = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Motto Dinas</h1>
                      </div>
                  </div>
                  <div className="mainContent">
                    <div className="singleLayanan">
                        <div className="descLayanan">
                            <div className="moto">
                                <h3>Dinas Kependudukan dan Pencatatan Sipil Kota Payakumbuh memiliki motto pelayanan :</h3>
                                <h1>C A N T I K</h1>
                                <h3>Cepat, Akurat, Nyaman, berbasis Teknologi Informasi dan Kapabel</h3><br/>
                                <img src={imgMoto} alt=""/>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
        </>
      )
  }
  
  export default Moto