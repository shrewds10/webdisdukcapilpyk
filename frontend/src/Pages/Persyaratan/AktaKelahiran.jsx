import React from 'react';
import "./persyaratan.css"
import Navbar from '../../Components/Navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PENCATATAN KELAHIRAN WNI DALAM WILAYAH NKRI",
      peryaratan: [
        "Fotokopi surat keterangan kelahiran yaitu dari rumah sakit/Puskesmas/fasilitas kesehatan/dokter/bidan atau surat keterangan kelahiran dari nakhoda kapal laut/kapten pesawat terbang, atau dari kepala desa/lurah jika lahir di rumah/ tempat lain, antara lain: kebun, sawah, angkutan umum.",
        "Fotokopi buku nikah/kutipan akta perkawinan/bukti lain yang sah;",
        "Fotokopi KK dimana penduduk terdaftar atau akan didaftarkan sebagai anggota keluarga;",
        "Berita acara dari kepolisian bagi anak yang tidak diketahui asal usulnya/keberadaan orang tuanya.",
        "Penduduk dapat membuat SPTJM kebenaran data kelahiran dengan mengisi      F-2.03 dan 2 (dua) orang saksi, jika tidak memenuhi persyaratan sebagaimana huruf a.",
        "Penduduk dapat membuat SPTJM kebenaran sebagai pasangan suami istri dengan mengisi F-2.04 dan 2 (dua) orang saksi, jika tidak memenuhi persyaratatan sebagaimana huruf b.",
      ],
      penjelasan: [
        "WNI mengisi formulir F-2.01.",
        "Untuk pelayanan secara offline/tatap muka, persyaratan surat keterangan kelahiran yang diserahkan berupa fotokopi bukan asli (asli hanya diperlihatkan).",
        "Dinas tidak menarik surat keterangan kelahiran asli.",
        "Untuk pelayanan online/Daring, persyaratan yang discan/ difoto untuk diunggah harus aslinya.",
        "WNI melampirkan Fotokopi KK untuk verifikasi data yang tercantum dalam formulir F-2.01.",
        "WNI tidak perlu melampirkan fotokopi KTP-el saksi, karena identitas saksi sudah tercantum dalam formulir F-2.01.",
      ],
      lampiran: [
        
      ]
    },
]

const AktaKelahiran = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Persyaratan Penerbitan Kutipan Akta Kelahiran</h1>
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
  
  export default AktaKelahiran