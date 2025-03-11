import React from 'react';
import "./persyaratan.css"
import Navbar from '../../Components/Navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PENCATATAN KEMATIAN DALAM WILAYAH NKRI",
      peryaratan: [
        "Fotokopi surat keterangan telah terjadinya perkawinan dari pemuka agama atau penghayat kepercayaan terhadap Tuhan Yang Maha Esa;",
        "pas foto berwarna suami dan istri;",
        "KTP-el Asli;",
        "KK Asli;",
        "bagi janda atau duda karena cerai mati melampirkan fotokopi akta kematian pasangannya; atau",
        "Bagi janda atau duda karena cerai hidup melampirkan fotokopi akta perceraian.",
      ],
      penjelasan: [
        "WNI mengisi formulir F-2.01.",
        "Untuk pelayanan secara offline/tatap muka, persyaratan surat keterangan perkawinan yang diserahkan berupa fotokopi bukan asli (asli hanya diperlihatkan)",
        "Dinas tidak menarik surat keterangan perkawinan asli.",
        "WNI melampirkan KK Asli untuk verifikasi data yang tercantum dalam formulir F-2.01 serta untuk dilakukan perubahan data (status kawin)",
        "Untuk pelayanan online/Daring, persyaratan yang discan/ difoto untuk diunggah harus aslinya.",
        "WNI tidak perlu melampirkan fotokopi KTP-el 2 Saksi karena identitasnya sudah tercantum dalam formulir F-2.01.",
        "Ukuran Pasfoto 4×6 suami dan istri sebanyak 1 lembar.",
        "Dinas menerbitkan kutipan akta perkawinan, KTP-el dengan status Kawin dan KK yang sudah dimutakhirkan datanya.",
        "Dinas memusnahkan KTP-el asli yang lama.",
        "Apabila hasil verifikasi menunjukan bahwa perkawinan berlangsung sebelum berusia 19 tahun, Dinas meminta fotokopi Penetapan Pengadilan tentang Dispensasi Perkawinan.",
        "Apabila hasil verifikasi menunjukan bahwa suami melangsungkan perkawinan kedua dst, Dinas meminta fotokopi Penetapan Pengadilan tentang Izin Perkawinan dari istri sah",
        "Dalam hal salah satu atau kedua suami istri meninggal dunia sebelum pencatatan perkawinan, pencatatan perkawinan dilaksanakan dengan memenuhi persyaratan berupa Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data sebagai Pasangan Suami Istri.",
      ],
      lampiran: [
        
      ]
    },
]

const AktaPerkawinan = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Penerbitan Kutipan Akta Perkawinan</h1>
                      </div>
                  </div>
                  <div className="mainContent">
                  {
                    persyaratan.map((item)=>{
                    return(
                        <div className="singleLayanan">
                          <div className="descLayanan">
                              <h1>{item.title}</h1>
                              <ul className='ketList'>
                                <h3>Persyaratan:</h3>
                                {item.peryaratan.map((persyaratanItem, index)=>(
                                    <li key={index}> 
                                      {persyaratanItem.trim()}
                                    </li>
                                  ))
                                }
                              </ul>
                              <ul className='ketList'>
                                <h3>Penjelasan:</h3>
                                {item.penjelasan.map((penjelasanItem, index)=>(
                                    <li key={index}> 
                                      {penjelasanItem.trim()}
                                    </li>
                                  ))
                                }
                              </ul>
                              <ul className='ketList'>
                                {item.lampiran.length > 0 && <h3>Penduduk melampirkan:</h3>}
                                {item.lampiran.map((lampiranItem, index)=>(
                                    <li key={index}> 
                                      {lampiranItem.trim()}
                                    </li>
                                  ))
                                }
                              </ul>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
              </div>
          </section>
        </>
      )
  }
  
  export default AktaPerkawinan