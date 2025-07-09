import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import HomePage from './Pages/Home/Home'
import InformationPage from './Pages/Information/Information'
import KtpPage from './Pages/Persyaratan/Ktp'
import KKPage from './Pages/Persyaratan/KartuKeluarga'
import SuketPindah from './Pages/Persyaratan/SuratKeteranganPindah'
import AktaPerkawinan from './Pages/Persyaratan/AktaPerkawinan'
import AktaKelahiran from './Pages/Persyaratan/AktaKelahiran'
import AktaPerceraian from './Pages/Persyaratan/AktaPerceraian'
import AktaKematian from './Pages/Persyaratan/AktaKematian'
import PembatalanPerkawinan from './Pages/Persyaratan/PembatalanPerkawinan'
import PembatalPeceraian from './Pages/Persyaratan/PembatalPerceraian'
import SuratKeteranganPindah from './Pages/Persyaratan/SuratKeteranganPindah'
import Profil from './Pages/Profil/Profil'
import Moto from './Pages/Profil/Moto'
import VisiMisi from './Pages/Profil/VisiMisi'
import MaklumatPelayanan from './Pages/Profil/MaklumatPelayanan'
import News from './Pages/News/News'
import Kontak from './Pages/Kontak/Kontak'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/information" element={<InformationPage/>}/>
        <Route path="/ktp" element={<KtpPage/>}/>
        <Route path="/kk" element={<KKPage/>}/>
        <Route path="/suket" element={<SuketPindah/>}/>
        <Route path="/aktakelahiran" element={<AktaKelahiran/>}/>
        <Route path="/aktaperkawinan" element={<AktaPerkawinan/>}/>
        <Route path="/aktaperceraian" element={<AktaPerceraian/>}/>
        <Route path="/aktakematian" element={<AktaKematian/>}/>
        <Route path="/pembatalperkawinan" element={<PembatalanPerkawinan/>}/>
        <Route path="/pembatalperceraian" element={<PembatalPeceraian/>}/>
        <Route path="/suratketeranganpindah" element={<SuratKeteranganPindah/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/moto" element={<Moto/>}/>
        <Route path="/visimisi" element={<VisiMisi/>}/>
        <Route path="/maklumatpelayanan" element={<MaklumatPelayanan/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/kontak" element={<Kontak/>}/>
      </Routes>
    </Router>    
  )
}

export default App