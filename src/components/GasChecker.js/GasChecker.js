/* eslint-disable consistent-return */
import React, { useState } from 'react';
import axios from 'axios';

import './GasChecker.css';

const GasChecker = () => {
  const [gasData, setGasData] = useState();
  const [state, setState] = useState('');
  const [city, setCity] = useState('');


  const handleSubmit = async () => {
    // setMessage('');
    // setSaving(true);
    try {
      const result = await axios(`https://g5cqkuic3b.execute-api.us-east-1.amazonaws.com/dev/gasData?state=${state}&city=${city}`);
      // setMessage('Tier has been updated!');
      console.log('RESULT', result);
      setGasData(result.data);
    } catch (err) {
      console.error('An error occurred updating tier', err);
      // setMessage('An error occurred updating tier');
    }
    // setSaving(false);
  };

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
          </form>
        </div>
      </div>
      <div className="section">
        <div>
          {!gasData ? null : (
            <div>
              {gasData.data.map((store, index) => {
                console.log(store.name);
                return (
                  <div className="card-container">
                    <div key={`store-${index}`} className="card">
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
