import Header from "./components/Header";
import ButtonGradient from "./assets/Svg/ButtonGradient"
import Hero from "./components/Hero";
import About from "./components/About"
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Approaches from "./components/Approaches";
export default function App() {
  return (
    <>
    <div className='pt-[4.75] lg:pt-[5.25] overflow-hidden bg-gray'>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Approaches/>
        <Contact/>
        <Footer/>
    </div>
    <ButtonGradient/>

    </>
  )
}