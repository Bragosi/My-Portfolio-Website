import heroBackground from '../images/hero-background.jpg';
import curve from '../images/curve (1).png';
import Button from './Button';
import { BackgroundCircles, BottomLine } from './design/HeroDesign';
import Resume from '../pdf/Resume.pdf';
import background from '../images/background.jpg'

const Hero = () => {
  return (
    <section
      className="pt-[15rem] -mt-[5.25rem] flex flex-col xl:flex-row items-center xl:items-start justify-center min-h-screen gap-5 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBackground})`,
        background: 'cover',
      }}
    >
      <div className="container relative xl:w-2/5 text-center xl:text-left">
        <p className="mx-auto mb-3 text-n-2">Hi, I'm Boluwatife,</p>

        <h1 className="text-2xl xl:text-4xl font-code ">
          I transform my clients' imaginations into realities <br /> by crafting
          modern, and user-friendly web experiences <br /> that bring ideas to{' '}
          <span className="inline-block relative">
            life.
            <img
              src={curve}
              alt="curve"
              width={250}
              height={28}
              className="absolute top-full left-0 w-full xl:mt-0.5"
            />
          </span>
        </h1>
        <Button white={true} className="mt-5">
          <a
            href={Resume}
            download="Oladejo_Boluwatife_Resume.pdf"
            className="inline-block"
          >
            Download Resume
          </a>
        </Button>
      </div>
      <div className='border w-1/2 items-center justify-center '>
            <img src={background} alt="background" width={400} height={150} />
      </div >
      <BackgroundCircles/>
      <BackgroundCircles/>
      <BottomLine />
    </section>
  );
};

export default Hero;
