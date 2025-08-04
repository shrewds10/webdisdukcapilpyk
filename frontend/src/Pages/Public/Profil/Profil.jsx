import React from 'react';
import "./profil.css"
import Navbar from '../../../components/public/navbar/Navbar'

const Profil = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Profil Dinas</h1>
                      </div>
                  </div>
                  <div className="mainContent">
                    <div className="singleLayanan">
                        <div className="descLayanan">
                            <p>Dinas Kependudukan dan Pencatatan Sipil Kota Payakumbuh dibentuk berdasarkan Peraturan Daerah Kota Payakumbuh Nomor 17 Tahun 2016 yang tentang  Pembentukan dan Susunan Perangkat daerah dan Peraturan Walikota Payakumbuh Nomor 36 Tahun 2018 tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi, dan Uraian Tugas serta Tata Kerja Dinas Kependudukan dan Pencatatan Sipil Kota Payakumbuh berdasarkan asas otonomi dan pembantuan.</p><br/>
                            <p>Untuk melaksanakan tugas pokok sebagaimana tersebut di atas Dinas Kependudukan dan Pencatatan Sipil mempunyai fungsi :</p>
                            <ul className='ketList'>
                                <li>Merumuskan kebijakan teknis dibidang Kependudukan dan Pencatatan Sipil.</li>
                                <li>Penyelenggaraan sebagian urusan pemerintahan dan pelayanan umum di bidang kependudukan dan Pencatatan Sipil.</li>
                                <li>Pembinaan dan pelaksanaan tugas dibidang kependudukan dan Pencatatan Sipil yang meliputi pelayanan administrasi kependudukan dan pengelolaan informasi administrasi kependudukan dan pemanfaatan data.</li>
                                <li>Pelaksanaan tugas lain yang diberikan oleh Walikota sesuai dengan tugas dan fungsinya.</li>
                            </ul>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
        </>
      )
  }
  
  export default Profil