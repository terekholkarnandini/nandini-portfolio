import React, { useState, useEffect } from 'react';
import './Contact.css';
import { db } from './Firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import Card from "./Card"; // Optional component
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });

      await emailjs.send(
        'service_8t8ijb1',
        'template_q1pat6w',
        formData,
        'Gvi7rSqUO3xF7wNge'
      );

      console.log('Email sent');
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="contact-wrapper" id="contact">
      
      <div className="contact-left" data-aos="fade-up">
        <Card
          title="Let's Work Together"
          content="Feel free to reach out! Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
        />
      </div>

      <div className="contact-right" data-aos="fade-up">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>

          {submitted && <p className="confirmation">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
