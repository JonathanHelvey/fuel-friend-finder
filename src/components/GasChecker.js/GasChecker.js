/* eslint-disable consistent-return */
import React, { useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import LoadingSpinner from '../../atoms/index';
import './GasChecker.css';

import { titleCaseReg, acronymToFullName } from '../../helpers';

// TODO: Clean up!
const GasChecker = () => {
  const [gasData, setGasData] = useState();
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    setGasData(null);
    try {
      const result = await axios(`https://g5cqkuic3b.execute-api.us-east-1.amazonaws.com/dev/gasData?state=${state}&city=${city}`);
      setLoading(false);
      setGasData(result.data);
      if (result.data && result.data.data.length === 0) {
        setMessage('An error occured updating gas prices. Please Check Spelling!');
      } else {
        setMessage('Gas Prices Retrived!');
      }
    } catch (err) {
      console.error('An error occurred updating Gas Prices', err);
      setMessage('An error occurred updating Gas Prices');
    }
  };

  return (
    <>
      <div className="padding" />
      <div className="section2">
        <h1 className="title">Find The Cheapest Gas Prices Near You!</h1>
        <h4 className="sub-titles">Type in a STATE to find the cheapest gas prices in state.</h4>
        <br />
        <h4 className="sub-titles">OR Type in both STATE and CITY</h4>
        <h4 className="sub-titles">to find cheapest gas prices in your city!</h4>
        <div>
          <form>
            <input
              required
              className="search-bar"
              type="text"
              name="state"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              value={acronymToFullName(titleCaseReg(state))}
            />
            <input
              className="search-bar"
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={titleCaseReg(city)}
            />
            <Button variant="contained" color="secondary" type="button" onClick={() => handleSubmit()}>Submit</Button>
            <div className="message">
              {loading ? <h5 className="loading">Loading...</h5> : null}
              <h5 className="loading">{message}</h5>
            </div>
          </form>
        </div>
      </div>
      <div className="section">
        <div>
          {loading ? <LoadingSpinner /> : <h1 className="loading">Find Your Gas Prices Here!</h1>}
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
