import React, {Component, useState, useEffect} from 'react';
import './Spectrum.css';
import './Tab.css'
import Loading from './Loading';
import MTabs from './MTabs';

const Spectrum = () => {

  const [scale, setScale] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchJson = () => {
   fetch('emspectrum.json')
    .then(response => response.json())
    .then(responseJson => setScale(responseJson)).then(setLoaded(true))
          
   .catch((error) => {
     console.error(error);
   });
  };

  useEffect( () => {
    fetchJson()
  })

  return(
    loaded ? <MTabs data={scale}/>: <Loading />
  );
}

export default Spectrum;
