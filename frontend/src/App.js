import React from 'react'
import "./app.css"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import News from './Components/News/News'
import Layanan from './Components/Layanan/Layanan'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Popular/> */}
      <Layanan/>
      <News/>
      <Footer/>
      {/* <About/>
       */}
    </>
  )
}

export default App