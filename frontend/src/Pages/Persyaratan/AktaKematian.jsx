import React from 'react';
import "./persyaratan.css"
import Navbar from '../../Components/Navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PENCATATAN KEMATIAN DALAM WILAYAH NKRI",
      peryaratan: [
        "Fotokopi surat kematian dari dokter atau kepala desa/lurah atau yang disebut dengan nama lain, atau surat keterangan kepolisian bagi kematian seseorang yang tidak jelas identitasnya, atau salinan penetapan pengadilan bagi seseorang yang tidak jelas keberadaannya karena hilang atau mati tetapi tidak ditemukan jenazahnya, atau surat pernyataan kematian dari maskapai penerbangan bagi seseorang yang tidak jelas keberadaannya karena hilang atau mati tetapi tidak ditemukan jenazahnya sesuai dengan ketentuan peraturan perundang-undangan, atau surat keteterangan kematian dari Perwakilan RI bagi penduduk yang kematiannya di luar wilayah NKRI;",
        "Fotokopi Dokumen Perjalanan Republik Indonesia bagi WNI bukan Penduduk atau Fotokopi Dokumen Perjalanan bagi Orang Asing.",
        "Fotokopi KK/KTP yang meninggal dunia.",
      ],
      penjelasan: [
        "WNI mengisi F-2.01.",
        "Orang Asing mengisi formulir F-2.01.",
        "Untuk pelayanan secara offline/tatap muka, persyaratan surat kematian yang diserahkan berupa fotokopi bukan asli (asli hanya diperlihatkan).",
        "Dinas tidak menarik surat kematian asli.",
        "WNI melampirkan fotokopi KK untuk verifikasi data yang tercantum dalam formulir F-2.01.",
        "Untuk pelayanan online/Daring, persyaratan yang discan/ difoto untuk diunggah harus aslinya.",
        "WNI dan Orang Asing tidak perlu melampirkan fotokopi KTP-el saksi, karena identitasnya sudah tercantum dalam formulir F-2.01.",
        "Orang Asing menyerahkan fotokopi Dokumen Perjalanan atau fotokopi ITAS/SKTT atau fotokopi ITAP/KTP-el.",
        "WNI bukan penduduk menyerahkan fotokopi dokumen perjalanan RI yang meninggal dunia.",
        "Pencatatan Kematian dilaporkan tidak hanya oleh anak atau ahli waris tetapi dapat juga dilaporkan oleh keluarga lainnya, termasuk ketua RT.",
        "Dalam hal subjek akta tidak tercantum dalam KK dan database kependudukan, kutipan akta kematian diterbitkan tanpa NIK.",
        "Dinas menerbitkan kutipan akta kematian.",
      ],
      lampiran: [
        
      ]
    },
]

const AktaKematian = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Persyaratan Penerbitan Kutipan Akta Kematian</h1>
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
  
  export default AktaKematian