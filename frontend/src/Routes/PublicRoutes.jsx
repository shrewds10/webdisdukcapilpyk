import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "../app.css"
import HomePage from '../pages/public/home/Home'
import InformationPage from '../pages/public/information/Information'
import KtpPage from '../pages/public/persyaratan/Ktp'
import KKPage from '../pages/public/persyaratan/KartuKeluarga'
import SuketPindah from '../pages/public/persyaratan/SuratKeteranganPindah'
import AktaPerkawinan from '../pages/public/persyaratan/AktaPerkawinan'
import AktaKelahiran from '../pages/public/persyaratan/AktaKelahiran'
import AktaPerceraian from '../pages/public/persyaratan/AktaPerceraian'
import AktaKematian from '../pages/public/persyaratan/AktaKematian'
import PembatalanPerkawinan from '../pages/public/persyaratan/PembatalanPerkawinan'
import PembatalPeceraian from '../pages/public/persyaratan/PembatalPerceraian'
import SuratKeteranganPindah from '../pages/public/persyaratan/SuratKeteranganPindah'
import Profil from '../pages/public/profil/Profil'
import Moto from '../pages/public/profil/Moto'
import VisiMisi from '../pages/public/profil/VisiMisi'
import MaklumatPelayanan from '../pages/public/profil/MaklumatPelayanan'
import News from '../pages/public/news/News'
import Kontak from '../pages/public/kontak/Kontak'
import LaporanHarian from '../pages/public/laporanharian/LaporanHarian'


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