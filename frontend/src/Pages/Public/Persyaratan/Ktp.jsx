import React from 'react';
import "./persyaratan.css"
import Navbar from '../../../components/public/navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KTP-EL BARU UNTUK WNI",
      peryaratan: [
        "Telah berusia 17 tahun, sudah kawin, atau pernah kawin; dan",
        "Fotokopi KK"
      ],
      penjelasan: [
        "Penduduk mengisi F-1.02;",
        "Penduduk melampirkan fotokopi KK; dan",
        "Dinas menerbitkan KTP-el Baru."
      ],
      lampiran: [
        
      ]
    },
    {
      id: 2,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KTP-EL BARU KARENA PINDAH, PERUBAHAN DATA, RUSAK DAN HILANG UNTUK WNI",
      peryaratan: [
        "SKP (jika terjadi pindah datang);",
        "KTP-el lama dan surat keterangan/bukti perubahan peristiwa kependudukan dan Peristiwa Penting (jika terjadi perubahan data);",
        "KTP-el rusak (jika KTP-el rusak); dan",
        "Surat kehilangan dari kepolisisan (jika KTP-el hilang)"
      ],
      penjelasan: [
        "Penduduk mengisi F-1.02;",
        "Dinas menarik KTP-el lama (jika perubahan data).",
        "Dinas menerbitkan KTP-el Baru.",
        "Dinas memusnahkan KTP-el lama."
      ],
      lampiran: [
        "SKP (jika permohonan karena pindah datang antar Kab/Kota/Provinsi);",
        "KTP-el dan fotokopi surat keterangan/bukti perubahan peristiwa kependudukan dan peristiwa penting (jika perubahan data);",
        "KTP-el rusak (jika KTP-el rusak); dan",
        "Surat kehilangan dari kepolisian (jika permohonan karena hilang)."
      ]
    },
]

const Ktp = () => {
  return(
      <>
        <Navbar/>
        <section className="penerbitan">
            <div className="secContainer">
                <div className="secIntro">
                    <div className="title">
                        <h1>Persyaratan Penerbitan KTP-el</h1>
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
                                <li key={index}> {persyaratanItem.trim()}</li>
                                ))
                              }
                            </ul>
                            <ul className='ketList'>
                              <h3>Penjelasan:</h3>
                              {item.penjelasan.map((penjelasanItem, index)=>(
                                <li key={index}> {penjelasanItem.trim()}</li>
                                ))
                              }
                            </ul>
                            <ul className='ketList'>
                              {item.lampiran.length > 0 && <h3>Penduduk melampirkan:</h3>}
                              {item.lampiran.map((lampiranItem, index)=>(
                                <li key={index}> {lampiranItem.trim()}</li>
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

export default Ktp