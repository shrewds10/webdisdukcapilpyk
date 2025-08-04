import React from 'react';
import "./persyaratan.css"
import Navbar from '../../../components/public/navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PENCATATAN KELAHIRAN WNI DALAM WILAYAH NKRI",
      peryaratan: [
        "Fotokopi salinan putusan pengadilan yang mempunyai kekuatan hukum tetap;",
        "Kutipan akta perceraian asli;",
        "KTP-el Asli; dan",
        "KK Asli.",
      ],
      penjelasan: [
        "WNI mengisi F-2.01",
        "Untuk pelayanan secara offline/tatap muka, persyaratan salinan putusan pengadilan yang mempunyai kekuatan hukum tetap yang diserahkan berupa fotokopi bukan asli (asli hanya diperlihatkan)",
        "Dinas tidak menarik salinan putusan asli.",
        "WNI melampirkan KK Asli untuk verifikasi data yang tercantum dalam formulir F-2.01 serta untuk dilakukan perubahan data (status kawin kembali menjadi Kawin).",
        "Untuk pelayanan online/Daring, persyaratan yang discan/ difoto untuk diunggah harus aslinya.",
        "Tidak perlu melampirkan fotokopi KTP-el 2 Saksi karena identitasnya sudah tercantum dalam formulir F-2.01.",
        "Dinas menarik kutipan akta perceraian asli, KK Asli dan KTP-el Asli yang lama.",
        "Dinas memusnahkan KTP-el asli yang lama.",
        "Dinas menerbitkan surat keterangan pembatalan perceraian, kutipan akta perkawinan kedua, KTP-el dan KK baru dengan status perkawinan yang sudah dimutakhirkan datanya.",
      ],
      lampiran: [
        
      ]
    },
]

const PembatalPeceraian = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Pencatatan Pembatalan Perceraian</h1>
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
  
  export default PembatalPeceraian