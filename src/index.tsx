import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
//import './index.css';


import { Mipantallapp } from './Mipantallaapp';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW4zNCIsImEiOiJjbGg4Y3ExN3AwNzk0M2xwcGh4Mnk3NjhvIn0.YOcLJiWI-9MIInTvNISCWA';

ReactDOM.render(
  <React.StrictMode>
    <Mipantallapp/>
  </React.StrictMode>,
  document.getElementById('root')
);

