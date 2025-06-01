/**
 * Contact.jsx
 * Component to handle user inquiries via a contact form.
 * Uses Tailwind CSS for styling and manages form state with React hooks.
 */
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, inquiry, message } = formData;
    if (name && email && inquiry && message) {
      let responseMessage = 'Thank you for your message! ';
      if (inquiry === 'contract') {
        responseMessage += 'Our team will contact you to discuss contract-based solutions.';
      } else if (inquiry === 'ip-ownership') {
        responseMessage += 'We will reach out to explore IP ownership options.';
      } else if (inquiry === 'hybrid') {
        responseMessage += 'We will follow up to discuss our hybrid model.';
      } else if (inquiry === 'affiliate') {
        responseMessage += 'We will connect with you to discuss affiliate partnership opportunities.';
      } else {
        responseMessage += 'We will respond to your inquiry soon.';
      }
      alert(responseMessage);
      setFormData({ name: '', email: '', inquiry: '', message: '' });
    } else {
      alert('Please complete all required fields.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Contact Us</h2>
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-base md:text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 md:p-4 border rounded-lg"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-base md:text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 md:p-4 border rounded-lg"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="inquiry" className="block text-base md:text-lg font-medium mb-2">
              Inquiry Type
            </label>
            <select
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="w-full p-3 md:p-4 border rounded-lg"
              required
              aria-required="true"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="contract">Contract-Based Solutions</option>
              <option value="ip-ownership">IP Ownership Purchase</option>
              <option value="hybrid">Hybrid Model</option>
              <option value="affiliate">Affiliate Partnership</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-base md:text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 md:p-4 border rounded-lg"
              rows="6"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-800 text-white text-lg md:text-xl px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-blue-900 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
