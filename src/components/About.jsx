import curve from '../images/curve (1).png';
import about from '../images/about_img.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const abtRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // Image animation
    gsap.fromTo(
      imgRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // About div animation
    gsap.fromTo(
      abtRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: abtRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Text letter animation
    gsap.fromTo(
      letters,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: abtRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const text =
    "Hi! 👋 I’m Boluwatife, a front-end developer skilled in React, Next.js, and TypeScript. I specialize in crafting functional, user-friendly web applications with clean, efficient code. With expertise and experience, I create engaging designs and animations. Let’s collaborate to build something amazing! 🚀";

  return (
    <section id="about" className="mt-[10rem] px-6 md:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div
        ref={imgRef}
        id="img"
        className="relative flex justify-center items-center"
      >
        <img
          src={about}
          alt="about"
          width={800}
          height={730}
          className="border-n-14 border rounded-md"
        />
      </div>

      <div
        ref={abtRef}
        id="abt"
        className="w-full relative shadow-lg rounded-2xl p-8 md:p-12"
      >
        <h1 className="h2 text-3xl font-bold font-montserrat text-center mb-6">
          About Me
          <span className="block relative mt-2">
            <img
              src={curve}
              alt="curve"k
              className="mx-auto"
              width={200}
              height={28}
            />
          </span>
        </h1>
        <p ref={textRef} className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
          {text.split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
