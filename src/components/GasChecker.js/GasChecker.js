/* eslint-disable consistent-return */
import React, { useState } from 'react';
import axios from 'axios';

import LoadingSpinner from '../../atoms/index';
import './GasChecker.css';

// TODO: Clean up! Add more! Phone fix. Fix Styles. Fix Loader.
const GasChecker = () => {
  const [gasData, setGasData] = useState();
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    try {
      const result = await axios(`https://g5cqkuic3b.execute-api.us-east-1.amazonaws.com/dev/gasData?state=${state}&city=${city}`);
      console.log('RESULT', result.data.length);
      setLoading(false);
      setGasData(result.data);
      setMessage('Gas Prices Retrived');
    } catch (err) {
      console.error('An error occurred updating Gas Prices', err);
      setMessage('An error occurred updating Gas Prices');
    }
    // setLoading(false);
  };

  console.log("MESSAGE", message);
  console.log('THIS DATA', gasData);

  return (
    <>
      <div className="section2">
        <h2>Find The Cheapest Gas Prices Near You!</h2>
        <h3>Type in State and City to begin Search</h3>
        <div>
          <form>
            <input
              className="search-bar"
              type="text"
              name="state"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <input
              className="search-bar"
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button type="button" onClick={() => handleSubmit()}>Submit</button>
            <h3>{message}</h3>
            {loading ? <LoadingSpinner /> : null}
          </form>
        </div>
      </div>
      <div className="section">
        <div>
          {loading ? <LoadingSpinner /> : null}
          {(!gasData) ? null : (
            <div className="card-container">
              {gasData.data.map((store, index) => {
                console.log(store.name);
                return (
                  <div key={`store-${index}`}>
                    <div className="card">
                      <h2>{store.name}</h2>
                      <h2>{`$${store.price}`}</h2>
                      <h3>{store.address}</h3>
                      <h3>{store.city}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GasChecker;
