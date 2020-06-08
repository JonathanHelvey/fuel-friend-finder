import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className="footer-wrapper">
    <h2>Jonathan Helvey</h2>
    <h3>Full Stack Developer</h3>
    <h3>
      <a href="https://www.jonathanhelvey.com/">https://www.jonathanhelvey.com/</a>
    </h3>
    <div className="social-logos-wrapper">
      <a
        href="https://www.linkedin.com/in/jonathanhelvey/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-logos-img"
          src={require('../../images/twitter.png')}
          alt="social-sites"
        />
      </a>
      <a
        href="https://github.com/JonathanHelvey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-logos-img"
          src={require('../../images/github.png')}
          alt="social-sites"
        />
      </a>
      <a
        href="https://twitter.com/JonathanHelvey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-logos-img"
          src={require('../../images/linkedin-logo.png')}
          alt="social-sites"
        />
      </a>
    </div>
  </div>
);

export default Footer;
