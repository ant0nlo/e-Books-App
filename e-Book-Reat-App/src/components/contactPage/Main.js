import React, { useState } from 'react';
import api from '../axiosConfig';

const Main = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/messages', formData);
      if (response.status === 201) { // Changed to 201 because we return HttpStatus.CREATED
        setResponseMessage('Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          message: ''
        }); // Clear the input fields
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <main>
      <section className="section contact" id="contact" aria-label="contact">
        <div className="container">
          <h2 className="h2 section-title">
            Contact us
            <span className="span has-before"></span>
          </h2>

          <div className="wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="input-field"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="input-field"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn-primary">Send Now</button>
              {responseMessage && <p>{responseMessage}</p>}
            </form>

            <ul className="contact-card">
              <li>
                <p className="card-title">Phone:</p>
                <a href="tel:1234567890" className="card-link">000 000 0000</a>
              </li>
              <li>
                <p className="card-title">Email:</p>
                <a href="mailto:support@support.com" className="card-link">email@support.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
