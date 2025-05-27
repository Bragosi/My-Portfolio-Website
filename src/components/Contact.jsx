import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Button from '../components/Button';
import curve from '../images/curve (1).png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      '#contact',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power2.inOut',
        duration: 1.5,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) {
      alert('Form reference not found.');
      return;
    }

    emailjs
      .sendForm(
        'service_ftoip7k',
        'template_csx8gws',
        formRef.current,
        'M9VaJvXcsHyUlL0gm'
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="mt-5"
      style={{
        padding: '20px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h2 className="h2 font-palanquin flex flex-col mb-5">
        Contact Me
        <span className="relative flex justify-center items-center">
          <img src={curve} alt="curve" width={220} height={70} />
        </span>
      </h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            className="xl:w-[60%] w-[80%]"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '10px',
              backgroundColor: '#333',
              color: 'white',
              border: '1px solid gray',
              borderRadius: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            className="xl:w-[60%] w-[80%]"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '10px',
              backgroundColor: '#333',
              color: 'white',
              border: '1px solid gray',
              borderRadius: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            className="xl:w-[60%] w-[80%]"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              padding: '10px',
              backgroundColor: '#333',
              color: 'white',
              border: '1px solid gray',
              borderRadius: '5px',
            }}
            required
          ></textarea>
        </div>
        <Button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </Button>
      </form>
    </section>
  );
};

export default Contact;
