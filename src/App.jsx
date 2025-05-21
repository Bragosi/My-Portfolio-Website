import Header from "./components/Header";
import ButtonGradient from "./assets/Svg/ButtonGradient"
import Hero from "./components/Hero";
export default function App() {
  return (
    <>
    <div className='pt-[4.75] lg:pt-[5.25] overflow-hidden'>
        <Header/>
        <Hero/>
    </div>
    <ButtonGradient/>

    </>
  )
}