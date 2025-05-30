import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { approaches } from "../constants";
import curve from "../images/curve (1).png";

gsap.registerPlugin(ScrollTrigger);

const Approaches = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            x: index % 2 === 0 ? -100 : 100, // Slide in from left (even) or right (odd)
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%", // Start animation when element is in view
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="approaches" className="mt-[5rem]">
    <div className="pt-[7rem]">
        <div className="relative flex flex-col justify-center items-center">
        <h2 className="h3 font-palanquin">
          My <span className="text-n-14">Approach</span>
        </h2>
        <span className="relative flex">
          <img
            src={curve}
            alt="curve"
            className="mx-auto"
            width={330}
            height={30}
          />
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {approaches.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className="flex flex-col items-center text-center shadow-lg p-6 rounded-xl"
          >
            <img
              src={item.imageURL}
              alt={item.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h2 className="text-xl text-n-14 font-palanquin mb-2">{item.title}</h2>
            <p className="font-montserrat text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Approaches;
