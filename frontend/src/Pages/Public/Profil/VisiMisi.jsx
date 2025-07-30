import React from 'react';
import "./profil.css"
import Navbar from '../../../Components/Navbar/Navbar'

const VisiMisi = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Visi dan Misi Dinas</h1>
                      </div>
                  </div>
                  <div className="mainContent">
                    <div className="singleLayanan">
                        <div className="descLayanan">
                            <div className="visimisi">
                                <h3>VISI</h3>
                                <h3>“Terwujudnya Penataan, Penertiban dan Pelayanan Administrasi Kependudukan yang Berkualitas”</h3><br/>
                                <h3>MISI</h3>
                                <h3>“Mewujudkan Pengelolaan Administrasi Kependudukan Yang Akurat, Tertib dan Aman”</h3>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
        </>
      )
  }
  
  export default VisiMisi