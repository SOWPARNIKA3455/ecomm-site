import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';  // Assuming you have a separate CSS file for styles

const API = import.meta.env.VITE_API_URL;

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      await axios.post(`${API}/api/auth/signup`, form);
      navigate('/login');
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className='signup'>
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-heading">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
            className="signup-input"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="signup-input"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="signup-input"
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  );
}
