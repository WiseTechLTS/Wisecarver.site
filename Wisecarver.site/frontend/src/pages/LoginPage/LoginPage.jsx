import React, { useState } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    console.log('Login attempt with:', { email, password });
  };

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="login-container bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4 fw-bold">LiFi IT Login</h2>
        {error && <p className="error text-center mb-3">{error}</p>}
        <div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-teal w-100 mb-3"
          >
            Login
          </button>
        </div>
        <p className="text-center">
          Don't have an account?{' '}
          <a href="/register" className="link-teal">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;