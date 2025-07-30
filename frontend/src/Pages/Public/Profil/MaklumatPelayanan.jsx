import React from 'react';
import "./profil.css"
import Navbar from '../../../Components/Navbar/Navbar'

const MaklumatPelayanan = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Maklumat Pelayanan</h1>
                      </div>
                  </div>
                  <div className="mainContent">
                    <div className="singleLayanan">
                        <div className="descLayanan">
                            <ul className='ketList'>
                                <li>Kami berjanji dan sanggup untuk melaksanakan pelayanan sesuai dengan Standar Pelayanan</li>
                                <li>Kami berjanji dan sanggup untuk memberikan pelayanan sesuai dengan kewajiban dan akan melakukan perbaikan secara terus menerus</li>
                                <li>Kami bersedia untuk menerima sanksi, dan/atau memberikan kompensasi apabila pelayanan yang diberikan tidak sesuai standar.</li>
                            </ul>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
        </>
      )
  }
  
  export default MaklumatPelayanan