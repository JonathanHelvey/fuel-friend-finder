import React from 'react';
import '../themes/themes.css';

import Header from '../components/Header/Header';
import GasChecker from '../components/GasChecker.js';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <GasChecker />
      <Footer />
    </>
  );
}

export default App;
