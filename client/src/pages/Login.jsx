import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Assuming you have a separate CSS file for styles

const API = import.meta.env.VITE_API_URL;

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert('Please fill in both fields.');
      return;
    }
    try {
      const res = await axios.post(`${API}/api/auth/login`, form);
      localStorage.setItem('token', res.data.token);
      navigate('/products');
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div className='login'>
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="login-input"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="login-input"
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}
