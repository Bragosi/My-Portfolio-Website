import Button from './Button';
import Resume from '../pdf/Resume.pdf';
import Boluwatife from '../images/boluwatife.png';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Gradient } from './design/Gradient';

const Hero = () => {
  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      '#home',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 }
    );
    gsap.fromTo(
      letters,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, stagger: 0.06, duration: 0.5, ease: "power2.inOut" }
    );
  }, []);

  const text =
    "I transform my client's imaginations into realities by crafting modern, user-friendly web experiences that bring ideas to life.";
  const textRef = useRef(null);

  return (
    <section
      id="home"
      className="pt-[8rem]  md:pt-[10rem] flex flex-col-reverse lg:flex-row items-center justify-center h-screen gap-8 bg-center bg-no-repeat"
    >
      {/* Left Content */}
      <div className="relative px-6 md:px-10 lg:w-1/2 flex flex-col items-start">
        <div
          className="p-6 border rounded-md w-full max-w-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-transparent"
          style={{
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
            padding: '2px',
          }}
        >
          <div className="p-6 bg-black rounded-[inherit]">
            <p className="text-lg font-medium text-gray-600 font-palanquin">Hello, I'm a</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-semibold">
              Front-End <span className="text-n-6">Developer</span>
            </h3>
            <p
              ref={textRef}
              className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed font-montserrat"
            >
              {text.split('').map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button white>
                <a
                  href={Resume}
                  download="Oladejo_Boluwatife_Resume.pdf"
                  className="inline-block"
                >
                  Download Resume
                </a>
              </Button>
              <Button>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative lg:w-1/2 flex justify-center  mt-[10rem]">
        <img
          src={Boluwatife}
          alt="Boluwatife"
          className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
