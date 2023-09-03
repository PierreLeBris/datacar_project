/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
//import datacar from './img/DataCar.png';
import background from './img/DataCar.png';
import './App.css';

import Search from './component/Search.js';

function App() {
  return (
<div style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:1000,width:1000}}>
  <Search/>
</div>
  );
};

export default App;
