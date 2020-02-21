import React, { useState, useEffect } from "react";
import axios from 'axios';

import SmurfTitle from './SmurfTitle';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList.js';

import { SmurfContext } from '../contexts/SmurfContext';
import { SmurfFormContext } from '../contexts/SmurfFormContext';

import "./App.css";

function App() {

  const [smurfs, setSmurfs] = useState([])
  const addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then( res => console.log(res) )
      .catch( error => console.log(error) )

    updateSmurfs();
  }

  useEffect( () => {
    updateSmurfs();
  }, [])

  const updateSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err=> console.log(err))
  }

  return (
    <SmurfFormContext.Provider value={addSmurf}>
      <SmurfContext.Provider value={smurfs}>
        <div className="App">
          <SmurfTitle />
          <SmurfForm />
          <SmurfList />
        </div>
      </SmurfContext.Provider>
    </SmurfFormContext.Provider>
  );
}

export default App;
