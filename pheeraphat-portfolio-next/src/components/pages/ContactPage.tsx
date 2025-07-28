'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Check if all fields are filled
    const newFormData = { ...formData, [name]: value };
    const isValid = newFormData.fullname.trim() !== '' && 
                   newFormData.email.trim() !== '' && 
                   newFormData.message.trim() !== '';
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.2899782362688!2d100.52538073424566!3d13.704234929900412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298b19a836217%3A0x127976cc7ae043c3!2z4LiI4Lix4LiZ4LiX4LiZ4LmMIOC4iy4yNyDguYHguILguKfguIfguJfguLjguYjguIfguKfguLHguJTguJTguK3guJkg4LmA4LiC4LiV4Liq4Liy4LiX4LijIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDEyMA!5e0!3m2!1sth!2sth!4v1751602972951!5m2!1sth!2sth" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Full name" 
              required 
              value={formData.fullname}
              onChange={handleInputChange}
              data-form-input
            />
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email Address" 
              required 
              value={formData.email}
              onChange={handleInputChange}
              data-form-input
            />
          </div>

          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Your Message" 
            required 
            value={formData.message}
            onChange={handleInputChange}
            data-form-input
          />

          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid} 
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </>
  );
} 