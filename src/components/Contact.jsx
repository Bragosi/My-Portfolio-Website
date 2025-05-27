import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import  Button  from '../components/Button'
import curve from '../images/curve (1).png'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ftoip7k', // Replace with your EmailJS service ID
        'template_csx8gws', // Replace with your EmailJS template ID
        e.target,
        'M9VaJvXcsHyUlL0gm' // Replace with your EmailJS user ID
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section
    id='contact'
    className='mt-5'
      style={{
        backgroundColor: '',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h2 className='h2 font-palanquin flex flex-col mb-5 '>Contact Me 
        <span className='relative flex justify-center items-center'>
            <img src={curve} alt="curve" width={220} height={70} /></span></h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            className='xl:w-[60%] w-[80%]'
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
            className='xl:w-[60%] w-[80%]'
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
          className='xl:w-[60%] w-[80%]'
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
}

export default Contact;
