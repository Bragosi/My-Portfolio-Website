import { useEffect, useRef } from "react";
import { Serv } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import curve from '../images/curve (1).png'

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation triggers when 80% of the section enters the viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Play on enter, reverse on exit
        },
      }
    );
  }, []);

  return (
    <section id="services" className="mt-[-5rem] xl:mt-[3rem] pt-15" ref={sectionRef}>
    <div className="pt-[7rem]">
        <div className="relative flex items-center flex-col justify-center">
        <h1 className="h3 font-palanquin"><span className="text-n-14">Services</span> I Offer</h1>
        <img src={curve} alt="curve" width={290} height={30} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {Serv.map((item) => (
          <div
            key={item.id}
            className="service-card flex flex-col items-center text-center shadow-lg p-6 rounded-xl"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h2 className="text-xl text-n-14 font-bold mb-2 font-palanquin">{item.title}</h2>
            <p className="text-gray-300 font-montserrat">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
