import './laporanharian.css'
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import Lap from "../../../assets/Laporan Harian.png"

function LaporanHarian() {
  const [data, setData] = useState({
    kartuKeluarga: 53,
    pindahNik: 13,
    datangNik: 13,
    totalAktivasi: 8897,
    aktivasiHariIni: 5,
  });

  const dashboardRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: Number(value),
    });
  };

  const downloadImage = () => {
    html2canvas(dashboardRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'dashboard.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="app-container">
      <div className="dashboard-container" ref={dashboardRef}>
        <img
          src={Lap}
          alt="Dashboard"
          className="background"
        />
        <div className="angka kk">{data.kartuKeluarga}</div>
        <div className="angka pindah">{data.pindahNik}</div>
        <div className="angka datang">{data.datangNik}</div>
        <div className="angka total">{data.totalAktivasi}</div>
        <div className="angka hari">{data.aktivasiHariIni}</div>
      </div>

      <form className="input-form">
        <label>
          Kartu Keluarga:
          <input type="number" name="kartuKeluarga" value={data.kartuKeluarga} onChange={handleChange} />
        </label>
        <label>
          Pindah/NIK:
          <input type="number" name="pindahNik" value={data.pindahNik} onChange={handleChange} />
        </label>
        <label>
          Datang/NIK:
          <input type="number" name="datangNik" value={data.datangNik} onChange={handleChange} />
        </label>
        <label>
          Total Aktivasi:
          <input type="number" name="totalAktivasi" value={data.totalAktivasi} onChange={handleChange} />
        </label>
        <label>
          Aktivasi Hari Ini:
          <input type="number" name="aktivasiHariIni" value={data.aktivasiHariIni} onChange={handleChange} />
        </label>
      </form>

      <button onClick={downloadImage} className="download-button">
        Download Gambar
      </button>
    </div>
  );
}

export default LaporanHarian;