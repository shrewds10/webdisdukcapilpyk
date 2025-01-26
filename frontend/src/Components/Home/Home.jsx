import React,{useState, useEffect} from 'react'
import './home.css'
import ParticlesContainer from '../ParticlesContainer'
import { IoIosPeople, IoIosMan, IoIosWoman } from "react-icons/io"
import Foto1 from '../../Assets/1.png'
import Foto2 from '../../Assets/2.png'

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    Foto1,
    Foto2
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='home'>
      <div className="firContainer">
        <div className="secContainer">
          {/* <ParticlesContainer/> */}
          <div className="homeText">
            <h1 className="title">
              Selamat Datang di
            </h1>
            <h2 className='secTitle'>Website Disdukcapil <br/>Kota Payakumbuh</h2>
          </div>
          <div className='population'>
            <div className='descPopulation'>
              <div className='desc descPeople'>
                <div className="totalPopulation">
                  <h3>Jumlah Penduduk</h3>
                  <p>147.963</p>
                  <p className='sumber'>Sumber: Database SIAK Kota Payakumbuh</p>
                </div>
                <div className="icon iconPeople">
                  <IoIosPeople/>
                </div>
              </div>
            </div>
            <div className='descPopulation'>
              <div className='desc'>
                <div className='man'>
                  <h3>Laki-laki</h3>
                  <p>74.524</p>
                  <p className='sumber'>Sumber: Database SIAK Kota Payakumbuh</p>
                </div>
                <div className="icon iconMan">
                  <IoIosMan/>
                </div>
              </div>
            </div>
            <div className='descPopulation'>
              <div className='desc'>
                <div className='woman'>
                  <h3>Perempuan</h3>
                  <p>73.439</p>
                  <p className='sumber'>Sumber: Database SIAK Kota Payakumbuh</p>
                </div>
                <div className='icon iconWoman'>
                  <IoIosWoman/>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="moto grid">
            <h3>MOTO : CANTIK</h3>
            <p>Cepat, Akurat, Nyaman, berbasis Teknologi Informasi, dan Kapabel </p>
            <img src="" alt="" />
          </div> */}
        </div>
        <div className="thiContainer">
          <div class="slideshow-container">
            <div class="slide fade">
              <img src={images[currentImage]} alt="Image Default" className='gambar'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home