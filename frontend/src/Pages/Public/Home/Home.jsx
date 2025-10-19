import Navbar from '../../../components/public/navbar/Navbar'
import Home from '../../../components/public/home/Home'
import News from '../../../components/public/news/News'
import Layanan from '../../../components/public/layanan/Layanan'
import About from '../../../components/public/about/About'
import Footer from '../../../components/public/footer/Footer'

const HomePage = () => {
    return <>
        <Navbar/>
        <Home/>
        <Layanan/>
        <News/>
        <Footer/>
        <About/>
    </>
}
export default HomePage