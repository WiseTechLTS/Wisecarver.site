import React, { useContext, useState, useEffect, useRef } from 'react';
import AuthContext from '../../context/AuthContext';
import useCustomForm from '../../hooks/useCustomForm';
import './RegisterPage.css';

// Utility function to validate email format
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultValues, registerUser);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(1); // Tracks current form step
  const [formLog, setFormLog] = useState([]); // Stores form interaction log
  const formLogRef = useRef(null); // Ref to hidden DOM element for logging
  const inputRefs = useRef({}); // Refs for focusing inputs

  // Fields in order of appearance
  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
    { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  ];

  // Handle input changes with validation and step progression
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(e);

    // Validate input
    if (value.trim()) {
      if (name === 'email' && !isValidEmail(value)) {
        setError('Please enter a valid email address');
        return;
      }
      setError('');

      // Log interaction
      const logEntry = {
        field: name,
        value: name === 'password' ? '[HIDDEN]' : value, // Hide password in logs
        timestamp: new Date().toISOString(),
      };
      setFormLog((prev) => [...prev, logEntry]);
      console.log(`Field completed: ${name}`, logEntry);

      // Progress to next step if valid
      if (currentStep < fields.length) {
        setCurrentStep(currentStep + 1);
        // Focus next input
        setTimeout(() => {
          if (inputRefs.current[fields[currentStep].name]) {
            inputRefs.current[fields[currentStep].name].focus();
          }
        }, 100);
      }
    } else {
      setError('Please fill in this field');
    }
  };

  // Update DOM with form log
  useEffect(() => {
    if (formLogRef.current) {
      formLogRef.current.textContent = JSON.stringify(formLog, null, 2);
    }
  }, [formLog]);

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please complete all fields');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    handleSubmit(e);
    // Log submission attempt
    console.log('Form submission attempted', {
      timestamp: new Date().toISOString(),
      formData: { ...formData, password: '[HIDDEN]' },
    });
  };

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center" aria-labelledby="register-title">
      <div className="register-container bg-white p-4 rounded shadow">
        <h2 id="register-title" className="text-center mb-4 fw-bold">LiFi IT Register</h2>
        {error && <p className="error text-center mb-3" role="alert">{error}</p>}
        <form onSubmit={onSubmit} noValidate>
          {fields.map((field, index) => (
            <div
              key={field.name}
              className={`mb-3 field-wrapper ${index + 1 <= currentStep ? 'visible' : 'hidden'}`}
              role="group"
              aria-labelledby={`${field.name}-label`}
            >
              <label htmlFor={field.name} id={`${field.name}-label`} className="form-label">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleFieldChange}
                className="form-control"
                placeholder={field.placeholder}
                required
                aria-required="true"
                ref={(el) => (inputRefs.current[field.name] = el)}
              />
              {field.name === 'password' && index + 1 <= currentStep && (
                <small className="form-text text-muted">
                  NOTE: Use an uncommon password with characters, numbers, and special characters!
                </small>
              )}
            </div>
          ))}
          {currentStep === fields.length && (
            <button
              type="submit"
              className="btn btn-teal w-100 mb-3"
              aria-label="Register"
            >
              Register
            </button>
          )}
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <a href="/login" className="link-teal" aria-label="Go to login page">
            Login
          </a>
        </p>
        {/* Hidden div for DOM storage */}
        <div ref={formLogRef} className="form-log" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default RegisterPage;