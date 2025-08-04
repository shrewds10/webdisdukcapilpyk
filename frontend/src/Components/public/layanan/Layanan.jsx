import React from 'react'
import './layanan.css'
import imgKTP from "../../../assets/KTP.jpg"
import imgKK from "../../../assets/KK.png"
import imgIKD from "../../../assets/IKD.jpg"
import imgKIA from "../../../assets/KIA.png"
import imgAKTAKELAHIRAN from "../../../assets/AKTA KELAHIRAN.jpg"
import imgAKTAKEMATIAN from "../../../assets/AKTA KEMATIAN.jpeg"

const layanan = [ 
  {
    id: 1,
    img: imgKK,
    title: "Kartu Keluarga",
    description: "LAYANAN KARTU KELUARGA",
  },
  {
    id: 2,
    img: imgKTP,
    title: "KTP Elektronik",
    description: "LAYANAN KTP-EL BAGI PENDUDUK KOTA PAYAKUMBUH USIA 17 TAHUN KE ATAS ATAU TELAH MENIKAH",
  },
  {
    id: 3,
    img: imgIKD,
    title: "Indeks Kependududkan Digital",
    description: "LAYANAN INDEKS KEPENDUDUKAN DIGITAL",
  },
  {
    id: 4,
    img: imgAKTAKELAHIRAN,
    title: "Akta Kelahiran",
    description: "LAYANAN AKTA KELAHIRAN",
  },
  {
    id: 5,
    img: imgKIA,
    title: "Kartu Indentitas Anak",
    description: "LAYANAN KARTU IDENTITAS ANAK",
  },
  {
    id: 6,
    img: imgAKTAKEMATIAN,
    title: "Akta Kematian",
    description: "LAYANAN AKTA KEMATIAN",
  }
]

const Layanan = () => {
  return (
    <section className='layanan container section'>
      <div className='secContainer'>
        <div className="secIntro">
          <div className="secTitle">
            <h3>Layanan dan Lingkup Kerja Dinas Kependudukan dan Pencatatan Sipil</h3>
            <p>Pelayanan Administrasi Kependudukan dan Pencatatan Sipil yang diberikan Kepada Masyarakat Kota Payakumbuh</p>
          </div>
        </div>
        <div className="mainContent grid">
          {
            layanan.map(({id, img, title, description})=>{
              return(
                <div className="singleLayanan">
                  <div className="descLayanan">
                    <img src={img} alt="Image Name" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Layanan