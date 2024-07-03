import React, { useState } from 'react';
import './kontaktForm.css';
import ReCAPTCHA from 'react-google-recaptcha';

function KontaktForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      // Handle form submission
      console.log('Form submitted', form);
    } else {
      alert('Please verify that you are not a robot.');
    }
  };

  return (
    <div className="kontakt-form">
      <h2>Kontaktformular</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Nachricht:
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={handleCaptcha}
        />
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

export default KontaktForm;
