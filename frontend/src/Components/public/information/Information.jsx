import Agama from "../aggregate/Agama/Agama"
import GolonganDarah from "../aggregate/GolonganDarah/GolonganDarah"
import JumlahPenduduk from "../aggregate/JumlahPenduduk/JumlahPenduduk"
import KelompokUmur from "../aggregate/KelompokUmur/KelompokUmur"
import KepadatanPenduduk from "../aggregate/KepadatanPenduduk/KepadatanPenduduk"
import Pekerjaan from "../aggregate/Pekerjaan/Pekerjaan"
import Pendidikan from "../aggregate/Pendidikan/Pendidikan"
import Perkawinan from "../aggregate/Perkawinan/Perkawinan"
import PertumbuhanPenduduk from "../aggregate/PertumbuhanPenduduk/PertumbuhanPenduduk"
import './information.css'
import React, {useState} from 'react'

const Information = () => {
  const [semester, setSemester] = useState('1')
  const [tahun, setTahun] = useState('2024')

  const handleSemesterChange = (event) => {
    setSemester(event.target.value)
  }
  
  const handleTahunChange = (event) => {
    setTahun(event.target.value)
  }

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
          <div className="dropdownContainer">
            <div>
              <label>Periode :</label>
              <select value={semester} onChange={handleSemesterChange}>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
              </select>
            </div>
            <div>
              <label>Tahun :</label>
              <select value={tahun} onChange={handleTahunChange}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className="mainContent">
            <div className="Information">
              <div className="descInformation">
                <JumlahPenduduk semester={semester} tahun={tahun}/>
                <PertumbuhanPenduduk semester={semester} tahun={tahun}/>
                <KepadatanPenduduk semester={semester} tahun={tahun}/>
                <KelompokUmur semester={semester} tahun={tahun}/>
                <Agama semester={semester} tahun={tahun}/>
                <Perkawinan semester={semester} tahun={tahun}/>
                <Pekerjaan semester={semester} tahun={tahun}/>
                <Pendidikan semester={semester} tahun={tahun}/>
                <GolonganDarah semester={semester} tahun={tahun}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information