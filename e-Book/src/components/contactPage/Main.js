import React from 'react';

const Main = () => {
  return (
    <main>
      <section className="section contact" id="contact" aria-label="contact">
        <div className="container">
          <h2 className="h2 section-title">
            Contact us
            <span className="span has-before"></span>
          </h2>

          <div className="wrapper">
            <form className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required className="input-field" />
              <input type="email" name="email" placeholder="Email" required className="input-field" />
              <textarea name="message" placeholder="Your Message" className="input-field"></textarea>
              <button type="submit" className="btn btn-primary">Send Now</button>
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
