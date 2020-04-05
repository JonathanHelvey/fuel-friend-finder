/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import './header.css';

function Header2() {
  const [header, setHeader] = useState('header');

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader('header');
    } if (window.scrollY > 70) {
      return setHeader('header2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <div className="logo">Fuel Friend Finder</div>
      <ul className="links">
        <li className="link-item">home</li>
        <li className="link-item">about</li>
        <li className="link-item">join</li>
      </ul>
    </header>
  );
}

export default Header2;
