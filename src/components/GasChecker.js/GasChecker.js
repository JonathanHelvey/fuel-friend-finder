/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GasChecker = () => {
  const [gasData, setGasData] = useState();

  useEffect(() => {
    const fetchGasPrices = async () => {
      const result = await axios(
        'https://g5cqkuic3b.execute-api.us-east-1.amazonaws.com/dev/gasData?state=Kentucky&city=Walton',
      );
      setGasData(result.data);
      console.log('RESULT', result.data);
    };
    fetchGasPrices();
  }, []);

  console.log('GAS DATA====>', gasData);


  return (
    <div className="section">
      Hello World
    </div>
  );
}

export default GasChecker;
