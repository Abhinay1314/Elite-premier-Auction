import React from 'react';

function HomeFooter() {
  const footerLinks = [
    'Home',
    'About us',
    'Services',
    'Terms of service',
    'Privacy policy',
  ];

  const services = [
    'Promotion',
    'Live Auction Support',
    'Online Auction Platform',
    'Customer Support',
    'Marketing',
  ];

  const description = [
    'We strive to provide the highest level of service to our clients.',
    'With our extensive knowledge and experience in the industry, we offer a reliable and transparent auction process for both buyers and sellers.',
    'Our goal is to create a trusted platform where everyone can find unique and valuable items while enjoying a seamless auction experience.',
    'Thank you for choosing us as your auctioneer partner.',
  ].join(' ');

  return (
    <footer id="footer" className="footer mt-5">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>Auctioneers</span>
              </a>
              <p className="text-left">{description}</p>

              <div className="social-links mt-3">
                <a href="https://twitter.com" aria-label="Twitter" className="twitter">
                  <i className="bi bi-twitter" />
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {footerLinks.map((item) => (
                  <li key={item}>
                    <i className="bi bi-chevron-right" />
                    <a href="/">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {services.map((item) => (
                  <li key={item}>
                    <i className="bi bi-chevron-right" />
                    <a href="/">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-left text-md-start">
              <h4>Contact Us</h4>
              <p>
                Kompally, Hyderabad, Telangana
                <br />
                India
                <br />
                <br />
                <strong>Phone:</strong>
                {' '}
                +91 94922 894091
                <br />
                <strong>Email:</strong>
                {' '}
                abhinaydatta2004@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span>Auctioneers</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;

