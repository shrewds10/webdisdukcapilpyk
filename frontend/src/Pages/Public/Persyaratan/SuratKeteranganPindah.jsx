import React from 'react';
import "./persyaratan.css"
import Navbar from '../../../components/public/navbar/Navbar'

const persyaratan = [ 
    {
      id: 1,
      id_jenis_persyaratan: 1,
      title: "PERPINDAHAN WNI DALAM 1 (SATU) KAB/KOTA",
      peryaratan: [
        "Fotokopi Kartu Keluarga",
      ],
      penjelasan: [
        "WNI mengisi F-1.03;",
        "WNI melampirkan fotokopi KK;",
        "Dalam hal penduduk menumpang KK, menyewa rumah, kontrak dan kost perlu menyerahkan surat pernyataan tidak keberatan dari pemilik rumah;",
        "Apabila Kepala Keluarga dan seluruh anggota keluarga pindah, maka Dinas menerbitkan KK dengan nomor KK tetap;",
        "Dalam hal Kepala Keluarga tidak pindah, maka Dinas menerbitkan KK dengan nomor KK tetap;",
        "Dalam hal Kepala Keluarga pindah namun anggota keluarga tidak pindah, maka Dinas menerbitkan KK dengan nomor KK baru;",
        "Dalam hal anggota keluarga yang tidak pindah dan tidak memenuhi syarat menjadi Kepala Keluarga maka ditumpangkan ke Kartu Keluarga lainnya dan diterbitkan Kartu Keluarga karena menumpang;",
        "Dinas menarik KTP-el dan/atau KIA bagi penduduk yang pindah dan mengganti KTP-el dan/atau KIA dengan alamat baru;",
        "Dinas memusnahkan KTP-el dan/atau KIA alamat lama; dan",
        "Dinas menerbitkan KK bagi penduduk yang pindah dengan alamat baru.",
      ],
      lampiran: [
        "Tidak perlu diterbitkan SKPWNI",
        "Untuk pelayanan online/Daring, persyaratan yang discan/difoto untuk diunggah harus aslinya.",
      ]
    },
    {
      id: 2,
      id_jenis_persyaratan: 1,
      title: "PERPINDAHAN WNI ANTAR KAB/KOTA",
      peryaratan: [
        "Fotokopi Kartu Keluarga"
      ],
      penjelasan: [
        "WNI mengisi F-1.03;",
        "WNI melampirkan fotokopi KK;",
        "Dinas menerbitkan KK dengan nomor KK tetap apabila Kepala Keluarga tidak pindah;",
        "Dinas menerbitkan KK dengan nomor KK baru apabila Kepala Keluarga pindah namun anggota keluarga tidak pindah;",
        "Dalam hal seluruh anggota keluarga masih berusia di bawah 17 tahun tidak pindah, maka diperlukan kepala keluarga yang telah dewasa. Solusinya adalah ada Saudara yang bersedia pindah menjadi Kepala Keluarga di dalam Keluarga ini atau anak-anak dimaksud dititipkan pada Kartu Keluarga Saudaranya yang terdekat dengan membuat surat pernyataan bersedia menjadi wali;",
        "Dinas menerbitkan SKPWNI bagi penduduk yang pindah; dan",
        "Dinas tidak menarik KTP-el dan/atau KIA penduduk yang pindah, karena KTP-el dan/atau KIA ditarik di daerah tujuan.",
      ],
      lampiran: [
        
      ]
    },
]

const SuratKeteranganPindah = () => {
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
                              {item.lampiran.length > 0 && <h3>Catatan:</h3>}
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

export default SuratKeteranganPindah