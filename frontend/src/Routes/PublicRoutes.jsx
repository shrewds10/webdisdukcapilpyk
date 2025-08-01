import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "../app.css"
import HomePage from '../Pages/Public/Home/Home'
import InformationPage from '../Pages/Public/Information/Information'
import KtpPage from '../Pages/Public/Persyaratan/Ktp'
import KKPage from '../Pages/Public/Persyaratan/KartuKeluarga'
import SuketPindah from '../Pages/Public/Persyaratan/SuratKeteranganPindah'
import AktaPerkawinan from '../Pages/Public/Persyaratan/AktaPerkawinan'
import AktaKelahiran from '../Pages/Public/Persyaratan/AktaKelahiran'
import AktaPerceraian from '../Pages/Public/Persyaratan/AktaPerceraian'
import AktaKematian from '../Pages/Public/Persyaratan/AktaKematian'
import PembatalanPerkawinan from '../Pages/Public/Persyaratan/PembatalanPerkawinan'
import PembatalPeceraian from '../Pages/Public/Persyaratan/PembatalPerceraian'
import SuratKeteranganPindah from '../Pages/Public/Persyaratan/SuratKeteranganPindah'
import Profil from '../Pages/Public/Profil/Profil'
import Moto from '../Pages/Public/Profil/Moto'
import VisiMisi from '../Pages/Public/Profil/VisiMisi'
import MaklumatPelayanan from '../Pages/Public/Profil/MaklumatPelayanan'
import News from '../Pages/Public/News/News'
import Kontak from '../Pages/Public/Kontak/Kontak'
import LaporanHarian from '../Pages/Public/LaporanHarian/LaporanHarian'


const PublicRoutes = () => {
  return (
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
        <Route path="/laporanharian" element={<LaporanHarian/>}/>
    </Routes>
  )
}

export default PublicRoutes