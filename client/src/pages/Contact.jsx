import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    // You can integrate backend API here (e.g. with axios)
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions, feedback, or partnership opportunities.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" rows="5" value={form.message} onChange={handleChange} required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Contact Info</h3>
        <p><strong>Email:</strong> support@ecommsite.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Commerce Street, Tech City, USA</p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
