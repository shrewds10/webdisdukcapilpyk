import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import News from '../Components/News/News'
import Layanan from '../Components/Layanan/Layanan'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'

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