import React from 'react'
import './home.css'
import ParticlesContainer from '../ParticlesContainer'
import { IoIosPeople, IoIosMan, IoIosWoman } from "react-icons/io";
import Foto from '../../Assets/2.jpg'

const Home = () => {
  return (
    <section className='home'>
      <div className="firContainer">
        <div className="secContainer">
          <ParticlesContainer/>
          <div className="homeText">
            <h1 className="title">
              Dinas Kependudukan dan Pencatatan Sipil <br/> Kota Payakumbuh
            </h1>
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
          <h1>test1</h1>
          <div class="slideshow-container">
            <div class="slide fade">
              <img src={Foto} alt="Image Default" />
            </div>
            <div class="slide fade">
              {/* <img src="image2.jpg" alt="Slide 2"> */}
            </div>
            <div class="slide fade">
              {/* <img src="image3.jpg" alt="Slide 3"> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home