import React from 'react';

function HomeContact() {
  const locationIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 21s6-5.686 6-11a6 6 0 10-12 0c0 5.314 6 11 6 11zm0-8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const phoneIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M7.5 4.5h2.8l1.1 4.1-1.8 1.5a12.7 12.7 0 006.9 6.9l1.5-1.8 4.1 1.1v2.8a2.1 2.1 0 01-2.1 2.1A16.4 16.4 0 015.4 6.6a2.1 2.1 0 012.1-2.1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const mailIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9zm2.1.8l5.9 4.6 5.9-4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const clockIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.6v4.3l2.8 2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section id="contact" className="contact-page">
      <div className="contact-top-block">
        <h2>CONTACT US</h2>
        <p className="contact-address-line">Kompally</p>
        <p>Hyderabad, Telangana</p>
        <p>India</p>
        <p className="contact-detail">
          <strong>Phone:</strong>
          {' '}
          +91 94922 894091
        </p>
        <p className="contact-detail">
          <strong>Email:</strong>
          {' '}
          abhinaydatta2004@gmail.com
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">{locationIcon}</div>
          <h3>Address</h3>
          <p>
            Kompally,
            <br />
            Hyderabad, Telangana
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">{phoneIcon}</div>
          <h3>Call Us</h3>
          <p>
            +91 94922 894091
            <br />
            +91 94922 894092
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">{mailIcon}</div>
          <h3>Email Us</h3>
          <p>
            abhinaydatta2004@gmail.com
            <br />
            contact@example.com
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">{clockIcon}</div>
          <h3>Open Hours</h3>
          <p>
            Monday - Friday
            <br />
            9:00AM - 05:00PM
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;

