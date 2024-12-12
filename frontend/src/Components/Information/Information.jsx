import Agama from "../Aggregate/Agama/Agama"
import GolonganDarah from "../Aggregate/GolonganDarah/GolonganDarah"
import JumlahPenduduk from "../Aggregate/JumlahPenduduk/JumlahPenduduk"
import KelompokUmur from "../Aggregate/KelompokUmur/KelompokUmur"
import KepadatanPenduduk from "../Aggregate/KepadatanPenduduk/KepadatanPenduduk"
import Pekerjaan from "../Aggregate/Pekerjaan/Pekerjaan"
import Pendidikan from "../Aggregate/Pendidikan/Pendidikan"
import Perkawinan from "../Aggregate/Perkawinan/Perkawinan"
import PertumbuhanPenduduk from "../Aggregate/PertumbuhanPenduduk/PertumbuhanPenduduk"
import './information.css'
import React, {useEffect, useState} from 'react'

const Information = () => {
  return (
    <div className="mcInformation">
      <div className="information container section">
        <div className="secContainer">
          <div className='secIntro'>
            <div className="secTitle">
              <h1> Profil Kependudukan</h1> 
              <h1> Kota Payakumbuh</h1>
            </div>
          </div>
          <div className="mainContent">
            <div className="Information">
              <div className="descInformation">
                <JumlahPenduduk/>
                <PertumbuhanPenduduk/>
                <KepadatanPenduduk/>
                <KelompokUmur/>
                <Agama/>
                <Perkawinan/>
                <Pekerjaan/>
                <Pendidikan/>
                <GolonganDarah/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information