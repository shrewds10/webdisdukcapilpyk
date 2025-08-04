import React from 'react';
import "./persyaratan.css"
import Navbar from '../../../components/public/navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KARTU KELUARGA BARU KARENA MEMBENTUK KELUARGA BARU",
      peryaratan: [
        "Fotokopi buku nikah/kutipan akta perkawinan atau kutipan akta perceraian; dan",
        "SPTJM perkawinan/perceraian belum tercatat (F-1.05), jika tidak dapat melampirkan kutipan akta perkawinan atau perceraian."
      ],
      penjelasan: [
        "Penduduk mengisi F-1.02;",
        "Penduduk menyerahkan fotokopi buku nikah/kutipan akta perkawinan, kutipan akta perceraian atau menyerahkan SPTJM perkawinan/perceraian belum tercatat yang ditandatangan kedua pihak apabila tidak memiliki buku nikah/akta perkawinan;",
        "Saksi yang dipersyaratkan tidak perlu melampirkan fotokopi KTP-el; dan",
        "Dinas menerbitkan KK Baru."
      ],
      lampiran: [
        
      ]
    },
    {
      id: 2,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KARTU KELUARGA BARU KARENA PENGGANTIAN KEPALA KELUARGA (KEMATIAN KEPALA KELUARGA)",
      peryaratan: [
        "Fotokopi akta kematian; dan",
        "Fotokopi KK lama"
      ],
      penjelasan: [
        "Penduduk mengisi F.1.02;",
        "Melampirkan fotokopi akta kematian jika kepala keluarga meninggal;",
        "Melampirkan fotokopi KK lama;",
        "Dalam hal seluruh anggota keluarga masih berusia di bawah 17 tahun, maka diperlukan kepala keluarga yang telah dewasa. Solusinya adalah ada Saudara yang bersedia pindah menjadi Kepala Keluarga di dalam Keluarga ini atau anak-anak dimaksud dititipkan pada Kartu Keluarga Saudaranya yang terdekat dengan membuat surat pernyataan bersedia menjadi wali; dan",
        "Dinas menerbitkan KK Baru."
      ],
      lampiran: [
      ]
    },
    {
      id: 3,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KARTU KELUARGA BARU KARENA PISAH KK DALAM 1 (SATU) ALAMAT",
      peryaratan: [
        "Fotokopi KK lama; dan",
        "Berumur sekurang-kurangnya 17 (tujuh belas) tahun atau sudah kawin atau pernah kawin yang dibuktikan dengan kepemilikan KTP-el."
      ],
      penjelasan: [
        "Penduduk mengisi F-1.02;",
        "Penduduk melampirkan fotokopi buku nikah atau akta perceraian (jika disebabkan pernikahan atau perceraian);",
        "Penduduk melampirkan KK lama; dan",
        "Dinas menerbitkan KK Baru."
      ],
      lampiran: [
      ]
    },
    {
      id: 4,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KARTU KELUARGA KARENA PERUBAHAN DATA",
      peryaratan: [
        "KK lama; dan",
        "Fotokopi surat keterangan/bukti perubahan Peristiwa Kependudukan (cth: Paspor, SKPWNI) dan Peristiwa Penting.",
      ],
      penjelasan: [
        "Penduduk mengisi F-1.02;",
        "Penduduk melampirkan KK lama;",
        "Penduduk mengisi F-1.06 karena perubahan elemen data dalam KK;",
        "Penduduk melampirkan fotokopi bukti peristiwa kependudukan dan peristiwa penting;",
        "Penduduk melampirkan surat pernyataan pengasuhan dari orangtua jika pindah KK dan surat pernyataan bersedia menampung dari kepala keluarga KK yang ditumpangi khusus pindah datang bagi penduduk yang berusia kurang dari 17 tahun; dan",
        "Dinas menerbitkan KK Baru.",
      ],
      lampiran: [
      ]
    },
    {
      id: 5,
      id_jenis_persyaratan: 1,
      title: "PENERBITAN KARTU KELUARGA KARENA PERUBAHAN DATA",
      peryaratan: [
        "Surat keterangan hilang dari kepolisian atau KK yang rusak;",
        "Fotokopi KTP-el; dan",
        "Fotokopi kartu izin tinggal tetap (untuk Orang Asing).",
      ],
      penjelasan: [
        "Penduduk mengisi F-1.02 dan tidak perlu melampirkan fotokopi KTP-el karena NIK telah diisi di F-1.02; dan",
        "Penduduk menyerahkan dokumen KK yang rusak/surat keterangan kehilangan dari kepolisian kepada Dinas untuk digantikan dengan KK yang baru.",
      ],
      lampiran: [
      ]
    },
]

const KartuKeluarga = () => {
    return(
        <>
          <Navbar/>
          <section className="penerbitan">
              <div className="secContainer">
                  <div className="secIntro">
                      <div className="title">
                          <h1>Persyaratan Penerbitan Kartu Keluarga</h1>
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
  
  export default KartuKeluarga