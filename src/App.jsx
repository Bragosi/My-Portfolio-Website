import Header from "./components/Header";
import ButtonGradient from "./assets/Svg/ButtonGradient"
import Hero from "./components/Hero";
import About from "./components/About"
import Skills from "./components/Skills";
export default function App() {
  return (
    <>
    <div className='pt-[4.75] lg:pt-[5.25] overflow-hidden bg-gray'>
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
    </div>
    <ButtonGradient/>

    </>
  )
}