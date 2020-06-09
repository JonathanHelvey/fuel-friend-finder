import React from 'react';
import '../themes/themes.css';

import Header from '../components/Header/header.js';
import GasChecker from '../components/GasChecker.js';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <GasChecker />
      <Footer />
    </div>
  );
}

export default App;
