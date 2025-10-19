import './laporanharian.css'
import React, { useEffect, useState, useRef } from 'react';
import Lap from "../../../assets/Laporan Harian.png"
import { toPng } from 'html-to-image';

function LaporanHarian() {
  const [data, setData] = useState({
    perekaman: null,
    persenPer: 98.4001,
    pencetakan: null,
    pemusnahan: null,
    stokBlanko: 1025,
    kelahiranKecil: null,
    kelahiranBesar: null,
    kematian: null,
    cetakKIA: null,
    persenKIA: 67.16,
    kartuKeluarga: null,    
    pindah: null,    
    datang: null,    
    aktivasiCapil: null,    
    aktivasiMpp: null,    
    totalAktivasi: 9320,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://103.138.127.34:8001/dkb/api/agregat/laporan_harian.php/?kode=harian');
        const text = await response.text();

        const parts = text.split('][');
        if (parts.length >= 1) {
          const firstArray = JSON.parse(parts[0] + ']'); 
          const firstItem = firstArray[0]; 

          setData({
            perekaman: Number(firstItem.PEREKAMAN),
            persenPer: Number(firstItem.PERSEN_REKAM),
            pencetakan: Number(firstItem.PENCETAKAN),
            pemusnahan: Number(firstItem.PEMUSNAHAN),
            stokBlanko: Number(firstItem.BLANGKO_KTP),
            kelahiranKecil: Number(firstItem.AKTA_LAHIR_17),
            kelahiranBesar: Number(firstItem.AKTA_LAHIR_18),
            kematian: Number(firstItem.AKTA_MATI),
            cetakKIA: Number(firstItem.KIA),
            persenKIA: Number(firstItem.PERSEN_KIA),
            kartuKeluarga: Number(firstItem.KK),
            pindah: Number(firstItem.PINDAH),
            datang: Number(firstItem.DATANG),
            aktivasiCapil: Number(firstItem.IKD_DINAS),
            aktivasiMpp: Number(firstItem.IKD_MPP),
            totalAktivasi: Number(firstItem.TOTAL_IKD),
          });
        }
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const dashboardRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: Number(value),
    });
  };

  const downloadImage = async () => {
  await document.fonts.ready;
  await new Promise(resolve => setTimeout(resolve, 500));

  const node = dashboardRef.current;
  const scale = 3;
  const style = getComputedStyle(node);
  const width = parseInt(style.width);
  const height = parseInt(style.height);

  toPng(node, {
    width: width * scale,
    height: height * scale,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: `${width}px`,
      height: `${height}px`,
    },
    pixelRatio: 1, 
    cacheBust: true,
  })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'dashboard-highres.png';
      link.href = dataUrl;
      link.click();
    })
  };
  const date = new Date();  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };  
  const dateFormat = date.toLocaleDateString('id-ID', options);

  const getJam = () => {
    const day = date.getDay(); 

    if (day >= 1 && day <= 4) {
      return '18.00'; 
    } else if (day === 5) {
      return '18.30'; 
    } else if (day === 0) {
      return '12.30'; 
    } else {
      return '';
    }
  };

  const jam = getJam();

  return (
    <div className="app-container">
      <div className="dashboard-container" ref={dashboardRef}>
        <img
          src={Lap}
          alt="Dashboard"
          className="background"
        />
        <div className="angka hari">{dateFormat} hingga pukul {jam} WIB</div>
        <div className="angka perekaman">{data.perekaman}</div>
        <div className="angka persenPer">{data.persenPer}%</div>
        <div className="angka pencetakan">{data.pencetakan}</div>
        <div className="angka pemusnahan">{data.pemusnahan}</div>
        <div className="angka stokBlanko">{data.stokBlanko}</div>
        <div className="angka kelahiranKecil">{data.kelahiranKecil}</div>
        <div className="angka kelahiranBesar">{data.kelahiranBesar}</div>
        <div className="angka kematian">{data.kematian}</div>
        <div className="angka cetakKIA">{data.cetakKIA}</div>
        <div className="angka persenKIA">{data.persenKIA}%</div>
        <div className="angka kartuKeluarga">{data.kartuKeluarga}</div>
        <div className="angka pindah">{data.pindah}</div>
        <div className="angka datang">{data.datang}</div>
        <div className="angka aktivasiCapil">{data.aktivasiCapil}</div>
        <div className="angka aktivasiMpp">{data.aktivasiMpp}</div>
        <div className="angka totalAktivasi">{data.totalAktivasi}</div>
        <div className="angka totalLayanan">{data.perekaman+data.pencetakan+data.pemusnahan+data.kelahiranKecil+data.kelahiranBesar+data.kematian+data.cetakKIA+data.kartuKeluarga+data.pindah+data.datang+data.aktivasiCapil+data.aktivasiMpp}</div>
      </div>

      {/* <form className="input-form">
        <label>
          Perekaman:
          <input type="number" name="perekaman" value={data.perekaman} onChange={handleChange} />
        </label>
        <label>
          Persentase Perekaman:
          <input type="number" name="persenPer" value={data.persenPer} onChange={handleChange} />
        </label>
        <label>
          Pencetakan KTP-el:
          <input type="number" name="pencetakan" value={data.pencetakan} onChange={handleChange} />
        </label>
        <label>
          Pemusnahan KTP-el:
          <input type="number" name="pemusnahan" value={data.pemusnahan} onChange={handleChange} />
        </label>
        <label>
          Stok Blanko :
          <input type="number" name="stokBlanko" value={data.stokBlanko} onChange={handleChange} />
        </label>
        <label>
          Akta Kelahiran 0-17 :
          <input type="number" name="kelahiranKecil" value={data.kelahiranKecil} onChange={handleChange} />
        </label>
        <label>
          Akta Kelahiran 18 Ke Atas:
          <input type="number" name="kelahiranBesar" value={data.kelahiranBesar} onChange={handleChange} />
        </label>
        <label>
          Kematian :
          <input type="number" name="kematian" value={data.kematian} onChange={handleChange} />
        </label>
        <label>
          Cetak KIA :
          <input type="number" name="cetakKIA" value={data.cetakKIA} onChange={handleChange} />
        </label>
        <label>
          Persentase KIA :
          <input type="number" name="persenKIA" value={data.persenKIA} onChange={handleChange} />
        </label>
        <label>
          Kartu Keluarga :
          <input type="number" name="kartuKeluarga" value={data.kartuKeluarga} onChange={handleChange} />
        </label>
        <label>
          Pindah
          <input type="number" name="pindah" value={data.pindah} onChange={handleChange} />
        </label>
        <label>
          Datang
          <input type="number" name="datang" value={data.datang} onChange={handleChange} />
        </label>
        <label>
          Aktivasi IKD Capil :
          <input type="number" name="aktivasiCapil" value={data.aktivasiCapil} onChange={handleChange} />
        </label>
        <label>
          Aktivasi IKD MPP :
          <input type="number" name="aktivasiMpp" value={data.aktivasiMpp} onChange={handleChange} />
        </label>
        <label>
          Total Aktivasi IKD :
          <input type="number" name="totalAktivasi" value={data.totalAktivasi} onChange={handleChange} />
        </label>
      </form>  */}

      <button onClick={downloadImage} className="download-button">
        Download Gambar
      </button>
    </div>
  );
}

export default LaporanHarian;