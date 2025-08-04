import React from 'react'
import './kontak.css'
import Navbar from '../../../components/public/navbar/Navbar'

const Kontak = () => {
  return (
    <>
        <Navbar/>
        <section className="kontak">
            <div className="secContainer">
                <div className="secIntro">
                    <div className="title">
                        <h1>KONTAK DAN PENGADUAN</h1>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="pengaduan">
                        <form className="formPengaduan">
                            <div className="title">
                                <h1>Pengaduan</h1>
                            </div>
                            <div className="formGroup">
                                <input type="text" id="nama" name="nama" placeholder="Masukkan nama Anda" required />
                            </div>
                            <div className="formGroup">
                                <input type="email" id="email" name="email" placeholder="Masukkan email Anda" required />
                            </div>
                            <div className="formGroup">
                                <textarea id="aduan" name="aduan" rows="5" placeholder="Tulis aduan Anda di sini" required></textarea>
                            </div>
                            <button type="submit">Kirim</button>
                        </form>
                    </div>
                    <div className="sosmed">
                        <h1>Sosial Media</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Kontak